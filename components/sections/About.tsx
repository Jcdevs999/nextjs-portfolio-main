"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { User, Code, Palette } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <User className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Who I Am",
      description:
        "A web developer passionate about crafting visually appealing and user-friendly web experiences.",
    },
    {
      icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "What I Do",
      description:
        "I create modern web applications by leveraging the latest technologies and industry best practices.",
    },
    {
      icon: <Palette className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "My Approach",
      description:
        "I blend creativity with technical expertise to deliver outstanding results.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 px-4 md:px-6 lg:px-8 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card className="p-4 sm:p-6 h-full hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="p-2 sm:p-3 bg-primary/10 rounded-full mb-3 sm:mb-4">
                    {card.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{card.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}