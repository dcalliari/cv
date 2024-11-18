import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import type { Resume } from "@/types/resume";

export const jpResume: Resume = {
	name: "カリアリ・ダニエル",
	initials: "DC",
	location: "ブラジル、パラー州ベレン",
	locationLink: "https://www.google.com/maps/place/Belém",
	about: "開発者",
	summary:
		"機能的なソリューションに焦点を当てた開発者で、TypeScript ノード、およびReactを専門としています。Webやモバイルプロジェクトのリーダー経験があり、API、ボット、インタラクティブシステムに興味があります。スマートシティや自動化における機会を模索しています",
	avatarUrl: "https://github.com/dcalliari.png",
	personalWebsiteUrl: "https://dcalliari.github.io",
	topics: {
		about: "概 要",
		workExperience: "職 歴",
		education: "学 歴",
		skills: "技 能",
		projects: "事 業",
	},
	languages: {
		english: "英語",
		portuguese: "ポルトガル語",
		japanese: "日本語",
	},
	contact: {
		email: "dbcalliari@gmail.com",
		tel: "+55 91 9 8209-8271",
		social: [
			{
				name: "ギットハブ",
				url: "https://github.com/dcalliari",
				icon: GitHubIcon,
			},
			{
				name: "リンクトイン",
				url: "https://www.linkedin.com/in/daniel-calliari/",
				icon: LinkedInIcon,
			},
		],
	},
	education: [
		{
			school: "アマゾン大学",
			degree: "コンピュータサイエンス学士号",
			start: "2024",
			end: "今",
		},
		{
			school: "アマゾニア連邦農村大学",
			degree: "情報システム学士号、転校",
			start: "2018",
			end: "2023",
		},
	],
	work: [
		{
			company: "Tecsomobi",
			link: "https://www.tecsomobi.com.br/",
			badges: ["ハイブリッド"],
			title: "ソフトウェアエンジニア",
			start: "2024",
			end: "今",
			description:
				"タイスク、リアクト、ノード、ポスグレ、AWSを使用して都市モビリティとチケットソフトウェアを開発",
		},
		{
			company: "V3L0Z・アマゾン大学",
			link: "https://projeto-v3l0z.github.io/V3L0Z/",
			badges: ["ボランティア"],
			title: "ジャンゴ開発者",
			start: "2024",
			end: "今",
			description:
				"ジャンゴ、パイソン、ブートストラップを使用してUNAMA向けのアプリケーションを開発ます",
		},
		{
			company: "公的法律扶助事務所",
			link: "https://defensoria.pa.def.br/",
			badges: ["ボランティア"],
			title: "ウェブフロントエンド開発者",
			start: "2024",
			end: "2024",
			description:
				"Next.js、Tailwind CSS と TypeScript を使ってウェブサイトを開発していました",
		},
		{
			company: "NTP Engenharia",
			link: "https://maps.app.goo.gl/5zzABdNKyqhyS3Rz7",
			badges: ["リモート"],
			title: "リードモバイル開発者",
			start: "2019",
			end: "2022",
			description:
				"React Native を使用して Android および iOS の予算システムを作成し、開発チームを主導および管理しました",
		},
		{
			company: "STIC",
			link: "https://stic.ufra.edu.br",
			badges: ["インターンシップ"],
			title: "フルスタックウェブ開発者",
			start: "2019",
			end: "2020",
			description:
				"CentOS 上でサーバーを作成および保守し、Ufra 用に HTML/CSS および JavaScript で Web サイトを開発し、教授に IT 支援を提供しました",
		},
		{
			company: "LCA ー 応用コンピューティング研究室",
			link: "https://www.linkedin.com/company/lca-ufra/",
			badges: ["ボランティア"],
			title: "モバイル開発者/デザイナー",
			start: "2018",
			end: "2020",
			description:
				"大学内で複数のAndroid/iOSプロジェクトに参加しながら、フロントエンド開発とUX/UIデザインのスキルを磨いていました",
		},
	],
	skills: [
		"ネクスト",
		"ノード",
		"タイスク",
		"ポスグレ",
		"パイソン",
		"ジャンゴ",
		"フラッター",
		"ジャバスクリプト",
		"ファイアベース",
		"AWS",
	],
	projects: [
		{
			title: "クリニック CRUD ジャンゴ",
			techStack: [
				"サイドプロジェクト",
				"ジャンゴ",
				"パイソン",
				"ブートストラップ",
				"SQLite",
				"ポストグレSQL",
			],
			description:
				"シンプルでレスポンシブなデザインを備えた、患者、医師、予約、取引のCRUDシステムを持つクリニック管理用のウェブアプリケーション",
			link: {
				label: "github.com/dcalliari/django-veloz",
				href: "https://github.com/dcalliari/django-veloz",
			},
		},
		{
			title: "クイズエンジン",
			techStack: [
				"サイドプロジェクト",
				"ネクスト・ジェイエス",
				"ジャバスクリプト",
				"SCSS",
			],
			description:
				"シンプルでレスポンシブなデザインを備えた、さまざまなタイプのクイズを作成してプレイするためのウェブアプリケーション",
			link: {
				label: "quiz-engine-siphox-health.vercel.app/",
				href: "https://quiz-engine-siphox-health.vercel.app/",
			},
		},
		{
			title: "モックバンキングアプリ",
			techStack: ["サイドプロジェクト", "フラッター", "ダート", "フィグマ"],
			description:
				"ログイン画面、トランザクションのリストを含むホーム画面、および動作する通貨コンバーターを備えたバンキングアプリをシミュレートするモバイルアプリケーション",
			link: {
				label: "github.com/dcalliari/mobile_coding_banking_app",
				href: "https://github.com/dcalliari/mobile_coding_banking_app",
			},
		},
		{
			title: "Calliari's Artigiano",
			techStack: [
				"サイドプロジェクト",
				"ネクスト・ジェイエス",
				"タイプスクリプト",
				"シャドウシーエヌ/ユーアイ",
				"テイルウィンドCSS",
				"ファイアベース",
				"HTML/CSS",
			],
			description:
				"シンプルでエレガントなデザインと、Firebase 統合によるログインと登録を備えた、Next.js と Tailwind CSS のスキルを紹介するレストランの Web サイト",
			link: {
				label: "artigiano.vercel.app",
				href: "https://artigiano.vercel.app/",
			},
		},
		{
			title: "ワイルドリフトランク",
			techStack: [
				"サイドプロジェクト",
				"パイソン",
				"フラスク",
				"ポストグレSQL",
				"ジャバスクリプト",
				"HTML/CSS",
				"SQLアルケミー",
			],
			description:
				"リーグ・オブ・レジェンド: ワイルドリフトのTwitchストリームようにAPIとチャットボットを開発し、ゲームアカウントからデータを収集しています",
			link: {
				label: "github.com/dcalliari/WildRiftElo",
				href: "https://github.com/dcalliari/WildRiftElo",
			},
		},
		{
			title: "Etc ボット",
			techStack: [
				"サイドプロジェクト",
				"パイソン",
				"フラスク",
				"ポストグレSQL",
				"HTML/CSS",
				"SQLアルケミー",
			],
			description:
				"多くのクリエイティブツールを使用して視聴者と対話するTwitchボットを開発しました。Twitch、Spotify、およびワイルドリフトランクなど、複数のAPIと統合されています",
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
				"ジャバスクリプト",
				"リアクトネイティブ",
				"アドビXD",
				"エリクサー",
				"HTML/CSS",
			],
			description:
				"Salvabrasの商品を表示し、見積もり価格を生成するAndroidアプリケーション",
			link: {
				label: "github.com/AmadorZcv/salvapaixao",
				href: "https://github.com/AmadorZcv/salvapaixao",
			},
		},
		{
			title: "大城プロジェクト",
			techStack: [
				"サイドプロジェクト",
				"フラッター",
				"ダート",
				"アドビXD",
				"フラッターファイア",
				"ファイアベース",
			],
			description:
				"言語学習教材コレクションからオーディオファイルを閲覧し再生するためのAndroidアプリケーション。ユーザーインタラクションを容易にするために複数のコントロールボタンを備えています",
			link: {
				label: "github.com/dcalliari/oshiro_flutter_project",
				href: "https://github.com/dcalliari/oshiro_flutter_project",
			},
		},
		{
			title: "パイパイ カメラ マネージャー",
			techStack: ["大学研究室のプロジェクト", "パイソン"],
			description: "簡単な構成管理のためのRaspberry Piカメラインターフェース",
			link: {
				label: "github.com/dcalliari/pipy-cam-mngr",
				href: "https://github.com/dcalliari/pipy-cam-mngr",
			},
		},
	],
} as const;
