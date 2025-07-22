export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  author?: string;
  image?: string;
  slug: string;
  featured?: boolean;
}

export const companyNews: NewsItem[] = [
  {
    id: "1",
    title: "Company News Coming Soon",
    excerpt: "We're preparing exciting updates about our company milestones, partnerships, and growth. Stay tuned for announcements about our journey in revolutionizing content-led growth.",
    content: "We're preparing exciting updates about our company milestones, partnerships, and growth. Stay tuned for announcements about our journey in revolutionizing content-led growth.",
    date: "2024-10-15",
    category: "Company Update",
    author: "The Sauce Team",
    slug: "company-news-coming-soon",
    featured: true
  },
  {
    id: "2",
    title: "Strategic Partnerships",
    excerpt: "Learn about our strategic partnerships and collaborations that help us deliver even better results for our clients in their content-led growth journey.",
    content: "Learn about our strategic partnerships and collaborations that help us deliver even better results for our clients in their content-led growth journey.",
    date: "2024-10-10",
    category: "Partnership",
    author: "The Sauce Team",
    slug: "strategic-partnerships"
  },
  {
    id: "3",
    title: "Team Expansion", 
    excerpt: "Discover how we're growing our team with top talent to better serve our clients and continue innovating in the content marketing space.",
    content: "Discover how we're growing our team with top talent to better serve our clients and continue innovating in the content marketing space.",
    date: "2024-10-05",
    category: "Team Growth",
    author: "The Sauce Team",
    slug: "team-expansion"
  }
];

export const newsCategories = [
  "All",
  "Company Update",
  "Partnership", 
  "Team Growth",
  "Product Updates",
  "Industry Recognition"
];