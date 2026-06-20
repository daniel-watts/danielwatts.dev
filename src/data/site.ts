/**
 * ─────────────────────────────────────────────────────────────────────────
 *  EDIT YOUR CONTENT HERE
 * ─────────────────────────────────────────────────────────────────────────
 *  This is the single source of truth for everything on the site: your name,
 *  bio, experience, projects, skills, and contact links. Change the values
 *  below and the whole site updates. No need to touch the components.
 */

export const site = {
  /** Used in <title>, the logo, structured data, and copyright. */
  name: "Daniel Watts",
  /** Short professional title shown under your name. */
  role: "Web Developer",
  /** Production URL (also set in astro.config.mjs `site`). */
  url: "https://danielwatts.dev",
  /** One-sentence description used for SEO and social previews. */
  description:
    "Full-stack web developer with an extensive portfolio spanning custom CMS platforms, media-player web apps, live broadcasting systems, and UI/UX across many technologies.",
  /** Where you're based — shown in the hero and structured data. */
  location: "London, UK",
  /**
   * Social/contact preview image, relative to /public.
   * Recommended size: 1200×630px. Replace with your own image.
   */
  ogImage: "/og-image.svg",
};

/** The big intro at the top of the page. */
export const hero = {
  /** A short, punchy headline. */
  headline: "Full-stack web developer — apps, UI/UX, and media.",
  /** A sentence or two expanding on the headline. */
  subhead:
    "I build custom platforms, media-player web apps, and live broadcasting systems end to end, from design through to deployment.",
  /** Call-to-action buttons. */
  primaryCta: { label: "View my work", href: "#projects" },
  secondaryCta: { label: "Get in touch", href: "#contact" },
};

/** The "About" section. Each string is a paragraph. */
export const about = {
  heading: "About me",
  paragraphs: [
    "I'm a full-stack web developer with an extensive portfolio spanning design and development across many platforms and technologies. I've built custom CMS platforms, media-player web apps, live-events and broadcasting systems, and admin tools — owning projects end to end from UI/UX through to back-end integration.",
    "Much of my work has centred on streaming and audio media: on-demand and live video, large audio libraries, and the back-end systems and third-party integrations (AWS, JW Player/JW Platform, REST APIs) that make them scale.",
    "I'm currently exploring Progressive Web Apps and modern JavaScript frameworks — Angular, Node.js, React, and Vue — for personal projects.",
  ],
};

/** Work experience, most recent first. */
export const experience = [
  {
    role: "Senior Web Developer",
    company: "Example Studio",
    companyUrl: "https://example.com",
    period: "2022 — Present",
    summary:
      "Lead front-end development for client projects, mentoring junior developers and setting standards for accessibility and performance.",
    highlights: [
      "Cut average page load time by 40% across the main client portfolio.",
      "Established an accessibility checklist now used company-wide.",
      "Built a reusable component library that sped up project delivery.",
    ],
  },
  {
    role: "Web Developer",
    company: "Another Company",
    companyUrl: "https://example.com",
    period: "2019 — 2022",
    summary:
      "Built and maintained marketing sites and internal tools for a fast-growing SaaS company.",
    highlights: [
      "Migrated a legacy site to a modern static-site stack.",
      "Implemented automated testing that reduced regressions.",
      "Collaborated closely with design to ship pixel-accurate UIs.",
    ],
  },
  {
    role: "Junior Developer",
    company: "First Job Ltd.",
    companyUrl: "https://example.com",
    period: "2017 — 2019",
    summary:
      "Started my career building responsive websites for small businesses.",
    highlights: [
      "Delivered 20+ responsive websites for local businesses.",
      "Learned the fundamentals of HTML, CSS, JavaScript, and Git.",
    ],
  },
];

/**
 * Past projects, most recent first. Pulled from the original portfolio.
 * `description` and `tech` may be empty for older work; the card falls back
 * to the `category` line. `image` is relative to /public.
 */
