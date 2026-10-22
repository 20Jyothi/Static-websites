const images = [
  { src: 'https://images.pexels.com/photos/29148133/pexels-photo-29148133.jpeg?auto=compress&cs=tinysrgb&h=600&w=800', alt: 'Indian thali with naan and paneer curry', span: 'lg:col-span-2 lg:row-span-2' },
  { src: 'https://images.pexels.com/photos/20422132/pexels-photo-20422132.jpeg?auto=compress&cs=tinysrgb&h=400&w=600', alt: 'South Indian breakfast with vadai', span: '' },
  { src: 'https://images.pexels.com/photos/10464100/pexels-photo-10464100.jpeg?auto=compress&cs=tinysrgb&h=400&w=600', alt: 'Curry with rice on wooden table', span: '' },
  { src: 'https://images.pexels.com/photos/11638817/pexels-photo-11638817.jpeg?auto=compress&cs=tinysrgb&h=400&w=600', alt: 'Rice and curry on banana leaf', span: '' },
  { src: 'https://images.pexels.com/photos/38298124/pexels-photo-38298124.jpeg?auto=compress&cs=tinysrgb&h=400&w=600', alt: 'Spread of Indian cuisine', span: '' },
  { src: 'https://images.pexels.com/photos/39323513/pexels-photo-39323513.jpeg?auto=compress&cs=tinysrgb&h=400&w=600', alt: 'Authentic Indian thali with roti', span: 'lg:col-span-2' },
  { src: 'https://images.pexels.com/photos/35267286/pexels-photo-35267286.jpeg?auto=compress&cs=tinysrgb&h=400&w=600', alt: 'Jeera rice with chutney and yogurt', span: '' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-slate-950 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.25em] text-primary-400">A Feast for the Eyes</span>
          <h2 className="font-serif text-3xl font-bold leading-tight text-white text-balance sm:text-4xl lg:text-5xl">
            Our Gallery
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            A glimpse of the colorful, aromatic dishes that come out of our kitchen every day.
          </p>
        </div>

        <div className="grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:gap-4 lg:grid-cols-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`reveal group relative cursor-pointer overflow-hidden rounded-2xl ${img.span}`}
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-4 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm font-medium text-white">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
