'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export type ToastVariant = 'success' | 'info' | 'error' | 'money';

export interface ToastMessage {
  id: string;
  title: string;
  description: string;
  variant: ToastVariant;
}

interface ToastContextValue {
  pushToast: (toast: Omit<ToastMessage, 'id'>) => void;
}

const ToastContext = createContext<ToastContextValue>({
  pushToast: () => undefined
});

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const pushToast = useCallback((toast: Omit<ToastMessage, 'id'>) => {
    const id = `${toast.variant}-${Date.now()}`;
    setToasts((current) => [{ id, ...toast }, ...current]);
    window.setTimeout(() => {
      setToasts((current) => current.filter((item) => item.id !== id));
    }, 5200);
  }, []);

  const value = useMemo(() => ({ pushToast }), [pushToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed right-4 top-4 z-50 flex w-[clamp(240px,26vw,360px)] flex-col gap-3">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.24 }}
              className={`rounded-3xl border p-4 shadow-glow backdrop-blur-xl ${
                toast.variant === 'success'
                  ? 'border-emerald-400/30 bg-[#071d0a]'
                  : toast.variant === 'money'
                  ? 'border-money/30 bg-[#071f13]'
                  : toast.variant === 'info'
                  ? 'border-interactive/30 bg-[#0b1333]'
                  : 'border-alert/30 bg-[#3d2910]'
              }`}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">{toast.title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">{toast.description}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
