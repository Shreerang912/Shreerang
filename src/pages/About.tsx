import { motion } from 'motion/react';
import { SkillsSection } from '@/components/skills/SkillsSection';

export function About() {
  return (
    <div className="space-y-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-4"
      >
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">Control Panel</h1>
        <p className="text-muted max-w-2xl text-lg">
          Background, skills, and how I work.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4 }}
          className="space-y-6 text-muted leading-relaxed"
        >
          <p>
            I am a builder focused on the intersection of hardware and software. I design systems that bridge the physical and digital worlds, from custom telemetry dashboards to parametric 3D printed drone frames.
          </p>
          <p>
            My approach is experimental but systematic. I prototype rapidly, test in the real world, and iterate based on data. I am currently working toward a future in Aeronautical Engineering, applying aerospace-level thinking to everyday technical challenges.
          </p>
          <p>
            Whether it's writing an offline-first Android app in Kotlin or designing a complex mechanical linkage in Fusion 360, I care about engineering depth and robust execution.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="p-8 rounded-2xl bg-surface border border-border"
        >
          <h3 className="text-lg font-medium text-foreground mb-4">Core Principles</h3>
          <ul className="space-y-4 text-muted">
            <li className="flex gap-3">
              <span className="text-accent font-mono">01</span>
              <span>Function dictates form. Build it to work first.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-mono">02</span>
              <span>Test in reality. Simulations only go so far.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-mono">03</span>
              <span>Optimize the critical path. Keep the rest simple.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-mono">04</span>
              <span>Document the failures. They are data points.</span>
            </li>
          </ul>
        </motion.div>
      </div>

      <SkillsSection />
    </div>
  );
}
