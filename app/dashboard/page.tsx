import { DashboardPreview } from '../../components/DashboardPreview';
import { Navbar } from '../../components/Navbar';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-hero-gradient text-slate-100">
      <Navbar />
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8">
        <div className="rounded-[40px] border border-slate-800/90 bg-slate-950/80 p-10 shadow-glow backdrop-blur-xl">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">Creator dashboard</p>
            <h1 className="mt-4 text-4xl font-semibold text-white">Live creator revenue intelligence.</h1>
            <p className="mt-4 max-w-2xl text-slate-400">
              Monitor unclaimed earnings, run scans, and complete AI Smart Missions from one secure creator hub.
            </p>
          </div>
          <DashboardPreview />
        </div>
      </div>
    </main>
  );
}
