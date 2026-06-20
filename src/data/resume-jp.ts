import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import type { Resume } from "@/types/resume";

export const jpResume: Resume = {
	name: "ダニエル・カリアリ",
	initials: "DC",
	location: "ブラジル、パラー州ベレン",
	locationLink: "https://www.google.com/maps/place/Belém",
	about: "ソフトウェアエンジニア",
	summary:
		"REST API、ブラジルの電子裁判システム、分散プラットフォーム、TypeScript・Python/Django・React/Next.js によるフルスタック開発の経験を持つソフトウェアエンジニア。非同期連携、OIDC 認証、Docker/CI/CD によるデプロイを担当。",
	avatarUrl: "https://github.com/dcalliari.png",
	personalWebsiteUrl: "https://calliari.dev",
	topics: {
		about: "概要",
		workExperience: "職歴",
		education: "学歴",
		skills: "スキル",
		projects: "プロジェクト",
		languages: "言語",
	},
	languages: {
		english: "英語",
		portuguese: "ポルトガル語",
		japanese: "日本語",
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
			school: "アマゾニア大学",
			degree: "コンピュータサイエンス学士",
			start: "2024",
			end: "2025",
		},
		{
			school: "アマゾニア連邦農村大学",
			degree: "情報システム学士",
			start: "2018",
			end: "2022",
		},
	],
	work: [
		{
			company: "公的法律扶助事務所",
			link: "https://defensoria.pa.def.br/",
			badges: ["出社"],
			title: "ソフトウェアエンジニア",
			start: "2026/1",
			end: "現在",
			highlights: [
				{
					name: "ProcAPI",
					description:
						"ブラジルの電子裁判システム（E-PROC、PJe、PROJUDI、SEEU）への問い合わせを統合する REST API（Django/DRF）の設計と改善。Celery、RabbitMQ/Redis キュー、キャッシュ、SOLAR との連携による申立て・手続き提出。",
				},
				{
					name: "SOLAR",
					description:
						"公的法律扶助向けの相談・事件・文書（GED）管理の分散 Django プラットフォームの保守と近代化。申立て/プロトコルキュー、Celery ワーカー、可観測性（Sentry/Flower）、Docker Swarm/GitLab CI によるデプロイ。",
				},
				{
					name: "Livre",
					description:
						"被援助者および裁判待ち被拘禁者の照会・管理のためのフルスタック開発（Next.js/TypeScript + Django REST）。OIDC 認証（Keycloak）および Solar/eproc 連携。",
				},
				{
					name: "Agendamento",
					description:
						"Next.js フロントエンドと Java バックエンド（Spring Boot）による予約申請キューシステム。Keycloak 認証、REST API、PostgreSQL 永続化、運用トリアージフロー。",
				},
			],
		},
		{
			company: "Portí",
			link: "https://porti.digital/",
			badges: ["リモート"],
			title: "ソフトウェアエンジニア",
			start: "2025/8",
			end: "2025/10",
			highlights: [
				{
					name: "MedSync",
					description:
						"医師および当番スケジュールの同期プロジェクト。外部パートナー API との連携とシステム間の整合性確保。Python/Celery と RabbitMQ キューによる非同期処理と耐障害性。API 設計、連携、信頼性管理を担当。",
				},
				{
					name: "Portí ERP",
					description:
						"API と Web クライアントを含むバックオフィスシステムの開発・保守。Docker でパッケージ化された Python/Django REST API と、メトリクス・ユーザー管理・パフォーマンスに焦点を当てた React/JavaScript Web クライアント。",
				},
				{
					name: "Portí App",
					description:
						"エンドユーザー向けアプリ（医師）のダッシュボードと管理画面。前払い申請・診療管理モジュール Antecipaí を含む。フロントエンド/バックエンド連携（React/JavaScript + API）、UX 最適化、申請/トリアージフローを担当。",
				},
			],
		},
		{
			company: "Autopass",
			link: "https://www.tecsomobi.com.br/",
			badges: ["リモート"],
			title: "ソフトウェアエンジニア",
			start: "2024/11",
			end: "2025/7",
			highlights: [
				{
					name: "Carioca Hub",
					description:
						"TypeScript、Node、RabbitMQ を用いたチケットシステム向け統合ソリューション Carioca Hub の開発をリード。スケーラブルな API を構築。",
				},
				{
					name: "TSchool",
					description:
						"TypeScript、Next、Express 付き Node を用いた TSchool の開発をリード。Web コンポーネントと API を統合。",
				},
				{
					name: "TSchool Service",
					description:
						"TypeScript、React、Node を用いた TSchool Service のフロントエンド/バックエンド開発と最適化。",
				},
				{
					name: "TClient",
					description:
						"TClient プロジェクトの保守・改善。Web コンポーネントと API の連携を最適化。",
				},
				{
					name: "Customer",
					description:
						"Customer プロジェクトで TypeScript、React、Node による Web コンポーネントと API v2 の改善に中心的な役割を果たす。",
				},
				{
					name: "TApp",
					description:
						"React Native、TypeScript、Node による公共交通チケット販売・チャージ用ホワイトラベルアプリの保守と最適化。",
				},
			],
		},
		{
			company: "V3L0Z - UNAMA",
			link: "https://projeto-v3l0z.github.io/V3L0Z/",
			badges: ["ハイブリッド"],
			title: "ソフトウェア開発者",
			start: "2024/9",
			end: "2025/9",
			highlights: [
				{
					name: "Campus Connect",
					description:
						"React と Django を用いた学生向けソーシャルネットワーク Campus Connect の開発により、学生の交流を促進。",
				},
				{
					name: "Zoo UNAMA",
					description:
						"Django と SQLite を用いた Zoo UNAMA プロジェクトで、動物園管理と来園者エンゲージメントのデジタル化を実装。",
				},
				{
					name: "在庫管理",
					description:
						"Django、SQLite、PostgreSQL を用いた在庫管理プロジェクトで在庫管理を最適化。",
				},
				{
					name: "Academia Veloz",
					description:
						"React と Django を用いたオンラインコース管理プラットフォーム Academia Veloz のフロントエンドと API を開発。",
				},
			],
		},
		{
			company: "公的法律扶助事務所",
			link: "https://defensoria.pa.def.br/",
			badges: ["出社"],
			title: "フロントエンド Web 開発者",
			start: "2023/10",
			end: "2024/8",
			highlights: [
				{
					name: "ポータルプロジェクト",
					description:
						"Next.js、Material UI、TypeScript を用いたメインポータルの開発をリード。",
				},
				{
					name: "イントラネットシステム",
					description:
						"React、TypeScript、Material UI を用いた社内コミュニケーションとリソース共有のためのイントラネットシステムを構築・保守。",
				},
				{
					name: "日次管理システム",
					description:
						"Next.js、Tailwind CSS、TypeScript を用いた日次管理システムを実装し、内部業務とタスク追跡を改善。",
				},
			],
		},
		{
			company: "フリーランス",
			link: "https://calliari.dev",
			badges: ["リモート"],
			title: "バックエンド開発者",
			start: "2021/4",
			end: "2022/6",
			highlights: [
				{
					name: "WildRiftElo",
					description:
						"League of Legends: Wild Rift 向け Twitch チャットボットを Python（TwitchIO）、Flask SQLAlchemy、HTML/CSS で作成・保守。",
				},
				{
					name: "EtcBot",
					description:
						"Python、HTML、CSS を用いた Twitch チャンネル自動化・インタラクティブ用チャットボットを開発。",
				},
				{
					name: "BodeDotExe",
					description:
						"Python を用いた Twitch 向けインタラクション管理システムを実装。",
				},
			],
		},
		{
			company: "NTP Engenharia",
			link: "https://maps.app.goo.gl/5zzABdNKyqhyS3Rz7",
			badges: ["リモート"],
			title: "モバイル開発リーダー",
			start: "2019/7",
			end: "2020/3",
			highlights: [
				{
					name: "Salva Compra",
					description:
						"React Native と Phoenix Elixir API を用いた価格比較モバイルアプリ。Android/iOS ストアに公開。",
				},
				{
					name: "Salva Estoque",
					description:
						"パートナー販売店向けの在庫リモート管理モバイルアプリ。API による工場 DB 連携、補充通知、カテゴリ管理。React Native と Java バックエンドで開発。",
				},
			],
		},
		{
			company: "STIC",
			link: "https://stic.ufra.edu.br",
			badges: ["インターンシップ"],
			title: "フルスタックウェブ開発者",
			start: "2019/10",
			end: "2020/3",
			description:
				"CentOS 上でサーバーを作成および保守し、Ufra 用に HTML/CSS および JavaScript で Web サイトを開発し、教授に IT 支援を提供しました",
		},
		{
			company: "LCA — 応用コンピューティング研究室",
			link: "https://www.linkedin.com/company/lca-ufra/",
			badges: ["ボランティア"],
			title: "モバイル開発者/デザイナー",
			start: "2018/4",
			end: "2020/3",
			description:
				"大学内で複数の Android/iOS プロジェクトに参加しながら、フロントエンド開発と UX/UI デザインのスキルを磨きました",
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
			language: "ポルトガル語",
			level: "ネイティブ",
		},
		{
			language: "英語",
			level: "上級（C2 — 技術コミュニケーション、執筆、会話に堪能）",
		},
		{
			language: "日本語",
			level: "中級（JLPT N3 — 2014年認定）",
		},
	],
	projects: [
		{
			title: "Jessica Medeiros",
			techStack: [
				"個人プロジェクト",
				"React",
				"TypeScript",
				"Vite",
				"Framer Motion",
			],
			description:
				"ファッションモデル向けの没入型エディトリアルポートフォリオ。画像モザイク、エディトリアルナビゲーション、メディア最適化を実装。React、TypeScript、Vite、Framer Motion で構築。",
			link: {
				label: "jessimedeiros.com",
				href: "https://jessimedeiros.com",
			},
		},
		{
			title: "Kodon Amazon Taiko",
			techStack: [
				"個人プロジェクト",
				"React",
				"TypeScript",
				"Vite",
				"Tailwind CSS",
				"Framer Motion",
			],
			description:
				"文化集団 Kodon Amazon Taiko の公式サイト。沿革、イベント、マルチメディアギャラリー、ニュースレター、多言語対応。",
			link: {
				label: "taiko.calliari.dev",
				href: "https://taiko.calliari.dev/",
			},
		},
		{
			title: "Tap Menu",
			techStack: [
				"個人プロジェクト",
				"Bun",
				"Hono",
				"React",
				"Turbo",
			],
			description:
				"バーやレストラン向け QR コード注文付きデジタルメニュー。メニュー、テーブル注文、管理ダッシュボードを備えたモノレポ。",
			link: {
				label: "github.com/dcalliari/tap-menu",
				href: "https://github.com/dcalliari/tap-menu",
			},
		},
		{
			title: "Calliari's Artigiano",
			techStack: [
				"サイドプロジェクト",
				"Next.js",
				"TypeScript",
				"Tailwind CSS",
				"Firebase",
			],
			description:
				"Next.js と Tailwind CSS のスキルを示すレストラン Web サイト。シンプルでエレガントなデザインと Firebase 認証を統合。",
			link: {
				label: "artigiano.calliari.dev",
				href: "https://artigiano.calliari.dev/",
			},
		},
		{
			title: "Wild Rift Elo",
			techStack: [
				"サイドプロジェクト",
				"Python",
				"Flask",
				"PostgreSQL",
				"JavaScript",
				"SQLAlchemy",
			],
			description:
				"League of Legends Wild Rift の Twitch 配信向け API とチャットボットを Python、Flask、PostgreSQL で作成。",
			link: {
				label: "github.com/dcalliari/WildRiftElo",
				href: "https://github.com/dcalliari/WildRiftElo",
			},
		},
		{
			title: "Twitch Tools",
			techStack: ["Python", "TwitchIO", "Flask", "PostgreSQL"],
			description:
				"Python（TwitchIO）、Flask、PostgreSQL によるストリーマー向けボット、API、ダッシュボードの個人開発。リアルタイムチャット連携と自動化に注力。",
			link: {
				label: "github.com/dcalliari",
				href: "https://github.com/dcalliari",
			},
		},
		{
			title: "大城プロジェクト",
			techStack: [
				"サイドプロジェクト",
				"Flutter",
				"Dart",
				"FlutterFire",
				"Firebase",
			],
			description:
				"語学学習教材コレクションからオーディオファイルを閲覧・再生する Android アプリ。ユーザー操作を容易にする複数のコントロールボタンを備える。",
			link: {
				label: "github.com/dcalliari/oshiro_flutter_project",
				href: "https://github.com/dcalliari/oshiro_flutter_project",
			},
		},
		{
			title: "クイズエンジン",
			techStack: ["サイドプロジェクト", "Next.js", "JavaScript", "SCSS"],
			description:
				"Next.js と SCSS を用いた、レスポンシブデザインのクイズ作成・プレイ Web アプリケーション。",
			link: {
				label: "quiz-engine-siphox-health.vercel.app",
				href: "https://quiz-engine-siphox-health.vercel.app/",
			},
		},
		{
			title: "クリニック CRUD ジャンゴ",
			techStack: [
				"サイドプロジェクト",
				"Django",
				"Python",
				"Bootstrap",
				"SQLite",
				"PostgreSQL",
			],
			description:
				"患者、医師、予約、取引の CRUD システムを備えたクリニック管理 Web アプリケーション。シンプルでレスポンシブなデザイン。",
			link: {
				label: "github.com/dcalliari/django-veloz",
				href: "https://github.com/dcalliari/django-veloz",
			},
		},
		{
			title: "モックバンキングアプリ",
			techStack: ["サイドプロジェクト", "Flutter", "Dart", "Figma"],
			description:
				"ログイン画面、取引一覧のホーム画面、通貨コンバーターを備えた銀行アプリをシミュレートするモバイルアプリケーション。",
			link: {
				label: "github.com/dcalliari/mobile_coding_banking_app",
				href: "https://github.com/dcalliari/mobile_coding_banking_app",
			},
		},
		{
			title: "Etc ボット",
			techStack: [
				"サイドプロジェクト",
				"Python",
				"Flask",
				"PostgreSQL",
				"HTML/CSS",
				"SQLAlchemy",
			],
			description:
				"クリエイティブなツールで視聴者と対話する Twitch ボット。Twitch、Spotify、Wild Rift Elo など複数の API と統合。",
			link: {
				label: "github.com/dcalliari/etcbot",
				href: "https://github.com/dcalliari/etcbot",
			},
		},
		{
			title: "サルバコンプラ",
			techStack: [
				"リードフロントエンド開発者",
				"Android",
				"React Native",
				"Elixir",
				"JavaScript",
			],
			description:
				"Salvabras の商品を表示し、見積もり価格を生成する Android アプリケーション。",
			link: {
				label: "github.com/AmadorZcv/salvapaixao",
				href: "https://github.com/AmadorZcv/salvapaixao",
			},
		},
		{
			title: "パイパイ カメラ マネージャー",
			techStack: ["大学研究室のプロジェクト", "Python"],
			description:
				"Raspberry Pi カメラの設定管理を容易にするシンプルなインターフェース。",
			link: {
				label: "github.com/dcalliari/pipy-cam-mngr",
				href: "https://github.com/dcalliari/pipy-cam-mngr",
			},
		},
	],
} as const;
