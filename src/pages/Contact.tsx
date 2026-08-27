import { FormEvent, useState } from 'react';
import { CheckCircle2, Clock, Mail, MapPin, MessageSquare, Phone, Send } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { shopInfo } from '@/lib/catalog';
import { supabase } from '@/lib/supabase';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialForm: ContactForm = { name: '', email: '', phone: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const update = (key: keyof ContactForm, value: string) => setForm((current) => ({ ...current, [key]: value }));

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    setError('');
    const { error: insertError } = await supabase.from('contact_inquiries').insert(form);
    setSending(false);
    if (insertError) {
      setError('We could not send your message right now. Please call us directly and we will help you.');
      return;
    }
    setForm(initialForm);
    setSubmitted(true);
  };

  return (
    <main>
      <PageHeader eyebrow="Let's talk power" title="Tell us what you need." subtitle="Whether you need a quote, product advice or a quick service visit, our team is ready to help." crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />
      <section className="container-page grid gap-10 py-20 md:grid-cols-[0.8fr_1.2fr] md:py-28"><div><p className="section-eyebrow"><span className="h-px w-8 bg-brand-500" /> Get in touch</p><h2 className="section-title mt-3">Your power questions, answered.</h2><p className="mt-5 text-base leading-relaxed text-ink-600">Visit our store, call us or send a message. Tell us about your appliances, load or project and we will recommend a practical solution.</p><div className="mt-8 space-y-5">{[{icon: MapPin,title:'Visit our store',value:shopInfo.address},{icon:Phone,title:'Call us',value:`${shopInfo.phone} / ${shopInfo.phoneAlt}`},{icon:Mail,title:'Email us',value:shopInfo.email},{icon:Clock,title:'Opening hours',value:shopInfo.hours.map((h)=>`${h.day}: ${h.time}`).join(' | ')}].map(({icon:Icon,title,value})=><div key={title} className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600"><Icon className="h-5 w-5" /></span><div><p className="text-xs font-bold uppercase tracking-wider text-ink-400">{title}</p><p className="mt-1 text-sm leading-relaxed text-ink-700">{value}</p></div></div>)}</div><div className="mt-8 overflow-hidden rounded-2xl border border-ink-100"><iframe title="Avinash Electricals map" src={`https://www.google.com/maps?q=${encodeURIComponent(shopInfo.mapQuery)}&output=embed`} className="h-64 w-full border-0" loading="lazy" /></div></div><div className="card p-6 md:p-8">{submitted ? <div className="flex min-h-[480px] flex-col items-center justify-center text-center"><span className="grid h-16 w-16 place-items-center rounded-full bg-success-soft text-success"><CheckCircle2 className="h-8 w-8" /></span><h2 className="mt-6 font-display text-3xl font-extrabold text-ink-900">Message received.</h2><p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-500">Thank you for reaching out. Our team will call you back shortly during business hours.</p><button type="button" onClick={()=>setSubmitted(false)} className="btn-outline mt-7">Send another message</button></div> : <><div className="flex items-start justify-between gap-4"><div><p className="section-eyebrow"><MessageSquare className="h-4 w-4" /> Enquiry form</p><h2 className="mt-2 font-display text-3xl font-extrabold text-ink-900">How can we help?</h2></div><span className="hidden rounded-full bg-brand-50 px-3 py-1.5 text-xs font-bold text-brand-700 sm:inline-flex">Replies within 1 business day</span></div><form onSubmit={submit} className="mt-7 space-y-5"><div className="grid gap-5 sm:grid-cols-2"><label className="block"><span className="mb-2 block text-sm font-semibold text-ink-700">Your name *</span><input required value={form.name} onChange={(e)=>update('name',e.target.value)} className="w-full rounded-xl border border-ink-200 px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" placeholder="Rajesh Sharma" /></label><label className="block"><span className="mb-2 block text-sm font-semibold text-ink-700">Email address *</span><input required type="email" value={form.email} onChange={(e)=>update('email',e.target.value)} className="w-full rounded-xl border border-ink-200 px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" placeholder="rajesh@example.com" /></label></div><div className="grid gap-5 sm:grid-cols-2"><label className="block"><span className="mb-2 block text-sm font-semibold text-ink-700">Phone number</span><input value={form.phone} onChange={(e)=>update('phone',e.target.value)} className="w-full rounded-xl border border-ink-200 px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" placeholder="98765 43210" /></label><label className="block"><span className="mb-2 block text-sm font-semibold text-ink-700">What do you need?</span><select value={form.subject} onChange={(e)=>update('subject',e.target.value)} className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"><option value="">Select a service</option><option>Inverter / Home UPS</option><option>Battery</option><option>Solar system</option><option>Car battery</option><option>Online UPS</option><option>Electrical works</option><option>Other</option></select></label></div><label className="block"><span className="mb-2 block text-sm font-semibold text-ink-700">Tell us more *</span><textarea required value={form.message} onChange={(e)=>update('message',e.target.value)} rows={5} className="w-full resize-none rounded-xl border border-ink-200 px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" placeholder="What appliances do you need to run? Or tell us about your project..." /></label>{error && <p className="rounded-xl bg-error-soft px-4 py-3 text-sm font-semibold text-error">{error}</p>}<button disabled={sending} type="submit" className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60">{sending ? 'Sending message...' : 'Send enquiry'} {!sending && <Send className="h-4 w-4" />}</button><p className="text-center text-xs text-ink-400">Your details are used only to respond to your enquiry.</p></form></>}</div></section>
    </main>
  );
}
