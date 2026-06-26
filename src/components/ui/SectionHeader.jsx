import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function SectionHeader({ id, title }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="mb-12">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-5 h-5 border border-(--color-border-dark) flex items-center justify-center">
          <ArrowUpRight size={10} className="text-(--color-ink)" strokeWidth={2.5} />
        </div>
        <span className="font-mono text-[10px] tracking-[0.25em] text-(--color-ink-muted) uppercase">
          {id}
        </span>
        <div className="h-px flex-1 bg-(--color-border) ml-2" />
      </div>

      <motion.h2
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={isInView ? { clipPath: 'inset(0 0% 0 0)' } : { clipPath: 'inset(0 100% 0 0)' }}
        transition={{ duration: 0.65, ease: [0.77, 0, 0.175, 1] }}
        className="font-display font-bold text-4xl md:text-5xl uppercase
                   tracking-tight text-(--color-ink) leading-none"
      >
        <span className="text-(--color-ink-muted) font-light">// </span>
        {title}
      </motion.h2>
    </div>
  );
}
