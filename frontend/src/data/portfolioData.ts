import type { PersonalInfo, SkillCategory, Project, Experience, Article, ContactInfo, MernPillar, ApiConsolePreset } from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: 'MERN Developer',
  title: 'Full-Stack MERN Specialist & Software Engineer',
  tagline: 'Architecting high-throughput REST APIs, MongoDB data pipelines, and responsive React interfaces built for performance and speed.',
  about: [
    "I specialize in building full-stack web applications using MongoDB, Express.js, React, and Node.js (MERN). My focus spans end-to-end software development: from crafting intuitive, accessible user interfaces in React & TypeScript to engineering secure, scalable backend microservices and database schemas.",
    "I believe in clean architecture, type safety, modular microservices, and continuous performance tuning (sub-50ms API responses, indexed database queries, and optimized React bundle sizes)."
  ],
  location: 'Available Globally (Remote / Hybrid)',
  status: 'Open for MERN & Full-Stack Engineering Roles',
  serverUptime: '99.98% Operational',
  nodeVersion: 'v20.11.0 ESM',
  mongoStatus: 'Atlas Cluster (Connected)'
};

export const mernPillars: MernPillar[] = [
  {
    key: 'mongodb',
    letter: 'M',
    name: 'MongoDB',
    role: 'NoSQL Database & Data Modeling',
    color: 'emerald-400',
    bgColor: 'bg-emerald-950/40',
    borderColor: 'border-emerald-500/40',
    iconName: 'Database',
    description: 'Document database modeling with Mongoose schemas, compound indexes, aggregation pipelines, and MongoDB Atlas cloud optimization.',
    keySkills: ['Mongoose ODM', 'Aggregation Pipelines', 'Atlas Search', 'Indexing & Performance', 'BSON Schema Validation', 'Transactions'],
    codeSnippet: {
      filename: 'UserSchema.ts',
      code: `const UserSchema = new Schema({\n  email: { type: String, required: true, unique: true, index: true },\n  passwordHash: { type: String, required: true, select: false },\n  role: { type: String, enum: ['user', 'admin'], default: 'user' },\n  metadata: { lastLogin: Date, loginCount: { type: Number, default: 0 } }\n}, { timestamps: true });`
    }
  },
  {
    key: 'express',
    letter: 'E',
    name: 'Express.js',
    role: 'Backend API Framework & Middleware',
    color: 'purple-400',
    bgColor: 'bg-purple-950/40',
    borderColor: 'border-purple-500/40',
    iconName: 'Server',
    description: 'RESTful API routing, JWT authentication middleware, CORS headers, rate-limiting, and error-handling controllers.',
    keySkills: ['RESTful Routing', 'JWT & Bcrypt Auth', 'Rate Limiting (express-rate-limit)', 'Helmet Security Headers', 'Global Error Handler', 'Zod Input Validation'],
    codeSnippet: {
      filename: 'authMiddleware.ts',
      code: `export const protect = async (req: AuthRequest, res: Response, next: NextFunction) => {\n  const token = req.headers.authorization?.split(' ')[1];\n  if (!token) return res.status(401).json({ error: 'Unauthorized: Missing JWT Token' });\n  const decoded = jwt.verify(token, process.env.JWT_SECRET!);\n  req.user = decoded;\n  next();\n};`
    }
  },
  {
    key: 'react',
    letter: 'R',
    name: 'React.js',
    role: 'Frontend UI & Client State Management',
    color: 'cyan-400',
    bgColor: 'bg-cyan-950/40',
    borderColor: 'border-cyan-500/40',
    iconName: 'Code',
    description: 'Modern component architectures with TypeScript, custom React hooks, state management (Zustand / Redux Toolkit), and Tailwind CSS.',
    keySkills: ['TypeScript React', 'Custom Hooks', 'Tailwind CSS v4', 'State Management', 'React Query / Axios', 'Vite / Component Optimization'],
    codeSnippet: {
      filename: 'useApiQuery.ts',
      code: `export function useApiQuery<T>(url: string) {\n  const [data, setData] = useState<T | null>(null);\n  const [loading, setLoading] = useState(true);\n  useEffect(() => {\n    axios.get<T>(url).then(res => setData(res.data)).finally(() => setLoading(false));\n  }, [url]);\n  return { data, loading };\n}`
    }
  },
  {
    key: 'node',
    letter: 'N',
    name: 'Node.js',
    role: 'Event-Driven Server Runtime',
    color: 'lime-400',
    bgColor: 'bg-lime-950/40',
    borderColor: 'border-lime-500/40',
    iconName: 'Cpu',
    description: 'Asynchronous event loop execution, non-blocking I/O, NPM package distribution, environment configuration, and microservices.',
    keySkills: ['Asynchronous Event Loop', 'Non-blocking I/O', 'ES Modules & CommonJS', 'Streams & Buffer Management', 'Env Vars & Dotenv', 'PM2 / Cluster Mode'],
    codeSnippet: {
      filename: 'server.ts',
      code: `import express from 'express';\nimport mongoose from 'mongoose';\nconst app = express();\napp.use(express.json());\nmongoose.connect(process.env.MONGO_URI!).then(() => {\n  app.listen(5000, () => console.log('🚀 Server listening on port 5000'));\n});`
    }
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend (React & UI)',
    skills: ['React.js ', 'TypeScript', 'Tailwind CSS ', 'HTML5 & CSS3', 'Redux Toolkit / Zustand', 'React Router ', 'Lucide Icons', 'Vite']
  },
  {
    title: 'Backend (Node & Express)',
    skills: ['Node.js (ESM)', 'Express.js Framework', 'RESTful API Architecture', 'JWT Authentication', 'Password Hashing (Bcrypt)', 'CORS & Helmet Security', 'Zod / Joi Validation']
  },
  {
    title: 'Database & ORM',
    skills: ['MongoDB Atlas Cloud', 'Mongoose ODM', 'PostgreSQL (Basic)']
  },
  {
    title: 'Tools, DevOps & Testing',
    skills: ['Git & GitHub', 'Postman', 'Vercel / Render', 'NPM / Yarn']
  }
];

