import { Bot, User } from 'lucide-react';

export default function ChatMessages({ messages }) {
  return (
    <div className="space-y-4">
      {messages.length === 0 && (
        <div className="text-center text-sm text-neutral-500">
          Ask anything about training splits, macro-friendly meals, tongue color and coating insights, or how to organize your medical records for better wellness tracking.
        </div>
      )}
      {messages.map((m, i) => (
        <div key={i} className={`flex gap-3 ${m.role === 'assistant' ? '' : 'justify-end'}`}>
          {m.role === 'assistant' && (
            <div className="shrink-0 h-8 w-8 rounded-full bg-emerald-600 text-white grid place-items-center"><Bot size={16} /></div>
          )}
          <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
            m.role === 'assistant'
              ? 'bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-100'
              : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100'
          }`}>
            {m.content}
          </div>
          {m.role === 'user' && (
            <div className="shrink-0 h-8 w-8 rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 grid place-items-center"><User size={16} /></div>
          )}
        </div>
      ))}
    </div>
  );
}
