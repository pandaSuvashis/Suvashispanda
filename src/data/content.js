import {
  FaPython, FaJava, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDocker,
  FaHtml5, FaCss3Alt, FaDatabase, FaLinkedin, FaEnvelope, FaPhone
} from 'react-icons/fa';
import {
  SiJavascript, SiTypescript, SiCplusplus, SiC,
  SiTensorflow, SiPytorch, SiMongodb, SiPostgresql, SiFirebase,
  SiExpress, SiNextdotjs, SiFastapi, SiFlask
} from 'react-icons/si';

export const personalInfo = {
  name: 'Suvashis Panda',
  location: 'Hyderabad, India',
  email: 'suvashispandXXX@gmail.com',
  phone: '+91-851997XXXX',
  linkedin: 'https://linkedin.com/in/suvashispanda',
  linkedinDisplay: 'linkedin.com/in/suvashispanda',
  roles: ['Software Engineer', 'AI/ML Engineer', 'Full Stack Developer'],
  heroTagline: 'I build intelligent systems & scalable web apps',
};

export const aboutText = [
  `I'm not just another developer!! I'm someone who genuinely loves the intersection of code and intelligence. My journey started with a fascination for how machines can learn, and it evolved into building end-to-end systems that solve real problems.`,
  `With deep expertise in the MERN stack and hands on experience in Machine Learning, Deep Learning, and Generative AI, I bring a rare blend of full-stack development and AI engineering. Whether it's architecting a scalable REST API or training a model to predict player behavior in a game, I thrive on challenges that push boundaries.`,
  `I believe the best software is built at the crossroads of creativity and analytical thinking and that's exactly where I operate.`,
];

export const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: FaPython, color: '#3776AB' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Java', icon: FaJava, color: '#ED8B00' },
      { name: 'C', icon: SiC, color: '#A8B9CC' },
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
    ],
  },
  {
    title: 'AI / ML',
    skills: [
      { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
      { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
      { name: 'Machine Learning', icon: null, color: '#00C9A7', label: 'ML' },
      { name: 'Deep Learning', icon: null, color: '#8B5CF6', label: 'DL' },
      { name: 'GenAI / LLMs', icon: null, color: '#EC4899', label: 'AI' },
      { name: 'Agentic AI', icon: null, color: '#06B6D4', label: 'AG' },
      { name: 'Reinforcement Learning', icon: null, color: '#F59E0B', label: 'RL' },
      { name: 'MLOps', icon: null, color: '#10B981', label: 'Op' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', icon: FaReact, color: '#61DAFB' },
      { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#FFFFFF' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'Flask', icon: SiFlask, color: '#FFFFFF' },
    ],
  },
  {
    title: 'Database & Tools',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      { name: 'GitHub', icon: FaGithub, color: '#FFFFFF' },
    ],
  },
];

export const experience = [
  {
    role: 'ML / Front-End Intern',
    company: 'Loka Chakra',
    period: 'May 2024 – Jul 2024',
    highlights: [
      'Improved ML model accuracy by 15%+ through feature engineering and hyperparameter optimization',
      'Built a responsive analytics dashboard using React.js for real-time business insights',
      'Worked on BuzzMind a business analytics platform enhancing data visualization modules',
      'Delivered measurable impact contributing to data driven decision making across teams',
    ],
  },
];

export const projects = [
  {
    title: 'Green Route',
    emoji: '🔥',
    description:
      'AI-powered eco-navigation system that optimizes routes for minimal carbon footprint using Ant Colony Optimization and Machine Learning.',
    details:
      'Integrates Google Maps API with a FastAPI backend for real-time traffic analysis and fuel consumption optimization. Uses bio-inspired algorithms for multi objective route planning.',
    tech: ['Python', 'FastAPI', 'Google Maps API', 'ML', 'Ant Colony Optimization'],
    github: '#',
    live: '#',
  },
  {
    title: 'ADAPTX – AI Game Engine',
    emoji: '🎮',
    description:
      'Intelligent game engine with AI enemies powered by Markov Decision Processes and dynamic difficulty adjustment.',
    details:
      'Uses RNN-based player behavior prediction to adapt enemy strategies in real-time. Implements a Dynamic Difficulty Adjustment system that keeps gameplay challenging yet enjoyable.',
    tech: ['Python', 'PyTorch', 'MDP', 'RNN', 'Game AI'],
    github: '#',
    live: '#',
  },
  {
    title: 'Musify – AI Music Recommender',
    emoji: '🎵',
    description:
      'Smart music recommendation system using cosine similarity to suggest tracks based on listening patterns and audio features.',
    details:
      'Built with a React frontend and Flask backend. Processes audio features to compute similarity scores and provides personalized playlist recommendations.',
    tech: ['React', 'Flask', 'Python', 'Cosine Similarity', 'ML'],
    github: '#',
    live: '#',
  },
];

export const achievements = [
  {
    title: 'Certified Smart Coder',
    year: '2024',
    description: 'Earned the Smart Coder certification from iLearn.Rocks, demonstrating strong problem-solving and coding proficiency.',
    isWinner: false,
  },
  {
    title: 'AIML Virtual Internship',
    year: '2024',
    description: 'Completed an AI/ML virtual internship, gaining hands-on experience with real-world machine learning pipelines.',
    isWinner: false,
  },
];

export const leadership = [
  {
    title: 'Coding Club Coordinator',
    description:
      'Mentored junior developers, organized coding challenges, and led workshops on competitive programming and web development.',
  },
  {
    title: 'Robotics Club Member',
    description:
      'Worked on hardware-software integration projects, combining embedded systems with intelligent control algorithms.',
  },
];

export const socialLinks = [
  { icon: FaLinkedin, href: 'https://linkedin.com/in/suvashispanda', label: 'LinkedIn' },
  { icon: FaEnvelope, href: 'mailto:suvashispanda18@gmail.com', label: 'Email' },
  { icon: FaPhone, href: 'tel:+918519978439', label: 'Phone' },
];
