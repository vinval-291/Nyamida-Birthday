import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, Sparkles, AlertCircle } from 'lucide-react';

interface Props {
  onNext: () => void;
}

export default function Step2({ onNext }: Props) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isLocked, setIsLocked] = useState(true);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (password.toUpperCase() === 'SMILE') {
      onNext();
    } else {
      setError(true);
      setPassword('');
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <div className="text-center space-y-8">
      <div className="space-y-4 px-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl text-romantic-gold leading-tight">
          Hi Patience <span className="text-romantic-blush">❤️</span>
        </h1>
        <p className="text-base md:text-lg text-gray-500 max-w-sm mx-auto italic font-serif">
          Welcome to something made just for you…
          Every click you make here holds a piece of how much you mean to me.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {isLocked ? (
          <motion.button
            key="start-button"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={() => setIsLocked(false)}
            className="px-10 py-4 bg-romantic-blush text-white rounded-full text-xl font-serif italic shadow-xl hover:shadow-romantic-blush/20 transition-all flex items-center justify-center gap-2 mx-auto group"
          >
            Let’s go!!
            <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
          </motion.button>
        ) : (
          <motion.div
            key="password-modal"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="glass p-8 rounded-3xl max-w-xs mx-auto space-y-6 shadow-2xl relative"
          >
            <div className="bg-romantic-gold/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto text-romantic-gold">
              <Lock size={20} />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-serif text-romantic-gold">Enter the Key</h3>
              <p className="text-xs text-gray-400">Hint: What I hope this makes you do...</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                autoFocus
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••"
                className="w-full px-4 py-3 text-center text-lg tracking-widest bg-white/50 border-b-2 border-romantic-gold/30 focus:border-romantic-gold outline-none transition-colors uppercase font-mono"
              />
              <button
                type="submit"
                className="w-full py-3 bg-romantic-gold text-white rounded-xl shadow-lg hover:shadow-romantic-gold/20 active:scale-95 transition-all font-medium"
              >
                Unlock
              </button>
            </form>

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center gap-2 text-rose-500 text-sm italic"
                >
                  <AlertCircle size={14} />
                  Hmm… that’s not it. Try again, beautiful 😊
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
