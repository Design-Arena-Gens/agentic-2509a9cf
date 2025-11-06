import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/10 bg-white/[0.02] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <h4 className="mb-3 font-semibold">Aegis AI</h4>
            <p className="text-white/60">Huly-inspired crypto intelligence platform.</p>
          </div>
          <div>
            <h4 className="mb-3 font-semibold">Company</h4>
            <ul className="space-y-1 text-white/70">
              <li><Link className="hover:text-white" href="#">About Us</Link></li>
              <li><Link className="hover:text-white" href="#">Careers</Link></li>
              <li><Link className="hover:text-white" href="#">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold">Resources</h4>
            <ul className="space-y-1 text-white/70">
              <li><Link className="hover:text-white" href="#">FAQ</Link></li>
              <li><Link className="hover:text-white" href="#">Docs</Link></li>
              <li><Link className="hover:text-white" href="#">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold">Legal</h4>
            <ul className="space-y-1 text-white/70">
              <li><Link className="hover:text-white" href="#">Terms of Service</Link></li>
              <li><Link className="hover:text-white" href="#">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between text-white/50 text-xs">
          <p>? {new Date().getFullYear()} Aegis AI</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-white" href="#" aria-label="Twitter">?</a>
            <a className="hover:text-white" href="#" aria-label="Discord">?</a>
            <a className="hover:text-white" href="#" aria-label="GitHub">?</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
