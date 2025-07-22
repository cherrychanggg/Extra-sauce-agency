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
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Content-Led Growth",
    excerpt: "Discover how content-led strategies are reshaping B2B marketing and driving unprecedented growth for forward-thinking companies.",
    content: "Coming soon - insightful content about content-led growth strategies.",
    author: "The Sauce Team",
    date: "2024-10-15",
    category: "Strategy",
    tags: ["content marketing", "growth", "B2B"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
    slug: "future-of-content-led-growth",
    featured: true
  },
  {
    id: "2", 
    title: "Building Executive Thought Leadership",
    excerpt: "Learn how to transform your executive team into industry thought leaders through strategic content creation.",
    content: "More great content coming your way soon.",
    author: "The Sauce Team",
    date: "2024-10-10",
    category: "Leadership",
    tags: ["executive", "thought leadership", "content"],
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop",
    slug: "building-executive-thought-leadership"
  },
  {
    id: "3",
    title: "Video Content That Converts",
    excerpt: "Stay tuned for expert insights and case studies on creating video content that drives real business results.",
    content: "Stay tuned for expert insights and case studies.",
    author: "The Sauce Team", 
    date: "2024-10-05",
    category: "Video Marketing",
    tags: ["video", "conversion", "marketing"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
    slug: "video-content-that-converts"
  }
];

export const blogCategories = [
  "All",
  "Strategy",
  "Leadership", 
  "Video Marketing",
  "Case Studies",
  "Industry Insights"
];