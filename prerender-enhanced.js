import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

// Enhanced prerendering with route-specific meta data
const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')

// Import the render function
const { render } = await import('./dist/server/entry-server.js')

// Define routes with their metadata
const routesToPrerender = [
  {
    path: '/',
    title: 'Extra Sauce Agency | Unleash Growth with Founder-Led Marketing for B2B SaaS',
    description: 'Drive your B2B SaaS startup\'s growth with Extra Sauce Agency\'s unique Founder-Led Marketing strategy. Build authentic connections, enhance your brand\'s credibility, and generate demand by leveraging your founder\'s insights.',
    priority: '1.0',
    changefreq: 'weekly'
  },
  {
    path: '/the-sauce-recipe',
    title: 'The SAUCE Recipe™ | Content Marketing Framework | Extra Sauce Agency',
    description: 'Discover the SAUCE Recipe™ - our proven framework for content-led growth that helps B2B SaaS founders build authority and generate qualified leads.',
    priority: '0.9',
    changefreq: 'monthly'
  },
  {
    path: '/services/executive-ghostwriting',
    title: 'Executive Ghostwriting Services | Thought Leadership Content | Extra Sauce Agency',
    description: 'Get high-quality thought leadership narrative-driven content created for you to build a realm of influence and establish your expertise in the B2B SaaS space.',
    priority: '0.9',
    changefreq: 'monthly'
  },
  {
    path: '/services/video-content-engine',
    title: 'Video Content Engine | B2B Video Marketing | Extra Sauce Agency',
    description: 'Get a consistent video engine to position yourself as a thought leader and stay top of mind with your audience through strategic video content.',
    priority: '0.9',
    changefreq: 'monthly'
  },
  {
    path: '/services/content-led-gtm-coaching',
    title: 'Content-Led GTM Coaching | Marketing Strategy | Extra Sauce Agency',
    description: 'Get consulting to build a pipeline-generating content engine & get your company ready for market with our proven GTM strategies.',
    priority: '0.9',
    changefreq: 'monthly'
  },
  {
    path: '/book-strategy-call',
    title: 'Book a Strategy Call | Free Consultation | Extra Sauce Agency',
    description: 'Book a free strategy call to discover how founder-led marketing can accelerate your B2B SaaS growth and generate qualified leads.',
    priority: '0.8',
    changefreq: 'weekly'
  },
  {
    path: '/success-stories',
    title: 'Success Stories | Client Results | Extra Sauce Agency',
    description: 'See how our founder-led marketing strategies have helped B2B SaaS companies achieve remarkable growth and generate qualified leads.',
    priority: '0.8',
    changefreq: 'monthly'
  },
  {
    path: '/resources/blogs',
    title: 'Blog | B2B Marketing Insights | Extra Sauce Agency',
    description: 'Read the latest insights on B2B marketing, founder-led growth strategies, and content marketing best practices.',
    priority: '0.7',
    changefreq: 'weekly'
  },
  {
    path: '/resources/newsletters',
    title: 'Newsletter | Weekly Content-Led GTM Report | Extra Sauce Agency',
    description: 'Subscribe to our weekly newsletter for the latest content-led growth strategies, marketing insights, and B2B SaaS growth tips.',
    priority: '0.6',
    changefreq: 'weekly'
  },
  {
    path: '/resources/company-news',
    title: 'Company News | Latest Updates | Extra Sauce Agency',
    description: 'Stay updated with the latest news, partnerships, and milestones from Extra Sauce Agency.',
    priority: '0.6',
    changefreq: 'monthly'
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | Extra Sauce Agency',
    description: 'Read our privacy policy to understand how we collect, use, and protect your personal information.',
    priority: '0.3',
    changefreq: 'yearly'
  },
  {
    path: '/terms-of-service',
    title: 'Terms of Service | Extra Sauce Agency',
    description: 'Read our terms of service to understand the conditions for using our website and services.',
    priority: '0.3',
    changefreq: 'yearly'
  }
]

// Function to inject meta tags into HTML
const injectMetaTags = (html, route) => {
  let modifiedHtml = html
  
  // Update title
  modifiedHtml = modifiedHtml.replace(
    /<title>.*?<\/title>/i,
    `<title>${route.title}</title>`
  )
  
  // Update or add meta description
  const descriptionRegex = /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i
  if (descriptionRegex.test(modifiedHtml)) {
    modifiedHtml = modifiedHtml.replace(
      descriptionRegex,
      `<meta name="description" content="${route.description}">`
    )
  } else {
    modifiedHtml = modifiedHtml.replace(
      /<head>/i,
      `<head>\n    <meta name="description" content="${route.description}">`
    )
  }
  
  // Add Open Graph tags
  const ogTags = `
    <meta property="og:title" content="${route.title}">
    <meta property="og:description" content="${route.description}">
    <meta property="og:url" content="https://www.extrasauceagency.com${route.path}">
    <meta property="og:type" content="website">
    <meta property="og:image" content="https://www.extrasauceagency.com/og-image.png">
    <meta property="og:site_name" content="Extra Sauce Agency">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${route.title}">
    <meta name="twitter:description" content="${route.description}">
    <meta name="twitter:image" content="https://www.extrasauceagency.com/og-image.png">
    <link rel="canonical" href="https://www.extrasauceagency.com${route.path}">`
  
  modifiedHtml = modifiedHtml.replace(
    /<\/head>/i,
    `${ogTags}\n  </head>`
  )
  
  return modifiedHtml
}

// Generate sitemap.xml
const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routesToPrerender.map(route => `  <url>
    <loc>https://www.extrasauceagency.com${route.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  fs.writeFileSync(toAbsolute('dist/sitemap.xml'), sitemap)
  console.log('Generated: sitemap.xml')
}

// Generate robots.txt
const generateRobotsTxt = () => {
  const robots = `User-agent: *
Allow: /

Sitemap: https://www.extrasauceagency.com/sitemap.xml

# Block access to admin areas
Disallow: /admin/
Disallow: /private/
Disallow: /_next/
Disallow: /api/

# Allow all other content
Allow: /`

  fs.writeFileSync(toAbsolute('dist/robots.txt'), robots)
  console.log('Generated: robots.txt')
}

// Main prerendering process
;(async () => {
  try {
    for (const route of routesToPrerender) {
      const appHtml = render(route.path)
      let html = template.replace(`<!--app-html-->`, appHtml)
      
      // Inject route-specific meta tags
      html = injectMetaTags(html, route)
      
      const filePath = route.path === '/' ? 'dist/index.html' : `dist${route.path}.html`
      
      // Create directory if it doesn't exist
      const dir = path.dirname(toAbsolute(filePath))
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
      }
      
      fs.writeFileSync(toAbsolute(filePath), html)
      console.log('Pre-rendered:', filePath)
    }
    
    // Generate additional SEO files
    generateSitemap()
    generateRobotsTxt()
    
    console.log('✅ Enhanced prerendering completed successfully!')
    
  } catch (error) {
    console.error('❌ Prerendering failed:', error)
    process.exit(1)
  }
})()