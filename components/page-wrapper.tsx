"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

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

export function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
      {children}
    </motion.div>
  );
}
