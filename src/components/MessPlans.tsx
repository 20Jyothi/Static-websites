import { Check, Crown, GraduationCap, Sparkles, ArrowRight } from 'lucide-react';

type Plan = {
  name: string;
  icon: typeof Crown;
  price: string;
  period: string;
  description: string;
  features: string[];
  featured: boolean;
  badge?: string;
  accentFrom: string;
  accentTo: string;
};

const plans: Plan[] = [
  {
    name: 'Student Discount',
    icon: GraduationCap,
    price: '₹2,400',
    period: '/month',
    description: 'Specially priced for college students. One hearty meal a day, every day.',
    features: [
      '1 meal per day (lunch or dinner)',
      'Unlimited rice, sambar & rasam',
      'Valid with student ID only',
      'Flexible — skip days, no waste',
      '10% off on extra purchases',
    ],
    featured: false,
    accentFrom: 'from-slate-600',
    accentTo: 'to-slate-700',
  },
  {
    name: '2 Meals a Day',
    icon: Sparkles,
    price: '₹4,500',
    period: '/month',
    description: 'Perfect for working professionals. Breakfast and lunch, or lunch and dinner.',
    features: [
      '2 meals per day (your choice)',
      'Unlimited rice, sambar & rasam',
      'Free evening filter coffee',
      'Priority seating during rush hours',
      '15% off on extra purchases',
      'Special meals on weekends',
    ],
    featured: true,
    badge: 'Most Popular',
    accentFrom: 'from-primary-500',
    accentTo: 'to-amber-600',
  },
  {
    name: 'Unlimited Meals',
    icon: Crown,
    price: '₹6,500',
    period: '/month',
    description: 'All-day access. Walk in for breakfast, lunch, evening snacks, and dinner.',
    features: [
      'All 3 meals + evening snacks',
      'Unlimited rice, sambar & rasam',
      'Free filter coffee & masala chai',
      'Priority seating — always',
      '20% off on extra purchases',
      'Special meals every weekend',
      'Guest pass — bring a friend once a month',
    ],
    featured: false,
    accentFrom: 'from-amber-600',
    accentTo: 'to-primary-700',
  },
];

export default function MessPlans() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="plans" className="relative overflow-hidden bg-slate-950 py-20 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary-600/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="reveal mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.25em] text-primary-400">Eat Better, Save More</span>
          <h2 className="font-serif text-3xl font-bold leading-tight text-white text-balance sm:text-4xl lg:text-5xl">
            Monthly Mess Plans
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            Subscribe to a monthly plan and enjoy wholesome home-style meals every day at unbeatable prices. No lock-in, cancel anytime.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid items-stretch gap-6 sm:gap-8 lg:grid-cols-3">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`reveal relative flex flex-col rounded-3xl border p-6 transition-all duration-500 sm:p-8 ${
                plan.featured
                  ? 'border-primary-500/50 bg-gradient-to-b from-slate-800/80 to-slate-900/80 shadow-2xl shadow-primary-600/15 lg:-translate-y-4 lg:scale-[1.03]'
                  : 'border-white/10 bg-slate-900/50 hover:border-primary-500/30 hover:bg-slate-800/50'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary-500 to-amber-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-lg shadow-primary-600/30">
                    <Sparkles className="h-3.5 w-3.5" />
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${plan.accentFrom} ${plan.accentTo} shadow-lg`}>
                <plan.icon className="h-7 w-7 text-white" />
              </div>

              {/* Name */}
              <h3 className="font-serif text-2xl font-bold text-white">{plan.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{plan.description}</p>

              {/* Price */}
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-serif text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-sm text-slate-400">{plan.period}</span>
              </div>

              {/* Divider */}
              <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              {/* Features */}
              <ul className="flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${plan.featured ? 'bg-primary-500/20 text-primary-400' : 'bg-white/5 text-slate-400'}`}>
                      <Check className="h-3 w-3" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => scrollTo('#contact')}
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${
                  plan.featured
                    ? 'bg-gradient-to-r from-primary-500 to-amber-600 text-white shadow-lg shadow-primary-600/30 hover:scale-[1.03] hover:shadow-primary-600/50'
                    : 'border border-white/15 bg-white/5 text-white hover:border-primary-500/40 hover:bg-primary-500/10 hover:text-primary-400'
                }`}
              >
                Choose Plan
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="reveal mt-12 text-center">
          <p className="text-sm text-slate-500">
            All plans include free rice, sambar, and rasam refills. No registration fee. Plans can be paused during travel — just let us know in advance.
          </p>
        </div>
      </div>
    </section>
  );
}
