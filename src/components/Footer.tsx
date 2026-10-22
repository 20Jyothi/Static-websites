import { UtensilsCrossed, MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: "Today's Menu", href: '#todays-menu' },
  { label: 'Full Menu', href: '#menu' },
  { label: 'Plans', href: '#plans' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-slate-900">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 sm:gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-amber-600 shadow-lg shadow-primary-600/30">
                <UtensilsCrossed className="h-5 w-5 text-white" />
              </span>
              <div className="leading-tight">
                <span className="block font-serif text-lg font-bold text-white">Sri Ramachandra</span>
                <span className="block text-[11px] font-medium uppercase tracking-[0.25em] text-primary-400">Mess</span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Serving authentic South Indian home-style meals with love and tradition since 1998.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-slate-400 transition-all hover:bg-primary-500 hover:text-white"
                  aria-label="Social link"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                    className="text-sm text-slate-400 transition-colors hover:text-primary-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-500" />
                <span>42 Temple Street, Mylapore, Chennai 600004</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-400">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary-500" />
                <span>+91 98410 12345</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-400">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary-500" />
                <span>hello@sriramachandramess.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Opening Hours</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 flex-shrink-0 text-primary-500" />
                <span>Mon – Fri: 7 AM – 10:30 PM</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 flex-shrink-0 text-primary-500" />
                <span>Sat – Sun: 6:30 AM – 11 PM</span>
              </li>
            </ul>
            <div className="mt-5 rounded-xl bg-primary-500/10 px-4 py-3">
              <p className="text-sm font-medium text-primary-400">No reservations needed</p>
              <p className="mt-1 text-xs text-slate-400">Walk in and enjoy a hot meal anytime!</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Sri Ramachandra Mess. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Made with <span className="text-primary-500">love</span> and good food.
          </p>
        </div>
      </div>
    </footer>
  );
}
