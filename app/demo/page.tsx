import Link from 'next/link';
import { Navbar } from '../../components/Navbar';
import { EarningsCounter } from '../../components/dashboard/EarningsCounter';
import { PlatformCard } from '../../components/dashboard/PlatformCard';
import { OpportunityCard } from '../../components/dashboard/OpportunityCard';
import { MissionCard } from '../../components/dashboard/MissionCard';
import { demoPlatformCards, earningsSummary, earningsOpportunities, smartMissions } from '../../lib/sample-data';

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-background text-slate-100">
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8">
        <div className="mb-10 rounded-[40px] border border-slate-800/90 bg-slate-950/80 p-10 shadow-glow backdrop-blur-xl">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-emerald-300">Investor demo</p>
              <h1 className="mt-4 text-5xl font-semibold text-white">Claimr dashboard demo — no login required.</h1>
              <p className="mt-4 max-w-2xl text-slate-400">
                Experience the full product moment. This demo shows real-looking earnings, platform scans, and mission workflows with smooth animations.
              </p>
            </div>
            <div className="rounded-[32px] border border-slate-800/90 bg-slate-900/90 p-6 text-sm text-slate-300">
              <p className="font-semibold text-slate-100">Instant preview</p>
              <p className="mt-3">See the product in action with populated Creator dashboards, platform readiness, and claimable rewards.</p>
              <Link href="/" className="mt-6 inline-flex rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
                Back to homepage
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
          <section className="space-y-8 rounded-[40px] border border-slate-800/90 bg-slate-950/80 p-8 shadow-glow backdrop-blur-xl">
            <EarningsCounter value={earningsSummary.unclaimed} subtitle="Hidden creator earnings uncovered across your connected social accounts." />

            <div className="grid gap-6 sm:grid-cols-2">
              {demoPlatformCards.map((platform) => (
                <PlatformCard
                  key={platform.id}
                  name={platform.platform}
                  status={platform.status}
                  amount={platform.amount}
                  lastScanned={platform.lastScanned}
                />
              ))}
            </div>
          </section>

          <section className="space-y-6 rounded-[40px] border border-slate-800/90 bg-slate-950/80 p-8 shadow-glow backdrop-blur-xl">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-emerald-300">Demo actions</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Saved claims and creator missions</h2>
            </div>
            <div className="grid gap-4">
              {smartMissions.map((mission) => (
                <MissionCard key={mission.id} {...mission} />
              ))}
            </div>
          </section>
        </div>

        <section className="mt-10 rounded-[40px] border border-slate-800/90 bg-slate-950/80 p-8 shadow-glow backdrop-blur-xl">
          <h2 className="text-3xl font-semibold text-white">Claimable opportunities</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {earningsOpportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.id} {...opportunity} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
