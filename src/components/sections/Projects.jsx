import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CornerBrackets } from '../ui/CornerBrackets';
import { ScanDivider } from '../ui/ScanDivider';
import { StageBadge } from '../ui/StageBadge';
import { StatusChip } from '../ui/StatusChip';
import { SkillChip } from '../ui/SkillChip';
import { projects } from '../../data/projects';
import surveyhubImg from '../../assets/Surveyhub.png';
import biznestImg from '../../assets/biznest.png';
import groceryHubImg from '../../assets/Gorcery Hub.png';
import eshopImg from '../../assets/Electronic eshop.png';
import devJunctionImg from '../../assets/Dev junction.png';

const projectImages = {
  2: surveyhubImg,
  3: biznestImg,
  5: groceryHubImg,
  7: eshopImg,
  8: devJunctionImg,
};

const categoryLabel = {
  2: 'FULL STACK',
  3: 'FULL STACK',
  4: 'ML / UNSUPERVISED',
  5: 'WEB \u00B7 DATABASE',
  6: 'GRAPHICS \u00B7 GAME',
  7: 'FULL STACK',
  8: 'FULL STACK',
};

function FeaturedCard({ project }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref}>
      <motion.article
        className="relative bg-(--color-bg) border border-(--color-border) overflow-hidden"
        style={{ borderLeft: '4px solid var(--color-accent)' }}
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={isInView ? { clipPath: 'inset(0 0% 0 0)' } : { clipPath: 'inset(0 100% 0 0)' }}
        transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ x: 4 }}
      >
        <div className="diagonal-stripe opacity-60" aria-hidden="true" />
        <CornerBrackets isVisible={hovered} color="var(--color-ink)" />
        <div className="absolute top-4 right-8 font-display font-bold text-[100px]
                        leading-none select-none pointer-events-none z-0"
             style={{ color: 'rgba(49,55,57,0.04)' }}
             aria-hidden="true">
          00
        </div>

        <div className="relative z-10 p-8">
          <div className="flex justify-between items-start mb-6">
            <StageBadge code="THESIS" />
            <StatusChip status={project.status} />
          </div>

          <h3 className="font-display font-bold text-2xl uppercase tracking-[0.03em]
                         text-(--color-ink) mb-2 w-3/4">
            {project.title}
          </h3>
          <p className="font-display font-light text-[14px] text-(--color-ink-secondary) mb-6
                        max-w-lg leading-relaxed">
            {project.description}
          </p>

          <ScanDivider />

          <div className="flex flex-wrap gap-2 mt-4 mb-8">
            {project.tech.map(t => <SkillChip key={t} label={t} />)}
          </div>

          <div className="flex flex-wrap justify-between items-center gap-4">
            <a href={project.liveUrl} target="_blank" rel="noreferrer"
               className="font-mono text-[11px] tracking-[0.12em] uppercase text-(--color-ink)
                           hover:text-(--color-accent) transition-colors border-b border-(--color-ink)
                           hover:border-(--color-accent) pb-0.5">
              // VIEW PROJECT →
            </a>
            {project.githubUrl && (
               <a href={project.githubUrl} target="_blank" rel="noreferrer"
                  className="font-mono text-[11px] tracking-[0.12em] uppercase text-(--color-ink-muted)
                             hover:text-(--color-ink) transition-colors">
                 GITHUB ↗
               </a>
            )}
          </div>
        </div>
      </motion.article>
    </div>
  );
}

function NeuralIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="var(--color-ink)" strokeWidth="1" className="opacity-10 pointer-events-none">
      <circle cx="40" cy="12" r="4" />
      <circle cx="12" cy="40" r="4" />
      <circle cx="68" cy="40" r="4" />
      <circle cx="40" cy="68" r="4" />
      <circle cx="26" cy="26" r="3" />
      <circle cx="54" cy="26" r="3" />
      <line x1="40" y1="16" x2="12" y2="36" opacity="0.5" />
      <line x1="40" y1="16" x2="68" y2="36" opacity="0.5" />
      <line x1="40" y1="16" x2="26" y2="23" opacity="0.5" />
      <line x1="40" y1="16" x2="54" y2="23" opacity="0.5" />
      <line x1="12" y1="44" x2="26" y2="29" opacity="0.5" />
      <line x1="68" y1="44" x2="54" y2="29" opacity="0.5" />
      <line x1="26" y1="29" x2="40" y2="64" opacity="0.5" />
      <line x1="54" y1="29" x2="40" y2="64" opacity="0.5" />
    </svg>
  );
}

