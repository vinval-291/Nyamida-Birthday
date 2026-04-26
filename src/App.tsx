/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import FloatingHearts from './components/FloatingHearts';
import AudioPlayer from './components/AudioPlayer';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';

export default function App() {
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));

  return (
    <div className="min-h-screen relative overflow-hidden bg-romantic-cream selection:bg-romantic-blush selection:text-white">
      <FloatingHearts />
      <AudioPlayer />

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 flex">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            className={`flex-1 h-full transition-all duration-700 ${
              i + 1 <= step ? 'bg-romantic-gold' : 'bg-romantic-pink/30'
            }`}
          />
        ))}
      </div>

      {/* Step Indicator Text */}
      <div className="fixed top-4 right-6 text-romantic-gold/50 font-serif italic text-sm z-50">
        Chapter {step} of {totalSteps}
      </div>

      <main className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full max-w-2xl"
          >
            {step === 1 && <Step1 onNext={nextStep} />}
            {step === 2 && <Step2 onNext={nextStep} />}
            {step === 3 && <Step3 onNext={nextStep} />}
            {step === 4 && <Step4 onNext={nextStep} />}
            {step === 5 && <Step5 />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Aesthetic Border/Overlay (Subtle) */}
      <div className="fixed inset-0 pointer-events-none border-[12px] md:border-[24px] border-romantic-pink/10 z-40" />
    </div>
  );
}