export const projects = [
  {
    title: "Reporting Dashboard",
    category: "Back-office web app",
    date: "July 2019",
    image: "/images/ocep-kpi-reporting-dashboard.jpg",
    description: "Administrative analytics reporting dashboard developed for the Sounds True Online Courses and Events platform. Custom single page web app UI developed within the WordPress admin framework.",
    tech: ["PHP", "JS/AJAX/jQuery", "WordPress", "MySQL", "HTML", "CSS"],
  },
  {
    title: "Timed Event Player",
    category: "JS video player",
    date: "April 2019",
    image: "/images/timed-event-player.jpg",
    description: "Embeddable streaming media player played specific content at specific times of day. Displayed what was coming up next alongside a timer to show when it would start. After each timed-play ended the content would be made available for on-demand playback for 24 hours.",
    tech: ["JS/AJAX/jQuery", "JS Date()", "AWS S3", "AWS CloudFront", "JW Player", "HTML", "CSS"],
  },
  {
    title: "Courses Migration Tool",
    category: "Back-office web app",
    date: "January 2019",
    image: "/images/ocep-courses-migration-tool.jpg",
    description: "Back-office administrative tool built to migrate courses and their user data from one platform to another. Designed to be used by front-end developers re-working assets for each course so they could have full control of the migration and re-launch process.",
    tech: ["PHP", "JS/AJAX/jQuery", "WordPress", "MySQL", "REST", "Magento API"],
  },
  {
    title: "Courses CMS",
    category: "Platform design and development",
    date: "October 2017",
    image: "/images/ocep-courses-platform.jpg",
    featured: true,
    description: "A custom-built courses and events CMS featuring on-demand media, live broadcasting, timed content access, interactive widgets and fully configurable layouts and styles.",
    tech: ["PHP", "JS/AJAX/jQuery", "HTML", "CSS", "WordPress", "MySQL", "REST", "Magento API", "AWS S3", "AWS CloudFront", "JW Player", "SVG", "RTMP Streaming", "GoToTrainging API", "Adobe Creative Suite", "Wirecast"],
  },
  {
    title: "JW Cloud Player",
    category: "Systems and process integration",
    date: "July 2017",
    image: "/images/jw-platform.jpg",
    featured: true,
    description: "Integrated the streaming and transcoding media management service JW Cloud Platform into all Sounds True websites and digital products and helped develop a complete end-to-end workflow for live broadcasting and on-demand media management.",
    tech: ["PHP", "JS", "JW Platform API", "JW Player API", "AWS S3", "AWS CloudFront", "HTML", "CSS"],
  },
  {
    title: "Evergreen Funnels",
    category: "Automated sales pages",
    date: "September 2016",
    image: "/images/evergreen-funnels.jpg",
    description: "",
    tech: [],
  },
  {
    title: "Journeys Platform",
    category: "Audio course web apps",
    date: "August 2016",
    image: "/images/journeys-platform.jpg",
    featured: true,
    description: "A single-page web app for listening to daily audio lessons. Driven by a remote API this was the web version of the app which also had a native iOS twin.",
    tech: ["JS/AJAX/jQuery", "PHP", "REST", "HTML", "CSS", "SVG"],
  },
  {
    title: "Subscriptions Platform",
    category: "Subscription-based web apps",
    date: "March 2016",
    image: "/images/subscriptions-platform.jpg",
    description: "",
    tech: [],
  },
  {
    title: "Summits Platform",
    category: "Streaming media apps",
    date: "September 2015",
    image: "/images/summits-platform.jpg",
    description: "",
    tech: [],
  },
  {
    title: "The Power of Awareness",
    category: "Sales funnel and course",
    date: "May 2015",
    image: "/images/poa-course.jpg",
    description: "",
    tech: [],
  },
  {
    title: "Magento Theme",
    category: "Responsive Magento 1 theme",
    date: "October 2014",
    image: "/images/magento-theme.jpg",
    description: "",
    tech: [],
  },
  {
    title: "Weekly Wisdom",
    category: "WordPress blog aggrigator for Magento",
    date: "August 2014",
    image: "/images/weekly-wisdom.jpg",
    description: "",
    tech: [],
  },
  {
    title: "Magento Digital Library",
    category: "Magento 1 account extension",
    date: "November 2013",
    image: "/images/magento-digital-library.jpg",
    description: "",
    tech: [],
  },
  {
    title: "Course Widgets",
    category: "Courses web app extensions",
    date: "August 2013",
    image: "/images/course-widgets.jpg",
    description: "",
    tech: [],
  },
  {
    title: "Practice Tracker",
    category: "Courses web app extension",
    date: "January 2012",
    image: "/images/practice-tracker.jpg",
    description: "",
    tech: [],
  },
  {
    title: "Email Capture Events",
    category: "Platform design and development",
    date: "September 2011",
    image: "/images/ece-platform.jpg",
    featured: true,
    description: "Designed to be light, fast and scalable, this free and open-to-the-public live events platform hosted multiple instances of real-time online video broadcasts, each with the potential to attract thousands of concurrent users.",
    tech: ["PHP", "JS/AJAX/jQuery", "REST", "Cassandra", "JW Player and API", "HTML", "CSS"],
  },
  {
    title: "Sounds True Radio",
    category: "Multichannel media player app",
    date: "July 2011",
    image: "/images/sounds-true-radio.jpg",
    featured: true,
    description: "Drawing on thousands of audio recordings this “radio” web app began as a way to allow users to sample, at random, songs and podcasts. It quickly grew to become a prime sales funnel and was expanded to include more channels of content.",
    tech: ["JS/AJAX/jQuery", "PHP", "MySQL", "JW Player and API", "HTML", "CSS"],
  },
  {
    title: "Live Chat Manager",
    category: "Live chat and admin web app",
    date: "July 2011",
    image: "/images/live-questions-manager.jpg",
    featured: true,
    description: "Used to chat with viewers and to organize and deliver their questions to a moderator, this mostly administrative app was used by Sounds True broadcast engineers to manage live online broadcasts.",
    tech: ["PHP", "JS/AJAX/jQuery", "MySQL", "JW Player and API", "Adobe Creative Suite", "HTML", "CSS"],
  },
  {
    title: "Webservice Components",
    category: "Ecommerce web services",
    date: "October 2010",
    image: "/images/ecom-webservice-components.jpg",
    description: "",
    tech: [],
  },
  {
    title: "Konakart Theme",
    category: "Ecommerce website theme",
    date: "July 2010",
    image: "/images/konakart-theme-redesign.jpg",
    description: "",
    tech: [],
  },
  {
    title: "Courses Platform",
    category: "Java-based course web apps",
    date: "January 2010",
    image: "/images/java-courses-platform.jpg",
    description: "",
    tech: [],
  },
  {
    title: "Events Platform",
    category: "Live event web apps",
    date: "October 2009",
    image: "/images/events-platform.jpg",
    description: "",
    tech: [],
  },
  {
    title: "WI Guides",
    category: "Marketing micro-sites",
    date: "June 2009",
    image: "/images/withinsight-website.jpg",
    description: "",
    tech: [],
  },
  {
    title: "In Better Senses",
    category: "Band website",
    date: "June 2009",
    image: "/images/inbettersenses-website.jpg",
    description: "",
    tech: [],
  },
  {
    title: "KonaKart",
    category: "Eccomerce store theme",
    date: "December 2008",
    image: "/images/konakart-theme.jpg",
    description: "",
    tech: [],
  },
  {
    title: "Eckhart Tolle",
    category: "Live streaming broadcast",
    date: "March 2008",
    image: "/images/eckhart-tolle-live-broadcast.jpg",
    description: "",
    tech: [],
  },
  {
    title: "Downloads Store",
    category: "Custom ecom audio store",
    date: "June 2007",
    image: "/images/ecom-download-store.jpg",
    description: "",
    tech: [],
  },
  {
    title: "Three Headed Goat",
    category: "Record label website",
    date: "February 2007",
    image: "/images/threeheadedgoat-website.jpg",
    description: "",
    tech: [],
  },
  {
    title: "Boulder Mac Repair",
    category: "Repair shop website",
    date: "May 2006",
    image: "/images/bouldermacrepair-website.jpg",
    description: "",
    tech: [],
  },
  {
    title: "Lady Vanexxa",
    category: "Artist website",
    date: "May 2004",
    image: "/images/ladyvanexxa-website.jpg",
    description: "",
    tech: [],
  },
  {
    title: "Or Hadash",
    category: "Therapist website",
    date: "February 2004",
    image: "/images/orhadash-website.jpg",
    description: "",
    tech: [],
  },
  {
    title: "Sporadik",
    category: "Band website",
    date: "December 2003",
    image: "/images/sporadik-website.jpg",
    description: "",
    tech: [],
  },
  {
    title: "Shot2Go",
    category: "Manufacturer website",
    date: "September 2003",
    image: "/images/shottogo-website.jpg",
    description: "",
    tech: [],
  },
  {
    title: "Daniel Watts",
    category: "Personal blog website",
    date: "August 2003",
    image: "/images/danielhobby-website.jpg",
    description: "",
    tech: [],
  },
  {
    title: "Steven Foley",
    category: "Artist website",
    date: "November 2002",
    image: "/images/stevefoley-website.jpg",
    description: "",
    tech: [],
  },
  {
    title: "Lauren McKenzie",
    category: "Artist website",
    date: "October 2002",
    image: "/images/laurenmckenzie-website.jpg",
    description: "",
    tech: [],
  },
  {
    title: "The Hypnogogoc Orchestra",
    category: "Band website",
    date: "March 2002",
    image: "/images/thehypnogogicorchestra-website.jpg",
    description: "",
    tech: [],
  },
  {
    title: "The Kallisti Kollectif",
    category: "Art collective website",
    date: "May 2001",
    image: "/images/thekallistikollectif-website.jpg",
    description: "",
    tech: [],
  },
  {
    title: "Tonic WAV",
    category: "Animated online ads",
    date: "April 2001",
    image: "/images/tonicwav-ads.jpg",
    description: "",
    tech: [],
  },
  {
    title: "Zeitgeist",
    category: "Design firm website",
    date: "February 2001",
    image: "/images/zeitgeist-website.jpg",
    description: "",
    tech: [],
  },
  {
    title: "Brandjuice",
    category: "Brand marketing website",
    date: "January 2001",
    image: "/images/brandjuice-website.jpg",
    description: "",
    tech: [],
  },
];

