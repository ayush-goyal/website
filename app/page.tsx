"use client";

import { Button } from "../components/ui/button";
import Link from "next/link";
import { Footer } from "../components/footer";
import { DotPattern } from "../components/dot-pattern";
import { PageWrapper } from "../components/page-wrapper";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const buttonHover = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95 },
};

export default function Home() {
  return (
    <main className="min-h-screen px-6 md:px-8 py-24 max-w-screen-md mx-auto">
      <DotPattern />
      <PageWrapper>
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
          <motion.div>
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
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-2">
                  <h3 className="text-base font-semibold">
                    {experience.title}
                  </h3>
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
          <motion.div className="flex flex-wrap gap-3 md:gap-4">
            {[
              { href: "/blog", text: "blog", internal: true },
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
                  <Link
                    href={link.href}
                    target={link.internal ? undefined : "_blank"}
                  >
                    {link.text}
                  </Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Footer */}
        <motion.footer variants={fadeInUp} className="mt-24 border-t">
          <Footer />
        </motion.footer>
      </PageWrapper>
    </main>
  );
}
