'use client';

import { useMemo, useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { ConnectModal } from '../../components/ConnectModal';
import { platformConnections } from '../../lib/sample-data';
import { TikTokIcon, YouTubeIcon, InstagramIcon, FacebookIcon } from '../../lib/platformIcons';

const iconMap = {
  TikTok: TikTokIcon,
  YouTube: YouTubeIcon,
  Instagram: InstagramIcon,
  Facebook: FacebookIcon
};

export default function ConnectPage() {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const platform = useMemo(
    () => platformConnections.find((item) => item.name === selectedPlatform) ?? null,
    [selectedPlatform]
  );

  return (
    <main className="min-h-screen bg-background text-slate-100">
      <Navbar />
      <ConnectModal open={open} platform={selectedPlatform ?? 'Platform'} onClose={() => setOpen(false)} />
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8">
        <div className="rounded-[40px] border border-slate-800/90 bg-slate-950/80 p-10 shadow-glow backdrop-blur-xl">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">Platform connections</p>
            <h1 className="mt-4 text-4xl font-semibold text-white">Connect the accounts that unlock hidden money.</h1>
            <p className="mt-4 max-w-2xl text-slate-400">
              Link TikTok, YouTube, Facebook, and Instagram to surface bonuses, funds, and revenue triggers automatically.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {platformConnections.map((platform) => {
              const Icon = iconMap[platform.name as keyof typeof iconMap];
              return (
                <div key={platform.slug} className="rounded-[32px] border border-slate-800/90 bg-slate-900/80 p-6 shadow-glow transition hover:-translate-y-1 hover:border-emerald-400/20">
                  <div className="flex items-center justify-between gap-4">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-800/90 text-money">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.24em] text-emerald-300">
                      {platform.status}
                    </span>
                  </div>
                  <h2 className="mt-6 text-xl font-semibold text-white">{platform.name}</h2>
                  <p className="mt-2 text-sm text-slate-400">{platform.description}</p>
                  <div className="mt-6 flex items-center justify-between gap-4">
                    <p className="text-sm text-slate-500">{platform.amount} available</p>
                    <button
                      onClick={() => {
                        setSelectedPlatform(platform.name);
                        setOpen(true);
                      }}
                      className="inline-flex rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
                    >
                      {platform.status === 'Connected' ? 'Refresh' : 'Connect'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
