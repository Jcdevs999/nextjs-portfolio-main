"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Facebook } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 px-4 md:px-6 lg:px-8 bg-muted/30"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  href="yahoomail.com"
                  className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  jan_garcia06@yahoo.com
                </a>
                <div className="flex gap-3 sm:gap-4">
                  <a
                    href="https://github.com/Jcdevs999"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jan-christian-garcia-5b7525261/"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/Janchrstngrcia"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-4 sm:p-6">
              <form
                action="https://formspree.io/f/meoekvgp"
                method="POST"
                className="space-y-4"
              >
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    className="text-sm sm:text-base"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="text-sm sm:text-base"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    className="min-h-[100px] sm:min-h-[120px] text-sm sm:text-base"
                    required
                  />
                </div>
                <Button type="submit" className="w-full text-sm sm:text-base">
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}