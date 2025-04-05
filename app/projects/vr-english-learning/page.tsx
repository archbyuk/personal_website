'use client';

import {
  ProjectLayout,
  Section,
  ProjectHeader,
  TechStack,
  ContributionList,
  ProjectImage,
  ResultHighlight,
  ProblemStatement,
  ProcessStep,
  Outcome,
  ProblemTable,
  FeatureTable,
} from "@/ui/Projects-template";

export default function MainProjectDetailPage() {
  return (
    <ProjectLayout>
      <ProjectHeader
        date="2024 하반기 ~ 2025 상반기"
        title="래빗홀컴퍼니 - 깡총영어 LMS 개발"
      />

      {/* 문제 정의 */}
      <ProblemStatement>
        도서산간지역 초등학교에는 영어 원어민 교사 부족으로 인해 학생들의 말하기 중심의 영어 교육을 체계적으로 받기 어려운 상황이었습니다.
        이를 해결하기 위해, VR 기술을 활용한 몰입형 학습 환경과 실시간 LMS 시스템을 결합하여 학생 개개인의 학습 흐름을 관리할 수 있는 플랫폼이 필요했습니다.
      </ProblemStatement>

      {/* 프로젝트 개요 */}
      <Section title="프로젝트 개요">
        <p>
          초등학교를 대상으로 한 VR 영어 회화 학습 플랫폼 <strong>“깡총영어”</strong>를 개발했습니다.
          저는 이 플랫폼 개발에 <strong>프론트엔드 담당자로 합류</strong>하여 학습 관리를 위한 LMS 구조를 설계하고 개발하였습니다.
        </p>
      </Section>

      <Section title="개발 기능">
        <FeatureTable
            items={[
            {
                name: "실시간 모니터링",
                description: "WebRTC를 통해 학생의 학습 상태 및 발화 내용을 실시간으로 확인 가능",
            },
            {
                name: "VR 영어 회화 콘텐츠 관리",
                description: "수업 단원별 영어 콘텐츠 업로드 및 수정",
            },
            {
                name: "단어 게임 관리",
                description: "학생에게 맞춤형 단어장 제공 및 커스터마이징 가능",
            },
            {
                name: "개별 학습 관리",
                description: "학생별 진도 및 숙제, 발화 이력 추적, 학생 개별 콘텐츠 제어 기능",
            },
            {
                name: "성적 관리",
                description: "학생별 평가 결과를 기록 및 다운로드, 발화 능력, 회화 이해도 등 출력",
            },
            {
                name: "문의하기",
                description: "EmailJS를 통해 교사가 관리자에게 메시지 전달",
            },
            {
                name: "로그인",
                description: "JWT 방식으로 학교/교사 구분을 위한 로그인 구현",
            },
            ]}
        />
      </Section>

      {/* 개발 진행 과정 */}
      <Section title="개발 진행 과정">
        <ProcessStep
          steps={[
            "교사 대상 인터뷰를 통한 니즈 파악 및 요구사항 수집",
            "LMS 구조 설계",
            "기능 구현 후, 현장 시연 및 피드백을 통한 반복 개선",
          ]}
        />
      </Section>

      {/* 사용 기술 */}
      <Section title="사용 기술">
        <TechStack 
          items={[
            "Next.js","React", "TypeScript", "TailwindCSS",
            "WebRTC", "Socket.io","EmailJs",
            "Vercel", "GitHub", "AWS",
            "MySQL", "DynamoDB", "Node.js",
            "PM2", "Postman"
          ]}
        />
      </Section>

      {/* 담당 업무 */}
      <Section title="담당 업무">
        <ContributionList
          items={[
            "LMS 전체 구조 설계 및 개발",
            "디자이너-기획자-개발자 간 커뮤니케이션",
            "프로그램 셋팅을 위한 출장",
          ]}
        />
      </Section>

      {/* 이미지 */}
      <Section title="LMS 화면 예시">
        <ProjectImage
            images={[
                { src: "/lms/lms-1.svg", alt: "LMS 대시보드 화면" },
                { src: "/lms/lms-2.svg", alt: "학생 모니터링 기능" },
                { src: "/lms/lms-3.svg", alt: "단어 게임 예시" },
                { src: "/lms/lms-4.svg", alt: "성적 관리 UI" },
                { src: "/lms/lms-5.svg", alt: "문의하기 화면" },
            ]}
        />
        <p className="text-xs text-gray-400">* 학생 및 교사 개인정보가 들어가는 부분은 법적인 문제때문에 피그마 퍼블리싱 이미지로 대체</p>
      </Section>

      {/* 문제 해결 사례 */}
      <Section title="문제 해결 사례">
        <ProblemTable
            items={[
            {
                problem: "WebRTC ICE Candidate 실시간 연결 비확인 문제",
                solution:
                "이벤트 기반 시스템 설계로 연결 상태를 실시간 추적하고, UI에 연결 상태를 시각적으로 표시해 교사가 문제를 즉시 인지하도록 개선함",
                result: "연결 실패 인지 지연 → 실시간 대응 가능"
            },
            {
                problem: "WebRTC ICE Candidate 데이터 구조 불일치",
                solution:
                'message.candidate가 ICE Candidate 문자열임을 인지하고 직접 사용하도록 수정. chrome://webrtc-internals 활용하여 디버깅 진행',
                result: "일부 학생 화면 검은 오류 해결"
            },
            {
                problem: "네트워크 환경 다양성에 따른 연결 유지 어려움",
                solution:
                "다양한 환경에서 테스트 및 TURN 서버 강제 사용으로 안정성 향상 시도",
                result: "일부 환경에서 안정성 확보, 완전한 해결은 어려움"
            }
            ]}
        />
      </Section>

      {/* 성과 및 회고 */}
      <Section title="성과">
        <ResultHighlight
          results={[
            "현재 5개의 학교에서 실제 사용 중",
            "교사의 LMS 긍정적 피드백",
            "웹 개발의 실무 과정을 경험하며 설계/개발 및 커뮤니케이션 능력 향상",
          ]}
        />
      </Section>

      {/* 결과 요약 */}
      <Outcome>
        본 프로젝트에서는 <strong>React, TypeScript, Next.js</strong> 기반의 웹 프론트엔드와 <strong>WebRTC, Socket.io</strong>를 활용한 실시간 통신 구조를 구축하였고, 
        <strong>MySQL 및 DynamoDB</strong>를 혼합 사용하여 콘텐츠 관리 및 학습 데이터를 안정적으로 처리하였습니다.<br/>
        또한 <strong>학생용 VR 클라이언트와 교사용 웹 기반 LMS 간의 실시간 연동</strong>을 성공적으로 구현함으로써, 
        실사용 환경에서도 안정적으로 동작하는 <strong>교육용 실시간 데이터 통합 시스템</strong>을 완성했습니다.
      </Outcome>
    </ProjectLayout>
  );
}