import { useCallback, useMemo, useState } from 'react';
import Header from './components/Header';
import ChatMessages from './components/ChatMessages';
import ChatInput from './components/ChatInput';
import WellnessSidebar from './components/WellnessSidebar';

function App() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');

  const backendUrl = useMemo(() => {
    const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';
    return base.replace(/\/$/, '');
  }, []);

  const sendMessage = useCallback(async (text) => {
    setError('');
    const userMsg = { role: 'user', content: text };
    setMessages((prev) => [...prev, userMsg]);

    try {
      const res = await fetch(`${backendUrl}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history: [] }),
      });

      if (!res.ok) {
        throw new Error('Failed to get response');
      }
      const data = await res.json();
      const assistantMsg = { role: 'assistant', content: data.reply };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch (e) {
      console.error(e);
      setError('Could not reach the wellness coach. Please try again.');
    }
  }, [backendUrl]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-sky-50 text-neutral-900 dark:text-neutral-100">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-[1fr,20rem] gap-6">
        <section className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/70 backdrop-blur p-4 sm:p-6">
          <div className="h-[62vh] sm:h-[68vh] overflow-y-auto pr-1 custom-scrollbar">
            <ChatMessages messages={messages} />
          </div>

          {error && (
            <div className="mt-3 text-sm text-red-600 dark:text-red-400">{error}</div>
          )}

          <div className="mt-4">
            <ChatInput onSend={sendMessage} />
          </div>
        </section>

        <WellnessSidebar />
      </main>

      <footer className="py-6 text-center text-xs text-neutral-500">
        This assistant provides general wellness information and is not a substitute for professional medical advice.
      </footer>
    </div>
  );
}

export default App;
