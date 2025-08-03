import { getPostBySlug, getAllPosts, formatDate } from "@/lib/blog";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { DotPattern } from "@/components/dot-pattern";
import { PageWrapper } from "@/components/page-wrapper";
import {
  AnimatedSection,
  AnimatedHeader,
} from "@/components/blog/animated-section";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found - Ayush Goyal",
    };
  }

  return {
    title: `${post.title} - Ayush Goyal`,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["Ayush Goyal"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen px-6 md:px-8 py-24 max-w-screen-md mx-auto">
      <DotPattern />

      <PageWrapper>
        {/* Header */}
        <AnimatedSection className="mb-12">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            back to blog
          </Link>

          <AnimatedHeader className="text-3xl md:text-4xl font-bold mb-4">
            {post.title}
          </AnimatedHeader>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {Math.ceil(post.readingTime.minutes)} min read
            </span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </AnimatedSection>

        {/* Content - Server-rendered HTML */}
        <AnimatedSection>
          <article
            className="prose prose-neutral dark:prose-invert prose-sm md:prose-base max-w-none"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </AnimatedSection>

        {/* Footer */}
        <AnimatedSection className="mt-24 border-t">
          <Footer />
        </AnimatedSection>
      </PageWrapper>
    </main>
  );
}