function V1ProjectCard({ project, index }) {
  const isML = project.category === 'DL/ML RESEARCH';

  return (
    <div>
      <motion.div
        className="bracket-panel bg-white relative overflow-hidden group"
        initial={{ x: -32, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute bottom-2 right-4 font-display text-[7rem] text-(--color-ink-muted) leading-none select-none pointer-events-none z-0 opacity-20">
          {String(project.id - 1).padStart(2, '0')}
        </div>

        {isML && (
          <div className="absolute top-4 right-4">
            <NeuralIcon />
          </div>
        )}

        {isML ? (
          <div className="relative z-10 p-8 flex flex-col justify-center min-h-[220px]">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-(--color-accent) bg-(--color-ink) px-2.5 py-1 clip-chamfer-md">
                PROJECT — {String(project.id - 1).padStart(2, '0')}
              </span>
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-(--color-ink-muted)">
                {categoryLabel[project.id] ?? 'PROJECT'}
              </span>
            </div>

            <h3 className="font-display text-[clamp(1.5rem,3vw,2.25rem)] text-(--color-ink) uppercase font-bold tracking-[0.03em] leading-tight">
              {project.title}
            </h3>

            <div className="w-12 h-px bg-(--color-accent) my-4" />

            <p className="font-body text-sm text-(--color-ink-secondary) leading-[1.7] max-w-[52ch]">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-5">
              {project.tech.map((tech, i) => (
                <span key={i}
                  className="font-mono text-[11px] tracking-[0.1em] uppercase px-2.5 py-1.5 bg-(--color-bg-alt) border border-(--color-border) text-(--color-ink-secondary)">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 mt-6">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                  className="font-mono text-[11px] tracking-[0.2em] uppercase text-(--color-ink-secondary) hover:text-(--color-accent) hover:border-b hover:border-(--color-accent) transition-colors duration-150 pb-px">
                  VIEW CODE →
                </a>
              )}
              {project.liveUrl ? (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                  className="font-mono text-[11px] tracking-[0.2em] uppercase text-(--color-ink-secondary) hover:text-(--color-accent) hover:border-b hover:border-(--color-accent) transition-colors duration-150 pb-px">
                  LIVE DEMO →
                </a>
              ) : (
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-(--color-ink-muted)">
                  WIP →
                </span>
              )}
            </div>
          </div>
        ) : (
          <div className={`grid grid-cols-1 md:grid-cols-12 ${index % 2 === 0 ? '' : 'md:[direction:rtl]'} relative z-10`}>
            <div className="md:col-span-5 [direction:ltr]">
              <div className="w-full h-full min-h-[200px] md:min-h-[260px] bg-(--color-surface) clip-chamfer-md overflow-hidden relative">
                {projectImages[project.id] ? (
                  <img src={projectImages[project.id]} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-(--color-ink-muted) px-4 text-center">
                      {project.category}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="md:col-span-7 [direction:ltr] p-8 flex flex-col justify-center">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-(--color-accent) bg-(--color-ink) px-2.5 py-1 clip-chamfer-md">
                  PROJECT — {String(project.id - 1).padStart(2, '0')}
                </span>
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-(--color-ink-muted)">
                  {categoryLabel[project.id] ?? 'PROJECT'}
                </span>
              </div>

              <h3 className="font-display text-[clamp(1.5rem,3vw,2.25rem)] text-(--color-ink) uppercase font-bold tracking-[0.03em] leading-tight">
                {project.title}
              </h3>

              <div className="w-12 h-px bg-(--color-accent) my-4" />

              <p className="font-body text-sm text-(--color-ink-secondary) leading-[1.7] max-w-[52ch]">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-5">
                {project.tech.map((tech, i) => (
                  <span key={i}
                    className="font-mono text-[11px] tracking-[0.1em] uppercase px-2.5 py-1.5 bg-(--color-bg-alt) border border-(--color-border) text-(--color-ink-secondary)">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-6 mt-6">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="font-mono text-[11px] tracking-[0.2em] uppercase text-(--color-ink-secondary) hover:text-(--color-accent) hover:border-b hover:border-(--color-accent) transition-colors duration-150 pb-px">
                    VIEW CODE →
                  </a>
                )}
                {project.liveUrl ? (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="font-mono text-[11px] tracking-[0.2em] uppercase text-(--color-ink-secondary) hover:text-(--color-accent) hover:border-b hover:border-(--color-accent) transition-colors duration-150 pb-px">
                    LIVE DEMO →
                  </a>
                ) : (
                  <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-(--color-ink-muted)">
                    WIP →
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </motion.div>

      <div className="w-full h-px bg-(--color-border)" />
    </div>
  );
}

export function Projects() {
  const featured = projects[0];
  const rest = [2, 3, 5, 7, 8, 4, 6].map(id => projects.find(p => p.id === id));

  return (
    <section id="projects" className="py-24 relative bg-(--color-bg-alt) w-full">
      <div className="absolute top-0 left-0 w-full h-[3px] hazard-stripe opacity-70" />

      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-72px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-(--color-accent) rotate-45 flex-shrink-0" />
                <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-(--color-accent) bg-(--color-ink) px-2.5 py-1 clip-chamfer-md">
                  / PROJECTS
                </span>
              </div>
              <h2 className="font-display text-[clamp(2.5rem,5.5vw,4rem)] text-(--color-ink) uppercase font-bold mt-1 leading-[0.98]">
                THINGS I'VE BUILT
              </h2>
            </div>
            <div className="font-mono text-[11px] text-(--color-ink-muted) tracking-[0.2em] uppercase text-right leading-relaxed">
              PROJECT PORTFOLIO<br />
              ACADEMIC &amp; PERSONAL PROJECTS
            </div>
          </div>
          <div className="w-full h-px bg-(--color-border) mb-16" />
        </motion.div>

        <div className="flex flex-col">
          {rest.map((project, index) => (
            <V1ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {featured && (
          <div className="mt-12">
            <FeaturedCard project={featured} />
          </div>
        )}
      </div>
    </section>
  );
}
