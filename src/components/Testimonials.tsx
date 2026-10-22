import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Karthik Raman',
    role: 'Regular since 2015',
    text: 'The best home-style meals in the city, hands down. Their unlimited meals remind me of my mother cooking. I come here at least three times a week.',
    rating: 5,
  },
  {
    name: 'Priya Sundaram',
    role: 'Software Engineer',
    text: 'As a working professional, this is my go-to lunch spot. Fresh, hygienic, and so affordable. The sambar is absolutely divine.',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    role: 'College Student',
    text: 'On a student budget, Sri Ramachandra Mess is a lifesaver. Full meals for 150 rupees with unlimited refills? Cannot beat that anywhere.',
    rating: 5,
  },
  {
    name: 'Lakshmi Narayanan',
    role: 'Homemaker',
    text: 'I trust their food completely. Pure ingredients, no artificial anything. My whole family loves their weekend special meals.',
    rating: 5,
  },
  {
    name: 'Arjun Venkatesh',
    role: 'Food Blogger',
    text: 'Authentic South Indian flavors done right. The masala dosa here is the crispiest I have had. This place is a hidden gem no more.',
    rating: 5,
  },
  {
    name: 'Deepa Krishnan',
    role: 'Doctor',
    text: 'Clean kitchen, healthy food, and warm service. They never compromise on quality. Highly recommended for families and individuals alike.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-slate-900 py-20 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-amber-600/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.25em] text-primary-400">What People Say</span>
          <h2 className="font-serif text-3xl font-bold leading-tight text-white text-balance sm:text-4xl lg:text-5xl">
            Words From Our Family
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            Thousands of guests have made Sri Ramachandra Mess their second home. Here is what a few of them have to say.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className="reveal group relative rounded-2xl border border-white/5 bg-slate-800/40 p-6 transition-all duration-400 hover:border-primary-500/20 hover:bg-slate-800/70 sm:p-8"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <Quote className="mb-4 h-8 w-8 text-primary-500/30 transition-colors group-hover:text-primary-500/50" />

              <div className="mb-4 flex gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-sm leading-relaxed text-slate-300">"{t.text}"</p>

              <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-amber-600 font-serif text-lg font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
