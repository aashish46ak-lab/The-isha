'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const Particle = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute w-1 h-1 bg-rose rounded-full opacity-50"
    initial={{
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      opacity: 0,
    }}
    animate={{
      y: -100,
      opacity: [0, 1, 0],
    }}
    transition={{
      duration: 3 + Math.random() * 2,
      delay: delay,
      repeat: Infinity,
    }}
  />
);

const Scene1 = () => (
  <motion.div
    className="min-h-screen flex flex-col items-center justify-center px-4"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={containerVariants}
  >
    {/* TikTok Icon Animation */}
    <motion.div
      className="mb-8"
      variants={itemVariants}
    >
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-6xl"
      >
        📱
      </motion.div>
    </motion.div>

    {/* WhatsApp Group Card */}
    <motion.div
      className="glass rounded-2xl p-8 max-w-md w-full space-y-4"
      variants={itemVariants}
    >
      <div className="space-y-2">
        <h2 className="text-xl font-bold text-softRed">NEB Hacks / Paper Leak</h2>
        <p className="text-sm text-gray-300">WhatsApp Group</p>
      </div>

      {/* Typing Animation */}
      <motion.div
        className="bg-charcoal rounded-lg p-4 space-y-2"
        variants={itemVariants}
      >
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm text-gray-400">Someone</span>
        </div>
        <motion.p
          className="text-white font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Paper leak hune kati chance xa? 🤔
        </motion.p>
      </motion.div>
    </motion.div>
  </motion.div>
);

const Scene2 = () => (
  <motion.div
    className="min-h-screen flex flex-col items-center justify-center px-4"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={containerVariants}
  >
    {/* Instagram Chat Interface */}
    <motion.div
      className="glass rounded-2xl p-6 max-w-md w-full space-y-4"
      variants={itemVariants}
    >
      <h2 className="text-lg font-bold text-center mb-4">Instagram Group Chat</h2>

      {/* Chat Bubbles */}
      <motion.div
        className="bg-charcoal rounded-lg p-3 self-start"
        variants={itemVariants}
      >
        <p className="text-sm">Vdo banau na 📹</p>
      </motion.div>

      <motion.div
        className="bg-softRed rounded-lg p-3 self-end text-right"
        variants={itemVariants}
      >
        <p className="text-sm text-white">IB ma pathauxu follow gara ✓✓</p>
      </motion.div>

      <motion.div
        className="bg-charcoal rounded-lg p-3 self-start"
        variants={itemVariants}
      >
        <p className="text-sm flex items-center gap-2">
          🎬 Video sent <span className="text-xs text-gray-400">Seen</span>
        </p>
      </motion.div>

      <motion.div
        className="bg-gold bg-opacity-20 rounded-lg p-3 self-end text-right"
        variants={itemVariants}
      >
        <p className="text-sm text-yellow-200">Tmy gara 💛</p>
      </motion.div>
    </motion.div>
  </motion.div>
);

const Scene3 = () => (
  <motion.div
    className="min-h-screen flex flex-col items-center justify-center px-4"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={containerVariants}
  >
    {/* Harsh Messages with Glitch Effect */}
    <motion.div
      className="max-w-md w-full space-y-4"
      variants={containerVariants}
    >
      <motion.div
        className="bg-red-900 bg-opacity-20 rounded-lg p-4 border border-red-500 border-opacity-50"
        animate={{ textShadow: ['0 0 0px rgba(255, 107, 157, 0)', '0 0 10px rgba(255, 107, 157, 0.5)'] }}
        transition={{ duration: 0.3 }}
        variants={itemVariants}
      >
        <p className="text-sm font-bold text-red-400">Timro charitra suru din mai dekhe</p>
      </motion.div>

      <motion.div
        className="bg-red-900 bg-opacity-20 rounded-lg p-4 border border-red-500 border-opacity-50"
        animate={{ textShadow: ['0 0 0px rgba(255, 107, 157, 0)', '0 0 10px rgba(255, 107, 157, 0.5)'] }}
        transition={{ duration: 0.3, delay: 0.2 }}
        variants={itemVariants}
      >
        <p className="text-sm font-bold text-red-400">Malai yesto bolna man pardaina</p>
      </motion.div>

      <motion.div
        className="bg-black rounded-lg p-4 border-2 border-red-600"
        animate={{ scale: [1, 1.02, 1], boxShadow: ['0 0 0px rgba(255, 107, 157, 0)', '0 0 20px rgba(255, 107, 157, 0.3)', '0 0 0px rgba(255, 107, 157, 0)'] }}
        transition={{ duration: 0.5, delay: 0.4 }}
        variants={itemVariants}
      >
        <p className="text-lg font-bold text-red-500">Ma lesbian ho, block hanxu 🚫</p>
      </motion.div>

      {/* Screen Dim Effect */}
      <motion.div
        className="absolute inset-0 bg-black opacity-0 pointer-events-none"
        animate={{ opacity: 0.3 }}
        transition={{ delay: 0.8 }}
      />
    </motion.div>
  </motion.div>
);

