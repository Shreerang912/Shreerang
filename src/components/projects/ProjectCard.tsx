import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { Project } from '@/lib/projects';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const reducedMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['8deg', '-8deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-8deg', '8deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (reducedMotion) return;
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      layoutId={`project-${project.id}`}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: reducedMotion ? 0 : rotateX,
        rotateY: reducedMotion ? 0 : rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={cn(
        "relative flex flex-col p-6 rounded-2xl cursor-pointer bg-surface border border-border shadow-sm transition-colors duration-300",
        "hover:border-accent hover:shadow-md"
      )}
    >
      <motion.div layoutId={`project-title-${project.id}`} className="mb-2">
        <h3 className="text-xl font-medium text-foreground">{project.title}</h3>
      </motion.div>
      <motion.div layoutId={`project-tagline-${project.id}`}>
        <p className="text-muted text-sm">{project.tagline}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
        transition={{ duration: 0.2 }}
        className="mt-6 flex flex-wrap gap-2"
      >
        {project.tech.slice(0, 3).map((t) => (
          <span
            key={t}
            className="px-2 py-1 text-xs font-mono rounded-md bg-skill-pill-bg border border-skill-pill-border text-foreground"
          >
            {t}
          </span>
        ))}
        {project.tech.length > 3 && (
          <span className="px-2 py-1 text-xs font-mono rounded-md text-muted">
            +{project.tech.length - 3}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
