// Define las interfaces para tipar los datos
export interface WorkExperience {
  period: string;
  companyName: string;
  function: string;
  urlCompany: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  video: string;
  stack: string[];
}

export interface Social {
  label: string;
  user: string;
  href: string;
}

export interface Data {
  name: string;
  profession: string;
  image: string;
  description: string;
  workExperience: WorkExperience[]
  projects: Project[];
  socials: Social[];
}
