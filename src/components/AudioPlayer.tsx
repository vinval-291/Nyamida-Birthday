import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayer() {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Auto-play is tricky in browsers, but we'll try and handle user interaction
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      const playAudio = () => {
        audioRef.current?.play().catch(() => {
          // Playback failed, likely browser block. User interaction needed.
        });
      };
      
      document.addEventListener('click', playAudio, { once: true });
      return () => document.removeEventListener('click', playAudio);
    }
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggleMute}
        className="glass p-3 rounded-full text-romantic-gold hover:scale-110 transition-transform shadow-lg"
        title={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
      <audio
        ref={audioRef}
        src="/byronatoraustralia-happy-birthday-guitar-11795.mp3"
        loop
      />
    </div>
  );
}
