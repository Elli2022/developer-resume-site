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
    role: "Frontend Developer Internship",
    company: "Convertor",
    period: "Feb 2024 – Apr 2024",
    location: "Malmö, Sweden",
    highlight: true,
    description:
      "Deepened frontend development skills through a second internship, broadening my toolkit to include CMS platforms such as Typo3 and Storyblok, and advanced frameworks like Next.js, Nest.js, and React. Embraced Agile methodologies while working with Tailwind, Git, and Node.js to deliver responsive, user-friendly websites.",
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
    id: 2,
    role: "Frontend Developer Internship",
    company: "Capace Media Group AB",
    period: "Nov 2023 – Feb 2024",
    location: "Malmö, Sweden",
    highlight: true,
    description:
      "Developed a website using JAMstack architecture with a headless CMS, GraphQL for data fetching, and a dynamic frontend built with React and Next.js. Focused on user experience, accessibility, and strategic design decisions alongside implementation.",
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
    id: 3,
    role: "Security Officer",
    company: "Kriminalvården",
    period: "Apr 2021 – Oct 2022",
    location: "Malmö, Sweden",
    description:
      "Handled security-related issues at a detention center, reporting to the Chief Security Inspector. Responsibilities included investigations, visitation decisions, security assessments, and close collaboration with operational staff.",
    skills: [
      "Public Safety",
      "Security Operations",
      "Investigation",
      "Regulatory Compliance",
    ],
  },
  {
    id: 4,
    role: "Incident Manager",
    company: "Kriminalvården",
    period: "Apr 2021 – Oct 2022",
    location: "Malmö, Sweden",
    description:
      "Acted as the extension of the commanding officer during alerts, leading and distributing work at incident sites. Held command on scene and ensured efficient management of emergency situations.",
    skills: [
      "Crisis Management",
      "Leadership",
      "Incident Command",
      "Decision Making",
    ],
  },
  {
    id: 5,
    role: "Camera Operator",
    company: "Kriminalvården",
    period: "Apr 2020 – Jun 2021",
    location: "Malmö, Sweden",
    description:
      "Monitored the detention center through camera systems and managed alarms across the facility. Required focus, calm under pressure, and effective communication during triggered alerts.",
    skills: [
      "CCTV Monitoring",
      "Alarm Management",
      "Crisis Management",
      "Stress Management",
    ],
  },
  {
    id: 6,
    role: "Coordinator for Detention Plans",
    company: "Kriminalvården",
    period: "Jun 2018 – Apr 2020",
    location: "Malmö, Sweden",
    description:
      "Worked with clients to develop individual detention plans, coordinating with stakeholders and participating in local, regional, and national forums on detention planning.",
    skills: [
      "Problem Solving",
      "Client Relations",
      "Project Coordination",
      "Communication",
    ],
  },
  {
    id: 7,
    role: "Alternate Board Member",
    company: "Bostadsrättsföreningen Leka",
    period: "Jun 2020 – Dec 2020",
    location: "Malmö, Sweden",
    description:
      "Stepped in at board meetings when regular members were unavailable, ensuring continuity in governance and decision-making processes.",
    skills: ["Governance", "Decision Making", "Supportive Leadership"],
  },
  {
    id: 8,
    role: "Insurance Advisor",
    company: "Trygg-Hansa",
    period: "Feb 2017 – Sep 2017",
    location: "Malmö, Sweden",
    description:
      "Provided customer service, insurance advising, and sales to corporate clients. Focused on efficiency, reliability, and building positive client relationships in a goal-oriented team environment.",
    skills: [
      "Customer Service",
      "Sales",
      "Client Engagement",
      "Teamwork",
    ],
  },
  {
    id: 9,
    role: "Warehouse Employee",
    company: "Uniflex",
    period: "Apr 2014 – Jan 2015",
    location: "Lund, Sweden",
    description:
      "Contracted for Frigoscandia in Staffanstorp, performing order picking, packing, and forklift driving in a fast-paced warehouse environment.",
    skills: [
      "Warehouse Operations",
      "Forklift Operation",
      "Inventory Control",
      "Responsibility",
    ],
  },
  {
    id: 10,
    role: "Bartender",
    company: "Etagegruppen",
    period: "Aug 2009 – Aug 2010",
    location: "Malmö, Sweden",
    description:
      "Provided beverage service in a fast-paced entertainment environment, including mixology, inventory management, and customer service under pressure.",
    skills: [
      "Customer Service",
      "Mixology",
      "Communication",
      "Stress Management",
    ],
  },
  {
    id: 11,
    role: "Sales Associate",
    company: "Foot Locker EMEA",
    period: "Jan 2008 – Jun 2008",
    location: "Copenhagen, Denmark",
    description:
      "Applied sales techniques to enhance customer engagement, maintained store conditions, and built positive relationships with customers and team members.",
    skills: [
      "Sales Techniques",
      "Customer Service",
      "Team Collaboration",
      "Inventory Management",
    ],
  },
  {
    id: 12,
    role: "Waitstaff",
    company: "T. Tholstrup Catering ApS",
    period: "Apr 2007 – Dec 2007",
    location: "Copenhagen, Denmark",
    description:
      "Served customers across restaurants in central Copenhagen during high school, developing upselling skills and teamwork in a demanding service environment.",
    skills: ["Customer Service", "Upselling", "Teamwork", "Flexibility"],
  },
];