/** Skills, grouped by category. */
export const skills = [
  {
    category: "Languages & markup",
    items: ["JavaScript", "PHP", "HTML", "CSS", "SQL", "SVG"],
  },
  {
    category: "Frameworks & platforms",
    items: ["jQuery", "AJAX", "WordPress", "Node.js", "React", "Vue", "Angular"],
  },
  {
    category: "Data & infrastructure",
    items: ["MySQL", "Cassandra", "REST APIs", "AWS (S3, CloudFront)", "RTMP"],
  },
  {
    category: "Media & integrations",
    items: ["JW Player", "JW Platform API", "Live broadcasting", "Magento API"],
  },
];

/**
 * Contact links. Set the values you want to show. Leave a field as an empty
 * string ("") to hide that link.
 */
export const contact = {
  heading: "Let's work together",
  blurb:
    "I'm open to freelance projects and full-time roles. Drop me a line and I'll get back to you.",
  email: "daniel@danielwatts.dev",
  github: "https://github.com/daniel-watts?tab=repositories",
  linkedin: "https://www.linkedin.com/in/daniel-watts-87643618/",
  /** Optional: link to your dev blog. Leave "" to hide. */
  blog: "https://dev.wattswork.com/",
  /** Optional: a downloadable CV/resume in /public, e.g. "/resume.pdf". Leave "" to hide. */
  resume: "",
};
