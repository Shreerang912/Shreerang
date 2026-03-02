import { motion } from 'motion/react';
import { ContactButtons } from '@/components/contact/ContactButtons';

export function Contact() {
  return (
    <div className="space-y-16 max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-4"
      >
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">Comms</h1>
        <p className="text-muted text-lg">
          Get in touch for collaborations, questions, or just to talk engineering.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <ContactButtons />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="pt-12 border-t border-border"
      >
        <h3 className="text-sm font-medium text-foreground uppercase tracking-wider mb-4">Current Status</h3>
        <div className="flex items-center gap-3 text-muted">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span>Available for new projects and collaborations.</span>
        </div>
      </motion.div>
    </div>
  );
}
