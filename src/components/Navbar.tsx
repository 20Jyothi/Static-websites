import { useEffect, useState } from 'react';
import { Menu, X, UtensilsCrossed } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: "Today's Menu", href: '#todays-menu' },
  { label: 'Full Menu', href: '#menu' },
  { label: 'Plans', href: '#plans' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg shadow-black/30 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }} className="flex items-center gap-2.5 group">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-amber-600 shadow-lg shadow-primary-600/30 transition-transform group-hover:scale-110">
            <UtensilsCrossed className="h-5 w-5 text-white" />
          </span>
          <div className="leading-tight">
            <span className="block font-serif text-lg font-bold tracking-wide text-white">Sri Ramachandra</span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.25em] text-primary-400">Mess</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-0.5 xl:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="relative px-3.5 py-2 text-[13px] font-medium text-slate-200 transition-colors hover:text-primary-400 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-primary-500 after:transition-all after:duration-300 hover:after:w-3/4"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
          className="hidden rounded-full bg-gradient-to-r from-primary-500 to-amber-600 px-5 py-2 text-[13px] font-semibold text-white shadow-lg shadow-primary-600/30 transition-all hover:scale-105 hover:shadow-primary-600/50 xl:inline-block"
        >
          Book a Table
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 xl:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out xl:hidden ${
          mobileOpen ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="mx-5 mt-3 space-y-1 rounded-2xl bg-slate-800/95 p-4 shadow-xl backdrop-blur-lg">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="block rounded-lg px-4 py-3 text-base font-medium text-slate-200 transition-colors hover:bg-primary-500/10 hover:text-primary-400"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className="mt-2 block rounded-xl bg-gradient-to-r from-primary-500 to-amber-600 px-4 py-3 text-center text-base font-semibold text-white"
            >
              Book a Table
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