export const featuredProjects: Project[] = [
  {
    id: 'chat-app',
    title: 'Chat Application',
    subtitle: 'Real time Chat Application',
    description: '',
    tags: [''],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
    backendSpec: {
      architectureSummary: '',
      endpoints: [
        { method: 'POST', path: '', description: '', authRequired: false },
        { method: 'GET', path: '', description: '', authRequired: false },
        { method: 'POST', path: '', description: '', authRequired: true },
        { method: 'GET', path: '', description: '', authRequired: true }
      ],
      mongooseSchemas: ['', ''],
      techStackHighlights: [''],
      sampleCodeSnippet: {
        filename: '',
        language: '',
        code: ``
      }
    }
  },
  {
    id: 'mern-shop-pro',
    title: '',
    subtitle: '',
    description: '',
    tags: [''],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
    backendSpec: {
      architectureSummary: '',
      endpoints: [
        { method: 'POST', path: '', description: '', authRequired: false },
        { method: 'GET', path: '', description: '', authRequired: false },
        { method: 'POST', path: '', description: '', authRequired: true },
        { method: 'GET', path: '', description: '', authRequired: true }
      ],
      mongooseSchemas: ['', ''],
      techStackHighlights: [''],
      sampleCodeSnippet: {
        filename: '',
        language: '',
        code: ``
      }
    }
  },
  {
    id: 'mern-shop-pro',
    title: '',
    subtitle: '',
    description: '',
    tags: [''],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
    backendSpec: {
      architectureSummary: '',
      endpoints: [
        { method: 'POST', path: '', description: '', authRequired: false },
        { method: 'GET', path: '', description: '', authRequired: false },
        { method: 'POST', path: '', description: '', authRequired: true },
        { method: 'GET', path: '', description: '', authRequired: true }
      ],
      mongooseSchemas: ['', ''],
      techStackHighlights: [''],
      sampleCodeSnippet: {
        filename: '',
        language: '',
        code: ``
      }
    }
  },

];

