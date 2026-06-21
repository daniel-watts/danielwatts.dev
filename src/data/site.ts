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
  role: "Senior Software Engineer",
  /** Production URL (also set in astro.config.mjs `site`). */
  url: "https://danielwatts.dev",
  /** One-sentence description used for SEO and social previews. */
  description:
    "Senior software engineer with 20+ years building and modernizing production web applications, spanning UI/UX, back end, and infrastructure, now focused on applied AI engineering.",
  /** Where you're based, shown in the hero and structured data. */
  location: "Lafayette, CO",
  /**
   * Social/contact preview image, relative to /public.
   * Recommended size: 1200×630px. Replace with your own image.
   */
  ogImage: "/og-image.svg",
};

/** The big intro at the top of the page. */
export const hero = {
  /** A short, punchy headline. */
  headline: "Senior software engineer: full-stack web and applied AI.",
  /** A sentence or two expanding on the headline. */
  subhead:
    "20+ years building and modernizing production web applications end to end, from UI/UX through back end and infrastructure, and building with AI every day.",
  /** Call-to-action buttons. */
  primaryCta: { label: "View my work", href: "#featured" },
  secondaryCta: { label: "Get in touch", href: "#contact" },
};

/** The "About" section. Each string is a paragraph. */
export const about = {
  heading: "About me",
  paragraphs: [
    "I'm a senior software engineer with 20+ years building and modernizing production web applications. I started in design, so my work spans the whole experience, from UI/UX and front end through back end and infrastructure. I tend to own things end to end: architecture, code, deployment, security, documentation, and the stakeholder side.",
    "At NSF NCAR I'm the sole developer and project lead of an organization-wide visitor-management platform. I architected it, designed its workflows and interfaces, containerized it, and have shipped 60+ production releases into a NIST 800-171 CUI-compliant environment. Before that I spent 13 years at Sounds True building custom course, commerce, and live-streaming media platforms, including systems that served 30,000 users in a single day.",
    "These days I build with AI daily: custom Claude Code agent skills, AI-assisted modernization of legacy code, and a self-hosted RAG retrieval pipeline, alongside writing my organization's AI guidance. The throughline across 20 years is the same: learn a new technology fast, then specify, verify, and own what I ship.",
  ],
};

