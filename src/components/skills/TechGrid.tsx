import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILLS } from '@/lib/skills';
import { cn } from '@/lib/utils';

const CATEGORIES = ['all', 'design', 'hardware', 'android', 'python', 'web', 'systems'] as const;
type Category = typeof CATEGORIES[number];

export function TechGrid() {
  const [filter, setFilter] = useState<Category>('all');

  const allTools = SKILLS.flatMap(s => s.tools.map(tool => ({ tool, category: s.category })));
  
  // Remove duplicates
  const uniqueTools = allTools.filter((v, i, a) => a.findIndex(t => (t.tool === v.tool)) === i);

  const filteredTools = filter === 'all' 
    ? uniqueTools 
    : uniqueTools.filter(t => t.category === filter);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={cn(
              "px-3 py-1.5 text-xs font-mono rounded-full border transition-colors",
              filter === cat
                ? "bg-accent text-background border-accent"
                : "bg-surface text-muted border-border hover:text-foreground hover:border-muted"
            )}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <motion.div layout className="flex flex-wrap gap-2">
        <AnimatePresence mode="popLayout">
          {filteredTools.map((item) => (
            <motion.span
              key={item.tool}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="px-3 py-1.5 text-sm font-mono rounded-md bg-skill-pill-bg border border-skill-pill-border text-foreground"
            >
              {item.tool}
            </motion.span>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
