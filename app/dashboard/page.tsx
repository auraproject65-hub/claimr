import { Navbar } from '../../components/Navbar';
import { EarningsCounter } from '../../components/dashboard/EarningsCounter';
import { PlatformCard } from '../../components/dashboard/PlatformCard';
import { OpportunityCard } from '../../components/dashboard/OpportunityCard';
import { MissionCard } from '../../components/dashboard/MissionCard';
import { earningsSummary, platformConnections, earningsOpportunities, smartMissions } from '../../lib/sample-data';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background text-slate-100">
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8">
        <div className="mb-10 rounded-[40px] border border-slate-800/90 bg-slate-950/80 p-10 shadow-glow backdrop-blur-xl">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">Creator dashboard</p>
              <h1 className="mt-4 text-4xl font-semibold text-white">Your money command center.</h1>
              <p className="mt-4 max-w-2xl text-slate-400">Claimr surfaces unclaimed funds, mission intelligence, and platform status in one premium workspace.</p>
            </div>
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-800/90 bg-slate-900/80 px-5 py-3 text-sm text-slate-300">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
              Live scan ready
            </div>
          </div>
        </div>

        <div className="grid gap-8 xl:grid-cols-[1.4fr_0.6fr]">
          <section className="space-y-8 rounded-[40px] border border-slate-800/90 bg-slate-950/80 p-8 shadow-glow backdrop-blur-xl">
            <EarningsCounter value={earningsSummary.unclaimed} subtitle="Unclaimed earnings found across your connected creator platforms." />

            <div className="grid gap-6 md:grid-cols-2">
              {platformConnections.map((platform) => (
                <PlatformCard key={platform.slug} {...platform} />
              ))}
            </div>
          </section>

          <section className="space-y-8 rounded-[40px] border border-slate-800/90 bg-slate-950/80 p-8 shadow-glow backdrop-blur-xl">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">Opportunity feed</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Claim-ready programs</h2>
            </div>
            <div className="space-y-4">
              {earningsOpportunities.map((opportunity) => (
                <OpportunityCard key={opportunity.id} {...opportunity} />
              ))}
            </div>
          </section>
        </div>

        <section className="mt-8 rounded-[40px] border border-slate-800/90 bg-slate-950/80 p-8 shadow-glow backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">Smart Missions</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Pinpoint content that generates cash.</h2>
            </div>
            <button className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
              New mission
            </button>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {smartMissions.map((mission) => (
              <MissionCard key={mission.id} {...mission} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