const Scene4 = () => (
  <motion.div
    className="min-h-screen flex items-center justify-center px-4"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={containerVariants}
  >
    {/* Glassmorphism Memory Card */}
    <motion.div
      className="glass rounded-3xl p-8 max-w-2xl w-full"
      variants={itemVariants}
      whileHover={{ boxShadow: '0 0 30px rgba(255, 107, 157, 0.4)' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left Avatar */}
        <motion.div
          className="flex flex-col items-center"
          variants={itemVariants}
        >
          <motion.div
            className="w-24 h-24 rounded-full bg-gradient-to-br from-softRed to-rose opacity-30 blur-xl mb-2"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <p className="text-sm text-gray-300">Me</p>
        </motion.div>

        {/* Center Heartbeat */}
        <motion.div
          className="flex flex-col items-center justify-center"
          variants={itemVariants}
        >
          <motion.div
            className="text-6xl"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            💔
          </motion.div>
          <p className="text-xs text-gray-400 mt-2">Heartbeat Pulse</p>
        </motion.div>

        {/* Right Avatar */}
        <motion.div
          className="flex flex-col items-center"
          variants={itemVariants}
        >
          <motion.div
            className="w-24 h-24 rounded-full bg-gradient-to-br from-gold to-yellow-300 opacity-30 blur-xl mb-2"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          />
          <p className="text-sm text-gray-300">Isha</p>
        </motion.div>
      </div>

      {/* Main Message */}
      <motion.div
        className="mt-8 text-center space-y-4"
        variants={itemVariants}
      >
        <h3 className="text-2xl md:text-3xl font-bold gradient-text">
          Some goodbyes aren't meant forever.
        </h3>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          Even in moments of pain and misunderstanding, the memories we created
          together will always hold a special place in our hearts. Time heals,
          and sometimes, life takes us on different paths.
        </p>
      </motion.div>
    </motion.div>
  </motion.div>
);

const CreditsSection = () => (
  <motion.div
    className="min-h-screen flex items-center justify-center px-4 pb-20"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={containerVariants}
  >
    <motion.div
      className="text-center max-w-2xl space-y-6"
      variants={itemVariants}
    >
      <motion.div
        className="text-5xl md:text-6xl font-bold gradient-text mb-4"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ✨
      </motion.div>

      <h2 className="text-3xl md:text-4xl font-bold">Special Thanks</h2>

      <motion.p
        className="text-lg md:text-xl text-gray-300 leading-relaxed"
        variants={itemVariants}
      >
        To <span className="text-softRed font-bold">Charming</span>,
      </motion.p>

      <motion.p
        className="text-base md:text-lg text-gray-300 leading-relaxed"
        variants={itemVariants}
      >
        My beloved long-distance sister, for always standing with me,
        for sending the screenshots, for being the shoulder during the storms,
        and for reminding me that I'm not alone.
      </motion.p>

      <motion.div
        className="flex justify-center gap-3 pt-4"
        variants={itemVariants}
      >
        <motion.span
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-2xl"
        >
          🕊️
        </motion.span>
        <motion.span
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-2xl"
        >
          💜
        </motion.span>
        <motion.span
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-2xl"
        >
          ✨
        </motion.span>
      </motion.div>

      <motion.p
        className="text-xs md:text-sm text-gray-500 pt-8"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        Made with 💜 and memories | 2026
      </motion.p>
    </motion.div>
  </motion.div>
);

export default function Home() {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [particles, setParticles] = useState<number[]>([]);

  useEffect(() => {
    setParticles(Array.from({ length: 20 }, (_, i) => i));
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-deep overflow-hidden">
      {/* Background Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {particles.map((i) => (
          <Particle key={i} delay={i * 0.1} />
        ))}
      </div>

      {/* Fog Effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-softRed to-transparent opacity-10"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      {/* Audio Toggle */}
      <motion.button
        onClick={() => setIsAudioPlaying(!isAudioPlaying)}
        className="fixed top-4 right-4 z-50 glass rounded-full p-3 hover:bg-softRed hover:bg-opacity-20 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-2xl">{isAudioPlaying ? '🔊' : '🔇'}</span>
      </motion.button>

      {/* Content */}
      <AnimatePresence>
        <div className="relative z-10">
          <Scene1 />
          <Scene2 />
          <Scene3 />
          <Scene4 />
          <CreditsSection />
        </div>
      </AnimatePresence>
    </div>
  );
}
