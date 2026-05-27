'use client';
import { motion } from 'framer-motion';
import { FacebookIcon, InstagramIcon, TikTokIcon, YouTubeIcon } from '../../lib/platformIcons';

interface PlatformCardProps {
  name: string;
  status: string;
  amount: string;
  lastScanned: string;
  slug?: string;
  description?: string;
}

const iconMap: Record<string, any> = {
  TikTok: TikTokIcon,
  YouTube: YouTubeIcon,
  Facebook: FacebookIcon,
  Instagram: InstagramIcon
};

export function PlatformCard({ name, status, amount, lastScanned, description }: PlatformCardProps) {
  const Icon = iconMap[name] || TikTokIcon;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-[32px] border border-slate-800/90 bg-slate-950/90 p-6 shadow-glow transition-transform duration-300"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-900/80 text-money">
          <Icon className="h-6 w-6" />
        </div>
        <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.24em] text-emerald-300">
          {status}
        </span>
      </div>
      <h3 className="mt-6 text-xl font-semibold text-white">{name}</h3>
      <p className="mt-3 text-sm text-slate-400">Eligible for</p>
      <p className="mt-2 text-3xl font-semibold text-money">{amount}</p>
      <p className="mt-4 text-sm text-slate-500">Last scanned {lastScanned}</p>
    </motion.div>
  );
}
