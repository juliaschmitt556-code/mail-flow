'use client'

import { useState } from 'react'
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Bell,
  Bolt,
  Check,
  ChevronDown,
  Clock3,
  Copy,
  FileText,
  GitBranch,
  LayoutTemplate,
  Mail,
  Menu,
  MoreHorizontal,
  Play,
  Plus,
  Search,
  Send,
  Settings,
  Sparkles,
  Users,
  Workflow,
  X,
} from 'lucide-react'

const heroImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/E23D27A7-C665-400B-8E38-B0B44B47921B-YtChDU608h2iyleTHyyRe7d4QDayDA.png'
const logoImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9936-rLI61Hn4yQf0tOOHyh8Zf334L8VZNb.jpeg'

const campaigns = [
  { name: 'Welcome to Trip', subject: 'Your next journey starts here', status: 'Active', sent: '12,480', open: '68.4%', updated: '2h ago', color: 'blue' },
  { name: 'Summer Escapes', subject: 'Sun, stays, and savings', status: 'Draft', sent: '—', open: '—', updated: 'Yesterday', color: 'orange' },
  { name: 'Booking confirmation', subject: 'You are all set for your trip', status: 'Active', sent: '8,205', open: '74.1%', updated: '3d ago', color: 'purple' },
  { name: 'Weekend inspiration', subject: 'Where will you go next?', status: 'Paused', sent: '4,820', open: '61.8%', updated: '1w ago', color: 'green' },
]

const navItems = [
  { label: 'Overview', icon: BarChart3 },
  { label: 'Campaigns', icon: Send },
  { label: 'Templates', icon: LayoutTemplate },
  { label: 'Automations', icon: Workflow },
  { label: 'Audience', icon: Users },
]

