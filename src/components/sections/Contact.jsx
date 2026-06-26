import { SectionHeader } from '../ui/SectionHeader';

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-screen-xl mx-auto h-[80vh] flex flex-col justify-center">
      <SectionHeader id="SYS-04" title="GET IN TOUCH" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
        {/* Data readout & links left-aligned */}
        <div className="lg:col-span-8 flex flex-col justify-start">
           <div className="mb-8">
               <p className="font-mono text-[12px] text-(--color-ink) tracking-widest uppercase mb-2">
                  REACH OUT <span className="blink" />
               </p>
              {/* Decorative line */}
              <div className="flex gap-2 items-center opacity-40">
                 <div className="h-px bg-(--color-ink) w-4" />
                 <div className="h-[2px] bg-(--color-ink) w-8" />
                 <div className="h-px bg-(--color-ink) flex-1" />
              </div>
           </div>

           <div className="space-y-0">
               {[
                   { label: 'EMAIL', url: 'shafim1638@gmail.com', icon: '→', prefix: 'mailto:' },
                   { label: 'LINKEDIN', url: 'linkedin.com/in/md-shahriar-hossain-58b80a281', icon: '↗', prefix: 'https://' },
                   { label: 'GITHUB', url: 'github.com/Shahriar1638', icon: '↗', prefix: 'https://' },
                   { label: 'X (TWITTER)', url: 'x.com/Shahriar1638', icon: '↗', prefix: 'https://' },
                   { label: 'WHATSAPP', url: 'wa.me/8801906127394', icon: '↗', prefix: 'https://' },
                   { label: 'FACEBOOK', url: 'facebook.com/mdshahriarhossain.shafim', icon: '↗', prefix: 'https://' },
               ].map((item) => (
                   <a key={item.label} href={`${item.prefix}${item.url}`} target="_blank" rel="noreferrer"
                      className="group flex flex-col md:flex-row md:items-center justify-between border-b border-(--color-border) py-4
                                 hover:border-(--color-ink) transition-colors">
                      <div className="flex items-center gap-4">
                         <span className="font-mono text-(--color-ink-muted) group-hover:text-(--color-ink) transition-colors">
                            {item.icon}
                         </span>
                         <span className="font-display font-medium text-[14px] text-(--color-ink) uppercase tracking-widest">
                            {item.label}
                         </span>
                      </div>
                      <span className="font-mono text-[11px] text-(--color-ink-secondary) group-hover:text-(--color-ink) transition-colors mt-2 md:mt-0">
                         {item.url}
                      </span>
                   </a>
               ))}
           </div>
        </div>
      </div>
    </section>
  );
}
