interface SocialLink {
	name: string;
	url: string;
	icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

interface Education {
	school: string;
	degree: string;
	start: string;
	end: string;
}

interface WorkExperience {
	company: string;
	link: string;
	badges: string[];
	title: string;
	start: string;
	end: string;
	description: string;
}

interface Project {
	title: string;
	techStack: string[];
	description: string;
	link: {
		label: string;
		href: string;
	};
}

type SocialLinks = SocialLink[];
type Educations = Education[];
type WorkExperiences = WorkExperience[];
type Projects = Project[];

export interface Resume {
	name: string;
	initials: string;
	location: string;
	locationLink: string;
	about: string;
	summary: string;
	avatarUrl: string;
	personalWebsiteUrl: string;
	topics: {
		about: string;
		workExperience: string;
		education: string;
		skills: string;
		projects: string;
	};
	languages: {
		english: string;
		portuguese: string;
		japanese: string;
	};
	contact: {
		email: string;
		tel: string;
		social: SocialLinks;
	};
	education: Educations;
	work: WorkExperiences;
	skills: string[];
	projects: Projects;
}
