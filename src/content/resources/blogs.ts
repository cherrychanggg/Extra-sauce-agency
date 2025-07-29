import { futureBlogPost } from "../blogposts/future-of-content-led-growth";
import { executiveBlogPost } from "../blogposts/building-executive-thought-leadership";
import { videoBlogPost } from "../blogposts/video-content-that-converts";
import { masteringB2BContentStrategy } from "../blogposts/mastering-b2b-content-strategy";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  image?: string;
  slug: string;
  featured?: boolean;
  readTime?: string;
}

export const blogPosts: BlogPost[] = [
  masteringB2BContentStrategy,
  futureBlogPost,
  executiveBlogPost,
  videoBlogPost
];

export const blogCategories = [
  "All",
  "Strategy",
  "Leadership", 
  "Video Marketing",
  "Content Marketing",
  "Case Studies",
  "Industry Insights"
];