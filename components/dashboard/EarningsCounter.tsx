'use client';
import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCountUp } from '../../hooks/useCountUp';

interface EarningsCounterProps {
  value: number;
  subtitle: string;
}

export function EarningsCounter({ value, subtitle }: EarningsCounterProps) {
  const count = useCountUp(value, 1500);
  const [burst, setBurst] = useState(false);

  const displayValue = useMemo(() => {
    return `$${count.toLocaleString()}`;
  }, [count]);

  return (
    <div className="relative overflow-hidden rounded-[36px] border border-slate-800/90 bg-slate-950/90 p-8 shadow-glow">
      <AnimatePresence>
        {burst && (
          <motion.div
            className="pointer-events-none absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-money/10 to-transparent opacity-80" />
          </motion.div>
        )}
      </AnimatePresence>
      <p className="text-sm uppercase tracking-[0.32em] text-emerald-300">Unclaimed Earnings Found</p>
      <h2 className="mt-4 text-5xl font-semibold text-white tracking-tight">{displayValue}</h2>
      <p className="mt-3 max-w-xl text-slate-400">{subtitle}</p>
      <button
        type="button"
        onClick={() => {
          setBurst(true);
          window.setTimeout(() => setBurst(false), 1200);
        }}
        className="mt-8 inline-flex rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
      >
        Refresh scan
      </button>
    </div>
  );
}
