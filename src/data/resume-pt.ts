import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import type { Resume } from "@/types/resume";

export const ptResume: Resume = {
	name: "Daniel Calliari",
	initials: "DC",
	location: "Belém, Pará, Brasil",
	locationLink: "https://www.google.com/maps/place/Belém",
	about: "Engenheiro de Software",
	summary:
		"Engenheiro de software com foco em soluções funcionais, especializado em TypeScript, Node e React. Experiência em liderar projetos web e mobile, com interesse em APIs, bots e sistemas interativos. Em busca de oportunidades em cidades inteligentes e automação",
	avatarUrl: "https://github.com/dcalliari.png",
	personalWebsiteUrl: "https://dcalliari.github.io",
	topics: {
		about: "Sobre",
		workExperience: "Experiência Profissional",
		education: "Educação",
		skills: "Habilidades",
		projects: "Projetos",
	},
	languages: {
		english: "Inglês",
		portuguese: "Português",
		japanese: "Japonês",
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
			school: "Universidade da Amazônia",
			degree: "Bacharelado em Ciência da Computação",
			start: "2024",
			end: "Presente",
		},
		{
			school: "Universidade Federal Rural da Amazônia",
			degree: "Bacharelado em Sistemas de Informação, transferido",
			start: "2018",
			end: "2023",
		},
	],
	work: [
		{
			company: "Tecsomobi",
			link: "https://www.tecsomobi.com.br/",
			badges: ["Híbrido"],
			title: "Engenheiro de Software",
			start: "2024",
			end: "Presente",
			description:
				"Desenvolvendo um software de mobilidade urbana e bilhetagem com TypeScript, React, Node, PostgreSQL e AWS",
		},
		{
			company: "V3L0Z - UNAMA",
			link: "https://projeto-v3l0z.github.io/V3L0Z/",
			badges: ["Voluntário"],
			title: "Desenvolvedor Django",
			start: "2024",
			end: "Presente",
			description:
				"Desenvolvendo soluções para UNAMA usando Django, Python e Bootstrap",
		},
		{
			company: "Defensoria Pública do Estado",
			link: "https://defensoria.pa.def.br/",
			badges: ["Voluntário"],
			title: "Desenvolvedor Web Frontend",
			start: "2024",
			end: "2024",
			description:
				"Desenvolvi sites utilizando Next.js, Tailwind CSS e TypeScript",
		},
		{
			company: "NTP Engenharia",
			link: "https://maps.app.goo.gl/5zzABdNKyqhyS3Rz7",
			badges: ["Remoto"],
			title: "Desenvolvedor Mobile Líder",
			start: "2019",
			end: "2022",
			description:
				"Criei um sistema orçamentário para Android e iOS usando React Native, liderei e gerenciei uma equipe de desenvolvimento",
		},
		{
			company: "STIC",
			link: "https://stic.ufra.edu.br",
			badges: ["Estágio"],
			title: "Desenvolvedor Web Full Stack",
			start: "2019",
			end: "2020",
			description:
				"Criei e mantive servidores no CentOS, desenvolvi sites em HTML/CSS e JavaScript para a Ufra e prestei assistência de TI a professores",
		},
		{
			company: "LCA - Laboratório de Computação Aplicada",
			link: "https://www.linkedin.com/company/lca-ufra/",
			badges: ["Voluntário"],
			title: "Desenvolvedor Mobile/Designer",
			start: "2018",
			end: "2020",
			description:
				"Participei de diversos projetos Android/iOS no campus, desenvolvendo habilidades em Desenvolvimento Frontend e Design UX/UI",
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
			title: "Clínica CRUD Django",
			techStack: [
				"Projeto Paralelo",
				"Django",
				"Python",
				"Bootstrap",
				"SQLite",
				"PostgreSQL",
			],
			description:
				"Aplicativo web para gerenciamento de uma clínica, com um sistema CRUD para pacientes, médicos, consultas e transações, com um design simples e responsivo.",
			link: {
				label: "github.com/dcalliari/django-veloz",
				href: "https://github.com/dcalliari/django-veloz",
			},
		},
		{
			title: "Quiz Engine",
			techStack: ["Projeto Paralelo", "Next.js", "JavaScript", "SCSS"],
			description:
				"Aplicativo web para criar e jogar quizzes de diferentes tipos, com um design simples e responsivo",
			link: {
				label: "quiz-engine-siphox-health.vercel.app/",
				href: "https://quiz-engine-siphox-health.vercel.app/",
			},
		},
		{
			title: "Mock Banking App",
			techStack: ["Projeto Paralelo", "Flutter", "Dart", "Figma"],
			description:
				"Aplicação móvel que simula um app bancário, com uma tela de login, uma tela inicial com uma lista de transações e um conversor de moeda funcional",
			link: {
				label: "github.com/dcalliari/mobile_coding_banking_app",
				href: "https://github.com/dcalliari/mobile_coding_banking_app",
			},
		},
		{
			title: "Calliari's Artigiano",
			techStack: [
				"Projeto Paralelo",
				"Next.js",
				"TypeScript",
				"Shadcn/UI",
				"Tailwind CSS",
				"Firebase",
				"HTML/CSS",
			],
			description:
				"Site de restaurante para mostrar habilidades de Next.js e Tailwind CSS, com um design simples e elegante, e login e registro com integração Firebase",
			link: {
				label: "artigiano.vercel.app",
				href: "https://artigiano.vercel.app/",
			},
		},
		{
			title: "Wild Rift Elo",
			techStack: [
				"Projeto Paralelo",
				"Python",
				"Flask",
				"PostgreSQL",
				"JavaScript",
				"HTML/CSS",
				"SQLAlchemy",
			],
			description:
				"Desenvolvi uma API e um chatbot para transmissões na Twitch do jogo League of Legends: Wild Rift, coletando dados das contas do jogo",
			link: {
				label: "github.com/dcalliari/WildRiftElo",
				href: "https://github.com/dcalliari/WildRiftElo",
			},
		},
		{
			title: "Etc Bot",
			techStack: [
				"Projeto Paralelo",
				"Python",
				"Flask",
				"PostgreSQL",
				"HTML/CSS",
				"SQLAlchemy",
			],
			description:
				"Desenvolvi um Bot da Twitch para interagir com a audiência por meio de diversas ferramentas criativas. Integrado com várias APIs, incluindo Twitch, Spotify e Wild Rift Elo",
			link: {
				label: "github.com/dcalliari/etcbot",
				href: "https://github.com/dcalliari/etcbot",
			},
		},
		{
			title: "SalvaCompra",
			techStack: [
				"Desenvolvedor Frontend Líder",
				"Android",
				"JavaScript",
				"React Native",
				"Adobe Xd",
				"Elixir",
				"HTML/CSS",
			],
			description:
				"Aplicativo Android que exibe os produtos e gera um orçamento para produtos Salvabras",
			link: {
				label: "github.com/AmadorZcv/salvapaixao",
				href: "https://github.com/AmadorZcv/salvapaixao",
			},
		},
		{
			title: "Projeto Oshiro",
			techStack: [
				"Projeto Paralelo",
				"Flutter",
				"Dart",
				"Adobe Xd",
				"FlutterFire",
				"Firebase",
			],
			description:
				"Aplicativo Android para navegar e reproduzir arquivos de áudio de coleções de livros didáticos de idiomas, incluindo vários botões de controle para facilitar a interação do usuário",
			link: {
				label: "github.com/dcalliari/oshiro_flutter_project",
				href: "https://github.com/dcalliari/oshiro_flutter_project",
			},
		},
		{
			title: "PiPy Camera Manager",
			techStack: ["Projeto do Lab da Faculdade", "Python"],
			description:
				"Interface de câmera simples para Raspberry Pi, facilitando a gestão e configuração",
			link: {
				label: "github.com/dcalliari/pipy-cam-mngr",
				href: "https://github.com/dcalliari/pipy-cam-mngr",
			},
		},
	],
} as const;
