// Success stories/case studies content for easy editing by non-technical users
export interface SuccessStory {
  id: string;
  title: string;
  summary: string;
  image: string; // Path to image in public/
  author: string;
  authorRole?: string;
  detailed: string;
}

export const successStories: SuccessStory[] = [
  {
    id: "goalcast-16m-views",
    title: "16M Views and $124K Revenue in 5 Months for Global Media Brand",
    summary: "We generated 16M+ views, 400K+ followers and $124K in revenue in 5 months for a media giant.",
    image: "/study3.png",
    author: "Manny Jassal",
    authorRole: "CEO",
    detailed: `We helped Goalcast launch an episodic video series and scale their YouTube presence fast—growing their main channel from 120K to 500K+ followers, and a brand-new secondary channel from 0 to 60K. In just 5 months, our content creation and distribution strategy drove 16M+ views and $124K+ in ad revenue. The collaboration with top-tier creators gave us a front-row seat to world-class content execution—and now, we bring that same caliber to B2B.`
  },
  {
    id: "psii-428k-arr",
    title: "PSII Adds $428K ARR from Founder-Led Marketing",
    summary: "We landed PSII a $2B+ enterprise client through founder-led marketing.",
    image: "/study2.png",
    author: "Manny Jassal",
    authorRole: "CEO",
    detailed: `PSII was burning budget on paid ads and wasting sales time on unqualified demos. We launched a Video Content Engine that positioned their leadership as trusted voices on LinkedIn. Within 8 months, they added $428K in pipeline and booked 16+ qualified meetings per month.`
  },
  {
    id: "rebrand-content-strategy",
    title: "Rebrand + Content Strategy Unlocks B2B Pipeline",
    summary: "We revamped the whole brand identity and built pipeline through strategic content.",
    image: "/study1.png",
    author: "Manny Jassal",
    authorRole: "CEO",
    detailed: `True Ally needed clarity in their messaging and a consistent way to drive demand. Through strategic rebranding, messaging refinement, and a thought leadership content engine on LinkedIn, we helped package their offer, craft a compelling narrative, and generate pipeline with content that resonated.`
  }
]; 