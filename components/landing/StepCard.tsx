'use client';
import { motion } from 'framer-motion';

interface StepCardProps {
  title: string;
  description: string;
  accent: string;
}

export function StepCard({ title, description, accent }: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="rounded-[32px] border border-slate-800/90 bg-slate-950/85 p-8 shadow-glow"
    >
      <div className={`mb-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] ${accent}`}>{title}</div>
      <p className="text-sm leading-7 text-slate-300">{description}</p>
    </motion.div>
  );
}
