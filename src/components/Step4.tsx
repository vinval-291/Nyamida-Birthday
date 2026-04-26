import { motion } from 'motion/react';
import { PlayCircle, ExternalLink, ChevronRight } from 'lucide-react';

interface Props {
  onNext: () => void;
}

export default function Step4({ onNext }: Props) {
  const videoUrl = "https://photos.google.com/share/AF1QipNrKpRpP6M-maeSvg6vh4d0OWCGhl3iU7AYcIzkuST-h1C8g942opG896eicccliQ/photo/AF1QipOCTjEmkxXS8lICuxyQVJYRTU_ujg-ImF_H4Fx_?key=VU5QLWsyWm1uaHZ0TzFhTzByUmdKMC1kWGdKOVlR";

  return (
    <div className="text-center space-y-12">
      <div className="space-y-4 px-4">
        <h2 className="text-3xl md:text-4xl text-romantic-gold font-serif italic">A Special Memory</h2>
        <p className="text-sm md:text-base text-gray-500">I put together some moments for you to look back on...</p>
      </div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative group max-w-md mx-auto aspect-video bg-romantic-pink/10 rounded-3xl overflow-hidden glass border-2 border-white shadow-2xl flex flex-col items-center justify-center p-8 text-center"
      >
        {/* Abstract Video Placeholder Decor */}
        <div className="absolute inset-0 bg-gradient-to-br from-romantic-blush/20 to-romantic-gold/10 pointer-events-none" />
        
        <PlayCircle size={64} className="text-romantic-gold mb-6 group-hover:scale-110 transition-transform duration-500 opacity-80" />
        
        <div className="space-y-4 relative z-10">
          <p className="text-romantic-gold font-serif text-xl italic font-medium">Memory Lane</p>
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-romantic-gold text-white rounded-full shadow-lg hover:shadow-romantic-gold/40 transition-all font-medium"
          >
            Watch Video
            <ExternalLink size={16} />
          </a>
        </div>
        
        <p className="absolute bottom-6 text-xs text-romantic-gold/50 font-serif italic">
          (This will open in a new tab)
        </p>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        onClick={onNext}
        className="inline-flex items-center gap-2 text-romantic-gold font-serif italic text-lg hover:underline underline-offset-8 transition-all group"
      >
        One last thing…
        <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </div>
  );
}
