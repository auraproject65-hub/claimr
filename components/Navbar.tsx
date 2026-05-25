import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-sm text-slate-300 sm:px-8">
      <Link href="/" className="font-semibold text-white">
        Claimr
      </Link>
      <div className="flex items-center gap-5">
        <Link href="/dashboard" className="hover:text-white">
          Dashboard
        </Link>
        <Link href="/connect" className="hover:text-white">
          Connect
        </Link>
        <Link href="/" className="rounded-full border border-slate-700 px-4 py-2 text-slate-200 hover:border-emerald-400 hover:text-white">
          Login
        </Link>
      </div>
    </nav>
  );
}
