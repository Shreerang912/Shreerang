import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Skill } from '@/lib/skills';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  key?: React.Key;
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setExpanded(!expanded)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "skill-card relative flex flex-col p-5 rounded-2xl cursor-pointer bg-skill-card-bg overflow-hidden transition-all duration-300",
        expanded ? "shadow-md" : "shadow-sm"
      )}
    >
      <motion.div layout className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-foreground">{skill.label}</h3>
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-muted"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pt-4 space-y-4">
              <p className="text-sm text-muted leading-relaxed">{skill.description}</p>
              
              <div>
                <div className="flex justify-between text-xs font-mono text-muted mb-1.5">
                  <span>Proficiency</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-1.5 w-full bg-surface rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: hovered ? `${skill.level}%` : 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="h-full bg-accent rounded-full"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {skill.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-1 text-xs font-mono rounded-md bg-skill-pill-bg border border-skill-pill-border text-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
