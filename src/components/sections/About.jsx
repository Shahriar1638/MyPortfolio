import { SectionHeader } from '../ui/SectionHeader';

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-screen-xl mx-auto">
      <SectionHeader id="SYS-01" title="ABOUT ME" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 relative">
        {/* Left column: Bio */}
        <div className="lg:col-span-6 relative z-10 flex flex-col justify-center">
           <p className="font-display font-light text-[14px] leading-relaxed text-(--color-ink-secondary) mb-8 max-w-lg text-justify">
             I'm a <strong className="text-(--color-ink) font-medium">Software Engineer</strong> who enjoys building clean, scalable, and reliable applications across the full stack. I have strong experience working with <strong className="text-(--color-ink) font-medium">JavaScript, Node.js, React</strong>, and both SQL and NoSQL databases, with a particular interest in backend engineering, API design, authentication systems, and data flow optimization. Focus is placed on writing maintainable code, designing structured systems, and building smooth end-to-end user experiences. Alongside web development, I also employ <strong className="text-(--color-ink) font-medium">Machine Learning and Deep Learning</strong> using PyTorch and TensorFlow, which provides a more analytical mindset for problem-solving.
           </p>
           
           {/* Data strip bar */}
           <div className="border-y border-(--color-border) bg-(--color-surface) py-3 px-4 mb-8 flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
              <span className="font-mono text-[10px] tracking-widest text-(--color-ink-muted) uppercase">
                 [GRAD: JUN 2026]
              </span>
              <span className="font-mono text-[10px] tracking-widest text-(--color-ink-muted) uppercase">
                 [COMP. SCI]
              </span>
              <span className="font-mono text-[10px] tracking-widest text-(--color-ink-muted) uppercase">
                 [DHAKA, BD]
              </span>
           </div>
           
           <p className="font-display font-light italic text-[14px] text-(--color-ink-secondary) mt-8 border-l-2 border-(--color-border-mid) pl-4">
             "Function over form—but form must serve the function impeccably."
           </p>
        </div>

        {/* Thin divider */}
        <div className="hidden lg:block lg:col-span-1 border-r border-(--color-border) opacity-50 relative pointer-events-none" />

        {/* Right column: Academic Operators */}
        <div className="lg:col-span-5 relative flex flex-col justify-start gap-4">
           {/* Section small label */}
           <div className="flex items-center gap-2 mb-2">
             <span className="font-mono text-[10px] tracking-[0.2em] text-(--color-ink-muted) uppercase">
                // ACADEMIC BACKGROUND
             </span>
             <div className="flex-1 h-px bg-(--color-border) opacity-50" />
           </div>

           <div className="border border-(--color-border) bg-(--color-bg) p-5 flex flex-col gap-2 relative transition-all duration-300 hover:-translate-y-1 hover:shadow-sm"
                style={{ borderLeft: '3px solid var(--color-accent)' }}>
              <h3 className="font-display font-semibold text-[15px] text-(--color-ink) uppercase tracking-wide">
                 Bachelor of Computer Science
              </h3>
              <p className="font-display font-light text-[13px] text-(--color-ink-secondary)">
                 BRAC University
              </p>
              <p className="font-mono text-[10px] text-(--color-ink-secondary) mt-1 uppercase">
                  CGPA: <span className="font-bold text-(--color-ink)">3.31</span> (124/124 Credits)
               </p>
               <div className="mt-1 text-(--color-ink-muted) font-mono text-[10px] uppercase tracking-widest flex items-center gap-4">
                  <span>STATUS: GRADUATE</span>
                  <span>2022 — SPRING 2026 (JUN)</span>
               </div>
           </div>

           <div className="border border-(--color-border) bg-(--color-surface) p-5 flex flex-col gap-2 relative transition-all duration-300 hover:-translate-y-1 hover:shadow-sm"
                style={{ borderLeft: '3px solid var(--color-border-dark)' }}>
              <h3 className="font-display font-semibold text-[15px] text-(--color-ink) uppercase tracking-wide">
                 Higher Secondary Certificate
              </h3>
              <p className="font-display font-light text-[13px] text-(--color-ink-secondary)">
                 Monipur High School and College
              </p>
              <p className="font-mono text-[10px] text-(--color-ink-secondary) mt-1 uppercase">
                 GPA: <span className="font-bold text-(--color-ink)">4.17</span>
              </p>
              <div className="mt-1 text-(--color-ink-muted) font-mono text-[10px] uppercase tracking-widest">
                 2020
              </div>
           </div>

           <div className="border border-(--color-border) bg-(--color-surface) p-5 flex flex-col gap-2 relative transition-all duration-300 hover:-translate-y-1 hover:shadow-sm"
                style={{ borderLeft: '3px solid var(--color-border-dark)' }}>
              <h3 className="font-display font-semibold text-[15px] text-(--color-ink) uppercase tracking-wide">
                 Secondary School Certificate
              </h3>
              <p className="font-display font-light text-[13px] text-(--color-ink-secondary)">
                 Mirpur Bangla School and College
              </p>
              <p className="font-mono text-[10px] text-(--color-ink-secondary) mt-1 uppercase">
                 GPA: <span className="font-bold text-(--color-ink)">4.22</span>
              </p>
              <div className="mt-1 text-(--color-ink-muted) font-mono text-[10px] uppercase tracking-widest">
                 2018
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
