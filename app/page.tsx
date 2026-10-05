import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import { auth } from '@/lib/auth'
import { listCampaigns, getCampaignStats } from '@/app/actions/campaigns'
import { MailWorkspace } from '@/components/mail-workspace'

export default async function Page() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) redirect('/sign-in')
  const [campaigns, stats] = await Promise.all([listCampaigns(), getCampaignStats()])
  return <MailWorkspace campaigns={campaigns} stats={stats} />
}
