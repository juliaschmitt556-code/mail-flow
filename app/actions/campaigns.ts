'use server'

import { and, desc, eq } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
import { headers } from 'next/headers'
import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { campaign } from '@/lib/db/schema'

async function getUserId() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error('Unauthorized')
  return session.user.id
}

export async function listCampaigns() {
  const userId = await getUserId()
  return db.select().from(campaign).where(eq(campaign.userId, userId)).orderBy(desc(campaign.updatedAt))
}

export async function createCampaign(input: { name: string; subject: string; previewText?: string }) {
  const userId = await getUserId()
  const name = input.name.trim()
  const subject = input.subject.trim()
  if (!name || !subject || name.length > 80 || subject.length > 160) throw new Error('Please provide a valid campaign name and subject.')
  await db.insert(campaign).values({ userId, name, subject, status: 'Draft' })
  revalidatePath('/')
}

export async function deleteCampaign(id: number) {
  const userId = await getUserId()
  await db.delete(campaign).where(and(eq(campaign.id, id), eq(campaign.userId, userId)))
  revalidatePath('/')
}

export async function updateCampaignStatus(id: number, status: 'Draft' | 'Scheduled' | 'Sent') {
  const userId = await getUserId()
  await db.update(campaign).set({ status, updatedAt: new Date() }).where(and(eq(campaign.id, id), eq(campaign.userId, userId)))
  revalidatePath('/')
}

export async function getCampaignStats() {
  const userId = await getUserId()
  const rows = await db.select({ sent: campaign.sent, openRate: campaign.openRate, status: campaign.status }).from(campaign).where(eq(campaign.userId, userId))
  const sent = rows.reduce((total, row) => total + row.sent, 0)
  const opened = rows.filter((row) => row.openRate !== null)
  const openRate = opened.length ? opened.reduce((total, row) => total + Number(row.openRate), 0) / opened.length : null
  return { campaignCount: rows.length, sent, openRate, activeAutomations: 0 }
}

export type Campaign = Awaited<ReturnType<typeof listCampaigns>>[number]
export type CampaignStats = Awaited<ReturnType<typeof getCampaignStats>>
