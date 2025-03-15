import { reactIcons } from "@/icon/react-icons";

export const TITLE = {
  NAME: "Rendy Putra Pratama",
  DESCRIPTION: "Welcome to My Portfolio Website",
  TEXT: "Hello, My Name",
};

export const BUTTONS: { DOWNLOAD_CV: string; CONTACT_ME: string } = {
  DOWNLOAD_CV: "Download CV",
  CONTACT_ME: "Contact Me",
};

export const CUSTOM_TYPING = {
  ROLES: ["Frontend Developer", "Backend Developer", "ML Engineer", "AI Enthusiast"],
  TEXT: "I am a ",
};

export const NAVBAR = {
  TITLE: "{} Rendy Code Enjoyer",
  TEXT_NAVIGATION: [
    "Home",
    "About Me",
    "Experience",
    "Skills",
    "Projects",
    "Certificate",
    "Contact Me",
  ],
  TEXT_LINKS: [
    {
      name: "Github",
      url: "https://github.com/rendy-ptr",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/rendy-putra-930460334/",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/rndyptrr_",
    },
    {
      name: "Tiktok",
      url: "https://www.tiktok.com/@rndyptr._",
    },
    {
      name: "Email",
      url: "mailto:rendyp348@gmail.com",
    },
  ],
};

export const ABOUT_ME = {
  TITLE: "About Me",
  DESC: "Hi! My name is Rendy Putra Pratama, a final-year Computer Engineering student from Karawang,West Java, Indonesia. I have a strong passion for web development and machine learning, including related fields like AI and Data Science, specializing in React.js and Python. Beyond coding, I see myself as a creative thinker, problem solver, and constant learner who loves exploring new technologies. I enjoy tackling challenges, building innovative solutions, and continuously improving my skills. Always open to new opportunities and collaborations, I’d love to connect and work on exciting projects together!",
};

export const EXPERIENCE = {
  TITLE: "Experience",
  GITHUB: "Github",
  LIST: [
    {
      title: "Internship as a Teknikal Programmer at PT. Jidoka System Indonesia",
      body: "March, 2023 - June, 2023 • 3 months",
      footer: "Internship as a Teknikal Programmer at PT. Jidoka System Indonesia",
    },
  ],
};

export const SKILLS = {
  TITLE: "Skills",
  TITLE_ANIMATED_BEAM: "Skills",
};

export const PROJECTS = {
  TITLE: "Projects",
  OTHER: "See Other Project",
  BUTTON: "Load More",
  GITHUB: "GITHUB",
  LIST: [
    {
      image: "/placeholder.svg",
      title: "Awesome Web App",
      description: "A cutting-edge web application built with modern technologies.",
      techStack: [
        { icon: reactIcons.Javascript, name: "JavaScript" },
        { icon: reactIcons.React, name: "React" },
        { icon: reactIcons.Typescript, name: "TypeScript" },
      ],
    },
    {
      image: "/placeholder.svg",
      title: "Mobile App",
      description: "An innovative mobile app with cross-platform capabilities.",
      techStack: [
        { icon: reactIcons.React, name: "React Native" },
        { icon: reactIcons.Typescript, name: "TypeScript" },
      ],
    },
    {
      image: "/placeholder.svg",
      title: "Backend API",
      description: "A robust and scalable backend API for enterprise applications.",
      techStack: [
        { icon: reactIcons.NodeJs, name: "Node.js" },
        { icon: reactIcons.Mongodb, name: "MongoDB" },
      ],
    },
    {
      image: "/placeholder.svg",
      title: "Imsakiyah Web App",
      description: "A robust and scalable backend API for enterprise applications.",
      techStack: [
        { icon: reactIcons.NodeJs, name: "Node.js" },
        { icon: reactIcons.Mongodb, name: "MongoDB" },
      ],
    },
  ],
};

export const CERTIFICATE = {
  TITLE: "Certificate",
  LIST: [
    {
      title: "Competency Certificate Junior Web Developer",
      publisher: "Publisher By • BNSP",
      body: "June, 2023 - June, 2026 • 3 years",
      link: "https://drive.google.com/file/d/1GJEktBkYL1ZnGLqILGBdc6mYNJ9vfqri/view?usp=sharing",
    },
    {
      title: "Basics of Data Science",
      publisher: "Publisher By • DICODING",
      body: "Nov, 2024 - Nov, 2027 • 3 years",
      link: "https://drive.google.com/file/d/1TMTqKlDXjaAcvgubSSdcL_OLwn_MOIBD/view?usp=sharing",
    },
    {
      title: "Basics of Structured Query Language (SQL)",
      publisher: "Publisher By • DICODING",
      body: "Nov, 2024 - Nov, 2027 • 3 years",
      link: "https://drive.google.com/file/d/1bGG7yCxn_VIAICmb2qOgMAGy_43jF-Kh/view?usp=sharing",
    },
    {
      title: "Basics of Python Programming",
      publisher: "Publisher By • DICODING",
      body: "March, 2025 - March, 2028 • 3 years",
      link: "https://drive.google.com/file/d/1rXmOESJxCFQE6UWaBVj_mKYUxzUfSDPK/view?usp=sharing",
    },
  ],
};

export const CONTACT_ME = {
  TITLE: "Contact Me",
};
