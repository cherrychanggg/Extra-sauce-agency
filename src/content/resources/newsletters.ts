export interface Newsletter {
  id: string;
  title: string;
  description: string;
  frequency: string;
  subscribeUrl?: string;
  benefits: string[];
  featured?: boolean;
}

export interface NewsletterContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    launchDate: string;
  };
  benefits: string[];
  form: {
    title: string;
    fields: {
      email: {
        label: string;
        placeholder: string;
        required: boolean;
      };
      firstName: {
        label: string;
        placeholder: string;
        required: boolean;
      };
      lastName: {
        label: string;
        placeholder: string;
        required: boolean;
      };
      hearAbout: {
        label: string;
        placeholder: string;
        required: boolean;
      };
    };
    submitButton: string;
    webflowNote: string;
  };
}

export const newsletters: Newsletter[] = [
  {
    id: "weekly-gtm-report",
    title: "Weekly Content-Led GTM Report",
    description: "Once a week, we'll send you a 5-minute read with proven executive content tactics to help you drive qualified pipeline for your company.",
    frequency: "Weekly",
    benefits: [
      "Tactical GTM breakdowns from real campaigns",
      "Founder-led plays that are working right now", 
      "Behind-the-scenes execution we don't share anywhere else"
    ],
    featured: true
  }
];

export const newsletterPageContent: NewsletterContent = {
  hero: {
    title: "SUBSCRIBE TO THE WEEKLY CONTENT-LED GTM REPORT.",
    subtitle: "First Issue Drops October — Join the List",
    description: "Once a week, we'll send you a 5-minute read with proven executive content tactics to help you drive qualified pipeline for your company.",
    launchDate: "October"
  },
  benefits: [
    "Tactical GTM breakdowns from real campaigns",
    "Founder-led plays that are working right now",
    "Behind-the-scenes execution we don't share anywhere else"
  ],
  form: {
    title: "Subscribe Now",
    fields: {
      email: {
        label: "EMAIL *",
        placeholder: "123@hotmail.com",
        required: true
      },
      firstName: {
        label: "FIRST NAME *", 
        placeholder: "123",
        required: true
      },
      lastName: {
        label: "LAST NAME *",
        placeholder: "",
        required: true
      },
      hearAbout: {
        label: "HOW DID YOU HEAR ABOUT US?",
        placeholder: "123",
        required: false
      }
    },
    submitButton: "SUBSCRIBE",
    webflowNote: "[Webflow Form Placeholder - Replace with actual Webflow embed code]"
  }
};