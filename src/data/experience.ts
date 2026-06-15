export type Experience = {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
  highlight?: boolean;
};

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Freelance Web Developer",
    company: "Self-employed",
    period: "May 2024 – present",
    location: "Malmö, Sweden (remote-friendly)",
    highlight: true,
    description:
      "Scoped freelance work for SMBs and organisations — landing pages, company sites, and Next.js/React frontends. Capacity is limited to about 7 hours per week, so engagements are planned with clear milestones, written scope, and realistic timelines.",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "WordPress",
      "Client Communication",
      "Scoped Delivery",
      "Netlify",
    ],
  },
  {
    id: 2,
    role: "Customs Officer (Tullinspektör)",
    company: "Tullverket (Swedish Customs)",
    period: "May 2026 – present",
    location: "Sweden",
    description:
      "Qualified customs officer after completing Tullverket basic training. Primary employment alongside a limited freelance web practice.",
    skills: [
      "Public Sector",
      "Regulatory Compliance",
      "Structured Procedures",
      "Communication",
    ],
  },
  {
    id: 3,
    role: "Frontend Developer Internship",
    company: "Convertor",
    period: "Feb 2024 – Apr 2024",
    location: "Malmö, Sweden",
    highlight: true,
    description:
      "Second internship deepening frontend skills with CMS platforms such as Typo3 and Storyblok, and frameworks including Next.js, Nest.js, and React. Worked with Tailwind, Git, and Node.js in Agile delivery.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "PHP",
      "WordPress",
      "Git",
    ],
  },
  {
    id: 4,
    role: "Frontend Developer Internship",
    company: "Capace Media Group AB",
    period: "Nov 2023 – Feb 2024",
    location: "Malmö, Sweden",
    highlight: true,
    description:
      "Built a website using JAMstack architecture with a headless CMS, GraphQL, and a React/Next.js frontend — with focus on UX, accessibility, and maintainable structure.",
    skills: [
      "Git",
      "React",
      "WordPress",
      "Responsive Web Design",
      "CSS",
      "GraphQL",
      "Tailwind CSS",
      "TypeScript",
      "Node.js",
      "HTML5",
      "Next.js",
    ],
  },
  {
    id: 5,
    role: "Surveillance Operator (Bevakningsoperatör)",
    company: "Kriminalvården — security detention centre",
    period: "Jun 2021 – Aug 2022",
    location: "Malmö, Sweden",
    description:
      "Final role at the Swedish Prison and Probation Service before career retraining. Monitored the security detention centre via camera systems and managed facility alarms — requiring focus, calm under pressure, and clear communication during incidents.",
    skills: [
      "CCTV Monitoring",
      "Alarm Management",
      "Public Safety",
      "Crisis Management",
      "Stress Management",
    ],
  },
  {
    id: 6,
    role: "Security Officer",
    company: "Kriminalvården",
    period: "Apr 2021 – Jun 2021",
    location: "Malmö, Sweden",
    description:
      "Handled security-related matters at a detention centre, including investigations, visitation decisions, and security assessments in collaboration with operational staff.",
    skills: [
      "Public Safety",
      "Security Operations",
      "Investigation",
      "Regulatory Compliance",
    ],
  },
  {
    id: 7,
    role: "Incident Manager",
    company: "Kriminalvården",
    period: "Apr 2021 – Jun 2021",
    location: "Malmö, Sweden",
    description:
      "Acted as extension of the commanding officer during alerts, leading work distribution at incident sites and maintaining command on scene.",
    skills: [
      "Crisis Management",
      "Leadership",
      "Incident Command",
      "Decision Making",
    ],
  },
  {
    id: 8,
    role: "Camera Operator",
    company: "Kriminalvården",
    period: "Apr 2020 – Apr 2021",
    location: "Malmö, Sweden",
    description:
      "Monitored detention facilities through surveillance systems and managed alarms using centralised communication tools.",
    skills: [
      "CCTV Monitoring",
      "Alarm Management",
      "Communication",
      "Stress Management",
    ],
  },
  {
    id: 9,
    role: "Coordinator for Detention Plans",
    company: "Kriminalvården",
    period: "Jun 2018 – Apr 2020",
    location: "Malmö, Sweden",
    description:
      "Developed individual detention plans with clients and coordinated interventions with stakeholders across local and regional forums.",
    skills: [
      "Problem Solving",
      "Client Relations",
      "Project Coordination",
      "Communication",
    ],
  },
  {
    id: 10,
    role: "Alternate Board Member",
    company: "Bostadsrättsföreningen Leka",
    period: "Jun 2020 – Dec 2020",
    location: "Malmö, Sweden",
    description:
      "Stepped in at board meetings when regular members were unavailable, supporting continuity in governance.",
    skills: ["Governance", "Decision Making", "Supportive Leadership"],
  },
  {
    id: 11,
    role: "Insurance Advisor",
    company: "Trygg-Hansa",
    period: "Feb 2017 – Sep 2017",
    location: "Malmö, Sweden",
    description:
      "Customer service, insurance advising, and corporate sales in a goal-oriented team environment.",
    skills: [
      "Customer Service",
      "Sales",
      "Client Engagement",
      "Teamwork",
    ],
  },
  {
    id: 12,
    role: "Warehouse Employee",
    company: "Uniflex",
    period: "Apr 2014 – Jan 2015",
    location: "Lund, Sweden",
    description:
      "Order picking, packing, and forklift driving at Frigoscandia in a fast-paced warehouse environment.",
    skills: [
      "Warehouse Operations",
      "Forklift Operation",
      "Inventory Control",
      "Responsibility",
    ],
  },
  {
    id: 13,
    role: "Bartender",
    company: "Etagegruppen",
    period: "Aug 2009 – Aug 2010",
    location: "Malmö, Sweden",
    description:
      "Beverage service in a fast-paced entertainment environment, including mixology and inventory management.",
    skills: [
      "Customer Service",
      "Mixology",
      "Communication",
      "Stress Management",
    ],
  },
  {
    id: 14,
    role: "Sales Associate",
    company: "Foot Locker EMEA",
    period: "Jan 2008 – Jun 2008",
    location: "Copenhagen, Denmark",
    description:
      "Sales, customer engagement, and store maintenance in a retail environment.",
    skills: [
      "Sales Techniques",
      "Customer Service",
      "Team Collaboration",
      "Inventory Management",
    ],
  },
  {
    id: 15,
    role: "Waitstaff",
    company: "T. Tholstrup Catering ApS",
    period: "Apr 2007 – Dec 2007",
    location: "Copenhagen, Denmark",
    description:
      "Restaurant service in central Copenhagen during high school.",
    skills: ["Customer Service", "Upselling", "Teamwork", "Flexibility"],
  },
];
