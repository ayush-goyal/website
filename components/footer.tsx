"use client";

import { ThemeToggle } from "./theme-toggle";
import { DateTime } from "luxon";

export function Footer() {
  const currentYear = DateTime.now().year;

  return (
    <div className="flex flex-row items-center justify-between gap-3 md:gap-4 pt-3">
      <p className="text-sm text-muted-foreground">
        © {currentYear} ayush goyal
      </p>
      <ThemeToggle />
    </div>
  );
}