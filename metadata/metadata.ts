// metadata type

export type MetaDataType = {
    slug: string
    date: string
    title: string
    description: string
}

export type SideProject = {
    slug: string;
    title: string;
    description: string;
    url: string;
    logo: string;
  };

export type HistoryType = {
    date: string
    title: string
    description: string
}

export type EducationType = {
    title: string
    date: string
    description: string
    href: string
}

export type SkillItemType = {
  label: string;
  level: number;
  context?: string; // 사용 경험 예시
}

export type SkillCategory = {
  title: string;
  items: SkillItemType[];
}


// metadata

// 메인 프로젝트 metadata
export const MetaData: MetaDataType[] = [
    {
      slug: 'vr-english-learning',
      date: '24.07 ~ 25.05',
      title: '래빗홀컴퍼니 - 깡총영어 LMS 개발',
      description:
        '초등학생 대상 VR 영어 회화 학습 플랫폼 “깡총영어” 개발에 프론트엔드 담당자로 참여. 학습 콘텐츠 관리 및 실시간 모니터링 기능, 단어장 및 미니게임 커스터마이징 기능 등 LMS 전반 구현. 현재 5개 초등학교에서 운영 중.',
    },
    {
      slug: 'smart-ring',
      date: '25.02 ~ 25.04',
      title: '래빗홀 컴퍼니 - 스마트링 관제 시스템 설계 ',
      description:
        '스마트링 센서 데이터를 활용한 노인 대상 실시간 건강 관제 시스템을 설계하고, 백엔드 API 서버 구현 참여. 시스템 전체 구조 설계부터 데이터 수집, 저장, 처리까지 전반을 주도했으며, IoT 연동 및 확장성을 고려한 구조로 설계함.',
    },
    {
      slug: 'gait-analysis',
      date: '24.10 ~ 24.12',
      title: '태안 인공지능융합산업진흥원 - 보행분석 시스템 개발',
      description:
        '50~70세 노인 보행 분석을 위한 프로그램 풀스택 개발. AI 모델 연동 및 결과 시각화를 위한 인터페이스를 구축하고, AWS 기반의 독립 서비스 환경을 구성하여 안정적 배포까지 완료.',
    },
];

// 사이드 프로젝트 metadata
export const sideProjects: SideProject[] = [
    {
      slug: "caresync",
      title: "Caresync: 환자 관리 프로그램 개발",
      description: "FaceFilter(피부과)의 요청으로 환자 상태 관리 프로그램을 개발하여 실제 운영 중.",
      url: "https://github.com/JinukSynth/CareSync",
      logo: "/icons/caresync.svg",
    },
    {
      slug: "open-chat",
      title: "Socket.IO 기반 오픈채팅 시스템",
      description: "개인 프로젝트로 Socket.IO를 이용한 오픈채팅 웹앱 개발. 실시간 오픈 채팅 가능.",
      url: "https://github.com/JinukSynth/OpenChat-with-Everyone",
      logo: "/icons/socketIO.svg",
    },
    {
      slug: "email",
      title: "이메일 자동 분류 프로그램",
      description: "텍스트 분류 기반 이메일 분류 프로그램. 크롬 확장 프로그램으로 배포 후 사용 중",
      url: "https://github.com/JinukSynth/Email_Classifier",
      logo: "/icons/email.svg",
    },
    {
      slug: "eum",
      title: "이음: AI 여행 플래너 플랫폼",
      description: "소상공인 대상 AI 여행 서비스 기획 및 개발, 한국관광공사 사장상 수상.",
      url: "https://github.com",
      logo: "/icons/eum.svg",
    },
    {
      slug: "web-hack",
      title: "AWS 기반 웹 해킹 로그 분석 프로젝트",
      description: "웹 보안 실습을 위한 웹 해킹 로그 분석 프로젝트. 팀장으로 기획, 아키텍처 설계, 발표 전반을 주도함.",
      url: "https://github.com",
      logo: "/icons/aws.svg",
    },
];

// 연혁 metadata
export const history: HistoryType[] = [
  {
    date: "23.07 ~ 23.10",
    title: "K-Shield jr",
    description: "클라우드 보안 운영 교육"
  },
  {
    date: "24.01 ~ 24.02",
    title: "Ctilab",
    description: "인턴"
  },
  {
    date: "24.04 ~ 24.08",
    title: "이음 프로젝트",
    description: "서비스 프로토타입 개발"
  },
  {
    date: "24.04 ~ 24.12",
    title: "ICT 한이음 멘토링",
    description: "실무 기반 개발/설계 멘토링"
  },
  {
    date: "24.07 ~ ing",
    title: "래빗홀컴퍼니",
    description: "프론트엔드 담당자"
  },
  {
    date: "24.10 ~ 24.12",
    title: "AI융합산업진흥원",
    description: "보행분석 시스템 개발"
  },
  {
    date: "24.11 ~ 25.01",
    title: "CareSync",
    description: "환자 상태 관리 시스템 개발"
  },
  {
    date: "25.02 ~ 25.04",
    title: "외부 협업 (래빗홀)",
    description: "스마트링 관제 시스템 설계"
  },
];

