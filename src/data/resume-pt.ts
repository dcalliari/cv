import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import type { Resume } from "@/types/resume";

export const ptResume: Resume = {
	name: "Daniel Calliari",
	initials: "DC",
	location: "Belém, Pará, Brasil",
	locationLink: "https://www.google.com/maps/place/Belém",
	about: "Engenheiro de Software",
	summary:
		"Engenheiro de software com experiência em APIs REST, sistemas judiciais eletrônicos, plataformas distribuídas e desenvolvimento full stack com TypeScript, Python/Django e React/Next.js. Atuação em integrações assíncronas, autenticação OIDC e deploy com Docker e CI/CD.",
	avatarUrl: "https://github.com/dcalliari.png",
	personalWebsiteUrl: "https://calliari.dev",
	topics: {
		about: "Sobre",
		workExperience: "Experiência",
		education: "Educação",
		skills: "Habilidades",
		projects: "Projetos",
		languages: "Idiomas",
	},
	languages: {
		english: "Inglês",
		portuguese: "Português",
		japanese: "Japonês",
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
			school: "Universidade da Amazônia",
			degree: "Bacharelado em Ciência da Computação",
			start: "2024",
			end: "2025",
		},
		{
			school: "Universidade Federal Rural da Amazônia",
			degree: "Bacharelado em Sistemas de Informação",
			start: "2018",
			end: "2022",
		},
	],
	work: [
		{
			company: "Defensoria Pública",
			link: "https://defensoria.pa.def.br/",
			badges: ["Presencial"],
			title: "Engenheiro de Software",
			start: "1/2026",
			end: "Presente",
			highlights: [
				{
					name: "ProcAPI",
					description:
						"Arquitetura e evolução de API REST (Django/DRF) que unifica consultas a sistemas judiciais eletrônicos brasileiros (E-PROC, PJe, PROJUDI, SEEU); processamento assíncrono com Celery, filas RabbitMQ/Redis, cache e integração com SOLAR para peticionamento e manifestações processuais.",
				},
				{
					name: "SOLAR",
					description:
						"Manutenção e modernização de plataforma distribuída (Django) de gestão de atendimentos, processos e documentos (GED) para Defensoria Pública; filas de manifestação/protocolo, workers Celery, observabilidade (Sentry/Flower) e deploy em Docker Swarm/GitLab CI.",
				},
				{
					name: "Livre",
					description:
						"Desenvolvimento full stack (Next.js/TypeScript + Django REST) para consulta e gestão de assistidos e pessoas privadas de liberdade aguardando julgamento; autenticação OIDC (Keycloak) e integração com Solar/eproc.",
				},
				{
					name: "Agendamento",
					description:
						"Sistema de fila de solicitações de agendamento com frontend Next.js e backend Java (Spring Boot); autenticação Keycloak, API REST, persistência PostgreSQL e fluxos de triagem operacional.",
				},
			],
		},
		{
			company: "Portí",
			link: "https://porti.digital/",
			badges: ["Remoto"],
			title: "Engenheiro de Software",
			start: "8/2025",
			end: "10/2025",
			highlights: [
				{
					name: "MedSync",
					description:
						"Projeto de sincronização de cadastros de médicos e escalas (plantões), integrando APIs externas de parceiros e garantindo consistência entre sistemas. Arquitetura baseada em Python/Celery com filas (RabbitMQ) para processamento assíncrono e tolerância a falhas; responsável por design de APIs, integrações e supervisão da confiabilidade.",
				},
				{
					name: "Portí ERP",
					description:
						"Desenvolvimento e manutenção do sistema Backoffice que inclui API e cliente web: API em Python/Django REST empacotada com Docker para expor operações e dados administrativos; cliente web em React/JavaScript focado em métricas, gerenciamento de usuários e performance.",
				},
				{
					name: "Portí App",
					description:
						"Dashboard e interfaces administrativas relacionadas ao aplicativo do usuário final (médicos), incluindo o módulo Antecipaí para solicitações de antecipação e gerenciamento de atendimentos. Responsável por integração frontend-backend (React/JavaScript + APIs), otimizações de UX e fluxos de solicitação/triagem.",
				},
			],
		},
		{
			company: "Autopass",
			link: "https://www.tecsomobi.com.br/",
			badges: ["Remoto"],
			title: "Engenheiro de Software",
			start: "11/2024",
			end: "7/2025",
			highlights: [
				{
					name: "Carioca Hub",
					description:
						"Liderou o desenvolvimento do Carioca Hub, uma solução de integração para sistemas de bilhetagem, utilizando TypeScript, Node e RabbitMQ para construir APIs escaláveis.",
				},
				{
					name: "TSchool",
					description:
						"Liderou o desenvolvimento do TSchool, integrando componentes web e API usando TypeScript, Next e Node com Express.",
				},
				{
					name: "TSchool Service",
					description:
						"Desenvolveu e otimizou o TSchool Service, focando tanto no frontend quanto no backend usando TypeScript, React e Node.",
				},
				{
					name: "TClient",
					description:
						"Manteve e aprimorou o projeto TClient, garantindo uma interação perfeita entre os componentes web e API.",
				},
				{
					name: "Customer",
					description:
						"Desempenhou um papel fundamental no projeto Customer, melhorando tanto os componentes web quanto API v2 com TypeScript, React e Node.",
				},
				{
					name: "TApp",
					description:
						"Manteve e otimizou um aplicativo modular white-label para venda e recarga de bilhetes de transporte público, utilizando React Native, TypeScript e Node.",
				},
			],
		},
		{
			company: "V3L0Z - UNAMA",
			link: "https://projeto-v3l0z.github.io/V3L0Z/",
			badges: ["Híbrido"],
			title: "Desenvolvedor de Software",
			start: "9/2024",
			end: "9/2025",
			highlights: [
				{
					name: "Campus Connect",
					description:
						"Aumentou a interação estudantil desenvolvendo a rede social estudantil Campus Connect utilizando React e Django.",
				},
				{
					name: "Zoo UNAMA",
					description:
						"Implementou soluções digitais para a gestão do zoológico e o engajamento dos visitantes no projeto Zoo UNAMA utilizando Django e SQLite.",
				},
				{
					name: "Gestão de Estoque",
					description:
						"Otimização da gestão de inventário através do projeto Gestão de Estoque utilizando Django, SQLite e PostgreSQL.",
				},
				{
					name: "Academia Veloz",
					description:
						"Desenvolveu tanto o front-end quanto a API para a plataforma Academia Veloz, facilitando a gestão de cursos online utilizando React e Django.",
				},
			],
		},
		{
			company: "Defensoria Pública",
			link: "https://defensoria.pa.def.br/",
			badges: ["Presencial"],
			title: "Desenvolvedor Frontend Web",
			start: "10/2023",
			end: "8/2024",
			highlights: [
				{
					name: "Projeto Portal",
					description:
						"Liderou o desenvolvimento do portal principal usando Next.js, Material UI e TypeScript.",
				},
				{
					name: "Sistema de Intranet",
					description:
						"Criou e manteve o sistema de intranet para melhorar a comunicação interna e o compartilhamento de recursos utilizando React, TypeScript e Material UI.",
				},
				{
					name: "Sistema de Gestão Diária",
					description:
						"Implementou um sistema de gestão diária para melhorar as operações internas e o rastreamento de tarefas utilizando Next.js, Tailwind CSS e TypeScript.",
				},
			],
		},
		{
			company: "Autônomo",
			link: "https://calliari.dev",
			badges: ["Remoto"],
			title: "Desenvolvedor Backend",
			start: "4/2021",
			end: "6/2022",
			highlights: [
				{
					name: "WildRiftElo",
					description:
						"Criou e manteve um chatbot para Twitch focado em League of Legends: Wild Rift, utilizando Python com a biblioteca TwitchIO, Flask SQAlchemy, além de HTML e CSS para componentes auxiliares.",
				},
				{
					name: "EtcBot",
					description:
						"Desenvolveu um chatbot na Twitch para automação e interatividade de canais, empregando Python, HTML e CSS.",
				},
				{
					name: "BodeDotExe",
					description:
						"Implementou um sistema de gerenciamento de interações para Twitch utilizando Python.",
				},
			],
		},
		{
			company: "NTP Engenharia",
			link: "https://maps.app.goo.gl/5zzABdNKyqhyS3Rz7",
			badges: ["Remoto"],
			title: "Líder de Desenvolvimento Mobile",
			start: "7/2019",
			end: "3/2020",
			highlights: [
				{
					name: "Salva Compra",
					description:
						"Aplicativo mobile de comparação de preços com login, armazenamento local, utilizando React Native e API em Phoenix Elixir. Publicado nas lojas Android e iOS.",
				},
				{
					name: "Salva Estoque",
					description:
						"App mobile para gestão remota de estoque por revendedores parceiros. Integração com base da fábrica via APIs, notificações de reposição e controle por categorias. Desenvolvido com React Native, backend Java.",
				},
			],
		},
		{
			company: "STIC",
			link: "https://stic.ufra.edu.br",
			badges: ["Estágio"],
			title: "Desenvolvedor Web Full Stack",
			start: "10/2019",
			end: "3/2020",
			description:
				"Criei e mantive servidores no CentOS, desenvolvi sites em HTML/CSS e JavaScript para a Ufra e prestei assistência de TI a professores",
		},
		{
			company: "LCA - Laboratório de Computação Aplicada",
			link: "https://www.linkedin.com/company/lca-ufra/",
			badges: ["Voluntário"],
			title: "Desenvolvedor Mobile/Designer",
			start: "4/2018",
			end: "3/2020",
			description:
				"Participei de diversos projetos Android/iOS no campus, desenvolvendo habilidades em Desenvolvimento Frontend e Design UX/UI",
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
			language: "Português",
			level: "Nativo",
		},
		{
			language: "Inglês",
			level:
				"Avançado (C2 — fluente em comunicação técnica, escrita e conversação)",
		},
		{
			language: "Japonês",
			level: "Intermediário (JLPT N3 — certificado em 2014)",
		},
	],
	projects: [
		{
			title: "Jessica Medeiros",
			techStack: [
				"Projeto Pessoal",
				"React",
				"TypeScript",
				"Vite",
				"Framer Motion",
			],
			description:
				"Portfólio editorial imersivo para modelo de moda, com murais de imagem, navegação por editoriais e otimização de mídia. Desenvolvido com React, TypeScript, Vite e Framer Motion.",
			link: {
				label: "jessimedeiros.com",
				href: "https://jessimedeiros.com",
			},
		},
		{
			title: "Kodon Amazon Taiko",
			techStack: [
				"Projeto Pessoal",
				"React",
				"TypeScript",
				"Vite",
				"Tailwind CSS",
				"Framer Motion",
			],
			description:
				"Site institucional para o coletivo cultural Kodon Amazon Taiko, com história, agenda, galeria multimídia, newsletter e suporte a múltiplos idiomas.",
			link: {
				label: "taiko.calliari.dev",
				href: "https://taiko.calliari.dev/",
			},
		},
		{
			title: "Tap Menu",
			techStack: [
				"Projeto Pessoal",
				"Bun",
				"Hono",
				"React",
				"Turbo",
			],
			description:
				"Cardápio digital com pedidos via QR Code para bares e restaurantes. Monorepo com fluxo completo de cardápio, pedidos por mesa e painel administrativo.",
			link: {
				label: "github.com/dcalliari/tap-menu",
				href: "https://github.com/dcalliari/tap-menu",
			},
		},
		{
			title: "Calliari's Artigiano",
			techStack: [
				"Projeto Paralelo",
				"Next.js",
				"TypeScript",
				"Tailwind CSS",
				"Firebase",
			],
			description:
				"Site de restaurante para mostrar habilidades de Next.js e Tailwind CSS, com um design simples e elegante, e login e registro com integração Firebase.",
			link: {
				label: "artigiano.calliari.dev",
				href: "https://artigiano.calliari.dev/",
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
				"SQLAlchemy",
			],
			description:
				"Desenvolvi uma API e um chatbot para transmissões na Twitch do jogo League of Legends: Wild Rift, coletando dados das contas do jogo.",
			link: {
				label: "github.com/dcalliari/WildRiftElo",
				href: "https://github.com/dcalliari/WildRiftElo",
			},
		},
		{
			title: "Twitch Tools",
			techStack: ["Python", "TwitchIO", "Flask", "PostgreSQL"],
			description:
				"Desenvolvimento autônomo de bots, APIs e dashboards para streamers, com Python (TwitchIO), Flask e PostgreSQL. Foco em interações em tempo real e automação via chat.",
			link: {
				label: "github.com/dcalliari",
				href: "https://github.com/dcalliari",
			},
		},
		{
			title: "Projeto Oshiro",
			techStack: [
				"Projeto Paralelo",
				"Flutter",
				"Dart",
				"FlutterFire",
				"Firebase",
			],
			description:
				"Aplicativo Android para navegar e reproduzir arquivos de áudio de coleções de livros didáticos de idiomas, incluindo vários botões de controle para facilitar a interação do usuário.",
			link: {
				label: "github.com/dcalliari/oshiro_flutter_project",
				href: "https://github.com/dcalliari/oshiro_flutter_project",
			},
		},
		{
			title: "Quiz Engine",
			techStack: ["Projeto Paralelo", "Next.js", "JavaScript", "SCSS"],
			description:
				"Aplicativo web para criar e jogar quizzes de diferentes tipos, com um design simples e responsivo.",
			link: {
				label: "quiz-engine-siphox-health.vercel.app",
				href: "https://quiz-engine-siphox-health.vercel.app/",
			},
		},
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
			title: "Mock Banking App",
			techStack: ["Projeto Paralelo", "Flutter", "Dart", "Figma"],
			description:
				"Aplicação móvel que simula um app bancário, com uma tela de login, uma tela inicial com uma lista de transações e um conversor de moeda funcional.",
			link: {
				label: "github.com/dcalliari/mobile_coding_banking_app",
				href: "https://github.com/dcalliari/mobile_coding_banking_app",
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
				"Desenvolvi um Bot da Twitch para interagir com a audiência por meio de diversas ferramentas criativas. Integrado com várias APIs, incluindo Twitch, Spotify e Wild Rift Elo.",
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
				"React Native",
				"Elixir",
				"JavaScript",
			],
			description:
				"Aplicativo Android que exibe os produtos e gera um orçamento para produtos Salvabras.",
			link: {
				label: "github.com/AmadorZcv/salvapaixao",
				href: "https://github.com/AmadorZcv/salvapaixao",
			},
		},
		{
			title: "PiPy Camera Manager",
			techStack: ["Projeto do Lab da Faculdade", "Python"],
			description:
				"Interface de câmera simples para Raspberry Pi, facilitando a gestão e configuração.",
			link: {
				label: "github.com/dcalliari/pipy-cam-mngr",
				href: "https://github.com/dcalliari/pipy-cam-mngr",
			},
		},
	],
} as const;
