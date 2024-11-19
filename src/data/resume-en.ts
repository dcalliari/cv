import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import type { Resume } from "@/types/resume";

export const enResume: Resume = {
	name: "Daniel Calliari",
	initials: "DC",
	location: "Belém, State of Pará, Brazil",
	locationLink: "https://www.google.com/maps/place/Belém",
	about: "Software Engineer",
	summary:
		"Software engineer focused on functional solutions, specializing in TypeScript, Node and React. Experienced in leading web and mobile projects, with an interest in APIs, bots, and interactive systems. Seeking opportunities in smart cities and automation",
	avatarUrl: "https://github.com/dcalliari.png",
	personalWebsiteUrl: "https://dcalliari.github.io",
	topics: {
		about: "About",
		workExperience: "Work Experience",
		education: "Education",
		skills: "Skills",
		projects: "Projects",
	},
	languages: {
		english: "English",
		portuguese: "Portuguese",
		japanese: "Japanese",
	},
	contact: {
		email: "dbcalliari@gmail.com",
		tel: "+55 91 9 8209-8271",
		social: [
			{
				name: "GitHub",
				url: "https://github.com/dcalliari",
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
			end: "2020",
		},
	],
	work: [
		{
			company: "Tecsomobi",
			link: "https://www.tecsomobi.com.br/",
			badges: ["Hybrid"],
			title: "Software Engineer",
			start: "2024",
			end: "Present",
			description:
				"Developing an urban mobility and ticketing software using TypeScript, React, Node, PostgreSQL and AWS",
		},
		{
			company: "V3L0Z - UNAMA",
			link: "https://projeto-v3l0z.github.io/V3L0Z/",
			badges: ["Volunteer"],
			title: "Django Developer",
			start: "2024",
			end: "Present",
			description:
				"Developing solutions for UNAMA using Django, Python and Bootstrap",
		},
		{
			company: "Public Defender's Office",
			link: "https://defensoria.pa.def.br/",
			badges: ["Volunteer"],
			title: "Frontend Web Developer",
			start: "2024",
			end: "2024",
			description:
				"Developed Websites using Next.js, Tailwind CSS and TypeScript",
		},
		{
			company: "NTP Engenharia",
			link: "https://maps.app.goo.gl/5zzABdNKyqhyS3Rz7",
			badges: ["Remote"],
			title: "Lead Mobile Developer",
			start: "2019",
			end: "2022",
			description:
				"Created a budgetary system for Android and iOS using React Native, led and managed a development team",
		},
		{
			company: "STIC",
			link: "https://stic.ufra.edu.br",
			badges: ["Internship"],
			title: "Full Stack Web Developer",
			start: "2019",
			end: "2020",
			description:
				"Created and maintained servers on CentOS, developed websites in HTML/CSS and JavaScript for Ufra and provided IT assistance to professors",
		},
		{
			company: "LCA - Applied Computing Lab",
			link: "https://www.linkedin.com/company/lca-ufra/",
			badges: ["Volunteer"],
			title: "Mobile Developer/Designer",
			start: "2018",
			end: "2020",
			description:
				"Took part in multiple Android/iOS projects inside campus while developing the skills of Frontend Development and UX/UI design",
		},
	],
	skills: [
		"Next.js",
		"Node.js",
		"TypeScript",
		"PostgreSQL",
		"Python",
		"Django",
		"Flutter",
		"JavaScript",
		"Firebase",
		"AWS",
	],
	projects: [
		{
			title: "Django CRUD Clinic",
			techStack: [
				"Personal Project",
				"Django",
				"Python",
				"Bootstrap",
				"SQLite",
				"PostgreSQL",
			],
			description:
				"Web application for managing a clinic, with a CRUD system for patients, doctors, appointments, and transactions with a simple and responsive design",
			link: {
				label: "github.com/dcalliari/django-veloz",
				href: "https://github.com/dcalliari/django-veloz",
			},
		},
		{
			title: "Quiz Engine",
			techStack: ["Personal Project", "Next.js", "JavaScript", "SCSS"],
			description:
				"Web application for creating and playing quizzes of different types, with a simple and responsive design",
			link: {
				label: "quiz-engine-siphox-health.vercel.app/",
				href: "https://quiz-engine-siphox-health.vercel.app/",
			},
		},
		{
			title: "Mock Banking App",
			techStack: ["Side Project", "Flutter", "Dart", "Figma"],
			description:
				"Mobile application that simulates a banking app, with a login screen, a home screen with a list of transactions, and a working currency converter",
			link: {
				label: "github.com/dcalliari/mobile_coding_banking_app",
				href: "https://github.com/dcalliari/mobile_coding_banking_app",
			},
		},
		{
			title: "Calliari's Artigiano",
			techStack: [
				"Side Project",
				"Next.js",
				"TypeScript",
				"Shadcn/UI",
				"Tailwind CSS",
				"Firebase",
				"HTML/CSS",
			],
			description:
				"Restaurant website to showcase Next.js and Tailwind CSS skills, with a simple and elegant design, and a login and register with Firebase integration",
			link: {
				label: "artigiano.vercel.app",
				href: "https://artigiano.vercel.app/",
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
			description:
				"Android application for browsing and playing audio files from language learning textbook collections that includes several control buttons to facilitate user interaction",
			link: {
				label: "github.com/dcalliari/oshiro_flutter_project",
				href: "https://github.com/dcalliari/oshiro_flutter_project",
			},
		},
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
			description:
				"Developed an API and a chatbot for Twitch streams of the game League of Legends Wild Rift, scraping data from the game accounts",
			link: {
				label: "github.com/dcalliari/WildRiftElo",
				href: "https://github.com/dcalliari/WildRiftElo",
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
			description:
				"Developed a Twitch Bot to interact with the audience by many creative tools. Integrated with multiple APIs, including Twitch, Spotify and Wild Rift Elo",
			link: {
				label: "github.com/dcalliari/etcbot",
				href: "https://github.com/dcalliari/etcbot",
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
			description:
				"Android application that displays the products and generates a price quotation for Salvabras",
			link: {
				label: "github.com/AmadorZcv/salvapaixao",
				href: "https://github.com/AmadorZcv/salvapaixao",
			},
		},
		{
			title: "PiPy Camera Manager",
			techStack: ["College Lab Project", "Python"],
			description:
				"Simple Raspberry Pi camera interface for easy configuration management",
			link: {
				label: "github.com/dcalliari/pipy-cam-mngr",
				href: "https://github.com/dcalliari/pipy-cam-mngr",
			},
		},
	],
} as const;
