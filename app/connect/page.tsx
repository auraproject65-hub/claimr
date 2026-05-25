import { Navbar } from '../../components/Navbar';
import { platformConnections } from '../../lib/sample-data';

export default function ConnectPage() {
  return (
    <main className="min-h-screen bg-hero-gradient text-slate-100">
      <Navbar />
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8">
        <div className="rounded-[40px] border border-slate-800/90 bg-slate-950/80 p-10 shadow-glow backdrop-blur-xl">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">Platform connections</p>
            <h1 className="mt-4 text-4xl font-semibold text-white">Connect the accounts that unlock hidden money.</h1>
            <p className="mt-4 max-w-2xl text-slate-400">
              Link TikTok, YouTube, Facebook, and Instagram to surface bonuses, funds, and revenue triggers automatically.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {platformConnections.map((platform) => (
              <div key={platform.slug} className="rounded-3xl border border-slate-800/90 bg-slate-900/80 p-6 shadow-lg">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-semibold text-white">{platform.name}</h2>
                    <p className="mt-2 text-sm text-slate-400">{platform.description}</p>
                  </div>
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.24em] text-emerald-300">
                    {platform.status}
                  </span>
                </div>
                <button className="mt-6 inline-flex rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
                  {platform.status === 'Connected' ? 'Refresh' : 'Connect'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
