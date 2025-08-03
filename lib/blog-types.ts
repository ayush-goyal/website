export interface BlogPost {
  slug: string
  title: string
  date: string
  description: string
  keywords: string[]
  tags: string[]
  content: string
  contentHtml: string
  readingTime: {
    text: string
    minutes: number
    time: number
    words: number
  }
}

export interface BlogPostMeta {
  slug: string
  title: string
  date: string
  description: string
  keywords: string[]
  tags: string[]
  readingTime: {
    text: string
    minutes: number
  }
}