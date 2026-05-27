import {
  FacebookIcon,
  InstagramIcon,
  SparkleIcon,
  TikTokIcon,
  YouTubeIcon
} from '../../lib/platformIcons';

const creators = [
  {
    quote: 'Claimr found $8.4K in unclaimed creator bonuses in one scan and made every payout feel effortless.',
    name: 'Ava Lane',
    role: 'Creator Partner'
  },
  {
    quote: 'Our agency uses Claimr to manage payouts for 28 creators. It turned reward tracking into something our team finally trusts.',
    name: 'Mason Cruz',
    role: 'Creator Ops Lead'
  }
];

export function TrustPanel() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-8">
      <div className="rounded-[40px] border border-slate-800/90 bg-slate-950/80 p-10 shadow-glow backdrop-blur-xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-emerald-300">Trusted by creators & growth teams</p>
            <h2 className="mt-4 text-4xl font-semibold text-white">The platform creators rely on for real revenue recovery.</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
              From onboarding to payout capture, Claimr removes the manual work and delivers premium insight across every social platform reward program.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-4 text-slate-400 sm:grid-cols-5 lg:gap-6">
            <TikTokIcon className="h-10 w-10 text-white" />
            <YouTubeIcon className="h-10 w-10 text-white" />
            <FacebookIcon className="h-10 w-10 text-white" />
            <InstagramIcon className="h-10 w-10 text-white" />
            <SparkleIcon className="h-10 w-10 text-money" />
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {creators.map((item) => (
            <div key={item.name} className="rounded-[32px] border border-slate-800/90 bg-slate-900/90 p-8 shadow-inner">
              <p className="text-lg leading-8 text-slate-200">“{item.quote}”</p>
              <div className="mt-6 text-sm text-slate-400">
                <p className="font-semibold text-white">{item.name}</p>
                <p>{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
