"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function DotPattern() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={cn(
        "fixed inset-0 -z-10 h-full w-full",
        "bg-background",
        // Light mode background
        "bg-[radial-gradient(rgba(0,0,0,0.07)_1.2px,transparent_1.2px),linear-gradient(to_right,rgba(255,255,255,0.9),rgba(255,255,255,1))]",
        // Dark mode background
        "dark:bg-[radial-gradient(rgba(255,255,255,0.07)_1.2px,transparent_1.2px),linear-gradient(to_bottom,rgba(30,30,40,0)_0%,rgba(20,20,30,0.2)_50%,rgba(10,10,20,0.5)_100%)]",
        // Background size for both modes
        "bg-[length:22px_22px,100%_100%]",
        "bg-[position:0_0,0_0]"
      )}
    />
  );
}