import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaGithub, FaDocker, FaAws, FaFacebook, FaChartBar } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiMysql, SiCplusplus, SiC, SiVscodium, SiBitbucket, SiJenkins, SiJupyter, SiGooglecolab, SiEclipseide, SiTensorflow, SiPytorch, SiScikitlearn } from 'react-icons/si';

// Project Screenshots
import faislaImg from '../assets/projects/faisla.png';
import skillswapImg from '../assets/projects/skillswap.png';
import supportBotImg from '../assets/projects/supportbot.png';
import libraryImg from '../assets/projects/library.png';

export const personalInfo = {
  name: "SHREE MAKESH N",
  firstName: "Makesh",
  title: "Software Engineer",
  roles: ["Software Engineer", "Gen AI Specialist", "Full Stack Developer", "ML Developer"],
  bio: `I am a result-oriented Software Engineer with over a year of professional experience in Java, Python, and GenAI. Currently pursuing my Master of Engineering in Computer Science, I specialize in building scalable automated solutions and AI/ML models that drive efficiency.

My professional journey at Urjanet (an Arcadia Enterprise) has been marked by developing high-impact automation tools, mentoring junior developers, and solving complex production issues. I have a proven track record of reducing manual intervention and improving software reliability through rigorous testing and innovative coding.

Deeply passionate about Generative AI and Machine Learning, I thrive on tackling complex engineering challenges and transforming data into actionable insights to solve real-world problems.`,
  email: "shreemakesh747@gmail.com",
  profilePic: "/makesh-sir-portfolio/makesh.jpeg",
  resumeLink: "/makesh-sir-portfolio/IT_Resume_Shree_Makesh_N.docx",
  certificatesGDriveLink: "#",
};


