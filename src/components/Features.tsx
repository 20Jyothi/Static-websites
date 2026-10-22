import { Sparkles, Leaf, Heart, ChefHat, IndianRupee, Smile } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Hygienic Kitchen',
    text: 'Spotless, open kitchen maintained to the highest food safety standards. Cleanliness is our top priority.',
  },
  {
    icon: Leaf,
    title: 'Pure Veg',
    text: '100% vegetarian kitchen. No onion-garlic options available on request. Pure, fresh, and wholesome.',
  },
  {
    icon: Heart,
    title: 'Homely Taste',
    text: 'Recipes passed down through generations, cooked the way amma made them. Every bite feels like home.',
  },
  {
    icon: ChefHat,
    title: 'Expert Cooks',
    text: 'Our chefs bring decades of experience in authentic South Indian home cooking.',
  },
  {
    icon: IndianRupee,
    title: 'Pocket Friendly',
    text: 'Hearty, wholesome meals at prices that fit every budget. No hidden charges, ever.',
  },
  {
    icon: Smile,
    title: 'Warm Service',
    text: 'Our staff treats every guest like family. Walk in a stranger, leave a regular.',
  },
];

export default function Features() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-20 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-primary-600/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.25em] text-primary-400">Why Choose Us</span>
          <h2 className="font-serif text-3xl font-bold leading-tight text-white text-balance sm:text-4xl lg:text-5xl">
            More Than Just a Meal
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            We are committed to serving food that nourishes both body and soul, with the warmth and care of a family kitchen.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => (
            <div
              key={f.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-white/5 bg-slate-800/40 p-6 transition-all duration-400 hover:border-primary-500/30 hover:bg-slate-800/70 sm:p-8"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              {/* Hover gradient */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary-500/0 blur-2xl transition-all duration-500 group-hover:bg-primary-500/15" />

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500/20 to-amber-600/20 text-primary-400 transition-all duration-300 group-hover:from-primary-500 group-hover:to-amber-600 group-hover:text-white group-hover:scale-110">
                <f.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">{f.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
