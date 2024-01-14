import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "カリアリ・ダニエル",
  initials: "DC",
  location: "ブラジル、パラー州ベレン",
  locationLink: "https://www.google.com/maps/place/Belém",
  about:
    "プログラマー、デザイナー",
  summary:
    "情熱的な開発者、問題解決者、そして終生学習者。技術を活用して実用的な解決策を創造することに専念しています。コーディング、イノベーション、チームワークに熱心であり、ソフトウェア開発の世界で新しい挑戦と機会を求めています。",
  avatarUrl: "https://avatars.githubusercontent.com/u/47369659?s=400&u=116f47b37bc5c6b77ee7ea23067f983c2af7a0a6&v=4",
  personalWebsiteUrl: "http://localhost:3000",
  contact: {
    email: "dbcalliari@gmail.com",
    tel: "+55 91 9 8209-8271",
    social: [
      {
        name: "ギットハブ",
        url: "https://github.com/booude",
        icon: GitHubIcon,
      },
      {
        name: "リンクトイン",
        url: "https://www.linkedin.com/in/daniel-bahia-8236b51b4/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "アマゾン大学",
      degree: "コンピュータサイエンス学士号",
      start: "2023",
      end: "今",
    },
    {
      school: "アマゾニア連邦農村大学",
      degree: "情報システム学士号、転校",
      start: "2018",
      end: "2021",
    },
    {
      school: "パラ連邦大学",
      degree: "機械工学学士号、中断",
      start: "2014",
      end: "2018",
    },
  ],
  work: [
    {
      company: "NTP Engenharia",
      link: "https://maps.app.goo.gl/5zzABdNKyqhyS3Rz7",
      badges: ["リモート"],
      title: "アプリ開発マネージャー",
      start: "2019",
      end: "2020",
      description:
        "React Native を使用して Android および iOS の予算システムを作成し、開発チームを主導および管理しました",
    },
    {
      company: "STIC",
      link: "https://stic.ufra.edu.br",
      badges: ["インターンシップ"],
      title: "バックエンド開発者/インフラストラクチャアシスタント",
      start: "2019",
      end: "2020",
      description: "CentOS 上でサーバーを作成および保守し、Ufra 用に HTML/CSS および JavaScript で Web サイトを開発し、教授に IT 支援を提供しました",
    },
    {
      company: "LCA ー 応用コンピューティング研究室",
      link: "https://www.linkedin.com/company/lca-ufra/",
      badges: ["インターンシップ"],
      title: "フロントエンド開発者/デザイナー",
      start: "2018",
      end: "2020",
      description: "フロントエンド開発とUX/UIデザインのスキルを磨きながら、キャンパス内の複数のAndroid/iOSプロジェクトに参加",
    },
    {
      company: "Castilla Idiomas",
      link: "https://castilla.com.br",
      badges: ["ハイブリッド"],
      title: "英語先生",
      start: "2021",
      end: "2024",
      description:
        "基本、中級、上級の生徒を教え、評価し、教室と遠隔での活動をGoogle Meetを使用して監視しました",
    },
  ],
  skills: [
    "パイソン",
    "ジャバスクリプト",
    "タイプスクリプト",
    "フラッター",
    "ファイアベース",
    "リアクトネイティブ",
    "アドビXD",
    "ポストグレSQL",
  ],
  projects: [
    {
      title: "サルバコンプラ",
      techStack: [
        "リードフロントエンド開発者",
        "Android",
        "タイプスクリプト",
        "リアクトネイティブ",
        "アドビXD",
        "エリクサー",
        "HTML/CSS",
      ],
      description: "Salvabrasの商品を表示し、見積もり価格を生成するAndroidアプリケーション",
      link: {
        label: "github.com/AmadorZcv/salvapaixao",
        href: "https://github.com/AmadorZcv/salvapaixao",
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
      description: "リーグ・オブ・レジェンド: ワイルドリフトのTwitchストリームようにAPIとチャットボットを開発し、ゲームアカウントからデータを収集しています",
      link: {
        label: "github.com/booude/WildRiftElo",
        href: "https://github.com/booude/WildRiftElo",
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
      description: "言語学習教材コレクションからオーディオファイルを閲覧し再生するためのAndroidアプリケーション。ユーザーインタラクションを容易にするために複数のコントロールボタンを備えています",
      link: {
        label: "github.com/booude/oshiro_flutter_project",
        href: "https://github.com/booude/oshiro_flutter_project",
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
      description: "多くのクリエイティブツールを使用して視聴者と対話するTwitchボットを開発しました。Twitch、Spotify、およびワイルドリフトランクなど、複数のAPIと統合されています",
      link: {
        label: "github.com/booude/etcbot",
        href: "https://github.com/booude/etcbot",
      },
    },
    {
      title: "パイパイ カメラ マネージャー",
      techStack: [
        "大学研究室のプロジェクト",
        "パイソン",
      ],
      description: "簡単な構成管理のためのRaspberry Piカメラインターフェース",
      link: {
        label: "github.com/booude/pipy-cam-mngr",
        href: "https://github.com/booude/pipy-cam-mngr",
      },
    },
  ],
} as const;
