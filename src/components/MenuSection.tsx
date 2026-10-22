import { useState } from 'react';
import { Flame, Leaf, Star } from 'lucide-react';

type MenuItem = {
  name: string;
  description: string;
  price: string;
  tags: { label: string; icon: typeof Flame }[];
};

type MenuCategory = {
  id: string;
  label: string;
  items: MenuItem[];
};

const menu: MenuCategory[] = [
  {
    id: 'breakfast',
    label: 'Breakfast',
    items: [
      { name: 'Masala Dosa', description: 'Crispy golden crepe stuffed with spiced potato masala, served with sambar and chutney.', price: '₹80', tags: [{ label: 'Bestseller', icon: Star }] },
      { name: 'Idli Sambar (3 pcs)', description: 'Steamed rice cakes with piping hot sambar and coconut chutney.', price: '₹60', tags: [{ label: 'Healthy', icon: Leaf }] },
      { name: 'Pongal', description: 'Creamy rice and lentil porridge tempered with ghee, cashews, and black pepper.', price: '₹70', tags: [] },
      { name: 'Vada (4 pcs)', description: 'Crispy fried lentil donuts served with sambar and chutney.', price: '₹60', tags: [{ label: 'Popular', icon: Flame }] },
      { name: 'Upma', description: 'Savory semolina cooked with vegetables, curry leaves, and roasted nuts.', price: '₹55', tags: [] },
      { name: 'Poha', description: 'Flattened rice tempered with mustard seeds, turmeric, and fresh coriander.', price: '₹50', tags: [{ label: 'Light', icon: Leaf }] },
    ],
  },
  {
    id: 'meals',
    label: 'Meals',
    items: [
      { name: 'Full Meals (Unlimited)', description: 'Rice, sambar, rasam, two vegetable curries, papad, pickle, curd, and sweet. Unlimited servings.', price: '₹150', tags: [{ label: 'Bestseller', icon: Star }, { label: 'Unlimited', icon: Flame }] },
      { name: 'Mini Meals', description: 'Rice, sambar, one curry, papad, and curd. Perfect for a light lunch.', price: '₹100', tags: [] },
      { name: 'Special Meals', description: 'Full meals plus biryani, paneer butter masala, and gulab jamun.', price: '₹220', tags: [{ label: 'Chef Special', icon: Star }] },
      { name: 'Curd Rice', description: 'Cooling curd rice tempered with mustard seeds and pomegranate.', price: '₹70', tags: [{ label: 'Healthy', icon: Leaf }] },
      { name: 'Lemon Rice', description: 'Tangy rice with lemon juice, peanuts, and curry leaves.', price: '₹65', tags: [] },
      { name: 'Biryani', description: 'Fragrant basmati rice cooked with vegetables, saffron, and whole spices.', price: '₹140', tags: [{ label: 'Popular', icon: Flame }] },
    ],
  },
  {
    id: 'snacks',
    label: 'Snacks & Sweets',
    items: [
      { name: 'Bajji (6 pcs)', description: 'Crispy fritters made with besan and your choice of onion, potato, or chili.', price: '₹50', tags: [] },
      { name: 'Bonda (4 pcs)', description: 'Deep-fried potato dumplings in a golden besan coating.', price: '₹50', tags: [] },
      { name: 'Payasam', description: 'Traditional rice and milk dessert sweetened with jaggery and cardamom.', price: '₹45', tags: [{ label: 'Sweet', icon: Star }] },
      { name: 'Gulab Jamun (2 pcs)', description: 'Soft milk dumplings soaked in warm cardamom syrup.', price: '₹40', tags: [{ label: 'Popular', icon: Flame }] },
      { name: 'Filter Coffee', description: 'Authentic South Indian filter coffee served in a steel tumbler and dabara.', price: '₹30', tags: [{ label: 'Must Try', icon: Star }] },
      { name: 'Masala Chai', description: 'Aromatic tea brewed with ginger, cardamom, and clove.', price: '₹25', tags: [] },
    ],
  },
];

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="menu" className="relative overflow-hidden bg-slate-950 py-20 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-amber-600/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="reveal mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.25em] text-primary-400">What We Serve</span>
          <h2 className="font-serif text-3xl font-bold leading-tight text-white text-balance sm:text-4xl lg:text-5xl">
            Our Menu
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            From crispy dosas to hearty meals and sweet finishes — explore the flavors that keep our regulars coming back.
          </p>
        </div>

        {/* Tabs */}
        <div className="reveal mb-12 flex flex-wrap justify-center gap-3">
          {menu.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(idx)}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                activeTab === idx
                  ? 'bg-gradient-to-r from-primary-500 to-amber-600 text-white shadow-lg shadow-primary-600/30'
                  : 'border border-white/10 bg-white/5 text-slate-300 hover:border-primary-500/40 hover:text-primary-400'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Items */}
        <div className="grid gap-6 md:grid-cols-2">
          {menu[activeTab].items.map((item, idx) => (
            <div
              key={item.name}
              className="reveal group flex items-start gap-4 rounded-2xl border border-white/5 bg-slate-900/60 p-5 transition-all duration-300 hover:border-primary-500/30 hover:bg-slate-800/60"
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-primary-400">{item.name}</h3>
                  <div className="flex flex-1 items-center gap-2">
                    <span className="h-px flex-1 border-b border-dashed border-slate-600" />
                  </div>
                  <span className="font-serif text-lg font-bold text-primary-400">{item.price}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
                {item.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag.label}
                        className="inline-flex items-center gap-1 rounded-full bg-primary-500/10 px-3 py-1 text-xs font-medium text-primary-400"
                      >
                        <tag.icon className="h-3 w-3" />
                        {tag.label}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="reveal mt-12 text-center">
          <p className="text-sm text-slate-500">
            Prices are inclusive of all taxes. Unlimited meals include free refills of rice, sambar, and rasam.
          </p>
        </div>
      </div>
    </section>
  );
}
