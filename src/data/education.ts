export type Education = {
  id: number;
  school: string;
  degree: string;
  fieldOfStudy: string;
  period: string;
  location: string;
  description: string;
  courses: string[];
  skills: string[];
  highlight?: boolean;
};

export const educations: Education[] = [
  {
    id: 1,
    school: "Grit Academy",
    degree: "Front End Web Developer",
    fieldOfStudy: "Web Development",
    period: "Aug 2022 – Jun 2024",
    location: "Malmö, Sweden",
    highlight: true,
    description:
      "Two-year vocational program (400 YH points) with a 20-week LIA industry placement. Covered full-stack web development from HTML/CSS through React, Node.js, databases, and Agile project management.",
    courses: [
      "HTML and CSS",
      "JavaScript 1–3",
      "Agile Project Management",
      "Backend and Database Management",
      "Design and UX",
      "Version Control",
      "LIA 1 + LIA 2",
      "Thesis Work",
    ],
    skills: [
      "Responsive Web Design",
      "TypeScript",
      "Express.js",
      "MySQL",
      "MongoDB",
      "UX",
      "Git",
      "Agile Methods",
      "Redis",
    ],
  },
  {
    id: 2,
    school: "Komvux",
    degree: "Course Certificate — Java",
    fieldOfStudy: "Programming 1 in Java",
    period: "Mar 2022 – May 2022",
    location: "Distance with onsite sessions",
    description:
      "10-week remote course covering sequential programming, data types, control structures, OOP basics, algorithms, data structures, debugging, and exception handling in Java.",
    courses: [
      "Sequential Programming in Java",
      "Control Structures",
      "Classes, Objects, and Methods",
      "Simple Algorithms",
      "Data Structure Implementations",
      "Debugging and Exception Handling",
    ],
    skills: [
      "Java",
      "Problem Solving",
      "Algorithm Design",
      "Data Structures",
      "OOP",
    ],
  },
  {
    id: 3,
    school: "Företagsuniversitetet",
    degree: "Cybersecurity, IT",
    fieldOfStudy: "Cybersecurity",
    period: "Oct 2021 – Jan 2022",
    location: "Mixed (onsite and remote)",
    description:
      "10-week course for security managers covering threat analysis, cybersecurity laws, risk analysis, incident handling, and crisis management.",
    courses: [
      "Threat Analysis",
      "Cybersecurity Laws and Regulations",
      "Risk Analysis",
      "Incident Classification",
      "Crisis Management",
    ],
    skills: [
      "Risk Analysis",
      "Incident Handling",
      "Crisis Management",
      "Cybersecurity",
    ],
  },
  {
    id: 4,
    school: "Lund University",
    degree: "Extended Legal Introduction Course",
    fieldOfStudy: "Law",
    period: "Sep 2020 – Nov 2020",
    location: "Lund, Sweden",
    description:
      "Full-time 10-week overview of various legal fields, more comprehensive than the basic introduction course.",
    courses: ["Overview of Legal Systems", "Introduction to Legal Fields"],
    skills: ["Legal Analysis", "Understanding of Legal Frameworks"],
  },
  {
    id: 5,
    school: "Lund University",
    degree: "B.Sc. Service Management, Organization & Leadership",
    fieldOfStudy: "Service Management",
    period: "Aug 2011 – Dec 2014",
    location: "Lund, Sweden",
    description:
      "Bachelor's program covering organization, leadership, economics, and marketing for service-oriented industries, with focus on customer-centric work and sustainable leadership.",
    courses: [
      "Management and Operations",
      "Accounting and Financial Management",
      "Leadership & Followership",
      "Marketing",
      "Organizational Behavior & HR",
    ],
    skills: [
      "Customer Relationship Management",
      "Leadership",
      "Organizational Development",
      "Marketing",
    ],
  },
  {
    id: 6,
    school: "Malmö University",
    degree: "Civil Engineering — Project and Production Management",
    fieldOfStudy: "Construction and Civil Engineering",
    period: "Aug 2010 – Dec 2014",
    location: "Malmö, Sweden",
    description:
      "Specialization in production management during the execution phase, covering production planning, quality and environmental management, and contract law.",
    courses: [
      "Production Planning",
      "Quality and Environmental Management",
      "Contract Law",
    ],
    skills: [
      "Project Management",
      "Production Planning",
      "Environmental and Quality Control",
    ],
  },
  {
    id: 7,
    school: "Grythyttans Bartenderskola",
    degree: "Bartender Certification",
    fieldOfStudy: "Bartending",
    period: "Jun 2009 – Jul 2009",
    location: "Grythyttan, Sweden",
    description:
      "Three-week bartender training with theoretical and practical knowledge in cocktail mixing, customer service, and bar management.",
    courses: [
      "Cocktail Mixing Techniques",
      "Customer Service Excellence",
      "Bar Management",
    ],
    skills: ["Mixology", "Customer Interaction", "Bar Etiquette"],
  },
  {
    id: 8,
    school: "Malmö University",
    degree: "Foundation Year in Science and Technology",
    fieldOfStudy: "Science and Technology",
    period: "Aug 2008 – Jun 2009",
    location: "Malmö, Sweden",
    description:
      "Preparatory one-year program for students aspiring to enter engineering fields in technology, mathematics, or science.",
    courses: [
      "Introductory Mathematics",
      "Basic Physics",
      "Introductory Chemistry",
      "Engineering Fundamentals",
    ],
    skills: ["Matlab"],
  },
  {
    id: 9,
    school: "ProCivitas",
    degree: "High School Diploma, Business Administration",
    fieldOfStudy: "Business Administration",
    period: "Aug 2004 – Jun 2007",
    location: "Sweden",
    description:
      "Business program focused on entrepreneurship, marketing, accounting, cost calculation, and leadership.",
    courses: [
      "Marketing",
      "Accounting",
      "Cost Calculation",
      "Leadership and Organization",
    ],
    skills: [
      "Strategic Marketing",
      "Financial Accounting",
      "Cost Management",
      "Leadership",
    ],
  },
];
