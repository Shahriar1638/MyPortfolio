import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = ['About', 'Skills', 'Projects', 'Contact'];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50 h-14 bg-(--color-surface)/80 backdrop-blur-sm
                      border-b border-(--color-border)">
        {/* Yellow top accent line */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-(--color-accent)" />

        <div className="max-w-screen-xl mx-auto px-6 lg:px-12 h-full flex items-center justify-between">
          <span className="font-display font-bold text-[18px] tracking-[0.15em] uppercase
                           text-(--color-text-primary)">
            SH<span className="text-(--color-accent)">.</span>
          </span>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`}
                   className="group font-display text-[11px] tracking-[0.2em] uppercase
                              text-(--color-text-secondary) hover:text-(--color-text-primary) transition-colors
                              relative block py-4">
                  {link}
                  <span className="absolute bottom-[14px] left-0 h-[1px] bg-(--color-accent)
                                   w-0 group-hover:w-full transition-[width] duration-300
                                   ease-out" />
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button className="md:hidden w-8 h-8 flex flex-col justify-center gap-[6px] 
                             cursor-none outline-none relative z-[70]"
                  onClick={() => setOpen(!open)}
                  aria-label="Toggle menu">
            <motion.span
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="h-[1px] w-full bg-(--color-accent) origin-center transition-all"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="h-[1px] w-2/3 bg-(--color-accent) transition-all"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -7, w: '100%' } : { rotate: 0, y: 0, w: '33%' }}
              className="h-[1px] flex self-start bg-(--color-accent) origin-center transition-all"
              style={{ width: open ? '100%' : '33%' }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-(--color-bg) flex flex-col px-8 pt-24"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.77, 0, 0.175, 1] }}
          >
            {/* Yellow left accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-(--color-accent)" />

            <ul className="flex flex-col gap-8">
              {links.map((link, i) => (
                <motion.li key={link}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.2, ease: 'easeOut' }}>
                  <a href={`#${link.toLowerCase()}`}
                     onClick={() => setOpen(false)}
                     className="font-display font-semibold text-[36px] uppercase
                                tracking-tight text-(--color-text-primary) hover:text-(--color-accent)
                                transition-colors block border-b border-(--color-border) pb-2">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
