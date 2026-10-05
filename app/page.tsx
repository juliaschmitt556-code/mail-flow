'use client'

import { useState } from 'react'
import { Activity, ArrowUpRight, BarChart3, Bell, Bolt, Check, ChevronDown, LayoutTemplate, Mail, Menu, Plus, Send, Settings, Users, Workflow, X } from 'lucide-react'
import { signOut, useSession } from '@/lib/auth-client'

const navItems = [
  { label: 'Overview', icon: BarChart3 },
  { label: 'Campaigns', icon: Send },
  { label: 'Templates', icon: LayoutTemplate },
  { label: 'Automations', icon: Workflow },
  { label: 'Audience', icon: Users },
]

export default function Page() {
  const { data: session } = useSession()
  const [active, setActive] = useState('Overview')
  const [showComposer, setShowComposer] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [toast, setToast] = useState('')

  const notify = (message: string) => {
    setToast(message)
    window.setTimeout(() => setToast(''), 2600)
  }

  const userName = session?.user?.name || 'there'
  const initials = session?.user?.name?.slice(0, 2).toUpperCase() || 'YO'

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-[#111d3c]">
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-[252px] flex-col border-r border-[#e6eaf2] bg-white lg:flex">
        <div className="flex h-[78px] items-center gap-3 border-b border-[#edf0f5] px-7">
          <div className="flex size-9 items-center justify-center rounded-[11px] bg-[#2451f5] text-sm font-bold text-white">M</div>
          <span className="text-[19px] font-bold tracking-[-0.04em]">Mail<span className="text-[#f7b500]">.</span></span>
        </div>
        <div className="flex flex-1 flex-col px-4 py-7">
          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#9ba6bb]">Workspace</p>
          <nav className="flex flex-col gap-1">
            {navItems.map(({ label, icon: Icon }) => (
              <button key={label} onClick={() => setActive(label)} className={`flex items-center gap-3 rounded-[10px] px-3 py-2.5 text-left text-[13px] font-semibold transition ${active === label ? 'bg-[#eef3ff] text-[#2451f5]' : 'text-[#67728a] hover:bg-[#f6f8fb] hover:text-[#111d3c]'}`}>
                <Icon className="size-[17px]" strokeWidth={1.9} />
                {label}
              </button>
            ))}
          </nav>
          <div className="my-7 h-px bg-[#edf0f5]" />
          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#9ba6bb]">Manage</p>
          <button onClick={() => setActive('Analytics')} className="flex items-center gap-3 rounded-[10px] px-3 py-2.5 text-left text-[13px] font-semibold text-[#67728a] hover:bg-[#f6f8fb] hover:text-[#111d3c]"><Activity className="size-[17px]" />Analytics</button>
          <button onClick={() => setActive('Settings')} className="flex items-center gap-3 rounded-[10px] px-3 py-2.5 text-left text-[13px] font-semibold text-[#67728a] hover:bg-[#f6f8fb] hover:text-[#111d3c]"><Settings className="size-[17px]" />Settings</button>
        </div>
        <div className="flex items-center gap-3 border-t border-[#edf0f5] px-5 py-4"><div className="flex size-8 items-center justify-center rounded-full bg-[#dce5ff] text-[11px] font-bold text-[#3156db]">{initials}</div><div className="min-w-0 flex-1"><p className="truncate text-[12px] font-bold">{session?.user?.name || 'Your account'}</p><p className="truncate text-[10px] text-[#909bb0]">{session?.user?.email || 'Sign in to personalize'}</p></div><button aria-label="Account menu" onClick={() => setMenuOpen(!menuOpen)}><ChevronDown className="size-4 text-[#9ba6bb]" /></button></div>
      </aside>

      <section className="lg:pl-[252px]">
        <header className="flex h-[78px] items-center justify-between border-b border-[#e6eaf2] bg-white px-5 sm:px-8">
          <div className="flex items-center gap-3"><button aria-label="Open navigation" className="lg:hidden" onClick={() => notify('Navigation is available on desktop')}><Menu className="size-5" /></button><div><p className="text-[11px] font-semibold text-[#909bb0]">Email workspace</p><h1 className="text-[20px] font-bold tracking-[-0.03em]">Welcome, {userName} <span className="text-[#f7b500]">.</span></h1></div></div>
          <div className="flex items-center gap-3"><button aria-label="Notifications" onClick={() => notify('No new notifications')} className="relative rounded-full p-2 text-[#7d89a1] hover:bg-[#f5f7fb]"><Bell className="size-[18px]" /></button><button aria-label="Open account menu" className="flex items-center gap-2 rounded-[9px] border border-[#e3e8f1] px-2.5 py-2 text-[12px] font-semibold" onClick={() => setMenuOpen(!menuOpen)}><span className="flex size-6 items-center justify-center rounded-full bg-[#dce5ff] text-[9px] font-bold text-[#3156db]">{initials}</span><ChevronDown className="size-3.5 text-[#909bb0]" /></button></div>
        </header>

        <div className="mx-auto max-w-[1280px] px-5 py-7 sm:px-8 lg:px-10">
          <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><div className="mb-2 flex items-center gap-2"><span className="size-2 rounded-full bg-[#39bd7c]" /><span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#39a96f]">Ready for your first send</span></div><h2 className="text-[28px] font-bold tracking-[-0.045em] sm:text-[32px]">Your email workspace</h2><p className="mt-1 text-[13px] text-[#7d89a1]">Create, automate, and send emails from one place.</p></div><div className="flex gap-2"><button onClick={() => notify('Create a template to get started')} className="flex items-center gap-2 rounded-[9px] border border-[#dce2ed] bg-white px-3.5 py-2.5 text-[12px] font-bold text-[#526079] shadow-sm"><LayoutTemplate className="size-4" />Create template</button><button onClick={() => setShowComposer(true)} className="flex items-center gap-2 rounded-[9px] bg-[#2451f5] px-4 py-2.5 text-[12px] font-bold text-white shadow-[0_5px_15px_rgba(36,81,245,0.2)]"><Plus className="size-4" />Create email</button></div></div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><Stat label="Emails sent" value="0" icon={Send} /><Stat label="Avg. open rate" value="—" icon={Activity} /><Stat label="Click-through rate" value="—" icon={ArrowUpRight} /><Stat label="Active automations" value="0" icon={Bolt} /></div>

          <div className="mt-7 grid gap-6 xl:grid-cols-[1.4fr_0.85fr]">
            <EmptyPanel title="Recent campaigns" description="Your campaigns will appear here after you create one." action="Create campaign" onAction={() => setShowComposer(true)} />
            <EmptyPanel title="Automation flows" description="Automate follow-ups and journeys when you are ready." action="Create automation" onAction={() => setShowComposer(true)} />
          </div>
        </div>
      </section>

      {menuOpen && <div className="fixed right-5 top-[68px] z-30 w-44 rounded-xl border border-[#e6eaf2] bg-white p-2 shadow-xl"><button onClick={() => setMenuOpen(false)} className="flex w-full rounded-lg px-3 py-2 text-left text-xs font-semibold hover:bg-[#f5f7fb]">Account settings</button><button onClick={() => signOut()} className="flex w-full rounded-lg px-3 py-2 text-left text-xs font-semibold text-[#d25555] hover:bg-[#fff4f4]">Sign out</button></div>}
      {toast && <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-xl bg-[#111d3c] px-4 py-3 text-xs font-semibold text-white shadow-xl"><Check className="size-4 text-[#5ce0a2]" />{toast}</div>}
      {showComposer && <Composer onClose={() => setShowComposer(false)} onCreated={() => { setShowComposer(false); notify('Campaign saved') }} />}
    </main>
  )
}

function Stat({ label, value, icon: Icon }: { label: string; value: string; icon: typeof Send }) { return <div className="rounded-[15px] border border-[#e6eaf2] bg-white p-5 shadow-[0_5px_20px_rgba(24,47,88,0.025)]"><div className="mb-4 flex items-center justify-between"><span className="text-[11px] font-semibold text-[#8995aa]">{label}</span><div className="flex size-8 items-center justify-center rounded-[9px] bg-[#eef3ff] text-[#2451f5]"><Icon className="size-4" /></div></div><span className="text-[25px] font-bold tracking-[-0.045em]">{value}</span></div> }
function EmptyPanel({ title, description, action, onAction }: { title: string; description: string; action: string; onAction: () => void }) { return <div className="rounded-[15px] border border-[#e6eaf2] bg-white p-5 shadow-[0_5px_20px_rgba(24,47,88,0.025)] sm:p-6"><div className="mb-5"><h3 className="text-[15px] font-bold">{title}</h3><p className="mt-1 text-[11px] text-[#909bb0]">{description}</p></div><div className="flex min-h-[150px] flex-col items-center justify-center rounded-xl border border-dashed border-[#d8dfeb] bg-[#fafbfc] px-5 text-center"><Mail className="mb-3 size-7 text-[#b1bbca]" /><p className="text-xs font-semibold text-[#67728a]">Nothing here yet</p><button onClick={onAction} className="mt-3 rounded-[9px] bg-[#eef3ff] px-3 py-2 text-[11px] font-bold text-[#2451f5]">{action}</button></div></div> }
function Composer({ onClose, onCreated }: { onClose: () => void; onCreated: () => void }) { const [name, setName] = useState(''); const [subject, setSubject] = useState(''); return <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#111d3c]/30 p-4 backdrop-blur-sm"><div role="dialog" aria-modal="true" aria-labelledby="composer-title" className="w-full max-w-[560px] rounded-2xl bg-white shadow-2xl"><div className="flex items-center justify-between border-b border-[#edf0f5] px-6 py-5"><div><h3 id="composer-title" className="text-lg font-bold">Create campaign</h3><p className="text-xs text-[#8995aa]">Start with the details for your first email.</p></div><button aria-label="Close composer" onClick={onClose} className="rounded-full p-2 text-[#8995aa] hover:bg-[#f4f6fa]"><X className="size-4" /></button></div><form onSubmit={(event) => { event.preventDefault(); if (name.trim() && subject.trim()) onCreated() }} className="flex flex-col gap-4 p-6"><label className="text-[11px] font-bold text-[#5c6982]">Campaign name<input required value={name} onChange={(event) => setName(event.target.value)} className="mt-1.5 w-full rounded-lg border border-[#e1e6ef] px-3 py-2.5 text-xs outline-none focus:border-[#2451f5]" placeholder="e.g. Product launch" /></label><label className="text-[11px] font-bold text-[#5c6982]">Subject<input required value={subject} onChange={(event) => setSubject(event.target.value)} className="mt-1.5 w-full rounded-lg border border-[#e1e6ef] px-3 py-2.5 text-xs outline-none focus:border-[#2451f5]" placeholder="Email subject" /></label><div className="flex justify-end gap-2 pt-2"><button type="button" onClick={onClose} className="rounded-[9px] border border-[#dce2ed] px-4 py-2.5 text-xs font-bold text-[#526079]">Cancel</button><button type="submit" className="rounded-[9px] bg-[#2451f5] px-4 py-2.5 text-xs font-bold text-white">Save campaign</button></div></form></div></div> }
