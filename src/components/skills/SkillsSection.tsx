import React from 'react';
import { motion } from 'motion/react';
import { RadarChart } from './RadarChart';
import { SkillCard } from './SkillCard';
import { TechGrid } from './TechGrid';
import { SKILLS } from '@/lib/skills';

export function SkillsSection() {
  return (
    <section className="py-24 space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-xl font-medium text-foreground mb-2">Systems & Capabilities</h2>
        <p className="text-muted max-w-2xl">A breakdown of my technical proficiency across different domains. I focus on building deep expertise in hardware-software integration.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="sticky top-32"
        >
          <RadarChart />
        </motion.div>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-sm font-medium text-foreground uppercase tracking-wider mb-6">Core Domains</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {SKILLS.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-sm font-medium text-foreground uppercase tracking-wider mb-6">Technology Stack</h3>
            <TechGrid />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
