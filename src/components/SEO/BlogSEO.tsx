import EnhancedSEOHead from './EnhancedSEOHead';
import { organizationSchema } from '@/data/structured-data';

interface BlogSEOProps {
  title: string;
  description: string;
  author: string;
  publishedDate: string;
  modifiedDate?: string;
  category: string;
  tags: string[];
  slug: string;
  image?: string;
  content?: string;
}

const BlogSEO = ({
  title,
  description,
  author,
  publishedDate,
  modifiedDate,
  category,
  tags,
  slug,
  image = "https://www.extrasauceagency.com/og-image.png",
  content
}: BlogSEOProps) => {
  const canonicalUrl = `https://www.extrasauceagency.com/resources/blogs/${slug}`;
  const fullTitle = `${title} | Extra Sauce Agency Blog`;
  
  // Create article structured data
  const articleSchema = {
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image,
    "datePublished": publishedDate,
    "dateModified": modifiedDate || publishedDate,
    "author": {
      "@type": "Person",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Extra Sauce Agency",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.extrasauceagency.com/sauce.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    },
    "articleSection": category,
    "keywords": tags.join(', '),
    "url": canonicalUrl
  };

  // Create breadcrumb schema
  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.extrasauceagency.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Resources",
        "item": "https://www.extrasauceagency.com/resources"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Blog",
        "item": "https://www.extrasauceagency.com/resources/blogs"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": title,
        "item": canonicalUrl
      }
    ]
  };

  const structuredData = [
    organizationSchema,
    articleSchema,
    breadcrumbSchema
  ];

  const keywords = [
    ...tags,
    "B2B marketing",
    "founder-led marketing",
    "content marketing",
    "SaaS growth",
    category.toLowerCase()
  ];

  return (
    <EnhancedSEOHead
      title={fullTitle}
      description={description}
      keywords={keywords}
      ogImage={image}
      canonicalUrl={canonicalUrl}
      type="article"
      structuredData={structuredData}
      author={author}
      publishedTime={publishedDate}
      modifiedTime={modifiedDate}
      section={category}
      tags={tags}
    />
  );
};

export default BlogSEO;