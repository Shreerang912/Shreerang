import { motion } from 'motion/react';
import { HeroName } from '@/components/home/HeroName';
import { LocalTime } from '@/components/home/LocalTime';
import { SkillsSection } from '@/components/skills/SkillsSection';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { ProjectModal } from '@/components/projects/ProjectModal';
import { PROJECTS, Project } from '@/lib/projects';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featuredProjects = PROJECTS.filter(p => p.featured).slice(0, 3);

  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col justify-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <HeroName />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl space-y-6"
        >
          <p className="text-2xl text-foreground font-light leading-relaxed">
            I turn ideas into prototypes.
          </p>
          <p className="text-muted leading-relaxed">
            Hardware + Software builder. Systematic thinker. Fast learner. Experimental mindset. Focused on engineering depth and building toward aerospace-level thinking.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8"
        >
          <LocalTime />
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4 }}
          className="flex items-end justify-between"
        >
          <div>
            <h2 className="text-xl font-medium text-foreground mb-2">Launch</h2>
            <p className="text-muted">Selected recent prototypes and builds.</p>
          </div>
          <Link
            to="/projects"
            className="hidden sm:flex items-center gap-2 text-sm font-medium text-muted hover:text-accent transition-colors group"
          >
            View all
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </div>
        
        <div className="sm:hidden pt-4">
          <Link
            to="/projects"
            className="flex items-center justify-center gap-2 text-sm font-medium text-muted hover:text-accent transition-colors group"
          >
            View all projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
