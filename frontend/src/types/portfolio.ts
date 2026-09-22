export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ApiEndpointSpec {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  description: string;
  authRequired?: boolean;
}

export interface ProjectBackendSpec {
  architectureSummary: string;
  endpoints: ApiEndpointSpec[];
  mongooseSchemas: string[];
  techStackHighlights: string[];
  sampleCodeSnippet?: {
    filename: string;
    language: string;
    code: string;
  };
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  backendSpec?: ProjectBackendSpec;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
  metrics?: string;
}

export interface Article {
  id: string;
  title: string;
  snippet: string;
  date: string;
  readTime: string;
  link: string;
  tags: string[];
}

export interface ContactInfo {
  email: string;
  location: string;
  github: string;
  linkedin: string;
  twitter: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  about: string[];
  location: string;
  status: string;
  serverUptime?: string;
  nodeVersion?: string;
  mongoStatus?: string;
}

export interface MernPillar {
  key: 'mongodb' | 'express' | 'react' | 'node';
  letter: string;
  name: string;
  role: string;
  color: string;
  bgColor: string;
  borderColor: string;
  iconName: string;
  description: string;
  keySkills: string[];
  codeSnippet: {
    filename: string;
    code: string;
  };
}

export interface ApiConsolePreset {
  id: string;
  method: 'GET' | 'POST';
  endpoint: string;
  description: string;
  status: number;
  statusText: string;
  requestBody?: Record<string, any>;
  responsePayload: Record<string, any>;
}

