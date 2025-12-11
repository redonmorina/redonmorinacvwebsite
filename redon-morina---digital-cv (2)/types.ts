export interface ContactInfo {
  email: string;
  location: string;
}

export interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  period: string;
  details?: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  details: string[];
  extendedDescription?: string;
  achievements?: string[];
  techStack?: string[];
}

export interface SkillItem {
  name: string;
  description?: string;
  level?: string;
}

export interface UILabels {
  portfolio: string;
  basedIn: string;
  currentRole: string;
  contactMe: string;
  selectedWorks: string;
  education: string;
  skillsTools: string;
  careerJourney: string;
  skillsetExpertise: string;
  languages: string;
  practicalExperience: string;
  keyAchievements: string;
  responsibilities: string;
  techAndTools: string;
  emailMe: string;
  downloadCV: string;
}

export interface CVData {
  name: string;
  roleTitle: string;
  roleSubtitle: string;
  profileImage: string;
  secondaryImage?: string;
  contact: ContactInfo;
  education: EducationItem[];
  experience: ExperienceItem[];
  languages: string[];
  hardSkills: SkillItem[];
  softSkills: string[];
  interests: string[];
  ui: UILabels;
}