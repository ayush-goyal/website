import { Feed } from "feed";
import { getAllPosts } from "@/lib/blog";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ayushgoyal.me";
  const posts = await getAllPosts();

  const feed = new Feed({
    title: "Ayush Goyal - Blog",
    description: "Thoughts on software engineering, web development, and technology.",
    id: baseUrl,
    link: baseUrl,
    language: "en",
    image: `${baseUrl}/favicon-32x32.png`,
    favicon: `${baseUrl}/favicon.ico`,
    copyright: `© ${new Date().getFullYear()} Ayush Goyal`,
    updated: posts.length > 0 ? new Date(posts[0].date) : new Date(),
    generator: "Next.js",
    feedLinks: {
      rss2: `${baseUrl}/feed.xml`,
    },
    author: {
      name: "Ayush Goyal",
      email: "hello@ayushgoyal.me",
      link: baseUrl,
    },
  });

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${baseUrl}/blog/${post.slug}`,
      link: `${baseUrl}/blog/${post.slug}`,
      description: post.description,
      date: new Date(post.date),
      category: post.tags.map((tag) => ({ name: tag })),
      author: [
        {
          name: "Ayush Goyal",
          email: "hello@ayushgoyal.me",
        },
      ],
    });
  });

  return new Response(feed.rss2(), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}