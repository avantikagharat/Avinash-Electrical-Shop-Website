import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, BatteryCharging, Car, CheckCircle2, Filter, Mail, Phone, Server, Sun, Wrench, Zap } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { categories, shopInfo } from '@/lib/catalog';

const icons = { Zap, BatteryCharging, Sun, Server, Car, Wrench };

export default function CategoryPage() {
  const { categoryId } = useParams();
  const category = categories.find((c) => c.id === categoryId) ?? categories[0];
  const [brand, setBrand] = useState('All brands');
  const [query, setQuery] = useState('');
  const Icon = icons[category.icon];
  const products = useMemo(() => category.products.filter((p) => (brand === 'All brands' || p.brand === brand) && `${p.name} ${p.brand} ${p.capacity}`.toLowerCase().includes(query.toLowerCase())), [brand, category.products, query]);

  return (
    <main>
      <PageHeader eyebrow="Product range" title={category.title} subtitle={category.tagline} crumbs={[{ label: 'Home', to: '/' }, { label: 'Products', to: '/products' }, { label: category.title }]} />
      <section className="container-page py-14 md:py-20">
        <div className="grid gap-8 rounded-3xl bg-white p-5 shadow-card md:grid-cols-[1fr_1.1fr] md:p-8">
          <div className="h-64 w-full overflow-hidden rounded-2xl md:h-full">
            <img src={category.image} alt={category.title} className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600"><Icon className="h-6 w-6" /></span>
            <h2 className="mt-5 font-display text-3xl font-extrabold text-ink-900">{category.tagline}</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-600">{category.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">{category.brands.map((b)=><span key={b} className="rounded-full border border-ink-200 px-3 py-1.5 text-xs font-bold text-ink-600">{b}</span>)}</div>
            <Link to="/contact" className="btn-primary mt-7 w-fit">Ask for a quote <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="container-page py-14 md:py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-eyebrow"><span className="h-px w-8 bg-brand-500" /> Browse the range</p>
              <h2 className="section-title mt-2">Find your fit.</h2>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <label className="sr-only" htmlFor="product-search">Search products</label>
              <input id="product-search" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search products" className="rounded-full border border-ink-200 px-4 py-2.5 text-sm outline-none focus:border-brand-500" />
              <label className="sr-only" htmlFor="brand-filter">Filter by brand</label>
              <div className="relative">
                <Filter className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-ink-400" />
                <select id="brand-filter" value={brand} onChange={(e)=>setBrand(e.target.value)} className="appearance-none rounded-full border border-ink-200 bg-white py-2.5 pl-9 pr-8 text-sm font-semibold text-ink-700 outline-none focus:border-brand-500">
                  <option>All brands</option>
                  {category.brands.map((b)=><option key={b}>{b}</option>)}
                </select>
              </div>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p)=>
              <article key={p.id} className="card relative flex flex-col overflow-hidden transition hover:-translate-y-1 hover:border-brand-200">
                <div className="h-52 w-full shrink-0 overflow-hidden bg-ink-50">
                  <img src={p.image} alt={`${p.brand} ${p.name}`} className="h-full w-full object-cover transition duration-300 hover:scale-105" />
                </div>
                <div className="relative flex flex-1 flex-col p-5">
                  {p.badge && <span className="absolute right-5 top-5 rounded-full bg-gold-100 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-gold-800">{p.badge}</span>}
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-600">{p.brand}</p>
                  <h3 className="mt-2 pr-20 font-display text-xl font-bold text-ink-900">{p.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-ink-500">{p.capacity} <span className="mx-1 text-ink-300">•</span> {p.warranty} warranty</p>
                  <div className="mt-5 space-y-2">
                    {p.highlights.map((h)=><div key={h} className="flex items-start gap-1.5 text-xs text-ink-600"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" /> {h}</div>)}
                  </div>
                  <div className="mt-5 border-t border-ink-100 pt-4">
                    <p className="text-xs leading-relaxed text-ink-500">Ideal for: <span className="font-semibold text-ink-700">{p.idealFor}</span></p>
                    <Link to="/contact" className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-brand-600">Enquire <ArrowRight className="h-3.5 w-3.5" /></Link>
                  </div>
                </div>
              </article>
            )}
          </div>
          {products.length===0 && <div className="rounded-2xl bg-ink-50 p-10 text-center text-ink-500">No products match that filter. Try another brand or search.</div>}
        </div>
      </section>
      <section className="container-page py-16">
        <div className="rounded-2xl bg-ink-950 p-7 text-white md:flex md:items-center md:justify-between md:p-10">
          <div>
            <h2 className="font-display text-3xl font-extrabold">Need help choosing?</h2>
            <p className="mt-2 text-sm text-ink-300">Call us for honest advice on the right {category.title.toLowerCase()} for your load.</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 md:mt-0">
            <a href={`tel:${shopInfo.phone.replace(/\s/g,'')}`} className="btn-gold"><Phone className="h-4 w-4" /> Call now</a>
            <a href={`mailto:${shopInfo.email}`} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"><Mail className="h-4 w-4" /> Email</a>
          </div>
        </div>
      </section>
    </main>
  );
}
