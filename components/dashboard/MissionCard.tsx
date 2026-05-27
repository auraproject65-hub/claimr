'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface MissionCardProps {
  platform: string;
  title: string;
  estimate: string;
  deadline: string;
}

export function MissionCard({ platform, title, estimate, deadline }: MissionCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="rounded-[32px] border border-slate-800/90 bg-gradient-to-br from-slate-950/85 via-slate-900/75 to-slate-950/95 p-6 shadow-glow"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-emerald-300">{platform}</p>
          <h3 className="mt-3 text-xl font-semibold text-white">{title}</h3>
        </div>
        <div className="text-right">
          <p className="text-2xl font-semibold text-money">{estimate}</p>
          <p className="mt-2 text-sm text-slate-500">{deadline}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={() => setExpanded((current) => !current)}
        className="mt-6 inline-flex rounded-full border border-emerald-400/40 bg-slate-900/80 px-4 py-2 text-sm font-semibold text-emerald-300 transition hover:bg-slate-900"
      >
        {expanded ? 'Hide steps' : 'View steps'}
      </button>
      {expanded ? (
        <div className="mt-5 space-y-3 rounded-3xl border border-slate-800/90 bg-slate-900/80 p-4 text-sm text-slate-300">
          <p>• Upload a 60-second video with trending music.</p>
          <p>• Add #fyp and a caption with a clear CTA.</p>
          <p>• Publish before Friday to hit the next tier.</p>
          <a href="https://www.tiktok.com" target="_blank" rel="noreferrer" className="text-emerald-300 underline">
            Go to platform
          </a>
        </div>
      ) : null}
    </motion.div>
  );
}
