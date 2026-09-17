// Central content & configuration file.
// Business owner can update copy, pricing, contact info and placeholder
// evidence here without touching component code.

export const siteConfig = {
  name: "HanBridge Business Chinese",
  shortName: "HanBridge",
  tagline: "Business Chinese Training for Global Teams",
  description:
    "Practical Mandarin training for employees who work with Chinese clients, suppliers, partners and colleagues.",
  // Placeholder production URL — replace once a domain is registered.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.hanbridgebusinesschinese.com",
  locale: "en_US",
  keywordsPrimary: [
    "Corporate Chinese Training",
    "Business Chinese Training",
    "Corporate Mandarin Training",
    "Mandarin Training for Employees",
    "Chinese Training for Companies",
    "Business Mandarin Training",
  ],
  keywordsSecondary: [
    "Chinese training for sales teams",
    "Chinese training for customer service",
    "Chinese for procurement",
    "Chinese for supply chain",
    "Chinese for technical support",
    "Chinese for international business",
    "Business Chinese for employees",
    "Mandarin for business communication",
  ],
} as const;

export const heroLabels = ["Online", "Customized", "Short-Term", "Business-Focused"] as const;

export const contactInfo = {
  email: "xuzixi945@gmail.com",
  whatsappRaw: "19513369747",
  whatsappDisplay: "+1 951 336 9747",
  wechat: "xyx6096",
};

