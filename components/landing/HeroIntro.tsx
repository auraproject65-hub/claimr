'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '../Button';
import { LiveTicker } from './LiveTicker';

export function HeroIntro() {
  return (
    <div className="space-y-8">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="inline-flex rounded-full border border-money/30 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.32em] text-money"
      >
        Creator earnings optimization platform
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
          Every dollar the platforms owe you, claimed.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Connect TikTok, YouTube, Facebook, and Instagram in seconds. Claimr turns hidden reward pools into steady creator payouts with AI-backed scanning, mission automation, and payout intelligence.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link href="/demo">
            <Button className="shadow-glow">Start free</Button>
          </Link>
          <Link href="/connect">
            <Button variant="ghost">Connect accounts</Button>
          </Link>
        </div>
      </motion.div>
      <LiveTicker />
    </div>
  );
}