export const apiConsolePresets: ApiConsolePreset[] = [
  {
    id: 'preset-developer',
    method: 'GET',
    endpoint: '/api/v1/developer',
    description: 'Fetch Developer Status & Fullstack System Specs',
    status: 200,
    statusText: 'OK',
    responsePayload: {
      status: 'operational',
      developer: {
        name: 'MERN Full-Stack Engineer',
        title: 'Software Engineer (MongoDB, Express, React, Node.js)',
        primaryPillars: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
        location: 'Worldwide Remote / Hybrid',
        openForHire: true
      },
      systemTelemetry: {
        nodeVersion: 'v20.11.0 ESM',
        expressStatus: '',
        mongoCluster: 'Atlas AWS Cloud (Primary)',
        latency: '28ms'
      }
    }
  },
  {
    id: 'preset-skills',
    method: 'GET',
    endpoint: '/api/v1/skills/mern',
    description: 'Retrieve Technical Stack Breakdown & Tooling',
    status: 200,
    statusText: 'OK',
    responsePayload: {
      success: true,
      stackPillars: {
        database: ['MongoDB', 'Mongoose ODM', 'Atlas Cloud', 'Aggregations'],
        backend: ['Node.js', 'Express.js', 'JWT Auth', 'REST APIs', 'Zod Validation'],
        frontend: ['React.js 19', 'TypeScript', 'Tailwind CSS v4', 'Zustand', 'Vite'],
        devops: ['Git', 'Docker', 'Postman', 'Render / Vercel']
      }
    }
  },
  {
    id: 'preset-projects',
    method: 'GET',
    endpoint: '/api/v1/projects?featured=true',
    description: 'Get List of Featured MERN Applications',
    status: 200,
    statusText: 'OK',
    responsePayload: {
      count: 3,
      projects: [
        { id: 'mern-shop-pro', name: 'MERN Enterprise E-Commerce Engine', stack: ['MongoDB', 'Express', 'React', 'Node'], status: 'Live' },
        { id: 'task-flow-mern', name: 'TaskFlow Real-Time Workspace', stack: ['MongoDB', 'Express', 'React', 'Node', 'TypeScript'], status: 'Live' },
        { id: 'dev-nexus-api', name: 'DevNexus Social Platform API', stack: ['MongoDB', 'Express', 'React', 'Node'], status: 'Live' }
      ]
    }
  },
  {
    id: 'preset-ping',
    method: 'POST',
    endpoint: '/api/v1/ping',
    description: 'Test Server Connection & Response Latency',
    status: 200,
    statusText: 'OK',
    requestBody: { clientTime: '2026-09-22T12:00:00.000Z', action: 'ping' },
    responsePayload: {
      pong: true,
      serverTime: new Date().toISOString(),
      latencyMs: 19,
      status: 'Server Heartbeat Healthy 🟢'
    }
  }
];

export const workExperience: Experience[] = [

  {
    id: 'exp-2',
    role: 'Frontend Web Developer',
    company: 'DigiChum Infotech',
    period: 'Jan 2026 - Apr 2026',
    location: 'OnSite, Indore',
    metrics: '',
    description: [
      '',
      '',
      '',
      ''
    ],
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript', 'React.js', 'Github']
  }
];



export const contactInfo: ContactInfo = {
  email: 'anuargpanjre79@gmail.com',
  location: 'PAN INDIA / Remote',
  github: 'https://github.com/anuragDev06',
  linkedin: 'https://in.linkedin.com/in/anuragpanjre-dev',
  twitter: 'https://twitter.com'
};
