import { Mail, MessageSquare, Hash } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export function FloatingContactBar() {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  return (
    <AnimatePresence>
      {!isContactPage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col gap-3"
        >
          <a
            href="mailto:hello@example.com"
            className="p-3 rounded-full bg-surface border border-border text-muted hover:text-accent hover:border-accent shadow-sm transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-surface border border-border text-muted hover:text-accent hover:border-accent shadow-sm transition-colors"
            aria-label="Discord"
          >
            <MessageSquare className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-surface border border-border text-muted hover:text-accent hover:border-accent shadow-sm transition-colors"
            aria-label="Slack"
          >
            <Hash className="w-5 h-5" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