export const whatsappLink = `https://wa.me/${contactInfo.whatsappRaw}`;
export const emailLink = `mailto:${contactInfo.email}`;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Corporate Training", href: "/corporate-training" },
  { label: "Programs", href: "/programs" },
  { label: "Pricing", href: "/pricing" },
  { label: "Proof & Clients", href: "/proof-and-clients" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const primaryNavCta = { label: "Book a Consultation", href: "/book-consultation" };

export type Program = {
  slug: string;
  title: string;
  audience: string;
  summary: string;
  scenarios: string[];
  outcomes: string[];
};

export const programs: Program[] = [
  {
    slug: "general-business-chinese",
    title: "General Business Chinese",
    audience: "Any employee who works with Chinese contacts",
    summary:
      "Foundational, practical Business Chinese for employees at any level who need to communicate confidently in everyday workplace situations.",
    scenarios: [
      "Workplace introductions",
      "Everyday business conversation",
      "Scheduling and coordination",
      "Small talk with clients and colleagues",
      "Basic negotiation language",
    ],
    outcomes: [
      "Introduce yourself and your company confidently",
      "Handle everyday workplace conversations",
      "Communicate scheduling and logistics",
      "Build rapport with Chinese contacts",
    ],
  },
  {
    slug: "sales-chinese",
    title: "Chinese for Sales Teams",
    audience: "Sales, business development and account teams",
    summary:
      "Designed for employees who communicate with Chinese customers, prospects, distributors and business partners.",
    scenarios: [
      "Introducing products",
      "Asking customer requirements",
      "Product discussions",
      "Negotiating",
      "Following up with customers",
      "Handling objections",
      "Maintaining business relationships",
    ],
    outcomes: [
      "Present products and services clearly",
      "Ask effective discovery questions",
      "Handle common objections",
      "Follow up professionally after meetings",
    ],
  },
  {
    slug: "marketing-chinese",
    title: "Chinese for Marketing Teams",
    audience: "Marketing and brand teams",
    summary:
      "For marketing professionals who coordinate with Chinese-speaking partners, agencies, distributors or audiences.",
    scenarios: [
      "Discussing campaigns and content",
      "Coordinating with Chinese partners and agencies",
      "Explaining brand positioning",
      "Presenting marketing materials",
      "Gathering market feedback",
    ],
    outcomes: [
      "Discuss marketing plans and materials",
      "Coordinate with Chinese-speaking partners",
      "Present campaign ideas clearly",
      "Understand market feedback",
    ],
  },
  {
    slug: "customer-service-chinese",
    title: "Chinese for Customer Service Teams",
    audience: "Customer service and support teams",
    summary:
      "For support and service employees who respond to Chinese-speaking customers by phone, chat or in person.",
    scenarios: [
      "Greeting and assisting customers",
      "Handling complaints",
      "Explaining policies and procedures",
      "Troubleshooting basic issues",
      "Closing conversations professionally",
    ],
    outcomes: [
      "Respond to customer inquiries confidently",
      "Handle complaints calmly and professionally",
      "Explain policies clearly",
      "Close conversations on a positive note",
    ],
  },
  {
    slug: "technical-support-chinese",
    title: "Chinese for Technical Support Teams",
    audience: "Technical support and product teams",
    summary:
      "For technical and product support staff who need Chinese vocabulary specific to their industry and products.",
    scenarios: [
      "Explaining technical issues",
      "Walking customers through solutions",
      "Industry-specific terminology",
      "Product and specification discussions",
      "Escalating issues clearly",
    ],
    outcomes: [
      "Explain technical problems and solutions",
      "Use accurate industry terminology",
      "Guide customers through troubleshooting steps",
      "Escalate issues clearly when needed",
    ],
  },
  {
    slug: "procurement-supply-chain-chinese",
    title: "Chinese for Procurement & Supply Chain",
    audience: "Procurement, purchasing and supply chain teams",
    summary:
      "For procurement and supply chain staff who communicate with Chinese suppliers, manufacturers and distributors.",
    scenarios: [
      "Requesting quotations",
      "Discussing specifications",
      "Negotiating pricing and terms",
      "Managing delivery schedules",
      "Handling quality issues",
    ],
    outcomes: [
      "Request quotations and specifications",
      "Discuss pricing and delivery terms",
      "Communicate quality concerns clearly",
      "Manage supplier relationships confidently",
    ],
  },
  {
    slug: "executive-business-chinese",
    title: "Executive Business Chinese",
    audience: "Senior leaders and managers",
    summary:
      "For senior leaders and managers who represent the company in high-level meetings, negotiations and relationship-building.",
    scenarios: [
      "Leading business meetings",
      "High-level negotiations",
      "Formal introductions and toasts",
      "Relationship-building conversations",
      "Strategic discussions",
    ],
    outcomes: [
      "Lead and participate in high-level meetings",
      "Build relationships with senior Chinese contacts",
      "Communicate strategic ideas clearly",
      "Navigate formal business situations confidently",
    ],
  },
];

export type ExampleProgramStructure = {
  title: string;
  description: string;
};

export const exampleProgramStructures: ExampleProgramStructure[] = [
  {
    title: "4-Week Business Chinese Program",
    description: "A general workplace communication foundation for any department.",
  },
  {
    title: "6-Week Sales Chinese Program",
    description: "Sales-focused conversation, product discussion and negotiation skills.",
  },
  {
    title: "8-Week Customer Service Chinese Program",
    description: "Customer-facing communication and service scenario practice.",
  },
  {
    title: "Business Trip & Client Meeting Intensive",
    description: "Short, focused preparation before travel or a major client meeting.",
  },
  {
    title: "Supplier Negotiation Intensive",
    description: "Focused preparation for supplier and procurement negotiations.",
  },
];

export type TrainingFormat = {
  title: string;
  description: string;
};

export const trainingFormats: TrainingFormat[] = [
  {
    title: "1-on-1 Training",
    description: "Fully personalized pace and content, built around one employee's role and schedule.",
  },
  {
    title: "Small Group Training",
    description: "2–6 employees train together, ideal for a shared department or role.",
  },
  {
    title: "Online Training",
    description: "Flexible, accessible training for global and distributed teams.",
  },
  {
    title: "Short-Term Intensive Training",
    description: "A concentrated schedule to build practical ability quickly before an event or trip.",
  },
];

export const formatAdaptationFactors = [
  "Number of employees",
  "Department",
  "Chinese level",
  "Business situation",
  "Schedule",
  "Training intensity",
  "Desired outcomes",
];

export type WhyUsItem = { title: string; description: string };

export const whyUsItems: WhyUsItem[] = [
  { title: "Practical", description: "Learn language employees actually use at work." },
  { title: "Customized", description: "Training is built around company requirements." },
  { title: "Role-Based", description: "Programs can be designed for specific departments." },
  { title: "English-Supported", description: "Training is accessible to international employees through English." },
  { title: "Flexible", description: "Online and adaptable scheduling." },
  { title: "Short-Term", description: "Focused programs designed around practical goals." },
  { title: "Business-Focused", description: "Training is built around workplace communication rather than generic textbook content." },
  { title: "Interactive", description: "Practical conversation scenarios, activities and games develop real speaking ability." },
];

export type ProcessStep = { step: number; title: string; description: string; callout?: string };

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Tell Us Your Needs",
    description: "The company explains its employees, department, Chinese level and business communication challenges.",
  },
  {
    step: 2,
    title: "Assess Learners",
    description: "We understand the learners' current level and practical communication requirements.",
  },
  {
    step: 3,
    title: "Build Your Training Plan",
    description: "We create a customized program based on the company's needs.",
    callout: "Customized training course design takes 2 days.",
  },
  {
    step: 4,
    title: "Start Training",
    description: "Begin the selected training format.",
  },
  {
    step: 5,
    title: "Review Progress",
    description: "We review progress and adjust training when necessary.",
  },
];

