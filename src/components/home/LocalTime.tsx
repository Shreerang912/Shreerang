import { useLocalTime } from '@/hooks/useLocalTime';

export function LocalTime() {
  const time = useLocalTime();

  return (
    <div className="flex items-center gap-2 text-sm text-muted font-mono">
      <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
      <span>My local time – {time}</span>
    </div>
  );
}
