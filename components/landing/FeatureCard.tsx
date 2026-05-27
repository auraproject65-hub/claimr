interface FeatureCardProps {
  title: string;
  description: string;
  accent: string;
}

export function FeatureCard({ title, description, accent }: FeatureCardProps) {
  return (
    <div className="rounded-[32px] border border-slate-800/90 bg-slate-950/85 p-8 shadow-glow transition duration-300 hover:-translate-y-1 hover:border-money/70 hover:bg-slate-900/95">
      <div className={`mb-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] ${accent}`}>
        {title}
      </div>
      <p className="text-sm leading-7 text-slate-300">{description}</p>
    </div>
  );
}
