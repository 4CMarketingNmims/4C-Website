'use client';
import Image from "next/image";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Button as MovingBorderButton } from '../ui/moving-border';
import { MoveRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const words = ['Connect', 'Collect', 'Contest', 'Commence'];

export function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayText, setDisplayText] = useState('');
  const heroRef = useRef<HTMLElement>(null);
  
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 400], [1, 0.7]);
  const y = useTransform(scrollY, [0, 400], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  // Typing animation effect
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      // Typing animation
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, 120);
      } else {
        // Wait before starting to delete
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1800);
      }
    } else {
      // Deleting animation
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 80);
      } else {
        // Move to next word
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentWordIndex]);

  return (
    <motion.section
  ref={heroRef}
  style={{ scale, y, opacity }}
  className="
    relative
    min-h-screen
    flex
    items-center
    justify-center
    text-white
    overflow-hidden
    pt-28
  "
>
      

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center min-h-[85vh] relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
className="
glass-card
w-full
max-w-5xl
p-6
sm:p-8
md:p-12
lg:p-16
rounded-3xl
relative
overflow-hidden
border
border-white/10
bg-black/10
backdrop-blur-sm
shadow-[0_0_60px_rgba(68,154,249,0.08)]
"        >
          {/* Floating Background Elements */}
          <div className="absolute top-4 left-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-8 right-6 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-accent/10 rounded-full blur-xl animate-pulse delay-1000" />
          <div className="absolute bottom-6 left-8 w-10 h-10 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-primary/10 rounded-full blur-xl animate-pulse delay-2000" />
          <div className="absolute bottom-8 right-4 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-accent/10 rounded-full blur-xl animate-pulse delay-500" />

          <div className="text-center space-y-6 sm:space-y-8 relative z-10">
            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-headline font-extrabold tracking-tighter leading-tight"
            >
              Welcome to{' '}
              <span className="inline-block align-middle">
                <Image src="/4clogo.webp" alt="4C Logo" width={180} height={180} className="h-[1.5em] w-auto inline align-middle drop-shadow-lg" priority />
              </span>
            </motion.h1>

            {/* Animated Typing Text */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="h-12 sm:h-14 md:h-16 lg:h-20 flex items-center justify-center"
            >
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-foreground/90 min-h-[1.2em] flex items-center">
                {displayText}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-accent ml-1"
                >
                  |
                </motion.span>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed px-4"
            >
              Where creativity meets technology to redefine marketing for the digital age.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="pt-4 sm:pt-6"
            >
              <MovingBorderButton
                as={Link}
                href="/team#results"
                className="bg-slate-900/90 hover:bg-slate-800/90 text-white font-bold text-sm sm:text-base md:text-lg px-6 py-3 sm:px-8 sm:py-4"
                containerClassName="w-fit mx-auto"
                borderClassName="bg-[radial-gradient(var(--aurora-blue)_40%,transparent_60%)]"
              >
                View Core Recruitment Results <MoveRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </MovingBorderButton>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <div className="w-0.5 h-2 sm:w-1 sm:h-3 bg-white/50 rounded-full mt-1.5 sm:mt-2" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
