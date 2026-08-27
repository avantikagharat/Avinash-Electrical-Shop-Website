import { Link } from 'react-router-dom';
import { ArrowRight, BatteryCharging, Car, CheckCircle2, ChevronRight, Clock3, Server, ShieldCheck, Sun, Truck, Users, Wrench, Zap } from 'lucide-react';
import { categories, services, shopInfo, stats, testimonials } from '@/lib/catalog';
import StarRating from '@/components/StarRating';

const iconMap = { Zap, BatteryCharging, Sun, ShieldCheck, Truck, Wrench, Car, Server };

export default function Home() {
  return (
    <main>
      <section className="relative min-h-[600px] overflow-hidden bg-ink-950 text-white">
        <img
          src="/images/hero/hero-solar.jpg"
          alt="Solar panels under a blue sky"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,17,32,0.98)_0%,rgba(10,17,32,0.86)_42%,rgba(10,17,32,0.35)_100%)]" />
        <div className="container-page relative flex min-h-[600px] items-center py-20">
          <div className="max-w-2xl animate-fade-up">
            <div className="section-eyebrow text-gold-400">
              <span className="h-px w-8 bg-gold-400" /> Trusted since 1985
            </div>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
              Power that keeps
              <span className="block text-brand-400">life moving.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-200 sm:text-lg">
              Inverters, batteries, solar panels, online UPS and expert electrical works —
              everything your home or business needs for dependable power.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/products" className="btn-gold">
                Explore Products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10">
                Talk to an Expert
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm text-ink-200">
              {['Authorized distributor', 'Same-day installation', 'Genuine products'].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-gold-400" /> {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-ink-50 to-transparent" />
      </section>

      <section className="relative z-10 -mt-2 border-b border-ink-100 bg-white">
        <div className="container-page grid grid-cols-2 divide-x divide-ink-100 py-7 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="px-4 text-center first:pl-0 last:pr-0">
              <p className="font-display text-3xl font-extrabold text-brand-700 md:text-4xl">{stat.value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-ink-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="section-eyebrow"><span className="h-px w-8 bg-brand-500" /> What we offer</p>
            <h2 className="section-title mt-3">Power solutions,
              <span className="text-brand-600"> made simple.</span>
            </h2>
          </div>
          <Link to="/products" className="btn-outline shrink-0">View all products <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = iconMap[category.icon];
            return (
              <Link to={`/products/${category.id}`} key={category.id} className="group card overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-card">
                <div className="relative h-44 w-full overflow-hidden">
                  <img src={category.image} alt={category.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/75 via-ink-950/10 to-transparent" />
                  <span className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-xl bg-white/90 text-brand-700 shadow-soft"><Icon className="h-5 w-5" /></span>
                  <span className="absolute bottom-4 left-4 text-xs font-bold uppercase tracking-widest text-gold-300">0{index + 1}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-bold text-ink-900">{category.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{category.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-600 transition group-hover:gap-2">Explore range <ChevronRight className="h-4 w-4" /></span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-white">
        <div className="container-page grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl border-2 border-gold-300" />
            <div className="relative z-10 h-[420px] w-full overflow-hidden rounded-2xl shadow-card">
              <img src="/images/products/svc-3.jpg" alt="Electrician working on an electrical panel" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-4 z-20 rounded-2xl bg-ink-950 px-6 py-5 text-white shadow-card sm:-right-6">
              <p className="font-display text-4xl font-extrabold text-gold-400">40+</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-300">Years of trust</p>
            </div>
          </div>
          <div>
            <p className="section-eyebrow"><span className="h-px w-8 bg-brand-500" /> About Avinash Electricals</p>
            <h2 className="section-title mt-3">Built on trust.
              <span className="block text-brand-600">Powered by expertise.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-600">What started as a small electrical shop in Old Panvel in 1985 has grown into one of Navi Mumbai's most trusted power solution partners. We bring genuine products, honest advice and skilled installation to every job.</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {['Authorized multi-brand distributor', 'Licensed electrical contractors', 'Free site survey & load check', 'After-sales support that stays'].map((item) => <div key={item} className="flex gap-2 text-sm font-semibold text-ink-700"><CheckCircle2 className="h-5 w-5 shrink-0 text-success" /> {item}</div>)}
            </div>
            <Link to="/about" className="btn-primary mt-8">Our story <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <div className="text-center"><p className="section-eyebrow justify-center"><span className="h-px w-8 bg-brand-500" /> Why choose us <span className="h-px w-8 bg-brand-500" /></p><h2 className="section-title mt-3">The Avinash difference.</h2><p className="mx-auto mt-4 max-w-2xl text-ink-500">Power equipment is an investment. We make sure you get the right product, the right installation and support long after the sale.</p></div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: ShieldCheck, title: 'Genuine products', desc: 'Only authorized, warranty-backed products from brands you can trust.' },
            { icon: Users, title: 'Expert guidance', desc: 'We calculate your load and recommend what actually fits your needs.' },
            { icon: Wrench, title: 'Skilled installation', desc: 'Trained electricians who care about safe, neat and lasting work.' },
            { icon: Clock3, title: 'Fast service', desc: 'Same-day delivery and quick response across Navi Mumbai.' },
          ].map(({ icon: Icon, title, desc }) => <div key={title} className="card p-6 transition hover:-translate-y-1 hover:border-brand-200"><div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600"><Icon className="h-6 w-6" /></div><h3 className="mt-5 font-display text-xl font-bold text-ink-900">{title}</h3><p className="mt-2 text-sm leading-relaxed text-ink-500">{desc}</p></div>)}
        </div>
      </section>

      <section className="overflow-hidden bg-ink-950 py-20 text-white md:py-24">
        <div className="container-page"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="section-eyebrow text-gold-400"><span className="h-px w-8 bg-gold-400" /> Customer stories</p><h2 className="mt-3 font-display text-4xl font-extrabold">Powering peace of mind.</h2></div><Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-gold-400 transition hover:text-gold-300">Become our next happy customer <ArrowRight className="h-4 w-4" /></Link></div><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{testimonials.map((t) => <div key={t.name} className="rounded-2xl border border-white/10 bg-white/5 p-5"><StarRating value={t.rating} /><p className="mt-4 text-sm leading-relaxed text-ink-200">“{t.quote}”</p><div className="mt-5 border-t border-white/10 pt-4"><p className="text-sm font-bold text-white">{t.name}</p><p className="mt-0.5 text-xs text-ink-400">{t.role}</p></div></div>)}</div></div>
      </section>

      <section className="bg-brand-600 text-white">
        <div className="container-page flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center"><div><p className="font-display text-3xl font-extrabold">Need help choosing the right power solution?</p><p className="mt-2 text-sm text-brand-100">Tell us your load, and our experts will recommend the perfect setup.</p></div><Link to="/contact" className="btn-gold shrink-0">Get a free consultation <ArrowRight className="h-4 w-4" /></Link></div>
      </section>
    </main>
  );
}