/** Work experience, most recent first. */
export const experience = [
  {
    role: "Software Engineer / Programmer II",
    company: "UCAR / NSF NCAR",
    companyUrl: "https://ncar.ucar.edu",
    period: "2019 - Present",
    summary:
      "Sole developer and project lead of the visitor-management platform used across all NSF NCAR labs, plus the lab's broader administrative application suite. Recognized with an NCAR Special Recognition Award (2026).",
    highlights: [
      "Architected and built an organization-wide visitor-management platform from scratch; in continuous production with 60+ solo, end-to-end releases.",
      "Generalized a single-lab tool into a config-driven, multi-tenant platform now serving 8+ NCAR labs.",
      "Ran a zero-data-loss production cutover, migrating 3,113 visit records and 8,799 users with smoke tests, 35 preserved URLs, and DNS repointing.",
      "Modernized the stack end to end: PHP 7.1→8.3, Composer/Symfony, SVN→Git, a containerized dev environment, and SAML 2.0 SSO against Azure Entra ID.",
      "Build with AI daily: custom Claude Code agent skills, a self-hosted RAG Slack bot, AI-assisted legacy modernization, and the org's AI guidance docs.",
    ],
  },
  {
    role: "Senior Web Application Developer",
    company: "Sounds True",
    companyUrl: "https://www.soundstrue.com",
    period: "2017 - 2019",
    summary:
      "Principal developer for the custom online courses and events platform; managed media-delivery infrastructure and mentored junior developers.",
    highlights: [
      "Led the course platform from prototype to production: a custom JavaScript single-page app on a LAMP/AWS back end that handled 30,000 users in a single day for live broadcasts.",
      "Built a migration tool that moved 100+ courses and 130,000 user accounts, operable by front-end developers themselves.",
      "Engineered a schedulable multi-video delivery player that automated a manual broadcast process, saving 40–50 hours per month.",
    ],
  },
  {
    role: "Web Application Developer",
    company: "Sounds True",
    companyUrl: "https://www.soundstrue.com",
    period: "2011 - 2017",
    summary:
      "Led the front-end team, then moved to back-end development; Agile/Scrum throughout.",
    highlights: [
      "Implemented the company-wide online media management system (JW Platform, AWS S3), saving ~$120,000/year and serving 30+ TB/month of adaptive streaming.",
      "Built and ran a live streaming broadcast system supporting 30,000+ concurrent viewers (PHP, JavaScript, Cassandra, AWS, Akamai).",
      "Replatformed three major systems including two ecommerce sites; conceived a radio app that added ~$40,000/year in new revenue.",
    ],
  },
  {
    role: "Web Developer",
    company: "Sounds True",
    companyUrl: "https://www.soundstrue.com",
    period: "2006 - 2011",
    summary:
      "Launched the company's first digital product and its first live online video broadcast.",
    highlights: [
      "Built the company's first digital product, a custom online audio download store, plus its first live online video broadcast.",
      "Managed email marketing to lists of up to 100,000, averaging ~$40,000/month in direct revenue.",
      "Cut course design implementation from 2–3 days to 2–3 hours per course with templated assets and automated delivery.",
    ],
  },
  {
    role: "Founder & Web Developer / Designer",
    company: "TinkerMedia & earlier studios",
    period: "2000 - 2006",
    summary:
      "Founded a freelance web and media studio serving 20+ small-business clients; earlier, multimedia and design roles at Zeitgeist Design and E-Vitro/DigitalMed.",
    highlights: [
      "Ran full-stack web development and design for 20+ clients on LAMP/cPanel: sites, ecommerce, Flash animation, and internet marketing.",
      "Built rich internet applications and brand/identity work at a Boulder design firm.",
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
    title: "NRIT Visit App",
    category: "Multi-tenant platform",
    date: "2024 - Present",
    featured: true,
    description: "An organization-wide visitor-management platform serving all NSF NCAR labs. Config-driven multi-tenant architecture, containerized, with SAML SSO and a NIST 800-171 CUI-compliant production deployment. Architect and lead developer, recognized with an NCAR Special Recognition Award.",
    tech: ["PHP 8.3", "MariaDB", "Symfony", "SAML 2.0 SSO", "Docker", "Caddy", "REST APIs"],
  },
  {
    title: "Wiki RAG Slack Bot",
    category: "Applied AI / retrieval",
    date: "2026",
    featured: true,
    description: "A self-hosted retrieval-augmented-generation bot answering questions over an internal Confluence wiki. Hybrid full-text and embedding retrieval with hierarchy-aware chunking, incremental sync, a local LLM via Ollama, and an 81-test suite.",
    tech: ["Python", "PostgreSQL", "Embeddings", "Ollama", "Confluence API", "pytest"],
  },
  {
    title: "Claude Code Agent Skills",
    category: "Applied AI / agent workflows",
    date: "2026",
    description: "Custom Claude Code agent skills that maintain organizational AI documentation. Each parses unstructured input (websites, GitHub READMEs, wiki and KB pages), classifies it against tracker state, and proposes reviewed edits before writing.",
    tech: ["Claude Code", "Agent skills", "MCP"],
  },
  {
    title: "RAL-IT Portal & “App Engine”",
    category: "Custom PHP MVC platform",
    date: "2020 - 2024",
    description: "A centralized administrative platform replacing undocumented legacy intranet apps, built on a custom PHP MVC framework (routing, auth, a form engine, and reusable AJAX table widgets) integrating Workday, the person directory, and Request Tracker via automated cron pipelines.",
    tech: ["PHP", "MariaDB", "Custom MVC", "REST APIs", "Cron pipelines"],
  },
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
    category: "Languages",
    items: ["PHP (4–8.3)", "JavaScript", "SQL", "Python", "Bash", "Perl (legacy)"],
  },
  {
    category: "Frameworks & libraries",
    items: ["Custom MVC", "Laravel", "Symfony components", "Composer / PSR-4", "WordPress", "Magento", "jQuery / AJAX"],
  },
  {
    category: "Applied AI",
    items: ["Claude Code (agent skills, subagents)", "Gemini", "RAG (hybrid retrieval, embeddings)", "Ollama (local LLMs)", "MCP", "AI-assisted modernization"],
  },
  {
    category: "Data & infrastructure",
    items: ["MariaDB / MySQL", "PostgreSQL", "Docker / Podman", "nginx / Apache / Caddy", "AWS (EC2, RDS, S3, CloudFront)", "Linux"],
  },
  {
    category: "Identity & security",
    items: ["SAML 2.0 SSO (Azure Entra ID)", "OAuth", "LDAP", "NIST 800-171 / CUI", "CSP & secrets management", "SQL-injection remediation"],
  },
  {
    category: "Integration & process",
    items: ["REST API design & integration", "Cron sync pipelines", "Git / GitHub", "Jira", "Agile / Scrum", "Technical writing"],
  },
];

/**
 * Contact links. Set the values you want to show. Leave a field as an empty
 * string ("") to hide that link.
 */
export const contact = {
  heading: "Let's work together",
  blurb:
    "I'm always glad to talk engineering, applied AI, and interesting problems. Drop me a line and I'll get back to you.",
  email: "daniel@danielwatts.dev",
  github: "https://github.com/daniel-watts?tab=repositories",
  linkedin: "https://www.linkedin.com/in/daniel-watts-87643618/",
  /** Optional: link to your dev notes site. Leave "" to hide. */
  blog: "https://notes.danielwatts.dev/",
  /** Optional: a downloadable CV/resume in /public, e.g. "/resume.pdf". Leave "" to hide. */
  resume: "/resume.pdf",
};
