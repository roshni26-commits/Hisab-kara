import { Link } from "@tanstack/react-router";
import { Wallet, Mail, ShieldCheck, Newspaper } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-input bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-mint to-teal text-white shadow-sm">
              <Wallet className="size-5" />
            </span>
            <span className="text-xl font-bold tracking-tight">Hisab-Kara</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Chat-like entries, automatic accounts. Free, private, and built for India —
            for students, freelancers and small shopkeepers.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1.5 text-xs font-medium text-accent-foreground">
            <ShieldCheck className="size-3.5 text-teal" />
            Data stays on your phone with BYOK
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Pages
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/" className="hover:text-foreground text-muted-foreground">Home</Link></li>
            <li>
              <Link to="/blog" className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground">
                <Newspaper className="size-3.5" /> Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground">
                <Mail className="size-3.5" /> Contact & Support
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground">
                <ShieldCheck className="size-3.5" /> Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Support
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <a href="mailto:support@hisabkara.app" className="hover:text-foreground">
                support@hisabkara.app
              </a>
            </li>
            <li><Link to="/contact" className="hover:text-foreground">Read FAQ</Link></li>
            <li><a href="/#download" className="hover:text-foreground">Download app</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-input">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6">
          <p>© 2026 Hisab-Kara. Made with ❤️ for Bharat.</p>
          <p>Free forever · No account · No cloud</p>
        </div>
      </div>
    </footer>
  );
}
