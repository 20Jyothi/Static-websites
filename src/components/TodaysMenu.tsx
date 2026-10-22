import { Sunrise, Sun, Moon, Clock, ArrowRight } from 'lucide-react';

type MealCard = {
  icon: typeof Sunrise;
  title: string;
  time: string;
  image: string;
  items: string[];
  price: string;
  accent: string;
};

const meals: MealCard[] = [
  {
    icon: Sunrise,
    title: 'Breakfast',
    time: '7:00 AM – 10:30 AM',
    image: 'https://images.pexels.com/photos/20422132/pexels-photo-20422132.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    items: ['Masala Dosa', 'Idli & Sambar', 'Pongal', 'Vada', 'Filter Coffee'],
    price: '₹80 onwards',
    accent: 'from-amber-500/20 to-primary-500/20',
  },
  {
    icon: Sun,
    title: 'Lunch',
    time: '12:00 PM – 3:30 PM',
    image: 'https://images.pexels.com/photos/35008222/pexels-photo-35008222.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    items: ['Unlimited Full Meals', 'Vegetable Biryani', 'Sambar & Rasam', 'Curd & Pickle', 'Payasam'],
    price: '₹150 onwards',
    accent: 'from-primary-500/20 to-amber-600/20',
  },
  {
    icon: Moon,
    title: 'Dinner',
    time: '7:00 PM – 10:30 PM',
    image: 'https://images.pexels.com/photos/29148133/pexels-photo-29148133.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    items: ['Special Meals', 'Parotta & Kurma', 'Biryani', 'Bajji & Bonda', 'Gulab Jamun'],
    price: '₹120 onwards',
    accent: 'from-amber-600/20 to-primary-600/20',
  },
];

export default function TodaysMenu() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="todays-menu" className="relative overflow-hidden bg-slate-900 py-20 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-primary-600/5 blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-72 w-72 rounded-full bg-amber-600/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="reveal mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.25em] text-primary-400">Fresh Every Day</span>
          <h2 className="font-serif text-3xl font-bold leading-tight text-white text-balance sm:text-4xl lg:text-5xl">
            Today's Menu
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            Three meals a day, each prepared with the freshest ingredients. Walk in any time — the kitchen is always warm.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
          {meals.map((meal, idx) => (
            <div
              key={meal.title}
              className="reveal group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-800/40 transition-all duration-500 hover:border-primary-500/40 hover:shadow-2xl hover:shadow-primary-600/10"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={meal.image}
                  alt={`${meal.title} at Sri Ramachandra Mess`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-slate-800/20 to-transparent" />
                {/* Floating icon badge */}
                <div className={`absolute -bottom-6 left-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${meal.accent} border border-white/10 backdrop-blur-md transition-all duration-300 group-hover:scale-110`}>
                  <meal.icon className="h-7 w-7 text-primary-400" />
                </div>
                {/* Price badge */}
                <div className="absolute right-4 top-4 rounded-full bg-slate-950/70 px-4 py-1.5 backdrop-blur-md">
                  <span className="text-sm font-semibold text-primary-400">{meal.price}</span>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6 pt-9">
                <h3 className="font-serif text-2xl font-bold text-white">{meal.title}</h3>
                <div className="mt-2 flex items-center gap-2 text-sm text-slate-400">
                  <Clock className="h-4 w-4 text-primary-500" />
                  <span>{meal.time}</span>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {meal.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" />
                      {item}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => scrollTo('#menu')}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-400 transition-all hover:gap-3 hover:text-primary-300"
                >
                  View full menu
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
