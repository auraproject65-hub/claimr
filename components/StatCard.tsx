interface StatCardProps {
  label: string;
  value: string;
  detail: string;
}

export function StatCard({ label, value, detail }: StatCardProps) {
  return (
    <div className="rounded-3xl border border-slate-800/90 bg-slate-950/80 p-6 shadow-glow">
      <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">{label}</p>
      <p className="mt-4 text-4xl font-semibold text-white">{value}</p>
      <p className="mt-3 text-sm leading-6 text-slate-400">{detail}</p>
    </div>
  );
}
