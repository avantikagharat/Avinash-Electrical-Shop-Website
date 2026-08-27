import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Crumb {
  label: string;
  to?: string;
}

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(circle_at_20%_20%,#3385fc,transparent_40%),radial-gradient(circle_at_80%_60%,#fbbf24,transparent_35%)]" />
      <div className="container-page relative py-14 md:py-20">
        {crumbs && (
          <nav className="mb-4 flex flex-wrap items-center gap-1.5 text-xs text-ink-300">
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {c.to ? (
                  <Link to={c.to} className="transition hover:text-gold-400">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <ChevronRight className="h-3 w-3 text-ink-500" />}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <p className="section-eyebrow text-gold-400">{eyebrow}</p>
        )}
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold leading-tight md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-200 md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
