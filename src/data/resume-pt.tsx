import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Daniel Calliari",
  initials: "DC",
  location: "Belém, Pará, Brasil",
  locationLink: "https://www.google.com/maps/place/Belém",
  about:
    "Programador, Designer",
  summary:
    "Desenvolvedor apaixonado, solucionador de problemas e constante aprendiz. Comprometido em usar tecnologia para criar soluções práticas. Entusiasmado por programação, inovação e trabalho em equipe. Buscando novos desafios e oportunidades no campo do desenvolvimento de software",
  avatarUrl: "https://avatars.githubusercontent.com/u/47369659?s=400&u=116f47b37bc5c6b77ee7ea23067f983c2af7a0a6&v=4",
  personalWebsiteUrl: "http://localhost:3000",
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
        url: "https://www.linkedin.com/in/daniel-bahia-8236b51b4/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Universidade da Amazônia",
      degree: "Bacharelado em Ciência da Computação",
      start: "2023",
      end: "Present",
    },
    {
      school: "Universidade Federal Rural da Amazônia",
      degree: "Bacharelado em Sistemas de Informação, transferido",
      start: "2018",
      end: "2021",
    },
    {
      school: "Universidade Federal do Pará",
      degree: "Bacharelado em Engenharia Mecânica, interrompido",
      start: "2014",
      end: "2018",
    },
  ],
  work: [
    {
      company: "NTP Engenharia",
      link: "https://maps.app.goo.gl/5zzABdNKyqhyS3Rz7",
      badges: ["Remoto"],
      title: "Gerente de Desenvolvimento de Aplicações",
      start: "2019",
      end: "2020",
      description:
        "Criei um sistema orçamentário para Android e iOS usando React Native, liderei e gerenciei uma equipe de desenvolvimento",
    },
    {
      company: "STIC",
      link: "https://stic.ufra.edu.br",
      badges: ["Estágio"],
      title: "Desenvolvedor Backend/Assistente de Infraestrutura",
      start: "2019",
      end: "2020",
      description: "Criei e mantive servidores no CentOS, desenvolvi sites em HTML/CSS e JavaScript para a Ufra e prestei assistência de TI a professores",
    },
    {
      company: "LCA - Laboratório de Computação Aplicada",
      link: "https://www.linkedin.com/company/lca-ufra/",
      badges: ["Estágio"],
      title: "Desenvolvedor Frontend/Designer",
      start: "2018",
      end: "2020",
      description: "Participei de diversos projetos Android/iOS no campus, desenvolvendo habilidades em Desenvolvimento Frontend e Design UX/UI",
    },
    {
      company: "Castilla Idiomas",
      link: "https://castilla.com.br",
      badges: ["Híbrido"],
      title: "Professor de Inglês",
      start: "2021",
      end: "2024",
      description:
        "Ensinei e avaliei alunos dos níveis Básico, Intermediário e Avançado, além de monitorar atividades presenciais e remotas usando o Google Meet",
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
      title: "SalvaCompra",
      techStack: [
        "Desenvolvedor Frontend Líder",
        "Android",
        "TypeScript",
        "React Native",
        "Adobe Xd",
        "Elixir",
        "HTML/CSS",
      ],
      description: "Aplicativo Android que exibe os produtos e gera um orçamento para produtos Salvabras.",
      link: {
        label: "github.com/AmadorZcv/salvapaixao",
        href: "https://github.com/AmadorZcv/salvapaixao",
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
      description: "Desenvolvi uma API e um chatbot para transmissões na Twitch do jogo League of Legends: Wild Rift, coletando dados das contas do jogo",
      link: {
        label: "github.com/booude/WildRiftElo",
        href: "https://github.com/booude/WildRiftElo",
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
      description: "Aplicativo Android para navegar e reproduzir arquivos de áudio de coleções de livros didáticos de idiomas, incluindo vários botões de controle para facilitar a interação do usuário",
      link: {
        label: "github.com/booude/oshiro_flutter_project",
        href: "https://github.com/booude/oshiro_flutter_project",
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
      description: "Desenvolvi um Bot da Twitch para interagir com a audiência por meio de diversas ferramentas criativas. Integrado com várias APIs, incluindo Twitch, Spotify e Wild Rift Elo",
      link: {
        label: "github.com/booude/etcbot",
        href: "https://github.com/booude/etcbot",
      },
    },
    {
      title: "PiPy Camera Manager",
      techStack: [
        "Projeto do Lab da Faculdade",
        "Python",
      ],
      description: "Interface de câmera simples para Raspberry Pi, facilitando a gestão e configuração",
      link: {
        label: "github.com/booude/pipy-cam-mngr",
        href: "https://github.com/booude/pipy-cam-mngr",
      },
    },
  ],
} as const;
