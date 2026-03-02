import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github } from 'lucide-react';
import { Project } from '@/lib/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />
          <motion.div
            layoutId={`project-${project.id}`}
            className="relative w-full max-w-2xl bg-surface border border-border rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            <div className="p-6 sm:p-8 overflow-y-auto">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-muted hover:text-foreground rounded-full hover:bg-background transition-colors focus-visible:ring-2 focus-visible:ring-accent outline-none"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <motion.div layoutId={`project-title-${project.id}`} className="mb-2 pr-8">
                <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">{project.title}</h2>
              </motion.div>
              
              <motion.div layoutId={`project-tagline-${project.id}`} className="mb-6">
                <p className="text-lg text-muted">{project.tagline}</p>
              </motion.div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2 uppercase tracking-wider">Overview</h4>
                  <p className="text-muted leading-relaxed">{project.description}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3 uppercase tracking-wider">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 text-xs font-mono rounded-md bg-skill-pill-bg border border-skill-pill-border text-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {(project.links?.live || project.links?.source) && (
                  <div className="pt-4 flex gap-4 border-t border-border">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    {project.links.source && (
                      <a
                        href={project.links.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
