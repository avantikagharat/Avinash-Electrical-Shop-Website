import { Star } from 'lucide-react';

export default function StarRating({ value = 5 }: { value?: number }) {
  return (
    <div className="flex gap-0.5 text-gold-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < value ? 'fill-gold-400' : 'fill-none text-ink-300'}`}
        />
      ))}
    </div>
  );
}
