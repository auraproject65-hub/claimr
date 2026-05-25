import { type ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
}

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/40',
        variant === 'primary' && 'bg-emerald-400 text-slate-950 shadow-glow hover:bg-emerald-300',
        variant === 'ghost' && 'border border-slate-700 bg-slate-900/70 text-slate-100 hover:bg-slate-800',
        className
      )}
      {...props}
    />
  );
}
