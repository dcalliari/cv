import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Daniel Calliari",
  initials: "DC",
  location: "Belém, Pará, Brazil",
  locationLink: "https://www.google.com/maps/place/Belém",
  about:
    "Programmer, Designer",
  summary:
    "Passionate developer, problem solver, and lifelong learner. Dedicated to leveraging technology to create practical solutions. Enthusiastic about coding, innovation, and teamwork. Seeking new challenges and opportunities in the world of software development",
  avatarUrl: "https://github.com/booude.png",
  personalWebsiteUrl: "https://booude.github.io",
  contact: {
    email: "dbcalliari@gmail.com",
    tel: "+55 91 9 8209-8271",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/booude",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/daniel-calliari/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Amazon",
      degree: "Bachelor's Degree in Computer Science",
      start: "2024",
      end: "Present",
    },
    {
      school: "Federal Rural University of Amazonia",
      degree: "Bachelor's Degree in Information Systems, transferred",
      start: "2018",
      end: "2021",
    },
    {
      school: "Federal University of Pará",
      degree: "Bachelor's Degree in Mechanical Engineering, not concluded",
      start: "2014",
      end: "2018",
    },
  ],
  work: [
    {
      company: "Public Defender's Office",
      link: "https://defensoria.pa.def.br/",
      badges: ["Internship"],
      title: "Frontend Web Developer",
      start: "2024",
      end: "Present",
      description:
        "Developing Websites using Next.js",
    },
    {
      company: "NTP Engenharia",
      link: "https://maps.app.goo.gl/5zzABdNKyqhyS3Rz7",
      badges: ["Remote"],
      title: "App Development Manager",
      start: "2019",
      end: "2020",
      description:
        "Created a budgetary system for Android and iOS using React Native, led and managed a development team",
    },
    {
      company: "STIC",
      link: "https://stic.ufra.edu.br",
      badges: ["Internship"],
      title: "Backend Developer/Infrastructure Assistant",
      start: "2019",
      end: "2020",
      description: "Created and maintained servers on CentOS, developed websites in HTML/CSS and JavaScript for Ufra and provided IT assistance to professors",
    },
    {
      company: "LCA - Applied Computing Lab",
      link: "https://www.linkedin.com/company/lca-ufra/",
      badges: ["Internship"],
      title: "Frontend Developer/Designer",
      start: "2018",
      end: "2020",
      description: "Took part in multiple Android/iOS projects inside campus while developing the skills of Frontend Development and UX/UI design",
    },
    {
      company: "Castilla Idiomas",
      link: "https://castilla.com.br",
      badges: ["Hybrid"],
      title: "English Teacher",
      start: "2021",
      end: "2023",
      description:
        "Teached and graded Basic, Intermediate and Advanced students and monitored activities both in class and remote using Google Meet",
    },
  ],
  skills: [
    "Python",
    "JavaScript",
    "TypeScript",
    "Flutter",
    "Firebase",
    "React Native",
    "Adobe Xd",
    "PostgreSQL",
  ],
  projects: [
    {
      title: "Wild Rift Elo",
      techStack: [
        "Side Project",
        "Python",
        "Flask",
        "PostgreSQL",
        "JavaScript",
        "HTML/CSS",
        "SQLAlchemy",
      ],
      description: "Developed an API and a chatbot for Twitch streams of the game League of Legends Wild Rift, scraping data from the game accounts",
      link: {
        label: "github.com/booude/WildRiftElo",
        href: "https://github.com/booude/WildRiftElo",
      },
    },
    {
      title: "Etc Bot",
      techStack: [
        "Side Project",
        "Python",
        "Flask",
        "PostgreSQL",
        "HTML/CSS",
        "SQLAlchemy",
      ],
      description: "Developed a Twitch Bot to interact with the audience by many creative tools. Integrated with multiple APIs, including Twitch, Spotify and Wild Rift Elo",
      link: {
        label: "github.com/booude/etcbot",
        href: "https://github.com/booude/etcbot",
      },
    },
    {
      title: "SalvaCompra",
      techStack: [
        "Lead Frontend Developer",
        "Android",
        "JavaScript",
        "React Native",
        "Adobe Xd",
        "Elixir",
        "HTML/CSS",
      ],
      description: "Android application that displays the products and generates a price quotation for Salvabras",
      link: {
        label: "github.com/AmadorZcv/salvapaixao",
        href: "https://github.com/AmadorZcv/salvapaixao",
      },
    },
    {
      title: "Project Oshiro",
      techStack: [
        "Side Project",
        "Flutter",
        "Dart",
        "Adobe Xd",
        "FlutterFire",
        "Firebase",
      ],
      description: "Android application for browsing and playing audio files from language learning textbook collections that includes several control buttons to facilitate user interaction",
      link: {
        label: "github.com/booude/oshiro_flutter_project",
        href: "https://github.com/booude/oshiro_flutter_project",
      },
    },
    {
      title: "PiPy Camera Manager",
      techStack: [
        "College Lab Project",
        "Python",
      ],
      description: "Simple Raspberry Pi camera interface for easy configuration management",
      link: {
        label: "github.com/booude/pipy-cam-mngr",
        href: "https://github.com/booude/pipy-cam-mngr",
      },
    },
  ],
} as const;
