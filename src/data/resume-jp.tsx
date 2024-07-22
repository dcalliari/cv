import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "バイア・ダニエル",
  initials: "DB",
  location: "ブラジル、パラー州ベレン",
  locationLink: "https://www.google.com/maps/place/Belém",
  about:
    "ウェブ開発者",
  summary:
    "情熱的な開発者、問題解決者、そして終生学習者。技術を活用して実用的な解決策を創造することに専念しています。コーディング、イノベーション、チームワークに熱心であり、ソフトウェア開発の世界で新しい挑戦と機会を求めています",
  avatarUrl: "https://github.com/booude.png",
  personalWebsiteUrl: "https://booude.github.io",
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
      company: "公的法律扶助事務所",
      link: "https://defensoria.pa.def.br/",
      badges: ["インターンシップ"],
      title: "ウェブフロントエンド開発者",
      start: "2024",
      end: "今",
      description:
        "Next.js、Tailwind CSS と TypeScript を使ってウェブサイトを開発しています",
    },
    {
      company: "NTP Engenharia",
      link: "https://maps.app.goo.gl/5zzABdNKyqhyS3Rz7",
      badges: ["リモート"],
      title: "リードモバイル開発者",
      start: "2019",
      end: "2020",
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
      description: "CentOS 上でサーバーを作成および保守し、Ufra 用に HTML/CSS および JavaScript で Web サイトを開発し、教授に IT 支援を提供しました",
    },
    {
      company: "LCA ー 応用コンピューティング研究室",
      link: "https://www.linkedin.com/company/lca-ufra/",
      badges: ["インターンシップ"],
      title: "モバイル開発者/デザイナー",
      start: "2018",
      end: "2020",
      description: "大学内で複数のAndroid/iOSプロジェクトに参加しながら、フロントエンド開発とUX/UIデザインのスキルを磨いています",
    },
  ],
  skills: [
    "ネクスト・ジェイエス",
    "パイソン",
    "タイプスクリプト",
    "ジャバスクリプト",
    "フラッター",
    "ファイアベース",
    "リアクトネイティブ",
    "アドビXD",
    "ポストグレSQL",
  ],
  projects: [
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
      description: "シンプルでエレガントなデザインと、Firebase 統合によるログインと登録を備えた、Next.js と Tailwind CSS のスキルを紹介するレストランの Web サイト",
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
      description: "リーグ・オブ・レジェンド: ワイルドリフトのTwitchストリームようにAPIとチャットボットを開発し、ゲームアカウントからデータを収集しています",
      link: {
        label: "github.com/booude/WildRiftElo",
        href: "https://github.com/booude/WildRiftElo",
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
      description: "Salvabrasの商品を表示し、見積もり価格を生成するAndroidアプリケーション",
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
      description: "言語学習教材コレクションからオーディオファイルを閲覧し再生するためのAndroidアプリケーション。ユーザーインタラクションを容易にするために複数のコントロールボタンを備えています",
      link: {
        label: "github.com/booude/oshiro_flutter_project",
        href: "https://github.com/booude/oshiro_flutter_project",
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
