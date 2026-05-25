export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/40 px-6 py-10 text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Claimr. Built for creators who want every dollar they deserve.</p>
        <div className="flex flex-wrap gap-4">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
