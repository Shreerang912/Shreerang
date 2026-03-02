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
                  {project.note && (
                    <p className="text-xs text-muted mt-2 italic">{project.note}</p>
                  )}
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

                {(project.links?.live || project.links?.source || project.repo || project.links?.construct) && (
                  <div className="pt-4 flex flex-wrap gap-4 border-t border-border">
                    {project.links?.live && (
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
                    {(project.links?.source || project.repo) && (
                      <a
                        href={project.links?.source || project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        View Repository
                      </a>
                    )}
                    {project.links?.construct && (
                      <a
                        href={project.links.construct}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Construct Dashboard"
                        className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 256 256" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M128 0c70.7 0 128 57.3 128 128s-57.3 128-128 128S0 198.7 0 128 57.3 0 128 0zm0 42.7c-47.1 0-85.3 38.2-85.3 85.3s38.2 85.3 85.3 85.3 85.3-38.2 85.3-85.3-38.2-85.3-85.3-85.3zm-32 42.6h21.3v32h21.4v-32h21.3v85.4h-21.3v-32h-21.4v32H96V85.3z"/>
                        </svg>
                        View Construct Dashboard
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
