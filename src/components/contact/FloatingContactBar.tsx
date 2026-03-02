import { Mail, Hash, Github } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useRef } from 'react';

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 127.14 96.36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.1,46,96,53,91.08,65.69,84.69,65.69Z"/>
    </svg>
  );
}

function DockItem({ children, mouseY }: { children: React.ReactNode, mouseY: any }) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseY, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };
    return val - bounds.y - bounds.height / 2;
  });

  // Scale from 1 to 1.3 based on distance
  const scaleSync = useTransform(distance, [-150, 0, 150], [1, 1.3, 1]);
  const scale = useSpring(scaleSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div ref={ref} style={{ scale }} className="origin-right">
      {children}
    </motion.div>
  );
}

export function FloatingContactBar() {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';
  const mouseY = useMotionValue(Infinity);

  return (
    <AnimatePresence>
      {!isContactPage && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col gap-3"
          onMouseMove={(e) => mouseY.set(e.pageY)}
          onMouseLeave={() => mouseY.set(Infinity)}
        >
          <DockItem mouseY={mouseY}>
            <a
              href="mailto:shreerangbhavsar912@gmail.com"
              className="p-3 block rounded-full bg-surface border border-border text-muted hover:text-accent hover:border-accent shadow-sm transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </DockItem>
          <DockItem mouseY={mouseY}>
            <a
              href="https://discord.com/users/913741347456970752"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 block rounded-full bg-surface border border-border text-muted hover:text-accent hover:border-accent shadow-sm transition-colors"
              aria-label="Discord"
            >
              <DiscordIcon className="w-5 h-5" />
            </a>
          </DockItem>
          <DockItem mouseY={mouseY}>
            <a
              href="https://hackclub.enterprise.slack.com/team/U0AEP2DSQ11"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 block rounded-full bg-surface border border-border text-muted hover:text-accent hover:border-accent shadow-sm transition-colors"
              aria-label="Slack"
            >
              <Hash className="w-5 h-5" />
            </a>
          </DockItem>
          <DockItem mouseY={mouseY}>
            <a
              href="https://github.com/Shreerang912"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 block rounded-full bg-surface border border-border text-muted hover:text-accent hover:border-accent shadow-sm transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </DockItem>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
