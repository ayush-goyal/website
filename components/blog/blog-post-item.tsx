"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { BlogPostMeta } from "@/lib/blog-types";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Format date function that works on client-side
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

interface BlogPostItemProps {
  post: BlogPostMeta;
}

export function BlogPostItem({ post }: BlogPostItemProps) {
  return (
    <motion.article
      variants={fadeInUp}
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
      className="group"
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-2">
          <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
            {post.title}
          </h2>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span>{formatDate(post.date)}</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {Math.ceil(post.readingTime.minutes)} min read
            </span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-3">
          {post.description}
        </p>
        <div className="flex items-center gap-2 flex-wrap">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-md"
            >
              {tag}
            </span>
          ))}
          <span className="text-sm text-primary inline-flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
            read more
            <ArrowUpRight className="ml-0.5 h-3 w-3" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}