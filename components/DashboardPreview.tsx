'use client';

import { useEffect, useState } from 'react';

interface Mission {
  id: string;
  title: string;
  platform: string;
  estimate: string;
  deadline: string;
}

interface Opportunity {
  id: string;
  program: string;
  platform: string;
  amount: string;
}

export function DashboardPreview() {
  const [missions, setMissions] = useState<Mission[]>([]);
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [summary, setSummary] = useState({ unclaimed: '$0', projected: '$0' });

  useEffect(() => {
    async function loadData() {
      const earnings = await fetch('/api/earnings').then((res) => res.json());
      const missions = await fetch('/api/missions').then((res) => res.json());

      setSummary({ unclaimed: earnings.unclaimed, projected: earnings.projected });
      setOpportunities(earnings.opportunities);
      setMissions(missions);
    }

    loadData();
  }, []);

  return (
    <div className="space-y-10">
      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[32px] border border-slate-800/90 bg-slate-950/90 p-8 shadow-glow">
          <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">Unclaimed earnings</p>
          <p className="mt-4 text-5xl font-semibold text-white">{summary.unclaimed}</p>
          <p className="mt-3 text-slate-400">Money waiting in bonus programs and missed monetization wells.</p>
        </div>
        <div className="rounded-[32px] border border-slate-800/90 bg-slate-950/90 p-8 shadow-glow">
          <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">Projected monthly value</p>
          <p className="mt-4 text-5xl font-semibold text-white">{summary.projected}</p>
          <p className="mt-3 text-slate-400">Estimated incremental value from active missions and claims.</p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[32px] border border-slate-800/90 bg-slate-950/90 p-8 shadow-glow">
          <h2 className="text-xl font-semibold text-white">Smart Missions</h2>
          <div className="mt-6 space-y-4">
            {missions.length === 0 ? (
              <p className="text-slate-400">No mission data available yet.</p>
            ) : (
              missions.map((mission) => (
                <div key={mission.id} className="rounded-3xl border border-slate-800/70 bg-slate-900/80 p-4">
                  <p className="text-base font-semibold text-white">{mission.title}</p>
                  <p className="mt-1 text-sm text-slate-400">{mission.platform} · {mission.deadline}</p>
                  <p className="mt-2 text-sm text-emerald-300">Estimated +{mission.estimate}</p>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-800/90 bg-slate-950/90 p-8 shadow-glow">
          <h2 className="text-xl font-semibold text-white">Claimable Opportunities</h2>
          <div className="mt-6 space-y-4">
            {opportunities.length === 0 ? (
              <p className="text-slate-400">No opportunities found yet.</p>
            ) : (
              opportunities.map((opportunity) => (
                <div key={opportunity.id} className="rounded-3xl border border-slate-800/70 bg-slate-900/80 p-4">
                  <p className="text-base font-semibold text-white">{opportunity.program}</p>
                  <p className="mt-1 text-sm text-slate-400">{opportunity.platform}</p>
                  <p className="mt-2 text-sm text-emerald-300">{opportunity.amount} available</p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
