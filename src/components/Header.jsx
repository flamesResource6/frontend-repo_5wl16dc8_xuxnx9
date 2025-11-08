import { HeartPulse, Dumbbell, Salad } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 w-full backdrop-blur bg-white/70 dark:bg-neutral-900/60 border-b border-neutral-200/60 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white grid place-items-center shadow-sm">
            <HeartPulse size={22} />
          </div>
          <div>
            <h1 className="text-lg font-semibold tracking-tight">Wellness Chat Coach</h1>
            <p className="text-xs text-neutral-500">Fitness • Diet • Tongue Health • Records & Wellness</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
          <Dumbbell size={18} />
          <Salad size={18} />
        </div>
      </div>
    </header>
  );
}
