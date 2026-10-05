'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Mail, ArrowRight } from 'lucide-react'
import { authClient } from '@/lib/auth-client'

export function AuthForm({ mode }: { mode: 'sign-in' | 'sign-up' }) {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [pending, setPending] = useState(false)
  const isSignUp = mode === 'sign-up'

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    setPending(true)
    const result = isSignUp
      ? await authClient.signUp.email({ name, email, password })
      : await authClient.signIn.email({ email, password })
    setPending(false)
    if (result.error) { setError('We could not complete that request. Check your details and try again.'); return }
    router.push('/')
    router.refresh()
  }

  return <div className="w-full max-w-[410px] rounded-2xl border border-[#e6eaf2] bg-white p-7 shadow-[0_20px_60px_rgba(24,47,88,0.08)]"><div className="mb-7 flex items-center gap-3"><div className="flex size-10 items-center justify-center rounded-xl bg-[#2451f5] text-sm font-bold text-white">M</div><span className="text-xl font-bold tracking-[-0.04em]">Mail<span className="text-[#f7b500]">.</span></span></div><h1 className="text-2xl font-bold tracking-[-0.04em]">{isSignUp ? 'Create your workspace' : 'Welcome back'}</h1><p className="mt-2 text-sm text-[#7d89a1]">{isSignUp ? 'Build, automate, and send better email.' : 'Sign in to continue to your email workspace.'}</p><form onSubmit={onSubmit} className="mt-7 flex flex-col gap-4">{isSignUp && <label className="text-xs font-bold text-[#526079]">Your name<input required value={name} onChange={(event) => setName(event.target.value)} className="mt-1.5 w-full rounded-lg border border-[#e1e6ef] px-3 py-3 text-sm outline-none focus:border-[#2451f5]" placeholder="Alex Morgan" /></label>}<label className="text-xs font-bold text-[#526079]">Email<input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="mt-1.5 w-full rounded-lg border border-[#e1e6ef] px-3 py-3 text-sm outline-none focus:border-[#2451f5]" placeholder="you@company.com" /></label><label className="text-xs font-bold text-[#526079]">Password<input required minLength={8} type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="mt-1.5 w-full rounded-lg border border-[#e1e6ef] px-3 py-3 text-sm outline-none focus:border-[#2451f5]" placeholder="At least 8 characters" /></label>{error && <p role="alert" className="rounded-lg bg-[#fff2f2] px-3 py-2 text-xs font-semibold text-[#c44b4b]">{error}</p>}<button disabled={pending} className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-[#2451f5] px-4 py-3 text-sm font-bold text-white">{pending ? 'Working...' : isSignUp ? 'Create workspace' : 'Sign in'}<ArrowRight className="size-4" /></button></form><p className="mt-6 text-center text-xs text-[#8995aa]">{isSignUp ? 'Already have an account?' : 'New to Mail.'} <a className="font-bold text-[#2451f5] hover:underline" href={isSignUp ? '/sign-in' : '/sign-up'}>{isSignUp ? 'Sign in' : 'Create one'}</a></p><div className="mt-6 flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#a5afbf]"><Mail className="size-3" /> Simple, focused email workflows</div></div>
}
