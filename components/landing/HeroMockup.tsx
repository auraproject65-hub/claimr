'use client';

import { useMemo, useState } from 'react';

const stats = [
  { label: 'Unclaimed value', value: '$14.3K' },
  { label: 'Smart missions', value: '3 active' },
  { label: 'Platforms linked', value: 'TikTok · YouTube · IG' }
];

export function HeroMockup() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const style = useMemo(
    () => ({
      transform: `perspective(1200px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
    }),
    [rotation]
  );

  return (
    <div
      className="group relative mx-auto max-w-md"
      onMouseMove={(event) => {
        const rect = (event.currentTarget as HTMLDivElement).getBoundingClientRect();
        const x = ((event.clientY - rect.top) / rect.height - 0.5) * 12;
        const y = ((event.clientX - rect.left) / rect.width - 0.5) * 12;
        setRotation({ x: -x, y });
      }}
      onMouseLeave={() => setRotation({ x: 0, y: 0 })}
    >
      <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-money/20 via-transparent to-cyan-300/10 blur-3xl opacity-70" />
      <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-slate-950/95 p-6 shadow-glow" style={style}>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Claimr preview</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Dashboard overview</h3>
          </div>
          <span className="inline-flex rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">Beta</span>
        </div>
        <div className="rounded-[28px] bg-slate-900/90 p-5 shadow-inner">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Unclaimed earnings</p>
          <p className="mt-3 text-4xl font-semibold text-money">$14,380</p>
          <p className="mt-2 text-sm text-slate-500">Hidden earnings from platform programs</p>
        </div>
        <div className="mt-6 grid gap-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl bg-slate-900/90 p-4 text-sm text-slate-300">
              <p className="font-medium text-slate-200">{stat.label}</p>
              <p className="mt-2 text-lg font-semibold text-white">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
