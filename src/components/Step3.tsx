import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

interface Props {
  onNext: () => void;
}

export default function Step3({ onNext }: Props) {
  return (
    <div className="space-y-10 py-8 px-4 md:px-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="space-y-8"
      >
        <div className="flex justify-center mb-6">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Heart size={40} className="text-romantic-blush fill-romantic-blush" />
          </motion.div>
        </div>

        <h2 className="text-2xl md:text-4xl text-romantic-gold font-serif text-center italic px-4">
          To My Dearest Patience...
        </h2>

        <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg max-w-xl mx-auto px-4 text-justify">
          <p>
            There’s something about you that words struggle to fully capture…
            Maybe it’s the way you exist so effortlessly, yet leave such a lasting impact.
          </p>
          <p>
            Every memory we’ve shared feels like a precious moment I’d gladly relive a thousand times.
            You have this quiet magic, one that turns even the most ordinary days into something truly unforgettable.
          </p>
          <p>
            I appreciate how unique you are, the way you make every moment feel special just by being in it. 
            You aren't just a part of my life; you've become an important one.
          </p>
          <p className="italic text-romantic-gold text-lg md:text-xl text-center">
            And today, on your birthday, I just want you to feel even a fraction of how special and deeply loved you truly are.
          </p>
          <p className="italic text-romantic-gold text-lg md:text-xl text-center">
            I decided to take you back in memories, see how much you've grown and archived over the years.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="text-center"
      >
        <button
          onClick={onNext}
          className="px-8 py-3 ring-1 ring-romantic-gold text-romantic-gold rounded-full hover:bg-romantic-gold hover:text-white transition-all duration-500 font-serif italic text-lg shadow-sm"
        >
          I made something for you…
        </button>
      </motion.div>
    </div>
  );
}
