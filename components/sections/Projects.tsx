"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "PESO Project",
      description: "Unemployment Rate using Next.js, TypeScript and MongoDB.",
      image: "/assets/PESO.jpg",
      github: "#",
      live: "#",
    },
    {
      title: "Coffee Shop",
      description: "An Coffee Shop project using C# .Net winform and SQLite.",
      image: "/assets/COFFEE.jpg",
      github: "#",
      live: "#",
    },
    {
      title: "SAP Business One",
      description:
        "SAP Business One project using PHP and SQL Management System.",
      image: "/assets/JCBA.jpg", // Updated image path
      github: "#",
      live: "#",
    },
  ];

  return (
    <section className="py-16 sm:py-20 px-4 md:px-6 lg:px-8 bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                <div className="relative aspect-video">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill" // Added property to fit the image
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{project.description}</CardDescription>
                  <div className="flex gap-3 sm:gap-4 mt-4">
                    <Button size="sm" className="text-sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1.5" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}