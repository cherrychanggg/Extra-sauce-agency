export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  location: string;
  author?: string;
  image?: string;
  slug: string;
  featured?: boolean;
}

import { extraSauceLeavesNews } from "../companynews/extra-sauce-leaves-dtc-world";
import { sauceRecipeNews } from "../companynews/introducing-sauce-recipe";
import { acceleratorNews } from "../companynews/extra-sauce-joins-accelerators";
import { remiNews } from "../companynews/meet-remi-ai-agent";

export const companyNews: NewsItem[] = [
  extraSauceLeavesNews,
  sauceRecipeNews,
  acceleratorNews,
  remiNews
];

export const newsCategories = [
  "All",
  "Company Update",
  "Partnership", 
  "Team Growth",
  "Product Updates",
  "Industry Recognition"
];