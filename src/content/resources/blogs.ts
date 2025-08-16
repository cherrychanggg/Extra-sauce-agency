import { futureBlogPost } from "../blogposts/future-of-content-led-growth";
import { executiveBlogPost } from "../blogposts/building-executive-thought-leadership";
import { videoBlogPost } from "../blogposts/video-content-that-converts";
import { newBlogPost } from "../blogposts/founder-led-marketing";
import { trendBlogPost } from "../blogposts/founder-led-marketing-101";
import { insightBlogPost } from "../blogposts/linkedin-led-generation";
import { marketingBlogPost } from "../blogposts/b2b-content-marketing";
import { masterOnePlatformBlogPost } from "../blogposts/master-one-platform";
import { b2bContentBlogPost} from "../blogposts/b2b-content-engine-win-buy-in";
import { storytellingBlogPost} from "../blogposts/storytelling-in-b2b-marketing";

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
  futureBlogPost,
  executiveBlogPost,
  videoBlogPost,
  newBlogPost,
  trendBlogPost,
  insightBlogPost,
  marketingBlogPost,
  masterOnePlatformBlogPost,
  b2bContentBlogPost,
  storytellingBlogPost
];

export const blogCategories = [
  "All",
  "Strategy",
  "Leadership", 
  "Video Marketing",
  "Case Studies",
  "Industry Insights"
];

export function getPostsByCategory(category: string): BlogPost[] {
  if (category === "All") return blogPosts;
  return blogPosts.filter(post => post.category === category);
}