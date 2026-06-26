import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { SkillChip } from '../ui/SkillChip';
import { skills } from '../../data/skills';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const panelVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const chipVariants = {
  hidden:  { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.25 } },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-screen-xl mx-auto">
      <SectionHeader id="SYS-02" title="SKILL MATRIX" />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-(--color-border)"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((category) => (
          <motion.div
            key={category.id}
            variants={panelVariants}
            className={`relative bg-(--color-surface) p-6 group ${category.id === 'cs-foundations' ? 'col-span-full' : ''}`}
            style={{ borderLeft: `3px solid ${category.color || 'var(--color-ink)'}` }}
          >
            {/* Category label with icon */}
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase
                             text-(--color-ink) font-semibold block mb-4 flex items-center gap-2">
              <span className="text-(--color-ink-muted) font-normal text-[14px]">{category.icon}</span>
              {category.label}
            </span>

            {/* Chips */}
            <motion.div
              className="flex flex-wrap gap-2"
              variants={{ visible: { transition: { staggerChildren: 0.03 } } }}
            >
              {category.chips.map((chip) => (
                <motion.div key={chip} variants={chipVariants}>
                  <SkillChip label={chip} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Learning phase indicator */}
      <div className="mt-6 flex justify-end">
         <span className="font-mono text-[9px] uppercase tracking-widest text-(--color-ink-muted)">
            [*] INDICATES SKILLS CURRENTLY IN ACTIVE LEARNING PHASE
         </span>
      </div>
    </section>
  );
}
