import { Button } from '../components/Button';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { HeroParticles } from '../components/landing/HeroParticles';
import { HeroMockup } from '../components/landing/HeroMockup';
import { HeroIntro } from '../components/landing/HeroIntro';
import { StepCard } from '../components/landing/StepCard';
import { FeatureCard } from '../components/landing/FeatureCard';
import { TrustPanel } from '../components/landing/TrustPanel';

const steps = [
  {
    title: 'Connect accounts',
    description: 'One-click OAuth for TikTok, YouTube, Facebook, and Instagram. The magic begins the moment you link your platforms.',
    accent: 'text-money bg-money/10'
  },
  {
    title: 'Scan hidden opportunities',
    description: 'Claimr’s AI engine scans every reward pool, Creator Fund tier, and bonus threshold across your accounts.',
    accent: 'text-interactive bg-interactive/10'
  },
  {
    title: 'Unlock earnings',
    description: 'Get step-by-step missions and automatic claim triggers so you capture money without guesswork.',
    accent: 'text-alert bg-alert/10'
  }
];

const pricing = [
  {
    tier: 'Free',
    price: '$0',
    description: 'Basic scans, a single platform connection, and instant alerts.',
    benefits: ['Starter scans', 'One connected platform', 'Weekly reminders']
  },
  {
    tier: 'Pro',
    price: '$19/mo',
    description: 'Full creator revenue intelligence with Smart Missions and auto-claim guidance.',
    benefits: ['Unlimited platform connects', 'AI Smart Missions', 'Premium alerts', 'Auto-claim signals']
  },
  {
    tier: 'Agency',
    price: '$99/mo',
    description: 'Manage multiple creators, branded reports, and agency-ready dashboards.',
    benefits: ['Manage up to 50 creators', 'Team seats', 'Exportable reports', 'Agency insights']
  }
];

const premiumFeatures = [
  {
    title: 'Predictive claim intelligence',
    description: 'AI surfaces overdue bonuses, Creator Fund uplifts, and hidden reward pools before platforms close the window.',
    accent: 'text-money bg-money/10'
  },
  {
    title: 'Automatic mission workflows',
    description: 'One-click missions and smart alerts turn reward opportunities into completed actions and faster payouts.',
    accent: 'text-interactive bg-interactive/10'
  },
  {
    title: 'Agency-grade controls',
    description: 'Manage multiple creators, team seats, branded reports, and white-label insights from one dashboard.',
    accent: 'text-emerald-300 bg-emerald-300/10'
  },
  {
    title: 'Secure payout confidence',
    description: 'SOC2-style privacy messaging, permission transparency, and claim tracking built for creator trust.',
    accent: 'text-cyan-300 bg-cyan-300/10'
  }
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-slate-100">
      <HeroParticles />
      <Navbar />
      <section className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col justify-center px-6 pb-16 pt-12 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <HeroIntro />
          <div className="flex justify-center lg:justify-end">
            <HeroMockup />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-8">
        <div className="rounded-[40px] border border-slate-800/90 bg-slate-950/80 p-10 shadow-glow backdrop-blur-xl">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-emerald-300">Creator economy-ready</p>
            <h2 className="mt-4 text-4xl font-semibold text-white">Built to scale creators into market-leading brands.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400">
              Claimr combines award-winning creator growth intelligence with trust, automation, and frictionless payouts so every creator turns platform rewards into a reliable business engine.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[32px] border border-slate-800/90 bg-slate-950/85 p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-emerald-300">AI claim intelligence</p>
              <p className="mt-4 text-lg font-semibold text-white">Recover hidden earnings from every platform program and unlock compounding creator value.</p>
            </div>
            <div className="rounded-[32px] border border-slate-800/90 bg-slate-950/85 p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-emerald-300">Launch-ready workflow</p>
              <p className="mt-4 text-lg font-semibold text-white">One dashboard for connection, mission tracking, payout insights, and creator growth prioritization.</p>
            </div>
            <div className="rounded-[32px] border border-slate-800/90 bg-slate-950/85 p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-emerald-300">Agency scale</p>
              <p className="mt-4 text-lg font-semibold text-white">Designed to serve creators, teams, and agencies managing millions in creator revenue.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-8">
        <div className="rounded-[40px] border border-slate-800/90 bg-slate-950/80 p-8 shadow-glow backdrop-blur-xl">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-emerald-300">How Claimr works</p>
            <h2 className="mt-4 text-4xl font-semibold text-white">A simple pipeline to recover your creator money.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <StepCard key={step.title} {...step} />
            ))}
          </div>
        </div>
      </section>

      <TrustPanel />

      <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-8">
        <div className="rounded-[40px] border border-slate-800/90 bg-slate-950/80 p-10 shadow-glow backdrop-blur-xl">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-emerald-300">Creator economy features</p>
            <h2 className="mt-4 text-4xl font-semibold text-white">Premium tools built to scale creators into market leaders.</h2>
          </div>
          <div className="mt-10 grid gap-6 xl:grid-cols-4">
            {premiumFeatures.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-8">
        <div className="space-y-10 rounded-[40px] border border-slate-800/90 bg-slate-950/80 p-10 shadow-glow backdrop-blur-xl">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-emerald-300">Pricing plans</p>
            <h2 className="mt-4 text-4xl font-semibold text-white">Built for creators at every stage.</h2>
          </div>
          <div className="grid gap-6 xl:grid-cols-3">
            {pricing.map((plan, index) => (
              <div key={plan.tier} className={`rounded-[32px] border ${plan.tier === 'Pro' ? 'border-money/60 bg-slate-950/95 shadow-[0_0_60px_rgba(0,245,76,0.17)]' : 'border-slate-800/90 bg-slate-950/75'} p-8`}>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">{plan.tier}</span>
                  {plan.tier === 'Pro' ? <span className="rounded-full bg-money/10 px-3 py-1 text-xs font-semibold text-money">Best value</span> : null}
                </div>
                <p className="mt-6 text-5xl font-semibold text-white">{plan.price}</p>
                <p className="mt-4 text-slate-400">{plan.description}</p>
                <ul className="mt-8 space-y-3 text-slate-300">
                  {plan.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-money/15 text-money">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-10 w-full">Choose {plan.tier}</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
