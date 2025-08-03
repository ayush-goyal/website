import { getAllPosts } from "@/lib/blog";
import { Metadata } from "next";
import Link from "next/link";
import { DotPattern } from "@/components/dot-pattern";
import { PageWrapper } from "@/components/page-wrapper";
import {
  AnimatedSection,
  AnimatedHeader,
} from "@/components/blog/animated-section";
import { BlogPostItem } from "@/components/blog/blog-post-item";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Blog - Ayush Goyal",
  description:
    "Thoughts on software engineering, web development, and technology.",
  openGraph: {
    title: "Blog - Ayush Goyal",
    description:
      "Thoughts on software engineering, web development, and technology.",
    type: "website",
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen px-6 md:px-8 py-24 max-w-screen-md mx-auto">
      <DotPattern />

      <PageWrapper>
        {/* Header */}
        <AnimatedSection className="mb-24">
          <div className="flex items-center justify-between mb-4">
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              ← back home
            </Link>
          </div>
          <AnimatedHeader className="text-3xl font-bold mb-4">
            blog
          </AnimatedHeader>
          <p className="text-base text-muted-foreground max-w-2xl">
            thoughts on software engineering, web development, and technology.
          </p>
        </AnimatedSection>

        {/* Blog Posts */}
        <AnimatedSection>
          <div className="space-y-12">
            {posts.map((post) => (
              <BlogPostItem key={post.slug} post={post} />
            ))}
          </div>
        </AnimatedSection>

        {/* Footer */}
        <AnimatedSection className="mt-24 border-t">
          <Footer />
        </AnimatedSection>
      </PageWrapper>
    </main>
  );
}
