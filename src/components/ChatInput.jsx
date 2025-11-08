import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ChatInput({ onSend }) {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const value = text.trim();
    if (!value) return;
    setLoading(true);
    try {
      await onSend(value);
      setText('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex items-center gap-2 p-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ask about workouts, nutrition, tongue health, labs, or wellness..."
        className="flex-1 bg-transparent outline-none px-3 py-2 text-sm"
      />
      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white px-3 py-2 text-sm transition-colors"
      >
        <Send size={16} />
        {loading ? 'Sending' : 'Send'}
      </button>
    </form>
  );
}
