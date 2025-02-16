"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { DateTime } from "luxon";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const buttonHover = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95 },
};

export default function Home() {
  const currentYear = DateTime.now().year;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-12 h-12 rounded-full border-4 border-primary"
        />
      </div>
    );
  }

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="min-h-screen bg-background px-4 py-24 max-w-screen-md mx-auto"
    >
      {/* Hero Section */}
      <motion.section variants={fadeInUp} className="mb-24">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4"
        >
          Ayush Goyal
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-base text-muted-foreground max-w-2xl"
        >
          I love building new products. Currently based in NYC working @ Google
          Photos.
        </motion.p>
      </motion.section>

      {/* Work Experience */}
      <motion.section variants={fadeInUp} className="mb-24">
        <motion.h2 variants={fadeInUp} className="text-xl font-semibold mb-8">
          Experience
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {[
            {
              title: "Software Engineer",
              company: "Google Photos",
              period: "August 2023 - Present",
            },
            {
              title: "Software Engineering Intern",
              company: "Google Photos",
              period: "May 2022 - August 2022",
            },
            {
              title: "Software Engineering Intern",
              company: "Amazon",
              period: "June 2021 - August 2021",
            },
            {
              title: "Vehicle Engineering Mobile App Intern",
              company: "Tesla",
              period: "March 2021 - May 2021",
            },
          ].map((experience, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex justify-between mb-2">
                <h3 className="text-base font-semibold">{experience.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {experience.period}
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                {experience.company}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Connect */}
      <motion.section variants={fadeInUp}>
        <motion.h2 variants={fadeInUp} className="text-xl font-semibold mb-8">
          Connect
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-sm text-muted-foreground mb-6"
        >
          Feel free to contact me at hello@ayushgoyal.me
        </motion.p>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex gap-4"
        >
          {[
            { href: "https://github.com/ayush-goyal", text: "Github" },
            { href: "https://x.com/ayushgoyal121", text: "X" },
            {
              href: "https://www.linkedin.com/in/1ayushgoyal",
              text: "LinkedIn",
            },
          ].map((link, index) => (
            <motion.div
              key={index}
              variants={buttonHover}
              whileHover="hover"
              whileTap="tap"
            >
              <Button variant="outline" asChild>
                <Link href={link.href} target="_blank" rel="noreferrer">
                  {link.text}
                </Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Footer */}
      <motion.footer variants={fadeInUp} className="mt-24 border-t">
        <motion.div
          variants={fadeInUp}
          className="container flex flex-row items-center justify-between gap-4 pt-3"
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} Ayush Goyal
          </p>
          <ThemeToggle />
        </motion.div>
      </motion.footer>
    </motion.main>
  );
}
