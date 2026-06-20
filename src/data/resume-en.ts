import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import type { Resume } from "@/types/resume";

export const enResume: Resume = {
	name: "Daniel Calliari",
	initials: "DC",
	location: "Belém, State of Pará, Brazil",
	locationLink: "https://www.google.com/maps/place/Belém",
	about: "Software Engineer",
	summary:
		"Software engineer with experience in REST APIs, Brazilian electronic court systems, distributed platforms, and full stack development with TypeScript, Python/Django, and React/Next.js. Background in asynchronous integrations, OIDC authentication, and deployment with Docker and CI/CD.",
	avatarUrl: "https://github.com/dcalliari.png",
	personalWebsiteUrl: "https://calliari.dev",
	topics: {
		about: "About",
		workExperience: "Experience",
		education: "Education",
		skills: "Skills",
		projects: "Projects",
		languages: "Languages",
	},
	languages: {
		english: "English",
		portuguese: "Portuguese",
		japanese: "Japanese",
	},
	contact: {
		email: "daniel@calliari.dev",
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
			end: "2025",
		},
		{
			school: "Federal Rural University of Amazon",
			degree: "Bachelor's Degree in Information Systems",
			start: "2018",
			end: "2022",
		},
	],
	work: [
		{
			company: "Public Defender's Office",
			link: "https://defensoria.pa.def.br/",
			badges: ["On-site"],
			title: "Software Engineer",
			start: "1/2026",
			end: "Present",
			highlights: [
				{
					name: "ProcAPI",
					description:
						"Architecture and evolution of a REST API (Django/DRF) that unifies queries across Brazilian electronic court systems (E-PROC, PJe, PROJUDI, SEEU); asynchronous processing with Celery, RabbitMQ/Redis queues, caching, and integration with SOLAR for filing and procedural submissions.",
				},
				{
					name: "SOLAR",
					description:
						"Maintenance and modernization of a distributed Django platform for managing appointments, cases, and documents (ECM) for the Public Defender's Office; filing/protocol queues, Celery workers, observability (Sentry/Flower), and deployment on Docker Swarm/GitLab CI.",
				},
				{
					name: "Livre",
					description:
						"Full stack development (Next.js/TypeScript + Django REST) for querying and managing clients and people in pre-trial detention; OIDC authentication (Keycloak) and integration with Solar/eproc.",
				},
				{
					name: "Agendamento",
					description:
						"Appointment request queue system with a Next.js frontend and Java backend (Spring Boot); Keycloak authentication, REST API, PostgreSQL persistence, and operational triage workflows.",
				},
			],
		},
		{
			company: "Portí",
			link: "https://porti.digital/",
			badges: ["Remote"],
			title: "Software Engineer",
			start: "8/2025",
			end: "10/2025",
			highlights: [
				{
					name: "MedSync",
					description:
						"Physician and shift schedule synchronization project, integrating external partner APIs and ensuring consistency across systems. Python/Celery architecture with RabbitMQ queues for asynchronous processing and fault tolerance; responsible for API design, integrations, and reliability oversight.",
				},
				{
					name: "Portí ERP",
					description:
						"Development and maintenance of the Backoffice system including API and web client: Python/Django REST API packaged with Docker to expose administrative operations and data; React/JavaScript web client focused on metrics, user management, and performance.",
				},
				{
					name: "Portí App",
					description:
						"Dashboards and administrative interfaces for the end-user app (physicians), including the Antecipaí module for advance payment requests and appointment management. Responsible for frontend-backend integration (React/JavaScript + APIs), UX optimizations, and request/triage workflows.",
				},
			],
		},
		{
			company: "Autopass",
			link: "https://www.tecsomobi.com.br/",
			badges: ["Remote"],
			title: "Software Engineer",
			start: "11/2024",
			end: "7/2025",
			highlights: [
				{
					name: "Carioca Hub",
					description:
						"Led development of Carioca Hub, an integration solution for ticketing systems, using TypeScript, Node, and RabbitMQ to build scalable APIs.",
				},
				{
					name: "TSchool",
					description:
						"Led development of TSchool, integrating web components and API using TypeScript, Next, and Node with Express.",
				},
				{
					name: "TSchool Service",
					description:
						"Developed and optimized TSchool Service, focusing on both frontend and backend using TypeScript, React, and Node.",
				},
				{
					name: "TClient",
					description:
						"Maintained and improved the TClient project, ensuring seamless interaction between web components and API.",
				},
				{
					name: "Customer",
					description:
						"Played a key role in the Customer project, improving both web components and API v2 with TypeScript, React, and Node.",
				},
				{
					name: "TApp",
					description:
						"Maintained and optimized a modular white-label app for selling and recharging public transport tickets, using React Native, TypeScript, and Node.",
				},
			],
		},
		{
			company: "V3L0Z - UNAMA",
			link: "https://projeto-v3l0z.github.io/V3L0Z/",
			badges: ["Hybrid"],
			title: "Software Developer",
			start: "9/2024",
			end: "9/2025",
			highlights: [
				{
					name: "Campus Connect",
					description:
						"Increased student engagement by developing the Campus Connect student social network using React and Django.",
				},
				{
					name: "Zoo UNAMA",
					description:
						"Implemented digital solutions for zoo management and visitor engagement in the Zoo UNAMA project using Django and SQLite.",
				},
				{
					name: "Inventory Management",
					description:
						"Optimized inventory management through the Inventory Management project using Django, SQLite, and PostgreSQL.",
				},
				{
					name: "Academia Veloz",
					description:
						"Developed both the front-end and API for the Academia Veloz platform, facilitating online course management using React and Django.",
				},
			],
		},
		{
			company: "Public Defender's Office",
			link: "https://defensoria.pa.def.br/",
			badges: ["On-site"],
			title: "Frontend Web Developer",
			start: "10/2023",
			end: "8/2024",
			highlights: [
				{
					name: "Portal Project",
					description:
						"Led development of the main portal using Next.js, Material UI, and TypeScript.",
				},
				{
					name: "Intranet System",
					description:
						"Created and maintained the intranet system to improve internal communication and resource sharing using React, TypeScript, and Material UI.",
				},
				{
					name: "Daily Management System",
					description:
						"Implemented a daily management system to improve internal operations and task tracking using Next.js, Tailwind CSS, and TypeScript.",
				},
			],
		},
		{
			company: "Freelance",
			link: "https://calliari.dev",
			badges: ["Remote"],
			title: "Backend Developer",
			start: "4/2021",
			end: "6/2022",
			highlights: [
				{
					name: "WildRiftElo",
					description:
						"Created and maintained a Twitch chatbot focused on League of Legends: Wild Rift, using Python with the TwitchIO library, Flask SQLAlchemy, plus HTML and CSS for auxiliary components.",
				},
				{
					name: "EtcBot",
					description:
						"Developed a Twitch chatbot for channel automation and interactivity, using Python, HTML, and CSS.",
				},
				{
					name: "BodeDotExe",
					description:
						"Implemented an interaction management system for Twitch using Python.",
				},
			],
		},
		{
			company: "NTP Engenharia",
			link: "https://maps.app.goo.gl/5zzABdNKyqhyS3Rz7",
			badges: ["Remote"],
			title: "Lead Mobile Developer",
			start: "7/2019",
			end: "3/2020",
			highlights: [
				{
					name: "Salva Compra",
					description:
						"Mobile price comparison app with login and local storage, using React Native and a Phoenix Elixir API. Published on Android and iOS stores.",
				},
				{
					name: "Salva Estoque",
					description:
						"Mobile app for remote inventory management by partner resellers. Integration with factory database via APIs, restock notifications, and category-based control. Built with React Native and a Java backend.",
				},
			],
		},
		{
			company: "STIC",
			link: "https://stic.ufra.edu.br",
			badges: ["Internship"],
			title: "Full Stack Web Developer",
			start: "10/2019",
			end: "3/2020",
			description:
				"Created and maintained servers on CentOS, developed websites in HTML/CSS and JavaScript for Ufra and provided IT assistance to professors",
		},
		{
			company: "LCA - Applied Computing Lab",
			link: "https://www.linkedin.com/company/lca-ufra/",
			badges: ["Volunteer"],
			title: "Mobile Developer/Designer",
			start: "4/2018",
			end: "3/2020",
			description:
				"Took part in multiple Android/iOS projects inside campus while developing the skills of Frontend Development and UX/UI design",
		},
	],
	skills: [
		"TypeScript",
		"JavaScript",
		"Java",
		"Python",
		"SQL",
		"MongoDB",
		"Elixir",
		"React",
		"Next.js",
		"Node.js",
		"Express",
		"Tailwind CSS",
		"Django",
		"Flask",
		"Flutter",
		"Prisma",
		"Git",
		"GitHub",
		"Docker",
		"Postman",
		"Swagger",
		"Firebase",
		"RabbitMQ",
		"Jest",
		"Vitest",
		"GitHub Actions",
		"Scrum",
		"Kanban",
		"Git Flow",
	],
	languageProficiency: [
		{
			language: "Portuguese",
			level: "Native",
		},
		{
			language: "English",
			level:
				"Advanced (C2 — fluent in technical communication, writing, and conversation)",
		},
		{
			language: "Japanese",
			level: "Intermediate (JLPT N3 — certified in 2014)",
		},
	],
	projects: [
		{
			title: "Jessica Medeiros",
			techStack: [
				"Personal Project",
				"React",
				"TypeScript",
				"Vite",
				"Framer Motion",
			],
			description:
				"Immersive editorial portfolio for a fashion model, featuring image murals, editorial navigation, and media optimization. Built with React, TypeScript, Vite, and Framer Motion.",
			link: {
				label: "jessimedeiros.com",
				href: "https://jessimedeiros.com",
			},
		},
		{
			title: "Kodon Amazon Taiko",
			techStack: [
				"Personal Project",
				"React",
				"TypeScript",
				"Vite",
				"Tailwind CSS",
				"Framer Motion",
			],
			description:
				"Institutional website for the Kodon Amazon Taiko cultural collective, with history, events, multimedia gallery, newsletter, and multi-language support.",
			link: {
				label: "taiko.calliari.dev",
				href: "https://taiko.calliari.dev/",
			},
		},
		{
			title: "Tap Menu",
			techStack: [
				"Personal Project",
				"Bun",
				"Hono",
				"React",
				"Turbo",
			],
			description:
				"Digital menu with QR Code ordering for bars and restaurants. Monorepo with full menu flow, table-based orders, and an admin dashboard.",
			link: {
				label: "github.com/dcalliari/tap-menu",
				href: "https://github.com/dcalliari/tap-menu",
			},
		},
		{
			title: "Calliari's Artigiano",
			techStack: [
				"Side Project",
				"Next.js",
				"TypeScript",
				"Tailwind CSS",
				"Firebase",
			],
			description:
				"Restaurant website to showcase Next.js and Tailwind CSS skills, with a simple and elegant design, and login and register with Firebase integration.",
			link: {
				label: "artigiano.calliari.dev",
				href: "https://artigiano.calliari.dev/",
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
				"SQLAlchemy",
			],
			description:
				"Developed an API and a chatbot for Twitch streams of the game League of Legends Wild Rift, scraping data from game accounts.",
			link: {
				label: "github.com/dcalliari/WildRiftElo",
				href: "https://github.com/dcalliari/WildRiftElo",
			},
		},
		{
			title: "Twitch Tools",
			techStack: ["Python", "TwitchIO", "Flask", "PostgreSQL"],
			description:
				"Independent development of bots, APIs, and dashboards for streamers, using Python (TwitchIO), Flask, and PostgreSQL. Focus on real-time chat interactions and automation.",
			link: {
				label: "github.com/dcalliari",
				href: "https://github.com/dcalliari",
			},
		},
		{
			title: "Project Oshiro",
			techStack: [
				"Side Project",
				"Flutter",
				"Dart",
				"FlutterFire",
				"Firebase",
			],
			description:
				"Android application for browsing and playing audio files from language learning textbook collections that includes several control buttons to facilitate user interaction.",
			link: {
				label: "github.com/dcalliari/oshiro_flutter_project",
				href: "https://github.com/dcalliari/oshiro_flutter_project",
			},
		},
		{
			title: "Quiz Engine",
			techStack: ["Side Project", "Next.js", "JavaScript", "SCSS"],
			description:
				"Web application for creating and playing quizzes of different types, with a simple and responsive design.",
			link: {
				label: "quiz-engine-siphox-health.vercel.app",
				href: "https://quiz-engine-siphox-health.vercel.app/",
			},
		},
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
				"Web application for managing a clinic, with a CRUD system for patients, doctors, appointments, and transactions with a simple and responsive design.",
			link: {
				label: "github.com/dcalliari/django-veloz",
				href: "https://github.com/dcalliari/django-veloz",
			},
		},
		{
			title: "Mock Banking App",
			techStack: ["Side Project", "Flutter", "Dart", "Figma"],
			description:
				"Mobile application that simulates a banking app, with a login screen, a home screen with a list of transactions, and a working currency converter.",
			link: {
				label: "github.com/dcalliari/mobile_coding_banking_app",
				href: "https://github.com/dcalliari/mobile_coding_banking_app",
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
				"Developed a Twitch Bot to interact with the audience by many creative tools. Integrated with multiple APIs, including Twitch, Spotify and Wild Rift Elo.",
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
				"React Native",
				"Elixir",
				"JavaScript",
			],
			description:
				"Android application that displays the products and generates a price quotation for Salvabras.",
			link: {
				label: "github.com/AmadorZcv/salvapaixao",
				href: "https://github.com/AmadorZcv/salvapaixao",
			},
		},
		{
			title: "PiPy Camera Manager",
			techStack: ["College Lab Project", "Python"],
			description:
				"Simple Raspberry Pi camera interface for easy configuration management.",
			link: {
				label: "github.com/dcalliari/pipy-cam-mngr",
				href: "https://github.com/dcalliari/pipy-cam-mngr",
			},
		},
	],
} as const;
