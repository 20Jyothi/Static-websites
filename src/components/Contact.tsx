import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, label: 'Visit Us', value: '42 Temple Street, Mylapore, Chennai, Tamil Nadu 600004' },
  { icon: Phone, label: 'Call Us', value: '+91 98410 12345' },
  { icon: Mail, label: 'Email Us', value: 'hello@sriramachandramess.com' },
  { icon: Clock, label: 'Open Hours', value: 'Mon–Sun: 7:00 AM – 10:30 PM' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-slate-950 py-20 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-primary-600/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.25em] text-primary-400">Get In Touch</span>
          <h2 className="font-serif text-3xl font-bold leading-tight text-white text-balance sm:text-4xl lg:text-5xl">
            Visit or Reserve Your Table
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            Drop by for a meal, give us a call, or send us a message. We would love to serve you.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Contact info */}
          <div className="reveal space-y-5">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="group flex items-start gap-3 rounded-2xl border border-white/5 bg-slate-900/60 p-5 transition-all duration-300 hover:border-primary-500/30 hover:bg-slate-800/60 sm:p-6"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-500/10 text-primary-400 transition-all group-hover:bg-primary-500 group-hover:text-white">
                  <info.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">{info.label}</h3>
                  <p className="mt-1 text-base leading-relaxed text-white">{info.value}</p>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="overflow-hidden rounded-2xl border border-white/5">
              <iframe
                title="Location map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=80.2670%2C13.0250%2C80.2810%2C13.0330&layer=mapnik&marker=13.0290%2C80.2740"
                className="h-56 w-full grayscale contrast-125"
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <div className="reveal">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/5 bg-slate-900/60 p-6 lg:p-10"
            >
              <h3 className="mb-6 font-serif text-2xl font-bold text-white">Send Us a Message</h3>

              <div className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border border-white/10 bg-slate-800/60 px-4 py-3 text-white placeholder-slate-500 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">Phone</label>
                    <input
                      type="tel"
                      required
                      placeholder="Your phone"
                      className="w-full rounded-xl border border-white/10 bg-slate-800/60 px-4 py-3 text-white placeholder-slate-500 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="you@email.com"
                    className="w-full rounded-xl border border-white/10 bg-slate-800/60 px-4 py-3 text-white placeholder-slate-500 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us how we can help..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-slate-800/60 px-4 py-3 text-white placeholder-slate-500 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitted}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-amber-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-primary-600/30 transition-all hover:scale-[1.02] hover:shadow-primary-600/50 disabled:opacity-70"
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 className="h-5 w-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
