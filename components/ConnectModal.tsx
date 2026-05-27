'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SparkleIcon } from '../lib/platformIcons';

interface ConnectModalProps {
  open: boolean;
  platform: string;
  onClose: () => void;
}

export function ConnectModal({ open, platform, onClose }: ConnectModalProps) {
  const [step, setStep] = useState<'connect' | 'scanning' | 'revealed'>('connect');
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    if (!open) {
      setStep('connect');
      setAmount(0);
      return;
    }

    if (step === 'scanning') {
      const timer = window.setTimeout(() => {
        setAmount(Math.floor(300 + Math.random() * 1200));
        setStep('revealed');
      }, 2100);
      return () => window.clearTimeout(timer);
    }
  }, [open, step]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4 py-8 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-full max-w-2xl rounded-[36px] border border-slate-800/90 bg-slate-950/95 p-8 shadow-[0_35px_120px_rgba(0,0,0,0.45)]"
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-emerald-300">Connection wizard</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Connect {platform}</h2>
              </div>
              <button onClick={onClose} className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-emerald-400/50">
                Close
              </button>
            </div>

            <div className="mt-8 rounded-[32px] border border-slate-800/90 bg-slate-900/90 p-8 text-center">
              {step === 'connect' ? (
                <>
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-slate-950 text-money">
                    <SparkleIcon className="h-9 w-9" />
                  </div>
                  <p className="mt-6 text-xl font-semibold text-white">Authorize {platform} access</p>
                  <p className="mt-3 text-slate-400">We only need the minimal scopes to scan earnings programs and bonus eligibility.</p>
                  <button
                    onClick={() => setStep('scanning')}
                    className="mt-8 inline-flex rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
                  >
                    Connect now
                  </button>
                </>
              ) : step === 'scanning' ? (
                <>
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-interactive/10 text-interactive">
                    <div className="h-12 w-12 animate-spin rounded-full border-4 border-t-transparent border-current" />
                  </div>
                  <p className="mt-6 text-xl font-semibold text-white">Scanning for unclaimed funds…</p>
                  <p className="mt-3 text-slate-400">We’re checking Creator Fund and reward programs for your account.</p>
                </>
              ) : (
                <>
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-money/10 text-money">
                    <SparkleIcon className="h-9 w-9" />
                  </div>
                  <p className="mt-6 text-xl font-semibold text-white">Ready to claim ${amount}</p>
                  <p className="mt-3 text-slate-400">Your {platform} connection is active and hidden earnings are ready to review.</p>
                  <button onClick={onClose} className="mt-8 inline-flex rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
                    View dashboard
                  </button>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