export const problems = [
  "Employees know some Chinese but cannot use it confidently at work.",
  "Sales teams struggle with real customer conversations.",
  "Procurement teams need supplier communication skills.",
  "Customer service teams need practical response language.",
  "Technical teams need industry-specific terminology.",
  "Employees know textbook Chinese but struggle with real conversations.",
  "Generic language courses do not match company needs.",
  "Employees need practical speaking ability rather than unnecessary theory.",
];

export const solutionPoints = [
  "Real business situations",
  "Role-specific vocabulary",
  "Practical speaking",
  "Scenario-based training",
  "Customized content",
  "English-supported instruction",
  "Interactive speaking activities",
  "Flexible online training",
  "Short-term intensive programs",
];

export type PricingTier = {
  id: string;
  label: string;
  price: string;
  unit: string;
  note?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    id: "individual",
    label: "Individual",
    price: "$65",
    unit: "/ 50-minute session",
    description: "One-on-one training tailored to your role and schedule.",
    features: ["1-on-1 sessions", "Fully personalized content", "Flexible scheduling", "Online delivery"],
    ctaLabel: "Book a Consultation",
    ctaHref: "/book-consultation?plan=individual",
  },
  {
    id: "group",
    label: "Small Group",
    price: "$85",
    unit: "/ 50-minute session",
    note: "For 2–6 learners",
    description: "Train together with colleagues in the same department or role.",
    features: ["2–6 learners per group", "Shared department focus", "Collaborative practice", "Online delivery"],
    ctaLabel: "Book a Consultation",
    ctaHref: "/book-consultation?plan=group",
    highlighted: true,
  },
  {
    id: "corporate",
    label: "Corporate Customized",
    price: "From $250",
    unit: "/ session",
    description: "Custom-built programs for teams and departments.",
    features: [
      "Fully customized curriculum",
      "Role-based scenarios",
      "Flexible team sizes",
      "Dedicated program design (2-day turnaround)",
    ],
    ctaLabel: "Request a Customized Quote",
    ctaHref: "/contact?interest=corporate-quote",
  },
];

export const pricingVariables = [
  "Number of employees",
  "Class size",
  "Number of sessions",
  "Training intensity",
  "Level of customization",
  "Program requirements",
];

export type FaqItem = { question: string; answer: string };

export const faqs: FaqItem[] = [
  {
    question: "Who is Business Chinese training for?",
    answer:
      "Employees at international companies who communicate with Chinese clients, suppliers, partners or colleagues — including sales, marketing, customer service, technical support, procurement and management teams.",
  },
  {
    question: "Can beginners join?",
    answer:
      "Yes. Training is adapted to each learner's current level, from beginners to more advanced speakers who need to refine workplace communication.",
  },
  {
    question: "Do you provide training for sales teams?",
    answer:
      "Yes. Chinese for Sales Teams focuses on introducing products, negotiating, following up with customers and maintaining business relationships.",
  },
  {
    question: "Can you train technical teams?",
    answer:
      "Yes. Chinese for Technical Support Teams covers industry-specific terminology, explaining technical issues and guiding customers through solutions.",
  },
  {
    question: "Can the course be customized?",
    answer:
      "Yes. Every corporate program is built around the company's employees, department, Chinese level and real business situations.",
  },
  {
    question: "How long are classes?",
    answer: "Standard sessions are 50 minutes. Program length and total number of sessions are customized to your goals.",
  },
  {
    question: "Do you offer online training?",
    answer: "Yes. Training is delivered online, making it accessible for teams anywhere in the world.",
  },
  {
    question: "Do you offer 1-on-1 training?",
    answer: "Yes. 1-on-1 training offers fully personalized pace and content for a single employee.",
  },
  {
    question: "Do you offer small group training?",
    answer: "Yes. Small groups of 2–6 employees can train together, ideal for a shared department or role.",
  },
  {
    question: "Can international teams train across different time zones?",
    answer: "Yes. Scheduling is arranged around your team's time zones during the consultation and planning stage.",
  },
  {
    question: "How much does training cost?",
    answer:
      "Individual sessions start at $65, small group sessions at $85 (2–6 learners), and corporate customized programs start from $250 per session. See the Pricing page for full details.",
  },
  {
    question: "Can companies request an invoice?",
    answer: "Yes. Invoices and payment documentation can be arranged — please mention this when you contact us.",
  },
  {
    question: "Can we pay online?",
    answer:
      "Online payment is being set up. In the meantime, please book a consultation or contact us directly to arrange payment.",
  },
  {
    question: "How quickly can a customized course be designed?",
    answer: "Customized training courses can typically be designed within 2 days of understanding your requirements.",
  },
];

