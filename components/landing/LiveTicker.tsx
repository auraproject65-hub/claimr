'use client';
import { useMemo } from 'react';

const liveClaims = [
  'Just now: @LunaStarr claimed $1,230 from TikTok Creativity Program.',
  '2m ago: @Maverick unlocked $780 from YouTube Shorts bonus.',
  '5m ago: @RaeRivers found $420 in Instagram Reel monetization.',
  '9m ago: @NovaCash discovered $1,100 from Facebook Stars upgrades.'
];

export function LiveTicker() {
  const repeated = useMemo(() => [...liveClaims, ...liveClaims], []);

  return (
    <div className="relative overflow-hidden rounded-[32px] border border-slate-800/90 bg-slate-950/80 p-4 text-slate-300">
      <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300">
        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
        Live proof
      </div>
      <div className="ticker flex h-10 items-center gap-10 whitespace-nowrap text-sm leading-6 text-slate-300">
        {repeated.map((item, index) => (
          <span key={`${item}-${index}`} className="inline-block">{item}</span>
        ))}
      </div>
      <style jsx>{`
        .ticker {
          animation: ticker 16s linear infinite;
        }
        @keyframes ticker {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
