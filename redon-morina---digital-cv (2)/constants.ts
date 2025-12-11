import { CVData } from './types';

// Replace this URL with the actual path to your uploaded image if hosting locally, 
// or a hosted URL. Since I cannot access the uploaded file directly in code, 
// I am using a placeholder that you should update.
const PROFILE_IMAGE_URL = "./images/IMG_4781.jpg"; 
// Second placeholder image for the About/Skills section
const SECONDARY_IMAGE_URL = "./images/IMG_4782.jpg";

export const CV_DATA_DE: CVData = {
  name: "Redon Morina",
  roleTitle: "Business Development Manager",
  roleSubtitle: "& Strategist. Driving growth through innovation.",
  profileImage: PROFILE_IMAGE_URL,
  secondaryImage: SECONDARY_IMAGE_URL,
  contact: {
    email: "redonmorina@outlook.de",
    location: "München, Deutschland"
  },
  ui: {
    portfolio: "Portfolio '25",
    basedIn: "Based in",
    currentRole: "Aktuelle Rolle",
    contactMe: "Kontaktieren",
    selectedWorks: "Beruflicher Werdegang",
    education: "Bildungsweg",
    skillsTools: "Fähigkeiten & Tools",
    careerJourney: "Beruflicher Werdegang",
    skillsetExpertise: "Expertise & Skills",
    languages: "Sprachen",
    practicalExperience: "Praktische Erfahrung",
    keyAchievements: "Wichtige Erfolge",
    responsibilities: "Aufgaben",
    techAndTools: "Tech & Tools",
    emailMe: "Email",
    downloadCV: "CV Herunterladen"
  },
  education: [
    {
      institution: "Hochschule Landshut",
      location: "Landshut, Deutschland",
      degree: "M.A in Marktorientierter Unternehmensführung",
      period: "10/2025 – heute",
      details: ["Voraussichtlicher Abschluss März 2027"]
    },
    {
      institution: "Hochschule Landshut",
      location: "Landshut, Deutschland",
      degree: "B.A in Digitalisierung, Prozessoptimierung & Management",
      period: "10/2022 – 07/2025",
      details: ["Abschluss Juli 2025"]
    },
    {
      institution: "Fachoberschule Landshut",
      location: "Landshut, Deutschland",
      degree: "Fachrichtung: Wirtschaft & Verwaltung",
      period: "09/2018 – 06/2020",
      details: ["Abgeschlossenes Fachabitur"]
    }
  ],
  experience: [
    {
      company: "Seatti",
      role: "Business Development Manager",
      location: "München, Deutschland",
      period: "08/2024 – 09/2025",
      details: [
        "bis 03/25 als Werkstudent, ab 03/25 in Vollzeit",
        "Kaltakquise über E-Mail, Telefon, LinkedIn und Messen",
        "Durchschnittliche Closing-Rate gesteigert",
        "Betreuung des vollen Sales Cycles"
      ],
      extendedDescription: "Als Business Development Manager bei Seatti war ich maßgeblich für den Ausbau der Sales-Pipeline verantwortlich. Mein Fokus lag auf der Identifizierung und Ansprache von Entscheidungsträgern im HR- und Facility-Management-Bereich. Durch gezielte Outbound-Kampagnen und Social Selling via LinkedIn konnte ich die Anzahl qualifizierter Leads signifikant steigern.",
      achievements: [
        "Steigerung der Outbound-Lead-Conversion um 15%",
        "Erfolgreiche Einführung eines neuen CRM-Workflows in HubSpot",
        "Repräsentation des Unternehmens auf der Zukunft Personal Europe"
      ],
      techStack: ["HubSpot", "LinkedIn Sales Navigator", "Notion", "Microsoft Teams"]
    },
    {
      company: "Instamotion",
      role: "Strategic Partnerships Manager (Werkstudent)",
      location: "München, Deutschland",
      period: "11/2023 – 07/2024",
      details: [
        "Schwerpunkt Business Development",
        "Knüpfen von Geschäftsbeziehungen",
        "Strategieentwicklung",
        "Erschließen von neuen Märkten"
      ],
      extendedDescription: "In meiner Rolle im Strategic Partnerships Management unterstützte ich die Geschäftsleitung bei der Identifikation und Anbahnung strategischer Kooperationen. Ich erstellte detaillierte Marktanalysen und Wettbewerbsvergleiche.",
      achievements: [
        "Entwicklung eines Bewertungsschemas für potenzielle B2B-Partner",
        "Vorbereitung von C-Level Präsentationen zur Marktstrategie"
      ],
      techStack: ["Salesforce", "Excel (Advanced)", "PowerPoint", "Jira"]
    },
    {
      company: "DieProduktMacher",
      role: "Software-Entwickler (Werkstudent)",
      location: "München, Deutschland",
      period: "02/2023 – 10/2023",
      details: [
        "Entwickeln, Programmieren von Websites, Apps und Digitalen Produkten"
      ],
      extendedDescription: "Als Werkstudent in der Softwareentwicklung war ich Teil eines agilen Teams, das digitale Produkte für namhafte Kunden entwickelte. Mein technischer Fokus lag auf Frontend-Technologies wie React und TypeScript.",
      achievements: [
        "Mitentwicklung an einem MVP für ein großes Fintech-Startup",
        "Implementierung von Unit-Tests zur Qualitätssicherung"
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Git", "Scrum"]
    },
    {
      company: "Instamotion",
      role: "Sales Operations Consultant (Werkstudent)",
      location: "München, Deutschland",
      period: "12/2021 – 01/2023",
      details: [
        "Beratung und Vorqualifikation Kunden beim Online-Autokauf",
        "Stammdatenpflege im CRM-System"
      ],
      extendedDescription: "In dieser Position war ich die erste Anlaufstelle für Kunden im Online-Autokaufprozess.",
      techStack: ["Salesforce", "Aircall", "Zendesk"]
    }
  ],
  languages: [
    "Deutsch (Muttersprache)",
    "Englisch (Fließend)",
    "Spanisch (Basics)"
  ],
  hardSkills: [
    { 
      name: "Sales Tools (CRM)", 
      description: "Tiefgehendes Verständnis von CRM-Architekturen (HubSpot, Salesforce).",
      level: "Expert"
    },
    { 
      name: "Prospecting", 
      description: "Strategische Identifikation von Zielkunden mittels LinkedIn Sales Navigator.",
      level: "Advanced"
    },
    { 
      name: "Pipeline Mgmt", 
      description: "Strukturierte Verwaltung von Verkaufschancen.",
      level: "Advanced"
    },
    { 
      name: "Closing", 
      description: "Verhandlungssichere Abschlusskompetenz in B2B-Szenarien.",
      level: "Advanced"
    },
    { 
      name: "MS-Office", 
      description: "Profunde Kenntnisse in Excel und PowerPoint.",
      level: "Expert"
    },
    { 
      name: "React & TS", 
      description: "Entwicklung moderner Webanwendungen.",
      level: "Intermediate"
    }
  ],
  softSkills: [
    "Kommunikationsstark",
    "Analytisch",
    "Kundenorientiert",
    "Strukturiert",
    "Proaktiv",
    "Ownership"
  ],
  interests: [
    "Sport (Krafttraining)",
    "Lesen (Entrepreneurship, Trading)",
    "Business Innovation"
  ]
};

export const CV_DATA_EN: CVData = {
  name: "Redon Morina",
  roleTitle: "Business Development Manager",
  roleSubtitle: "& Strategist. Driving growth through innovation.",
  profileImage: PROFILE_IMAGE_URL,
  secondaryImage: SECONDARY_IMAGE_URL,
  contact: {
    email: "redonmorina@outlook.de",
    location: "Munich, Germany"
  },
  ui: {
    portfolio: "Portfolio '25",
    basedIn: "Based in",
    currentRole: "Current Role",
    contactMe: "Contact Me",
    selectedWorks: "Selected Works",
    education: "Education",
    skillsTools: "Skills & Tools",
    careerJourney: "Career Journey",
    skillsetExpertise: "Skillset & Expertise",
    languages: "Languages",
    practicalExperience: "Practical Experience",
    keyAchievements: "Key Achievements",
    responsibilities: "Responsibilities",
    techAndTools: "Tech & Tools",
    emailMe: "Email Me",
    downloadCV: "Download CV"
  },
  education: [
    {
      institution: "Landshut University",
      location: "Landshut, Germany",
      degree: "M.A in Market-Oriented Management",
      period: "10/2025 – Present",
      details: ["Expected graduation March 2027"]
    },
    {
      institution: "Landshut University",
      location: "Landshut, Germany",
      degree: "B.A in Digitization, Process Optimization & Management",
      period: "10/2022 – 07/2025",
      details: ["Graduation July 2025"]
    },
    {
      institution: "Technical School Landshut",
      location: "Landshut, Germany",
      degree: "Focus: Economics & Administration",
      period: "09/2018 – 06/2020",
      details: ["Baccalaureate"]
    }
  ],
  experience: [
    {
      company: "Seatti",
      role: "Business Development Manager",
      location: "Munich, Germany",
      period: "08/2024 – 09/2025",
      details: [
        "Part-time until 03/25, Full-time from 03/25",
        "Cold calling via Email, Phone, LinkedIn",
        "Increased average closing rate",
        "Full Sales Cycle Management"
      ],
      extendedDescription: "As Business Development Manager at Seatti, I was significantly responsible for expanding the sales pipeline. My focus was on identifying and approaching decision-makers in HR and Facility Management. Through targeted outbound campaigns and social selling via LinkedIn, I significantly increased the number of qualified leads.",
      achievements: [
        "Increased outbound lead conversion by 15%",
        "Successfully implemented a new CRM workflow in HubSpot",
        "Represented the company at Zukunft Personal Europe"
      ],
      techStack: ["HubSpot", "LinkedIn Sales Navigator", "Notion", "Microsoft Teams"]
    },
    {
      company: "Instamotion",
      role: "Strategic Partnerships Manager (Working Student)",
      location: "Munich, Germany",
      period: "11/2023 – 07/2024",
      details: [
        "Focus on Business Development",
        "Establishing business relationships",
        "Strategy development",
        "Opening new markets"
      ],
      extendedDescription: "In my role in Strategic Partnerships Management, I supported management in identifying and initiating strategic collaborations. I created detailed market analyses and competitive comparisons.",
      achievements: [
        "Developed an evaluation scheme for potential B2B-Partner",
        "Prepared C-Level presentations on market strategy"
      ],
      techStack: ["Salesforce", "Excel (Advanced)", "PowerPoint", "Jira"]
    },
    {
      company: "DieProduktMacher",
      role: "Software Developer (Working Student)",
      location: "Munich, Germany",
      period: "02/2023 – 10/2023",
      details: [
        "Developing and programming websites, apps, and digital products"
      ],
      extendedDescription: "As a working student in software development, I was part of an agile team developing digital products for major clients. My technical focus was on Frontend technologies like React and TypeScript.",
      achievements: [
        "Co-developed an MVP for a large Fintech startup",
        "Implemented unit tests for quality assurance"
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Git", "Scrum"]
    },
    {
      company: "Instamotion",
      role: "Sales Operations Consultant (Working Student)",
      location: "Munich, Germany",
      period: "12/2021 – 01/2023",
      details: [
        "Customer consultation and pre-qualification for online car sales",
        "Master data maintenance in CRM"
      ],
      extendedDescription: "In this position, I was the first point of contact for customers in the online car buying process.",
      techStack: ["Salesforce", "Aircall", "Zendesk"]
    }
  ],
  languages: [
    "German (Native)",
    "English (Fluent)",
    "Spanish (Basics)"
  ],
  hardSkills: [
    { 
      name: "Sales Tools (CRM)", 
      description: "Deep understanding of CRM architectures (HubSpot, Salesforce).",
      level: "Expert"
    },
    { 
      name: "Prospecting", 
      description: "Strategic identification of target customers via LinkedIn Sales Navigator.",
      level: "Advanced"
    },
    { 
      name: "Pipeline Mgmt", 
      description: "Structured management of sales opportunities.",
      level: "Advanced"
    },
    { 
      name: "Closing", 
      description: "Negotiation skills in B2B scenarios.",
      level: "Advanced"
    },
    { 
      name: "MS-Office", 
      description: "Proficient in Excel and PowerPoint.",
      level: "Expert"
    },
    { 
      name: "React & TS", 
      description: "Development of modern web applications.",
      level: "Intermediate"
    }
  ],
  softSkills: [
    "Strong Communicator",
    "Analytical",
    "Customer-oriented",
    "Structured",
    "Proactive",
    "Ownership"
  ],
  interests: [
    "Sports (Weight training)",
    "Reading (Entrepreneurship, Trading)",
    "Business Innovation"
  ]
};