// 교육 이력 metadata
export const educationItems: EducationType[] = [
  {
    title: "ICT 한이음 멘토링",
    date: "2024.04 ~ 2024.12",
    description: "시스템 설계/개발/유지보수 부문 실무자 집중 멘토링 & 한이음 공모전 출전 후 입상",
    href: "/education/ict",
  },
  {
    title: "메타버스 아카데미 3기",
    date: "2024.10 ~ 2024.12",
    description: "PM, PO, Dev 관련 실무자 멘토링 과정 수료",
    href: "/education/metaverse",
  },
  {
    title: "K-Shield Jr 11기",
    date: "2023.07 ~ 2023.10",
    description: "'클라우드 보안 운영' 교육 과정 수료",
    href: "/education/k-shield-jr",
  },
];

// 기술 스택 meatadata
export const skillData: SkillCategory[] = [
  {
    title: "Frontend Framework",
    items: [
      { label: "React", level: 3, context: "다수의 프로젝트에서 컴포넌트 기반 UI 개발에 활용" },
      { label: "Next.js", level: 3, context: "SSR/CSR 혼합 구조로 서비스 개발 및 배포 경험" },
      { label: "TypeScript", level: 3, context: "타입 안정성을 확보하며 중·대형 프로젝트에서 활용" },
      { label: "JavaScript", level: 3, context: "기초 로직 구현부터 프론트엔드 전반에 사용" },
    ],
  },
  {
    title: "Markup & Styling",
    items: [
      { label: "HTML", level: 3, context: "구조화된 웹 페이지 구현에 기본적으로 사용" },
      { label: "CSS", level: 3, context: "레이아웃과 반응형 스타일링에 활용" },
      { label: "TailwindCSS", level: 3, context: "클래스 기반 빠른 스타일링 구현에 주로 사용" },
      { label: "MUI", level: 2, context: "React 프로젝트에서 빠른 UI 구성에 활용" },
    ],
  },
  {
    title: "Design & Collaboration",
    items: [
      { label: "Figma", level: 2, context: "디자이너와 협업하며 UI 시안 제작 및 검토" },
      { label: "Miro", level: 2, context: "아이디어 정리 및 팀 회의 시 플로우 정리에 활용" },
      { label: "Notion", level: 2, context: "기획 및 개발 문서 작성에 지속적으로 사용" },
      { label: "Discord", level: 2, context: "스터디 및 팀 프로젝트 커뮤니케이션 도구로 사용" },
      { label: "Teams", level: 1, context: "외부 교육 및 협업에서 제한적으로 사용" },
    ],
  },
  {
    title: "Backend & API",
    items: [
      { label: "Node.js", level: 2, context: "간단한 API 서버 및 실시간 통신 서버 구현" },
      { label: "Django", level: 2, context: "웹 서비스 백엔드와 관리자 페이지 구축에 사용" },
      { label: "Firebase (Auth, Realtime DB)", level: 2, context: "간단한 인증 및 실시간 데이터 처리 구현 경험" },
      { label: "Postman", level: 2, context: "API 테스트 및 문서화 도구로 반복 사용" },
    ],
  },
  {
    title: "Database & Data Storage",
    items: [
      { label: "MySQL", level: 2, context: "RDB 설계 및 쿼리 작성, Flask 및 Node.js 연동 경험" },
      { label: "DynamoDB", level: 2, context: "비정형 데이터 저장 및 Lambda와의 연동 경험" },
      { label: "SQLite", level: 1, context: "간단한 로컬 프로젝트에서 테스트용으로 사용" },
      { label: "Railway", level: 2, context: "프로젝트용 데이터베이스 호스팅 플랫폼으로 활용" },
      { label: "MySQL Workbench", level: 1, context: "DB 구조 시각화 및 쿼리 테스트에 사용" },
      { label: "DBeaver", level: 1, context: "GUI 기반 DB 탐색 및 테이블 관리에 사용" },
    ],
  },
  {
    title: "DevOps & Cloud",
    items: [
      { label: "AWS (EC2, Lambda, S3, RDS)", level: 2, context: "기본적인 인프라 구성 및 배포 경험" },
      { label: "GCP", level: 1, context: "Colab 및 Storage 위주로 활용한 간단한 경험" },
      { label: "Render", level: 2, context: "백엔드 서버 자동 배포에 사용" },
      { label: "Vercel", level: 3, context: "프론트엔드 정적/동적 페이지 배포 경험" },
      { label: "Runpod", level: 1, context: "AI 모델 실행 환경으로 실험적 사용" },
    ],
  },
  {
    title: "Real-time & Communication",
    items: [
      { label: "Socket.IO", level: 2, context: "실시간 채팅 시스템 구현에 활용" },
      { label: "WebRTC", level: 2, context: "영상 및 음성 통신 기능 간단 구현 테스트" },
      { label: "WebPack", level: 2, context: "프로젝트 번들링 및 환경 설정 경험" },
    ],
  },
  {
    title: "Infra & Tooling",
    items: [
      { label: "Git", level: 2, context: "협업 및 버전 관리, CLI 위주로 사용" },
      { label: "GitHub", level: 2, context: "프로젝트 협업 및 Actions 일부 사용" },
      { label: "npm", level: 2, context: "패키지 관리 및 스크립트 실행에 사용" },
      { label: "RabbitMQ", level: 1, context: "비동기 메시지 큐 시스템에 대해 학습 및 실험" },
      { label: "Kafka", level: 1, context: "대용량 데이터 스트리밍 개념 학습 및 설치 경험" },
    ],
  },
  {
    title: "Platform",
    items: [
      { label: "Electron", level: 2, context: "Tkinter 앱을 웹 기반 데스크탑 앱으로 전환" },
      { label: "VMware Fusion", level: 1, context: "가상 환경 테스트용으로 사용" },
    ],
  },
];