import { useState, useEffect } from 'react';
import {
  Home, User, Layers, FolderOpen, Mail
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const navItems = [
  { id: 'hero',     icon: Home,       label: 'HOME'     },
  { id: 'about',    icon: User,       label: 'ABOUT'    },
  { id: 'skills',   icon: Layers,     label: 'SKILLS'   },
  { id: 'projects', icon: FolderOpen, label: 'PROJECTS' },
  { id: 'contact',  icon: Mail,       label: 'CONTACT'  },
];

export function SideNav() {
  const [active, setActive] = useState('hero');

  // Track scroll position to update active item
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="hidden md:flex fixed left-0 top-0 h-screen w-14 hover:w-56 bg-(--color-bg) border-r border-(--color-border)
                 flex-col z-50 select-none group transition-[width] duration-300 ease-in-out overflow-hidden shadow-[4px_0_24px_rgba(0,0,0,0.02)]"
      aria-label="Site navigation"
    >
      {/* Wordmark */}
      <div className="h-14 w-full flex items-center justify-start border-b border-(--color-border) bg-(--color-bg)">
        <div className="w-14 min-w-[56px] flex justify-center items-center">
          <span className="font-display font-bold text-[13px] tracking-[0.1em] text-(--color-ink)">
            SH
          </span>
        </div>
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 font-display font-bold text-[13px] tracking-[0.1em] text-(--color-ink) whitespace-nowrap pl-2">
          DEVELOPER
        </span>
      </div>

      {/* Nav items */}
      <div className="flex flex-col flex-1 w-full mt-2">
        {navItems.map(({ id, icon: Icon, label }) => {
          const isActive = active === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              aria-label={label}
              aria-current={isActive ? 'page' : undefined}
              className="flex items-center w-full h-14 transition-colors duration-150 relative hover:bg-black/5"
              style={{
                background: isActive ? 'rgba(0,0,0,0.05)' : 'transparent',
              }}
            >
              {/* Active left border */}
              {isActive && (
                <div className="absolute left-0 top-0 h-full w-1 bg-(--color-ink)" />
              )}

              <div className="w-14 min-w-[56px] flex justify-center items-center">
                <Icon
                  size={18}
                  strokeWidth={isActive ? 2.5 : 1.5}
                  color={isActive ? 'var(--color-ink)' : '#A0AAA9'}
                  className="transition-colors duration-150"
                />
              </div>

              <span className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-display text-[13px] whitespace-nowrap pl-2 tracking-wide ${isActive ? 'font-semibold text-(--color-ink)' : 'font-medium text-(--color-ink-secondary)'}`}>
                {label}
              </span>
            </a>
          );
        })}
      </div>

      {/* Bottom utilities */}
      <div className="border-t border-(--color-border) w-full bg-(--color-bg)">
        <a href="https://github.com/Shahriar1638" target="_blank" rel="noopener noreferrer"
           aria-label="GitHub"
           className="flex items-center w-full h-12 hover:bg-black/5 transition-colors duration-150">
          <div className="w-14 min-w-[56px] flex justify-center items-center">
             <FaGithub size={16} color="#A0AAA9" />
          </div>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-display font-medium text-[13px] text-(--color-ink-secondary) whitespace-nowrap pl-2 tracking-wide">
             GitHub
          </span>
        </a>
        <a href="#contact" aria-label="Email"
           className="flex items-center w-full h-12 hover:bg-black/5 transition-colors duration-150">
          <div className="w-14 min-w-[56px] flex justify-center items-center">
             <Mail size={16} strokeWidth={1.5} color="#A0AAA9" />
          </div>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-display font-medium text-[13px] text-(--color-ink-secondary) whitespace-nowrap pl-2 tracking-wide">
             Contact
          </span>
        </a>
      </div>
    </nav>
  );
}
