import { Mail, MessageSquare, Hash } from 'lucide-react';

export function ContactButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <a
        href="mailto:hello@example.com"
        className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-surface border border-border hover:border-accent hover:text-accent transition-colors group"
      >
        <Mail className="w-5 h-5 text-muted group-hover:text-accent transition-colors" />
        <span className="font-medium">Email</span>
      </a>
      <a
        href="#"
        className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-surface border border-border hover:border-accent hover:text-accent transition-colors group"
      >
        <MessageSquare className="w-5 h-5 text-muted group-hover:text-accent transition-colors" />
        <span className="font-medium">Discord</span>
      </a>
      <a
        href="#"
        className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-surface border border-border hover:border-accent hover:text-accent transition-colors group"
      >
        <Hash className="w-5 h-5 text-muted group-hover:text-accent transition-colors" />
        <span className="font-medium">Slack</span>
      </a>
    </div>
  );
}