// ---- Proof & trust content -------------------------------------------------
// IMPORTANT: Only real, verified information should ever be added here.
// Every entry below is a clearly labeled placeholder until the business
// supplies verified names, logos, screenshots or quotes.

export type ClientPlaceholder = {
  isPlaceholder: true;
  label: string;
};

export const clientShowcase: ClientPlaceholder[] = [
  { isPlaceholder: true, label: "Chinese Client Showcase — Content Coming Soon" },
  { isPlaceholder: true, label: "Chinese Client Showcase — Content Coming Soon" },
  { isPlaceholder: true, label: "Chinese Client Showcase — Content Coming Soon" },
];

export const communicationExamples: ClientPlaceholder[] = [
  { isPlaceholder: true, label: "Customer Communication Example — Add Verified Screenshot" },
  { isPlaceholder: true, label: "Customer Communication Example — Add Verified Screenshot" },
];

export const testimonials: ClientPlaceholder[] = [
  { isPlaceholder: true, label: "Customer Testimonial — Add Verified Testimonial" },
  { isPlaceholder: true, label: "Customer Testimonial — Add Verified Testimonial" },
  { isPlaceholder: true, label: "Customer Testimonial — Add Verified Testimonial" },
];

export const caseStudies: ClientPlaceholder[] = [
  { isPlaceholder: true, label: "Case Study — Add Verified Company Case Study" },
];

export const certificateAvailable = false; // set true once an official certificate design is supplied

// ---- Teacher / About --------------------------------------------------------

export const teacher = {
  name: "Amy",
  facts: [
    "From Xinjiang, China",
    "Official Chinese teacher on HelloTalk and Preply",
    "2 years of language teaching experience",
    "Standard Mandarin pronunciation",
    "Focus on spoken communication",
    "Practical conversational situations",
    "Speaking-focused activities, games, videos and songs",
    "English level C1",
    "Online and face-to-face teaching",
  ],
  learnerCountries: ["United States", "Germany", "Singapore", "Canada", "United Kingdom", "South Korea"],
};

// ---- Resources / Blog -------------------------------------------------------

export type ResourceArticle = { slug: string; title: string; teaser: string };

export const resourceArticles: ResourceArticle[] = [
  {
    slug: "business-chinese-for-sales-teams",
    title: "Business Chinese for Sales Teams",
    teaser: "The core conversation skills sales employees need with Chinese customers.",
  },
  {
    slug: "communicate-with-chinese-suppliers",
    title: "How to Communicate With Chinese Suppliers",
    teaser: "Practical language for quotations, specifications and delivery discussions.",
  },
  {
    slug: "chinese-for-customer-service-employees",
    title: "Chinese for Customer Service Employees",
    teaser: "Handling inquiries, complaints and everyday customer conversations.",
  },
  {
    slug: "business-chinese-for-procurement-teams",
    title: "Business Chinese for Procurement Teams",
    teaser: "Vocabulary and phrasing for purchasing and supply chain conversations.",
  },
  {
    slug: "mandarin-for-business-meetings",
    title: "Useful Mandarin for Business Meetings",
    teaser: "Practical phrases for leading and participating in meetings.",
  },
  {
    slug: "chinese-phrases-for-supplier-negotiations",
    title: "Chinese Phrases for Supplier Negotiations",
    teaser: "Language for pricing, terms and negotiation conversations.",
  },
  {
    slug: "global-teams-communication-chinese-clients",
    title: "How Global Teams Can Improve Communication With Chinese Clients",
    teaser: "A practical approach to workplace-relevant Chinese training.",
  },
  {
    slug: "business-mandarin-international-companies",
    title: "Business Mandarin for International Companies",
    teaser: "Why practical, scenario-based training outperforms generic lessons.",
  },
];

export const departmentOptions = [
  "Sales",
  "Marketing",
  "Customer Service",
  "Technical Support",
  "Procurement",
  "Management",
  "Other",
] as const;

export const chineseLevelOptions = [
  "No experience",
  "Beginner",
  "Elementary",
  "Intermediate",
  "Advanced",
] as const;

export const employeeCountOptions = ["1–5", "6–20", "21–50", "51–200", "200+"] as const;
