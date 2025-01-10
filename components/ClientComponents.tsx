"use client";

import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./sections/Hero"), { ssr: false });
const About = dynamic(() => import("./sections/About"), { ssr: false });
const Projects = dynamic(() => import("./sections/Projects"), { ssr: false });
const Skills = dynamic(() => import("./sections/Skills"), { ssr: false });
const Contact = dynamic(() => import("./sections/Contact"), { ssr: false });

export default function ClientComponents() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
