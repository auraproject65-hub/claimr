'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SparkleIcon } from '../lib/platformIcons';

export function Navbar() {
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem('claimr-sound-enabled');
    setSoundEnabled(stored === 'true');
  }, []);

  const toggleSound = () => {
    setSoundEnabled((current) => {
      const next = !current;
      window.localStorage.setItem('claimr-sound-enabled', String(next));
      return next;
    });
  };

  return (
    <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-sm text-slate-300 sm:px-8">
      <div className="flex items-center gap-3">
        <SparkleIcon className="h-6 w-6 text-money" />
        <Link href="/" className="text-lg font-semibold tracking-tight text-white">
          Claimr
        </Link>
      </div>
      <div className="flex items-center flex-wrap gap-4">
        <Link href="/dashboard" className="transition hover:text-white">
          Dashboard
        </Link>
        <Link href="/connect" className="transition hover:text-white">
          Connect
        </Link>
        <Link href="/demo" className="transition hover:text-white">
          Demo
        </Link>
        <button
          type="button"
          onClick={toggleSound}
          className={`rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] transition ${
            soundEnabled ? 'border-money text-money' : 'border-slate-700 text-slate-300'
          }`}
        >
          {soundEnabled ? 'Sound On' : 'Sound Off'}
        </button>
        <Link
          href="/"
          className="rounded-full bg-money px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
        >
          Upgrade
        </Link>
      </div>
    </nav>
  );
}