export default function Page() {
  const [active, setActive] = useState('Overview')
  const [showComposer, setShowComposer] = useState(false)
  const [toast, setToast] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  const notify = (message: string) => {
    setToast(message)
    window.setTimeout(() => setToast(''), 2600)
  }

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-[#111d3c]">
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-[252px] flex-col border-r border-[#e6eaf2] bg-white lg:flex">
        <div className="flex h-[78px] items-center gap-3 border-b border-[#edf0f5] px-7">
          <img src={logoImage} alt="Trip logo" className="size-9 rounded-[11px] object-cover" />
          <span className="text-[19px] font-bold tracking-[-0.04em]">Trip<span className="text-[#f7b500]">.</span></span>
        </div>
        <div className="flex flex-1 flex-col px-4 py-7">
          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#9ba6bb]">Workspace</p>
          <nav className="flex flex-col gap-1">
            {navItems.map(({ label, icon: Icon }) => (
              <button key={label} onClick={() => { setActive(label); notify(`${label} view selected`) }} className={`flex items-center gap-3 rounded-[10px] px-3 py-2.5 text-left text-[13px] font-semibold transition ${active === label ? 'bg-[#eef3ff] text-[#2451f5]' : 'text-[#67728a] hover:bg-[#f6f8fb] hover:text-[#111d3c]'}`}>
                <Icon className="size-[17px]" strokeWidth={1.9} />
                {label}
                {label === 'Automations' && <span className="ml-auto rounded-full bg-[#e9f8f1] px-1.5 py-0.5 text-[9px] font-bold text-[#22935b]">3</span>}
              </button>
            ))}
          </nav>
          <div className="my-7 h-px bg-[#edf0f5]" />
          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#9ba6bb]">Manage</p>
          <button onClick={() => notify('Analytics view selected')} className="flex items-center gap-3 rounded-[10px] px-3 py-2.5 text-left text-[13px] font-semibold text-[#67728a] hover:bg-[#f6f8fb] hover:text-[#111d3c]"><Activity className="size-[17px]" />Analytics</button>
          <button onClick={() => notify('Settings view selected')} className="flex items-center gap-3 rounded-[10px] px-3 py-2.5 text-left text-[13px] font-semibold text-[#67728a] hover:bg-[#f6f8fb] hover:text-[#111d3c]"><Settings className="size-[17px]" />Settings</button>
          <div className="mt-auto rounded-[14px] bg-[#f5f7fb] p-4">
            <div className="mb-2 flex items-center justify-between"><span className="text-[11px] font-bold text-[#5e6a82]">Monthly sends</span><span className="text-[11px] font-bold text-[#2451f5]">68%</span></div>
            <div className="h-1.5 overflow-hidden rounded-full bg-[#e0e5ee]"><div className="h-full w-[68%] rounded-full bg-[#2451f5]" /></div>
            <p className="mt-2 text-[10px] text-[#909bb0]">68,200 of 100,000 emails</p>
          </div>
        </div>
        <div className="flex items-center gap-3 border-t border-[#edf0f5] px-5 py-4"><div className="flex size-8 items-center justify-center rounded-full bg-[#dce5ff] text-[11px] font-bold text-[#3156db]">JS</div><div className="min-w-0 flex-1"><p className="truncate text-[12px] font-bold">Julia Schmitt</p><p className="truncate text-[10px] text-[#909bb0]">julia@trip.travel</p></div><MoreHorizontal className="size-4 text-[#9ba6bb]" /></div>
      </aside>

      <section className="lg:pl-[252px]">
        <header className="flex h-[78px] items-center justify-between border-b border-[#e6eaf2] bg-white px-5 sm:px-8">
          <div className="flex items-center gap-3"><button className="lg:hidden" onClick={() => notify('Use desktop navigation for all sections')}><Menu className="size-5" /></button><div><p className="text-[11px] font-semibold text-[#909bb0]">Monday, October 5, 2026</p><h1 className="text-[20px] font-bold tracking-[-0.03em]">Good morning, Julia <span className="text-[#f7b500]">.</span></h1></div></div>
          <div className="flex items-center gap-3"><button className="hidden items-center gap-2 rounded-[9px] border border-[#e3e8f1] px-3 py-2 text-[12px] font-semibold text-[#66728b] sm:flex"><Search className="size-3.5" />Search</button><button onClick={() => notify('You are all caught up')} className="relative rounded-full p-2 text-[#7d89a1] hover:bg-[#f5f7fb]"><Bell className="size-[18px]" /><span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-[#f7b500]" /></button><button className="flex items-center gap-2 rounded-[9px] border border-[#e3e8f1] px-2.5 py-2 text-[12px] font-semibold" onClick={() => setMenuOpen(!menuOpen)}><span className="flex size-6 items-center justify-center rounded-full bg-[#dce5ff] text-[9px] font-bold text-[#3156db]">JS</span><ChevronDown className="size-3.5 text-[#909bb0]" /></button></div>
        </header>

        <div className="mx-auto max-w-[1280px] px-5 py-7 sm:px-8 lg:px-10">
          <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><div className="mb-2 flex items-center gap-2"><span className="size-2 rounded-full bg-[#39bd7c]" /><span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#39a96f]">All systems operational</span></div><h2 className="text-[28px] font-bold tracking-[-0.045em] sm:text-[32px]">Your email workspace</h2><p className="mt-1 text-[13px] text-[#7d89a1]">Create, automate, and send beautiful emails that feel like Trip.</p></div><div className="flex gap-2"><button onClick={() => notify('Template gallery opened')} className="flex items-center gap-2 rounded-[9px] border border-[#dce2ed] bg-white px-3.5 py-2.5 text-[12px] font-bold text-[#526079] shadow-sm"><LayoutTemplate className="size-4" />Browse templates</button><button onClick={() => setShowComposer(true)} className="flex items-center gap-2 rounded-[9px] bg-[#2451f5] px-4 py-2.5 text-[12px] font-bold text-white shadow-[0_5px_15px_rgba(36,81,245,0.2)]"><Plus className="size-4" />Create email</button></div></div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><Stat label="Emails sent" value="68,204" change="+12.8%" icon={Send} /><Stat label="Avg. open rate" value="68.4%" change="+4.2%" icon={Activity} /><Stat label="Click-through rate" value="24.8%" change="+2.1%" icon={ArrowUpRight} /><Stat label="Active automations" value="03" change="+1 this month" icon={Bolt} /></div>

          <div className="mt-7 grid gap-6 xl:grid-cols-[1.4fr_0.85fr]">
            <div className="rounded-[15px] border border-[#e6eaf2] bg-white p-5 shadow-[0_5px_20px_rgba(24,47,88,0.025)] sm:p-6"><div className="mb-5 flex items-center justify-between"><div><h3 className="text-[15px] font-bold">Recent campaigns</h3><p className="mt-1 text-[11px] text-[#909bb0]">Monitor your latest email performance</p></div><button onClick={() => { setActive('Campaigns'); notify('Campaigns view selected') }} className="text-[11px] font-bold text-[#2451f5]">View all <ArrowUpRight className="ml-1 inline size-3" /></button></div><div className="overflow-x-auto"><table className="w-full min-w-[620px] text-left"><thead><tr className="border-b border-[#edf0f5] text-[10px] font-bold uppercase tracking-[0.12em] text-[#a3adbd]"><th className="pb-3 font-bold">Campaign</th><th className="pb-3 font-bold">Status</th><th className="pb-3 font-bold">Sent</th><th className="pb-3 font-bold">Open rate</th><th className="pb-3 font-bold">Updated</th><th /></tr></thead><tbody>{campaigns.map((campaign) => <tr key={campaign.name} className="border-b border-[#f0f2f6] last:border-0"><td className="py-4"><div className="flex items-center gap-3"><div className={`flex size-8 items-center justify-center rounded-[9px] ${campaign.color === 'blue' ? 'bg-[#e7edff] text-[#2451f5]' : campaign.color === 'orange' ? 'bg-[#fff3dc] text-[#db9400]' : campaign.color === 'purple' ? 'bg-[#f0eaff] text-[#8155df]' : 'bg-[#e7f8f0] text-[#2ca66c]'}`}><Mail className="size-4" /></div><div><p className="text-[12px] font-bold">{campaign.name}</p><p className="mt-0.5 text-[10px] text-[#9aa5b8]">{campaign.subject}</p></div></div></td><td><span className={`rounded-full px-2 py-1 text-[10px] font-bold ${campaign.status === 'Active' ? 'bg-[#e8f8f0] text-[#269a62]' : campaign.status === 'Draft' ? 'bg-[#fff5df] text-[#c18408]' : 'bg-[#f0f2f5] text-[#7b879a]'}`}>{campaign.status}</span></td><td className="text-[12px] font-semibold text-[#5f6b83]">{campaign.sent}</td><td className="text-[12px] font-semibold text-[#5f6b83]">{campaign.open}</td><td className="text-[11px] text-[#9aa5b8]">{campaign.updated}</td><td><button onClick={() => notify(`${campaign.name} options opened`)} className="rounded p-1 text-[#a3adbd] hover:bg-[#f5f7fb]"><MoreHorizontal className="size-4" /></button></td></tr>)}</tbody></table></div></div>

            <div className="rounded-[15px] border border-[#e6eaf2] bg-white p-5 shadow-[0_5px_20px_rgba(24,47,88,0.025)] sm:p-6"><div className="mb-5 flex items-start justify-between"><div><h3 className="text-[15px] font-bold">Automation flows</h3><p className="mt-1 text-[11px] text-[#909bb0]">Your always-on journeys</p></div><button onClick={() => { setActive('Automations'); notify('Automations view selected') }} className="rounded p-1 text-[#a3adbd] hover:bg-[#f5f7fb]"><MoreHorizontal className="size-4" /></button></div><div className="flex flex-col gap-3"><Automation icon={Sparkles} title="New subscriber welcome" desc="Sends a 3-email welcome series" status="Running" /><Automation icon={Clock3} title="Post-booking follow-up" desc="Triggers 2 days after a booking" status="Running" /><Automation icon={GitBranch} title="Re-engagement" desc="Win back inactive travelers" status="Paused" /></div><button onClick={() => setShowComposer(true)} className="mt-4 flex w-full items-center justify-center gap-2 rounded-[9px] border border-dashed border-[#cbd4e3] py-2.5 text-[11px] font-bold text-[#64718a] hover:border-[#2451f5] hover:text-[#2451f5]"><Plus className="size-3.5" />Create automation</button></div>
          </div>

          <div className="mt-6 overflow-hidden rounded-[15px] bg-[#1e49e8] shadow-[0_10px_25px_rgba(36,81,245,0.16)]"><div className="flex flex-col justify-between gap-6 p-6 sm:flex-row sm:items-center sm:p-8"><div className="max-w-[550px]"><span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white"><Sparkles className="size-3" />Trip templates</span><h3 className="text-[22px] font-bold tracking-[-0.03em] text-white">Start with a little inspiration.</h3><p className="mt-1.5 text-[12px] leading-relaxed text-blue-100">Build on our best-performing email blueprints, made for every moment of the journey.</p><button onClick={() => notify('Template gallery opened')} className="mt-5 flex items-center gap-2 rounded-[8px] bg-white px-3.5 py-2.5 text-[11px] font-bold text-[#2451f5]">Explore templates <ArrowUpRight className="size-3.5" /></button></div><div className="relative hidden h-[145px] w-[245px] overflow-hidden rounded-[13px] bg-white/10 sm:block"><img src={heroImage} alt="Trip welcome email template" className="absolute left-1/2 top-1/2 h-[270px] w-[170px] -translate-x-1/2 -translate-y-1/2 rounded-[10px] object-cover object-top shadow-xl" /></div></div></div>
        </div>
      </section>

      {menuOpen && <div className="fixed right-5 top-[68px] z-30 w-44 rounded-xl border border-[#e6eaf2] bg-white p-2 shadow-xl"><button onClick={() => { setMenuOpen(false); notify('Profile opened') }} className="flex w-full items-center rounded-lg px-3 py-2 text-left text-xs font-semibold hover:bg-[#f5f7fb]">Profile settings</button><button onClick={() => { setMenuOpen(false); notify('Signed out') }} className="flex w-full items-center rounded-lg px-3 py-2 text-left text-xs font-semibold text-[#d25555] hover:bg-[#fff4f4]">Sign out</button></div>}
      {toast && <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-xl bg-[#111d3c] px-4 py-3 text-xs font-semibold text-white shadow-xl"><Check className="size-4 text-[#5ce0a2]" />{toast}</div>}
      {showComposer && <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#111d3c]/30 p-4 backdrop-blur-sm"><div className="w-full max-w-[470px] rounded-2xl bg-white p-6 shadow-2xl"><div className="mb-5 flex items-center justify-between"><div><h3 className="text-lg font-bold">Create something great</h3><p className="mt-1 text-xs text-[#8995aa]">Choose how you want to get started.</p></div><button onClick={() => setShowComposer(false)} className="rounded-full p-2 text-[#8995aa] hover:bg-[#f4f6fa]"><X className="size-4" /></button></div><div className="flex flex-col gap-3"><button onClick={() => { setShowComposer(false); notify('Email composer opened') }} className="flex items-center gap-4 rounded-xl border border-[#e5eaf2] p-4 text-left hover:border-[#2451f5] hover:bg-[#f8faff]"><div className="flex size-10 items-center justify-center rounded-xl bg-[#e9efff] text-[#2451f5]"><FileText className="size-5" /></div><div><p className="text-sm font-bold">Start from scratch</p><p className="mt-1 text-xs text-[#8995aa]">Design a custom campaign</p></div></button><button onClick={() => { setShowComposer(false); notify('Template picker opened') }} className="flex items-center gap-4 rounded-xl border border-[#e5eaf2] p-4 text-left hover:border-[#2451f5] hover:bg-[#f8faff]"><div className="flex size-10 items-center justify-center rounded-xl bg-[#fff2d8] text-[#d89200]"><LayoutTemplate className="size-5" /></div><div><p className="text-sm font-bold">Use a Trip template</p><p className="mt-1 text-xs text-[#8995aa]">Start with the welcome email</p></div></button></div><button onClick={() => setShowComposer(false)} className="mt-5 w-full rounded-lg py-2 text-xs font-bold text-[#8995aa] hover:bg-[#f5f7fb]">Cancel</button></div></div>}
    </main>
  )
}

function Stat({ label, value, change, icon: Icon }: { label: string; value: string; change: string; icon: typeof Send }) { return <div className="rounded-[15px] border border-[#e6eaf2] bg-white p-5 shadow-[0_5px_20px_rgba(24,47,88,0.025)]"><div className="mb-4 flex items-center justify-between"><span className="text-[11px] font-semibold text-[#8995aa]">{label}</span><div className="flex size-8 items-center justify-center rounded-[9px] bg-[#eef3ff] text-[#2451f5]"><Icon className="size-4" /></div></div><div className="flex items-end justify-between"><span className="text-[25px] font-bold tracking-[-0.045em]">{value}</span><span className="text-[10px] font-bold text-[#2ba76b]">{change}</span></div></div> }
function Automation({ icon: Icon, title, desc, status }: { icon: typeof Sparkles; title: string; desc: string; status: string }) { return <div className="flex items-center gap-3 rounded-xl bg-[#fafbfc] p-3"><div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white text-[#2451f5] shadow-sm"><Icon className="size-4" /></div><div className="min-w-0 flex-1"><p className="truncate text-[11px] font-bold">{title}</p><p className="mt-0.5 truncate text-[10px] text-[#9aa5b8]">{desc}</p></div><span className={`shrink-0 rounded-full px-2 py-1 text-[9px] font-bold ${status === 'Running' ? 'bg-[#e8f8f0] text-[#269a62]' : 'bg-[#f0f2f5] text-[#7b879a]'}`}>{status}</span></div> }
