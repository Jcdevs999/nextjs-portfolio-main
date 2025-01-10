"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background/5 z-0" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <motion.h1 
          className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Hello, I&apos;m
          </span>
          <br />
          <span className="text-foreground">Jan Christian</span>
        </motion.h1>
        
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Fullstack Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Button size="lg" className="rounded-full px-6 py-2 text-base">
            View My Work
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 1,
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
}