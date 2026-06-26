import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#hero',     label: 'Home'     },
  { href: '#about',    label: 'About'    },
  { href: '#skills',   label: 'Skills'   },
  { href: '#projects', label: 'Projects' },
  { href: '#contact',  label: 'Contact'  },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('hero');

  return (
    <>
      <button
        className="fixed top-4 left-4 z-50 md:hidden w-10 h-10 flex items-center
                   justify-center bg-(--color-surface) border border-(--color-border)"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <Menu size={18} className="text-(--color-ink)" strokeWidth={1.5} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-(--color-bg)"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.77, 0, 0.175, 1] }}
          >
            <div className="h-16 flex items-center justify-between px-6 border-b border-(--color-border)">
              <span className="font-display font-bold text-[15px] tracking-[0.12em]
                               uppercase text-(--color-ink)">
                SH<span style={{ color: 'var(--color-accent)' }}>.</span>
              </span>
              <button onClick={() => setOpen(false)} aria-label="Close menu"
                      className="w-8 h-8 flex items-center justify-center">
                <X size={18} className="text-(--color-ink)" strokeWidth={1.5} />
              </button>
            </div>

            <ul className="flex flex-col mt-2">
              {links.map((link, i) => {
                const isActive = activeLink === link.href.slice(1);
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.1 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => { setOpen(false); setActiveLink(link.href.slice(1)); }}
                      className="flex items-center justify-between px-6 py-4
                                 font-display font-medium text-[15px] tracking-[0.05em]
                                 border-b border-(--color-border) transition-colors duration-150"
                      style={{
                        background: isActive ? 'var(--color-accent)' : 'var(--color-bg-alt)',
                        color: isActive ? 'var(--color-on-accent)' : 'var(--color-ink)',
                      }}
                    >
                      <span>{link.label}</span>
                      <span className="font-mono text-[11px] text-(--color-ink-muted)">›</span>
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