export const socialLinks = [
  { name: "GitHub", url: "https://github.com/shree747", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/shree-makesh-n", icon: "linkedin" },
  { name: "Facebook", url: "https://www.facebook.com/shree.makesh/", icon: "facebook" },
  { name: "Instagram", url: "https://www.instagram.com/_makesh747_/", icon: "instagram" },
  { name: "Email", url: "mailto:shreemakesh747@gmail.com", icon: "email" },
];



export const skills = {
  languages: [
    { name: "Java", icon: FaJava, proficient: true },
    { name: "Python", icon: FaPython, proficient: true },
    { name: "SQL", icon: SiMysql, proficient: true },
    { name: "C++", icon: SiCplusplus, proficient: false },
  ],
  ai_ml: [
    { name: "GenAI", icon: SiScikitlearn },
    { name: "TensorFlow", icon: SiTensorflow },
    { name: "PyTorch", icon: SiPytorch },
    { name: "Scikit-Learn", icon: SiScikitlearn },
    { name: "LLM", icon: SiScikitlearn },
  ],
  cloud_devops: [
    { name: "AWS", icon: FaAws },
    { name: "Jenkins", icon: SiJenkins },
    { name: "CI/CD", icon: FaGitAlt },
    { name: "Docker", icon: FaDocker },
  ],
  tools: [
    { name: "GitHub", icon: FaGithub },
    { name: "Bitbucket", icon: SiBitbucket },
    { name: "Eclipse", icon: SiEclipseide },
    { name: "VS Code", icon: SiVscodium },
    { name: "Jupyter", icon: SiJupyter },
    { name: "Google Colab", icon: SiGooglecolab },
    { name: "PowerBI", icon: FaChartBar },
  ],
};


export const projects = [
  {
    id: 1,
    title: "Skin Lesion Diagnosis using Hybrid ResNet Models",
    description: "Developed a hybrid CNN model for early skin lesion diagnosis using ResNet architectures. Improved classification accuracy by 15% through enhanced image analysis techniques.",
    tech: ["Python", "TensorFlow", "Deep Learning", "Keras"],
    github: "https://github.com/shree747",
    live: "#",
    image: null,
  },
  {
    id: 2,
    title: "Dev Extraction (Arcadia/Urjanet)",
    description: "Automated template extraction for utility data from multiple providers. Solved 100+ template issues, reducing manual intervention by 50% and production delays by 30%.",
    tech: ["Java", "Automation", "Agile", "SQL"],
    github: "#",
    live: "#",
    image: null,
  },
];


export const experience = [
  {
    role: "Software Engineer – Level 2",
    company: "Urjanet Energy Solutions (An Arcadia Enterprise)",
    duration: "Sep 2022 — Oct 2023",
    location: "Chennai, India",
    description: [
      "Developed Java-based automation solutions, reducing manual intervention by 50% and cutting production delays by 30%.",
      "Led and mentored junior developers, enhancing team performance and workflow efficiency (30% increase in efficiency).",
      "Implemented solutions solving over 100+ template fixes, cutting production time by 2 months.",
      "Collaborated in Agile teams, participating in daily stand-ups, sprint planning, and retrospectives."
    ],
  },
  {
    role: "Software Engineer – Level 1",
    company: "Urjanet Energy Solutions",
    duration: "Jun 2022 — Sep 2022",
    location: "Chennai, India",
    description: [
      "Developed Java-based solutions for automated utility data extraction, improving efficiency by 30%.",
      "Enhanced testing workflows by executing 100+ test cases, leading to increased bug identification.",
      "Managed QA processes, including bug reports, audits, and reduced production defects by 35%."
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Urjanet Energy Solutions",
    duration: "Jan 2022 — Jun 2022",
    location: "Chennai, India",
    description: [
      "Managed 500+ tickets for data extraction code and tracked project progress through Agile methods.",
      "Worked closely with testing teams to ensure identification and logging of 150+ valid defects."
    ],
  },
];

export const education = [
  {
    degree: "Master of Engineering in Computer Science",
    institution: "Easwari Engineering College (SRM Group)",
    duration: "2023 — 2025",
    description: "Focusing on advanced topics in AI-ML, GenAI, and Data Science. Maintaining a CGPA of 9.57. First Class with Distinction.",
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Rajalakshmi Institute of Technology",
    duration: "2018 — 2022",
    description: "Completed with a CGPA of 8.33. Developed strong foundations in software engineering, data structures, and algorithms.",
  },
];


export const certifications = [
  {
    name: "ICSCAN-24 | 6th International Conference-IEEE",
    issuer: "IEEE / MVIT Puducherry",
    date: "Dec 2024",
    link: "#",
  },
  {
    name: "AAIMB-24 | 2nd International Conference-Springer",
    issuer: "Springer / SAEC Chennai",
    date: "Dec 2024",
    link: "#",
  },
  {
    name: "ML-Fiesta: AI/ML Hackathon",
    issuer: "IIIT Bangalore",
    date: "Nov 2024",
    link: "#",
  },
  {
    name: "Advanced IoT Workshop",
    issuer: "SSN Engineering College",
    date: "Feb 2024",
    link: "#",
  },
  {
    name: "Android Development Virtual Internship",
    issuer: "Bharat Intern",
    date: "Apr 2024",
    link: "#",
  },
  {
    name: "Ethical Hacking Hackathon (1st Runner-Up)",
    issuer: "SAEC Chennai",
    date: "Apr 2024",
    link: "#",
  },
  {
    name: "Google Cloud Platform Fundamentals & Core Infrastructure",
    issuer: "Coursera",
    date: "Aug 2021",
    link: "#",
  },
];


export const hackathons = [
  {
    name: "ML-Fiesta: AI/ML Hackathon",
    organizer: "IIIT Bangalore",
    description: "Participated in the AI/ML hackathon focusing on generative models and data science applications.",
    type: "Participation",
    certificate: "#",
    date: "2024",
  },
  {
    name: "Ethical Hacking Hackathon",
    organizer: "SAEC Chennai",
    description: "Awarded 1st Runner-Up for demonstrating advanced security solutions and mitigation strategies.",
    type: "Winner (1st Runner-Up)",
    certificate: "#",
    date: "2024",
  },
  {
    name: "Mr. Dexter Award",
    organizer: "Urjanet / Arcadia",
    description: "Received for exceptional problem-solving and solving complex fixes during professional tenure.",
    type: "Excellence Award",
    certificate: "#",
    date: "2023",
  },
];



export const navLinks = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Experience", to: "experience" },
  { name: "Education", to: "education" },
  { name: "Projects", to: "projects" },
  { name: "Skills", to: "skills" },
  { name: "Certificates", to: "certifications" },
  { name: "Events", to: "hackathons" },
  { name: "Contact", to: "contact" },
];

