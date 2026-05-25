import Link from 'next/link';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

const features = [
  {
    title: 'Hidden earnings discovered',
    description: 'Claimr scans every eligible creator program, bonus pool, and reward scheme so you never leave money on the table.'
  },
  {
    title: 'AI Smart Missions',
    description: 'Receive highly specific posting plans tied to real reward triggers and estimated bonus income.'
  },
  {
    title: 'One dashboard for all platforms',
    description: 'TikTok, YouTube, Facebook, Instagram — one view for unclaimed income, payout history, and mission performance.'
  },
  {
    title: 'Auto-claim workflows',
    description: 'For eligible programs, Claimr enrolls you automatically and keeps your earnings flow active.'
  }
];

const pricing = [
  {
    tier: 'Free',
    price: '$0',
    description: 'Basic scans, one platform connection, and instant money alerts.',
    benefits: ['Starter scans', 'Single platform connect', 'Weekly earnings summary']
  },
  {
    tier: 'Pro',
    price: '$19/mo',
    description: 'Unlock AI missions, multi-platform scanning, and auto-enroll guidance.',
    benefits: ['Unlimited connections', 'Smart Missions', 'Auto-claim lead insights', 'Priority alerts']
  },
  {
    tier: 'Agency',
    price: '$99/mo',
    description: 'Manage multiple creators, branded reports, and agency-ready dashboards.',
    benefits: ['50 creators', 'Team access', 'Exportable payout reports', 'Agency insights']
  }
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-hero-gradient text-slate-100">
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-14 lg:px-8">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="inline-flex rounded-full border border-emerald-500/40 bg-white/5 px-4 py-1.5 text-sm text-emerald-300">
              Creator earnings optimization platform
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Claim every dollar platforms owe you.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Claimr brings hidden monetization programs, bonus pools, and reward triggers into one premium dashboard with AI mission guidance and automated enrollment.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/dashboard">
                <Button>View dashboard</Button>
              </Link>
              <Link href="/connect">
                <Button variant="ghost">Connect platforms</Button>
              </Link>
            </div>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-slate-950/70 p-8 shadow-glow backdrop-blur-xl">
            <div className="mb-5 rounded-3xl bg-slate-900/80 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">Snapshot</p>
              <p className="mt-4 text-4xl font-semibold text-white">$14,380</p>
              <p className="mt-2 text-sm text-slate-400">Unclaimed opportunities waiting to be recovered.</p>
            </div>
            <div className="grid gap-4 text-sm text-slate-400">
              <div className="rounded-3xl bg-slate-900/80 p-4">
                <p className="font-semibold text-white">Smart Missions</p>
                <p className="mt-2">3 active tasks with +$920 projected value.</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-4">
                <p className="font-semibold text-white">Platforms</p>
                <p className="mt-2">TikTok, YouTube, Instagram connected.</p>
              </div>
            </div>
          </div>
        </header>

        <section id="features" className="mt-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">What Claimr does</p>
              <h2 className="text-4xl font-semibold text-white">A platform for every creator’s revenue engine.</h2>
              <p className="max-w-xl text-lg leading-8 text-slate-300">
                Claimr is built to surface the money you never knew was available, with the clarity creators need to act fast and keep earnings growing.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="rounded-3xl border border-slate-800/90 bg-slate-950/70 p-6 shadow-lg shadow-slate-950/20">
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-3 text-slate-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-24 rounded-[40px] border border-emerald-400/10 bg-white/5 p-10 shadow-[0_0_80px_rgba(72,255,166,0.06)]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">How it works</p>
              <h2 className="mt-3 text-4xl font-semibold text-white">From connect to claim in four steps.</h2>
              <p className="mt-4 text-slate-300">
                Connect your accounts, run a deep scan, receive mission guidance, and capture your earnings — all from one secure creator dashboard.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-900/90 p-6 text-slate-100">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">1</span>
                <h3 className="mt-4 text-xl font-semibold text-white">Connect platforms</h3>
                <p className="mt-2 text-slate-400">Add TikTok, YouTube, Facebook or Instagram in one click.</p>
              </div>
              <div className="rounded-3xl bg-slate-900/90 p-6 text-slate-100">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">2</span>
                <h3 className="mt-4 text-xl font-semibold text-white">Scan for opportunities</h3>
                <p className="mt-2 text-slate-400">Identify hidden bonus programs and payout triggers automatically.</p>
              </div>
              <div className="rounded-3xl bg-slate-900/90 p-6 text-slate-100">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">3</span>
                <h3 className="mt-4 text-xl font-semibold text-white">Launch Smart Missions</h3>
                <p className="mt-2 text-slate-400">Follow AI-backed content tasks designed to unlock earnings fast.</p>
              </div>
              <div className="rounded-3xl bg-slate-900/90 p-6 text-slate-100">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">4</span>
                <h3 className="mt-4 text-xl font-semibold text-white">Track payouts</h3>
                <p className="mt-2 text-slate-400">See money claimed versus money still waiting in your wallet view.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="mt-24">
          <div className="space-y-6 text-center">
            <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">Pricing plans</p>
            <h2 className="text-4xl font-semibold text-white">Built for creators at every stage.</h2>
            <p className="mx-auto max-w-2xl text-slate-300">Start free and upgrade when your creator business needs AI missions, agency tools, or automatic claim workflows.</p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pricing.map((plan) => (
              <div key={plan.tier} className="rounded-[32px] border border-slate-800/90 bg-slate-950/70 p-8 shadow-glow">
                <span className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300">{plan.tier}</span>
                <p className="mt-6 text-5xl font-semibold text-white">{plan.price}</p>
                <p className="mt-4 text-slate-400">{plan.description}</p>
                <ul className="mt-8 space-y-3 text-slate-300">
                  {plan.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-10 w-full">Choose {plan.tier}</Button>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-24 rounded-[40px] border border-emerald-400/10 bg-slate-950/70 p-10 shadow-[0_0_80px_rgba(72,255,166,0.06)]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">Launch-ready</p>
              <h2 className="mt-3 text-4xl font-semibold text-white">Claimr is ready to ship.</h2>
              <p className="mt-4 max-w-xl text-slate-300">
                Build the creator revenue engine that earns trust, boosts retention, and turns hidden payouts into predictable monthly income.
              </p>
            </div>
            <Button>Request early access</Button>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
