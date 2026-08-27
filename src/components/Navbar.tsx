import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Zap } from 'lucide-react';
import { shopInfo } from '@/lib/catalog';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-950/95 shadow-card backdrop-blur'
          : 'bg-ink-950/80 backdrop-blur'
      }`}
    >
      {/* top bar */}
      <div className="hidden border-b border-white/10 bg-ink-950 text-ink-200 md:block">
        <div className="container-page flex h-9 items-center justify-between text-xs">
          <p className="tracking-wide">
            Old Panvel, Navi Mumbai &middot; {shopInfo.hours[0].day} {shopInfo.hours[0].time}
          </p>
          <a
            href={`tel:${shopInfo.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 font-semibold text-gold-400 transition hover:text-gold-300"
          >
            <Phone className="h-3.5 w-3.5" /> {shopInfo.phone}
          </a>
        </div>
      </div>

      <nav className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-soft">
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
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-semibold transition ${
                    isActive
                      ? 'bg-white/10 text-white'
                      : 'text-ink-200 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link to="/contact" className="btn-gold">
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* mobile menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-ink-950 transition-all duration-300 md:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="container-page flex flex-col gap-1 py-4">
          {navLinks.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `block rounded-lg px-4 py-3 text-sm font-semibold transition ${
                    isActive
                      ? 'bg-white/10 text-white'
                      : 'text-ink-200 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li className="mt-2">
            <Link to="/contact" className="btn-gold w-full">
              Get a Quote
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
