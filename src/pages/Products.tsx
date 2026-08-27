import { Link } from 'react-router-dom';
import { ArrowRight, BatteryCharging, Car, Server, Sun, Wrench, Zap } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { categories } from '@/lib/catalog';

const icons = { Zap, BatteryCharging, Sun, Server, Car, Wrench };

export default function Products() {
  return (
    <main>
      <PageHeader eyebrow="Our catalogue" title="Power products for every need." subtitle="From a single home inverter to a complete commercial power system, find genuine products from brands you can trust." crumbs={[{ label: 'Home', to: '/' }, { label: 'Products' }]} />
      <section className="container-page py-20 md:py-28"><div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">{categories.map((c) => { const Icon = icons[c.icon]; return <Link key={c.id} to={`/products/${c.id}`} className="group card overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card"><div className="relative h-56 w-full overflow-hidden"><img src={c.image} alt={c.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 to-transparent" /><div className="absolute bottom-5 left-5 flex items-center gap-3 text-white"><span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600"><Icon className="h-5 w-5" /></span><h2 className="font-display text-2xl font-bold">{c.title}</h2></div></div><div className="p-6"><p className="text-sm leading-relaxed text-ink-500">{c.description}</p><div className="mt-5 flex flex-wrap gap-2">{c.brands.slice(0,4).map((brand)=><span key={brand} className="rounded-full bg-ink-50 px-3 py-1 text-xs font-semibold text-ink-600">{brand}</span>)}</div><span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-600 transition group-hover:gap-3">View products <ArrowRight className="h-4 w-4" /></span></div></Link>})}</div></section>
      <section className="bg-brand-50"><div className="container-page flex flex-col items-start justify-between gap-5 py-14 md:flex-row md:items-center"><div><h2 className="font-display text-3xl font-extrabold text-ink-900">Not sure what you need?</h2><p className="mt-2 text-sm text-ink-600">Share your appliances and usage. We will size the right system for free.</p></div><Link to="/contact" className="btn-primary">Get expert advice <ArrowRight className="h-4 w-4" /></Link></div></section>
    </main>
  );
}
