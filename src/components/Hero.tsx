import { ChevronDown, Star, UtensilsCrossed } from 'lucide-react';

const heroImage = 'https://images.pexels.com/photos/35008222/pexels-photo-35008222.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400';

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-0">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="South Indian thali" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/30" />
      </div>

      {/* Decorative shapes */}
      <div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-primary-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-20 h-64 w-64 rounded-full bg-amber-600/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-2 backdrop-blur-sm">
            <span className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span className="text-[11px] font-medium text-slate-200 sm:text-xs">Loved by 10,000+ regulars since 1998</span>
          </div>

          <h1 className="animate-fade-up text-4xl font-bold leading-[1.15] text-white text-balance sm:text-5xl lg:text-7xl" style={{ animationDelay: '0.1s' }}>
            Authentic South Indian
            <span className="block bg-gradient-to-r from-primary-400 via-amber-400 to-primary-500 bg-clip-text font-serif italic text-transparent">
              Home-Style Meals
            </span>
          </h1>

          <p className="animate-fade-up mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg" style={{ animationDelay: '0.2s' }}>
            At Sri Ramachandra Mess, every plate carries the warmth of a family kitchen.
            Fresh ingredients, traditional recipes, and the kind of comfort food that feels like home.
          </p>

          <div className="animate-fade-up mt-8 flex flex-col gap-4 sm:flex-row" style={{ animationDelay: '0.3s' }}>
            <a
              href="#menu"
              onClick={(e) => { e.preventDefault(); scrollTo('#menu'); }}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-amber-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-primary-600/30 transition-all hover:scale-105 hover:shadow-primary-600/50"
            >
              <UtensilsCrossed className="h-5 w-5 transition-transform group-hover:rotate-12" />
              Explore Our Menu
            </a>
            <a
              href="#about"
              onClick={(e) => { e.preventDefault(); scrollTo('#about'); }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-primary-500/50 hover:bg-primary-500/10"
            >
              Our Story
            </a>
          </div>

          {/* Stats */}
          <div className="animate-fade-up mt-10 flex flex-wrap gap-6 sm:mt-14 sm:gap-8" style={{ animationDelay: '0.4s' }}>
            {[
              { value: '25+', label: 'Years of Tradition' },
              { value: '50+', label: 'Daily Dishes' },
              { value: '100%', label: 'Fresh Ingredients' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-primary-400 sm:text-3xl">{stat.value}</span>
                <span className="mt-1 text-xs text-slate-400 sm:text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 transition-colors hover:text-primary-400"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-7 w-7 animate-bounce" />
      </button>
    </section>
  );
}
