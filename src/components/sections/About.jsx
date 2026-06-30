// import { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';

// const COURSES = [
//   { title: 'Programming Language I',    points: 4.0, idx: '01' },
//   { title: 'Algorithms',                points: 4.0, idx: '02' },
//   { title: 'Numerical Methods',         points: 4.0, idx: '03' },
//   { title: 'System Analysis & Design',  points: 4.0, idx: '04' },
//   { title: 'Software Engineering',      points: 4.0, idx: '05' },
//   { title: 'Internet Programming',      points: 4.0, idx: '06' },
//   { title: 'Mathematics I',             points: 3.7, idx: '07' },
//   { title: 'Database Systems',          points: 3.7, idx: '08' },
//   { title: 'Mathematics III',           points: 3.7, idx: '09' },
//   { title: 'Data Science',              points: 3.7, idx: '10' },
// ];

// const TIER_A = COURSES.filter(c => c.points === 4.0);
// const TIER_B = COURSES.filter(c => c.points === 3.7);

// function CourseRow({ course, accentColor, fillPct }) {
//   const [hovered, setHovered] = useState(false);
//   return (
//     <div
//       className="relative flex items-center gap-3 px-3 py-2 cursor-default overflow-hidden transition-all duration-200"
//       style={{ borderLeft: `2px solid ${accentColor}` }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       {/* Animated fill on hover */}
//       <div
//         className="absolute inset-0 transition-all duration-300 ease-out pointer-events-none"
//         style={{
//           background: `linear-gradient(90deg, ${accentColor}14 0%, transparent 80%)`,
//           opacity: hovered ? 1 : 0,
//         }}
//       />

//       {/* Index */}
//       <span className="font-mono text-[9px] text-(--color-ink-muted) shrink-0 relative z-10">
//         {course.idx}
//       </span>

//       {/* Course name */}
//       <span
//         className="font-display text-[12px] flex-1 truncate relative z-10 transition-colors duration-200"
//         style={{ color: hovered ? 'var(--color-ink)' : course.points === 4.0 ? 'var(--color-ink)' : 'var(--color-ink-secondary)',
//                  fontWeight: course.points === 4.0 ? 500 : 300 }}
//       >
//         {course.title}
//       </span>

//       {/* Fill bar */}
//       <div className="shrink-0 relative z-10 flex items-center gap-1.5">
//         <div className="w-16 h-[3px] bg-(--color-border) overflow-hidden">
//           <div
//             className="h-full transition-all duration-500 ease-out"
//             style={{
//               width: hovered ? `${fillPct}%` : '0%',
//               background: accentColor,
//             }}
//           />
//         </div>
//         <span
//           className="font-mono text-[9px] font-bold shrink-0 transition-colors duration-200"
//           style={{ color: hovered ? 'var(--color-ink)' : 'var(--color-ink-muted)' }}
//         >
//           {course.points.toFixed(1)}
//         </span>
//       </div>
//     </div>
//   );
// }

// function GradeTier({ label, courses, accentColor, fillPct }) {
//   return (
//     <div>
//       {/* Tier label */}
//       <div className="flex items-center gap-2 mb-1.5 px-3">
//         <div className="w-1.5 h-1.5 shrink-0" style={{ background: accentColor }} />
//         <span className="font-mono text-[9px] tracking-[0.2em] text-(--color-ink-muted) uppercase">
//           {label}
//         </span>
//         <div className="flex-1 h-px bg-(--color-border) opacity-40" />
//         <span className="font-mono text-[9px] text-(--color-ink-muted)">
//           ×{courses.length}
//         </span>
//       </div>
//       {/* Rows — Two-column Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-(--color-border) border-y border-(--color-border)">
//         {courses.map((c) => (
//           <div key={c.idx} className="border-b last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 border-(--color-border)">
//             <CourseRow course={c} accentColor={accentColor} fillPct={fillPct} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-screen-xl mx-auto">
      <SectionHeader id="SYS-01" title="ABOUT ME" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 relative">
        {/* Left column: Bio */}
        <div className="lg:col-span-6 relative z-10 flex flex-col justify-center">
            <p className="font-display font-light text-[14px] leading-relaxed text-(--color-ink-secondary) mb-8 max-w-lg text-justify">
              I'm a recent graduate passionate about building clean, reliable applications across the full stack. I enjoy working with <strong className="text-(--color-ink) font-medium">Python, JavaScript, Node.js, React</strong>, and both SQL and NoSQL databases, and I'm especially drawn to backend engineering like API design, authentication systems, and data flow optimization. I care about writing maintainable code and designing systems that make sense. I also have hands-on experience with <strong className="text-(--color-ink) font-medium">Machine Learning and Deep Learning</strong> using PyTorch and TensorFlow, which has shaped how I approach complex problems analytically. In addition, I can integrate <strong className="text-(--color-ink) font-medium">AI-driven workflows</strong> and features into applications to enhance automation and intelligence. I'm excited to grow as a software engineer and contribute to teams solving meaningful problems.
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

           {/* ── TOP GRADES BLOCK ─────────────────────────────── */}
           {/*
           <div
             className="border border-(--color-border) bg-(--color-bg) relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-sm"
             style={{ borderLeft: '3px solid var(--color-accent)' }}
           >
             <div className="absolute bottom-0 right-2 font-display font-bold text-[80px] leading-none select-none pointer-events-none z-0 opacity-[0.04]">
               01
             </div>

             <div className="border-b border-(--color-border) bg-(--color-surface) px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 relative z-10">
               <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 bg-(--color-accent)" />
                 <span className="font-mono text-[10px] tracking-[0.2em] text-(--color-ink) uppercase font-bold">
                   // SOME TOP GRADES
                 </span>
                 <span className="font-mono text-[8px] text-(--color-ink-muted) ml-2 hidden sm:inline">
                   [90+ = 4.0] [85+ = 3.7]
                 </span>
               </div>
               <div className="flex items-center gap-3">
                 <span className="font-mono text-[9px] text-(--color-ink-muted) uppercase">
                   {COURSES.length} ENTRIES
                 </span>
                 <span className="font-mono text-[9px] bg-(--color-accent) text-(--color-on-accent) px-1.5 py-0.5 uppercase">
                   RECORDED
                 </span>
               </div>
             </div>

             <div className="border-b border-(--color-border) bg-(--color-bg) px-4 py-1.5 flex items-center gap-6 relative z-10">
               <span className="font-mono text-[8px] tracking-widest text-(--color-ink-muted) uppercase">
                 #ID
               </span>
               <span className="font-mono text-[8px] tracking-widest text-(--color-ink-muted) uppercase flex-1">
                 COURSE NAME
               </span>
               <span className="font-mono text-[8px] tracking-widest text-(--color-ink-muted) uppercase">
                 SCORE / 4.0
               </span>
             </div>

             <div className="relative z-10 pt-3 pb-2">
               <GradeTier
                 label="TIER A — PERFECT SCORE"
                 courses={TIER_A}
                 accentColor="var(--color-accent)"
                 fillPct={100}
               />
             </div>

             <div className="mx-4 border-t border-(--color-border) border-dashed opacity-40 relative z-10" />

             <div className="relative z-10 pt-2 pb-3">
               <GradeTier
                 label="TIER B — HIGH DISTINCTION"
                 courses={TIER_B}
                 accentColor="var(--color-border-mid)"
                 fillPct={92.5}
               />
             </div>
           </div>
           */}
           {/* ─────────────────────────────────────────────────── */}
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
