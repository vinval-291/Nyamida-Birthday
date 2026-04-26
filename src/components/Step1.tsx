import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

interface Props {
  onNext: () => void;
}

export default function Step1({ onNext }: Props) {
  return (
    <div className="text-center space-y-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        className="space-y-6"
      >
        <p className="text-lg md:text-2xl font-serif italic text-romantic-gold leading-relaxed px-2">
          “If I could, I would give you the whole world right now…”
        </p>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto px-4 text-justify">
          But in this moment, I feel a little limited…
        </p>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto italic px-4 text-justify">
          Not because you deserve any less, but because words and gestures can only try to match how special you are.
        </p>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto px-4 text-justify">
          So instead… I decided to use what I have—my skills—to create something just for you.
        </p>
        <p className="text-lg md:text-xl font-serif italic text-romantic-gold px-2">
          Something that carries my thoughts, my heart… and a smile I hope finds its way to your face.
        </p>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="inline-flex items-center gap-2 px-8 py-3 bg-romantic-gold text-white rounded-full font-medium shadow-lg hover:bg-opacity-90 transition-all group"
      >
        Continue
        <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </div>
  );
}
