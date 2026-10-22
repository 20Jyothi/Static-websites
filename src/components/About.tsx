import { Heart, Leaf, Clock } from 'lucide-react';

const aboutImage1 = 'https://images.pexels.com/photos/7351644/pexels-photo-7351644.jpeg?auto=compress&cs=tinysrgb&h=700&w=900';
const aboutImage2 = 'https://images.pexels.com/photos/5775684/pexels-photo-5775684.jpeg?auto=compress&cs=tinysrgb&h=500&w=600';

const values = [
  { icon: Leaf, title: 'Farm-Fresh Daily', text: 'Vegetables and spices sourced every morning from local markets.' },
  { icon: Heart, title: 'Made With Love', text: 'Recipes passed down through generations, cooked the way amma made them.' },
  { icon: Clock, title: 'Always On Time', text: 'Hot meals served fresh throughout the day, every day.' },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-slate-900 py-20 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary-600/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 sm:gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Images */}
          <div className="reveal relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img src={aboutImage1} alt="Traditional Indian meal" className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
            </div>
            <div className="absolute -bottom-8 right-3 w-40 overflow-hidden rounded-2xl border-4 border-slate-900 shadow-xl sm:w-56 sm:right-4 lg:-right-8 lg:w-60">
              <img src={aboutImage2} alt="Indian thali" className="h-32 w-full object-cover sm:h-40 lg:h-44" />
            </div>
            {/* Badge */}
            <div className="absolute -left-3 top-6 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-amber-600 text-center shadow-xl sm:h-24 sm:w-24 lg:-left-8 lg:top-8">
              <span className="font-serif text-xl font-bold text-white sm:text-2xl">25</span>
              <span className="text-[9px] font-medium uppercase tracking-wider text-white/90 sm:text-[10px]">Years</span>
            </div>
          </div>

          {/* Text */}
          <div className="reveal">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.25em] text-primary-400">Our Story</span>
            <h2 className="font-serif text-3xl font-bold leading-tight text-white text-balance sm:text-4xl lg:text-5xl">
              A Tradition of Taste Since 1998
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
              Sri Ramachandra Mess began as a small kitchen with a simple idea — serve the kind of food
              you'd eat at home. No shortcuts, no compromises. Just honest, wholesome South Indian meals
              that bring people together.
            </p>
            <p className="mt-4 leading-relaxed text-slate-400">
              From our signature sambar to the crispy dosas and fragrant biryanis, every dish is prepared
              with care, using time-honored techniques and the freshest ingredients. What started as a
               neighborhood mess is now a beloved dining destination for families, students, and
              working professionals alike.
            </p>

            <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-3 sm:gap-6">
              {values.map((v) => (
                <div key={v.title} className="group">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/10 text-primary-400 transition-all group-hover:bg-primary-500 group-hover:text-white">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-semibold text-white">{v.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
