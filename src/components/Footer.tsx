import { Link } from 'react-router-dom';
import {
  Zap,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Send,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { shopInfo, categories } from '@/lib/catalog';

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-200">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
              <Zap className="h-5 w-5" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg font-extrabold tracking-wide text-white">
                AVINASH
              </span>
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gold-400">
                Electricals
              </span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink-300">
            {shopInfo.tagline}. Your trusted multi-brand distributor for inverters, batteries,
            solar and electrical works in Navi Mumbai.
          </p>
          {/* <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social link"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/5 text-ink-200 transition hover:bg-brand-600 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div> */}

       

    <div className="mt-5 flex gap-3">
  {[
    { Icon: Facebook, label: "Facebook", href: "https://facebook.com/yourpage" },
    { Icon: Instagram, label: "Instagram", href: "https://instagram.com/yourpage" },
    { Icon: Youtube, label: "YouTube", href: "https://youtube.com/yourchannel" },
    { Icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/919820578409" },
  ].map(({ Icon, label, href }) => (
    <a
      key={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-full bg-white/5 text-ink-200 transition hover:bg-brand-600 hover:text-white"
    >
      <Icon className="h-4 w-4" />
    </a>
  ))}
</div>  
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">
            Products
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {categories.map((c) => (
              <li key={c.id}>
                <Link
                  to={`/products/${c.id}`}
                  className="text-ink-300 transition hover:text-gold-400"
                >
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">
            Company
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link to="/about" className="text-ink-300 transition hover:text-gold-400">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-ink-300 transition hover:text-gold-400">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-ink-300 transition hover:text-gold-400">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-ink-300 transition hover:text-gold-400">
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">
            Reach Us
          </h4>
          <ul className="mt-4 space-y-3.5 text-sm text-ink-300">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>{shopInfo.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <a href={`tel:${shopInfo.phone.replace(/\s/g, '')}`} className="hover:text-white">
                {shopInfo.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <a href={`mailto:${shopInfo.email}`} className="hover:text-white">
                {shopInfo.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>
                {shopInfo.hours.map((h) => (
                  <span key={h.day} className="block">
                    {h.day}: {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
          <a
            href={`mailto:${shopInfo.email}`}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold text-white transition hover:bg-brand-600"
          >
            <Send className="h-3.5 w-3.5" /> Email Us
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-ink-400 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {shopInfo.name}. All rights reserved.
          </p>
          <p>GSTIN: 27**********1Z5 &middot; Licensed Electrical Contractor</p>
        </div>
      </div>
    </footer>
  );
}
