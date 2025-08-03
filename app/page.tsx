"use client";

import { Button } from "../components/ui/button";
import Link from "next/link";
import { ThemeToggle } from "../components/theme-toggle";
import { DateTime } from "luxon";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "next-themes";

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

const DotPattern = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -10,
        height: "100%",
        width: "100%",
        backgroundColor: "var(--background)",
        backgroundImage: isDark
          ? `radial-gradient(rgba(255, 255, 255, 0.07) 1.2px, transparent 1.2px),
           linear-gradient(to bottom, rgba(30, 30, 40, 0) 0%, rgba(20, 20, 30, 0.2) 50%, rgba(10, 10, 20, 0.5) 100%)`
          : `radial-gradient(rgba(0, 0, 0, 0.07) 1.2px, transparent 1.2px),
           linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 1))`,
        backgroundSize: "22px 22px, 100% 100%",
        backgroundPosition: "0 0, 0 0",
      }}
    />
  );
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
      className="min-h-screen px-6 md:px-8 py-24 max-w-screen-md mx-auto"
    >
      <DotPattern />
      {/* Hero Section */}
      <motion.section variants={fadeInUp} className="mb-24">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4"
        >
          ayush goyal
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-base text-muted-foreground max-w-2xl"
        >
          product engineer. currently based in nyc working @ clay.
        </motion.p>
      </motion.section>

      {/* Work Experience */}
      <motion.section variants={fadeInUp} className="mb-20">
        <motion.h2 variants={fadeInUp} className="text-xl font-semibold mb-8">
          experience
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {[
            {
              title: "software engineer",
              company: "clay",
              companyUrl: "https://clay.com",
              period: "march 2025 - present",
            },
            {
              title: "software engineer",
              company: "google photos",
              companyUrl: "https://www.google.com/intl/en_us/photos/about",
              period: "august 2023 - march 2025",
            },
            {
              title: "software engineering intern",
              company: "google photos",
              companyUrl: "https://www.google.com/intl/en_us/photos/about",
              period: "may 2022 - august 2022",
            },
            {
              title: "software engineering intern",
              company: "amazon",
              companyUrl: "https://amazon.com",
              period: "june 2021 - august 2021",
            },
            {
              title: "vehicle engineering mobile app intern",
              company: "tesla",
              companyUrl: "https://tesla.com",
              period: "march 2021 - may 2021",
            },
          ].map((experience, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="py-4"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-1 gap-2">
                <h3 className="text-base font-semibold">{experience.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {experience.period}
                </p>
              </div>
              <motion.a
                href={experience.companyUrl}
                target="_blank"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                {experience.company}
                <ArrowUpRight className="ml-0.5 h-3 w-3" />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Connect */}
      <motion.section variants={fadeInUp}>
        <motion.h2 variants={fadeInUp} className="text-xl font-semibold mb-6">
          connect
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-sm text-muted-foreground mb-6"
        >
          feel free to contact me at hello@ayushgoyal.me
        </motion.p>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-3 md:gap-4"
        >
          {[
            { href: "https://github.com/ayush-goyal", text: "github" },
            { href: "https://x.com/ayushgoyal121", text: "x" },
            {
              href: "https://www.linkedin.com/in/1ayushgoyal",
              text: "linkedin",
            },
          ].map((link, index) => (
            <motion.div
              key={index}
              variants={buttonHover}
              whileHover="hover"
              whileTap="tap"
            >
              <Button variant="outline" asChild>
                <Link href={link.href} target="_blank">
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
          className="flex flex-row items-center justify-between gap-3 md:gap-4 pt-3"
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} ayush goyal
          </p>
          <ThemeToggle />
        </motion.div>
      </motion.footer>
    </motion.main>
  );
}
