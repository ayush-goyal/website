import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { DateTime } from "luxon";

export default function Home() {
  const currentYear = DateTime.now().year;

  return (
    <main className="min-h-screen bg-background px-4 py-24 max-w-screen-md mx-auto">
      {/* Hero Section */}
      <section className="mb-24">
        <h1 className="text-3xl font-bold mb-4">Ayush Goyal</h1>
        <p className="text-base text-muted-foreground max-w-2xl">
          I love building new products. Currently based in NYC working @ Google
          Photos.
        </p>
      </section>

      {/* Work Experience */}
      <section className="mb-24">
        <h2 className="text-xl font-semibold mb-8">Experience</h2>
        <div className="space-y-8">
          <div>
            <div className="flex justify-between mb-2">
              <h3 className="text-base font-semibold">Software Engineer</h3>
              <p className="text-sm text-muted-foreground">
                August 2023 - Present
              </p>
            </div>
            <p className="text-sm text-muted-foreground">Google Photos</p>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <h3 className="text-base font-semibold">
                Software Engineering Intern
              </h3>
              <p className="text-sm text-muted-foreground">
                May 2022 - August 2022
              </p>
            </div>
            <p className="text-sm text-muted-foreground">Google Photos</p>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <h3 className="text-base font-semibold">
                Software Engineering Intern
              </h3>
              <p className="text-sm text-muted-foreground">
                June 2021 - August 2021
              </p>
            </div>
            <p className="text-sm text-muted-foreground">Amazon</p>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <h3 className="text-base font-semibold">
                Vehicle Engineering Mobile App Intern
              </h3>
              <p className="text-sm text-muted-foreground">
                March 2021 - May 2021
              </p>
            </div>
            <p className="text-sm text-muted-foreground">Tesla</p>
          </div>
        </div>
      </section>

      {/* Connect */}
      <section>
        <h2 className="text-xl font-semibold mb-8">Connect</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Feel free to contact me at hello@ayushgoyal.me
        </p>
        <div className="flex gap-4">
          <Button variant="outline" asChild>
            <Link
              href="https://github.com/ayush-goyal"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link
              href="https://x.com/ayushgoyal121"
              target="_blank"
              rel="noreferrer"
            >
              X
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link
              href="https://www.linkedin.com/in/1ayushgoyal"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 border-t">
        <div className="container flex flex-row items-center justify-between gap-4 pt-3">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Ayush Goyal
          </p>
          <ThemeToggle />
        </div>
      </footer>
    </main>
  );
}
