import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Send, Gift, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Step5() {
  const [wish, setWish] = useState('');

  useEffect(() => {
    // Launch confetti on mount
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const handleSend = () => {
    if (!wish.trim()) return;
    const phoneNumber = "2347082626469";
    const encodedWish = encodeURIComponent(wish);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%20Vincent%2C%20this%20is%20my%20wish%3A%20${encodedWish}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="text-center space-y-12">
      <div className="space-y-4 px-4">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="inline-block"
        >
          <Gift size={40} className="text-romantic-gold mx-auto md:size-12" />
        </motion.div>
        <h2 className="text-3xl md:text-5xl text-romantic-gold font-serif italic leading-tight">Before you go…</h2>
        <p className="text-base md:text-lg text-gray-600 max-w-sm mx-auto text-justify px-4">
          Tell me one thing you truly wish for…
          Something you’re really looking forward to…
        </p>
        <p className="text-romantic-gold font-serif italic text-lg md:text-xl">
          I’d love to hear it from you.
        </p>
                <p className="text-romantic-gold font-serif italic text-lg md:text-xl">
          Happy Birthday to You Babygirl <span className="text-romantic-blush">❤️</span>
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto space-y-6"
      >
        <div className="relative">
          <textarea
            value={wish}
            onChange={(e) => setWish(e.target.value)}
            placeholder="Type your wish here…"
            className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-romantic-pink/30 focus:border-romantic-gold outline-none min-h-[120px] transition-all shadow-inner resize-none text-gray-700"
          />
          <Heart size={20} className="absolute bottom-4 right-4 text-romantic-pink/30" />
        </div>

        <button
          onClick={handleSend}
          disabled={!wish.trim()}
          className="w-full py-4 bg-romantic-gold text-white rounded-2xl font-medium shadow-xl hover:shadow-romantic-gold/20 active:scale-95 disabled:opacity-50 disabled:scale-100 transition-all flex items-center justify-center gap-3 group"
        >
          Send it to me
          <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </motion.div>

      <footer className="pt-12 text-romantic-gold/40 text-sm font-serif italic">
        Happy Birthday, Patience Nyamida Owunene.
      </footer>
    </div>
  );
}
