'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '../../providers/ToastProvider';

interface OpportunityCardProps {
  platform: string;
  program: string;
  amount: string;
}

export function OpportunityCard({ platform, program, amount }: OpportunityCardProps) {
  const [claimed, setClaimed] = useState(false);
  const [loading, setLoading] = useState(false);
  const { pushToast } = useToast();

  const handleClaim = () => {
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setClaimed(true);
      pushToast({
        title: 'Claim initiated',
        description: `Successfully started a claim for ${amount} on ${platform}.`,
        variant: 'money'
      });
    }, 900);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-[28px] border border-slate-800/90 bg-slate-950/90 p-5 shadow-glow"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-slate-400">{platform}</p>
          <h4 className="mt-2 text-lg font-semibold text-white">{program}</h4>
        </div>
        <p className="text-2xl font-semibold text-money">{amount}</p>
      </div>
      <div className="mt-5 flex items-center justify-between gap-4">
        <p className="text-sm text-slate-500">{claimed ? 'Claim started' : 'Recommended action'}</p>
        <button
          type="button"
          disabled={claimed}
          onClick={handleClaim}
          className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:bg-slate-700"
        >
          {loading ? 'Claiming…' : claimed ? 'Done' : 'Claim'}
        </button>
      </div>
    </motion.div>
  );
}
