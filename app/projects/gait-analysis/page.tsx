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
} from "@/ui/Projects-template";

export default function MainProjectDetailPage() {
  return (
    <ProjectLayout>
      <ProjectHeader
        date="2024년 하반기"
        title="태안 인공지능융합산업진흥원 - 보행분석 시스템 개발"
      />

      {/* 문제 정의 */}
      <ProblemStatement>
        태안 인공지능융합산업진흥원에서는 고령 인구의 증가에 따른 낙상 사고 예방 및 건강 관리 차원에서,
        <strong>노인의 보행 데이터를 분석할 수 있는 프로그램</strong>이 필요하다는 요청을 받았습니다.
        단순한 실험이 아닌 실제 행정/의료 현장에서 활용 가능한 수준의 <strong>정량적 분석 도구</strong>가 요구되었고,
        본 프로젝트는 이에 대한 <strong>프로토타입 이상의 실용적 솔루션</strong>을 제공하는 것을 목표로 했습니다.
      </ProblemStatement>

      {/* 프로젝트 개요 */}
      <Section title="프로젝트 개요">
        <p>
          태안 인공지능융합산업진흥원의 요청으로 3개월간 <strong>계약 개발자 형태</strong>로 참여하여
          노인 보행 영상을 분석하고 시각화할 수 있는 <strong>보행 분석 프로그램</strong>을 개발했습니다.
          해당 프로그램은 태안군 서버에 배포되어 <strong>로그인 없이 영상 업로드 및 시각화된 분석 결과를 확인</strong>할 수 있으며,
          현장에서 바로 사용할 수 있는 수준의 제품으로 완성되었습니다.
        </p>
      </Section>

      {/* 진행 과정 */}
      <Section title="진행 과정">
        <ProcessStep
          steps={[
            "지속적인 미팅을 통한 요구사항 정의",
            "디자이너와 미팅 후 디자인 수립",
            "개발 인프라 설계",
            "프론트엔드 퍼블리싱",
            "MySQL + Railway 기반 데이터베이스 구축",
            "Node.js 기반 REST API 백엔드 개발",
            "Runpod + AWS Lambda를 이용한 AlphaPose 연동",
            "프론트엔드 기능 개발",
            "Vercel을 통한 1차 배포 및 QA 진행",
            "태안군 서버에 2차 배포 완료",
          ]}
        />
      </Section>
      
      {/* 사용 기술 */}
      <Section title="사용 기술">
        <TechStack
          items={[
            "Next.js", "React", "TypeScript", "Node.js",
            "MySQL", "AWS Lambda", "S3", "Railway",
            "Github", "Vercel", "Runpod", "Chart.js"
          ]}
        />
      </Section>

      {/* 담당 업무 */}
      <Section title="담당 업무">
        <ContributionList
          items={[
            "보행 분석 프로그램 전체 설계 및 개발",
            "프론트엔드 UI/UX 퍼블리싱 및 기능 구현",
            "백엔드 API 서버 및 DB 설계 구축",
            "AI 분석 파이프라인 연결 (Runpod + Lambda)",
            "S3 기반 영상 업로드 및 처리 시스템 구현",
            "Vercel 및 태안군 서버 배포, 유지보수",
          ]}
        />
      </Section>

      {/* 이미지 */}
      <Section title="프로그램 화면 예시">
        <ProjectImage
          images={[
            { src: "/gait/gait-4.svg", alt: "보행 영상 업로드 화면" },
            { src: "/gait/gait-1.svg", alt: "보행 분석 결과 차트" },
            { src: "/gait/gait-2.svg", alt: "프레임별 보행 자세 시각화" },
            { src: "/gait/gait-3.svg", alt: "프레임별 보행 자세 시각화" },
          ]}
        />
        <p className="text-xs text-gray-400">* 실사용 장면은 개인정보 이슈로 인해 피그마 퍼블리싱 이미지로 대체</p>
      </Section>

      {/* 문제 해결 사례 */}
      <Section title="문제 해결 사례">
        <ProblemTable
          items={[
            {
              problem: "배포 환경에서 S3 영상 처리 불안정",
              solution:
                "로컬에서는 SignedURL로 충분했으나, 배포 환경에서는 PUT PresignedURL로 업로드 → GET SignedURL로 다운로드 방식으로 분리 구현. 권한 정책 및 보안 요구사항을 충족하며 안정적으로 동작하도록 수정",
              result: "S3 영상 업로드/다운로드 로직 안정화 및 에러율 0% 도달"
            },
            {
              problem: "AI 분석 요청 시 영상 길이에 따른 timeout 문제",
              solution:
                "Lambda에서 처리 시간 초과로 실패하던 요청을 Runpod에서 비동기 처리하고, Lambda는 백그라운드 Job 등록 역할만 수행하도록 구조 변경",
              result: "5분 이상 영상도 문제없이 분석 가능해짐"
            },
            {
              problem: "AI 분석 요청 시 중복 요청 방지 필요",
              solution:
                "분석 요청이 빠르게 여러 번 들어올 경우, 동일한 영상에 대해 Lambda 함수가 중복 실행되는 문제 방지를 위해 Queue 기반 요청 제어 로직 도입. 요청 ID를 기준으로 중복 여부를 판단하여 하나의 작업만 큐에 등록되도록 구현",
              result: "AI 분석 요청의 중복 실행 방지 및 처리 리소스 최적화 달성"
            }
          ]}
        />
      </Section>

      {/* 성과 및 회고 */}
      <Section title="성과 및 회고">
        <ResultHighlight
          results={[
            "보행 분석 프로그램 단독 설계 및 개발 완료",
            "실사용 가능한 형태로 태안군 서버에 배포 완료",
            "아키텍처 설계 및 배포 운영 능력 향상",
            "현장에서 활용도 높아 버전 2 개발 고려 중",
          ]}
        />
        <p>
          이 프로젝트는 제게 <strong>온전히 혼자서 하나의 제품을 처음부터 끝까지 개발해본 경험</strong>이었고,
          기술뿐만 아니라 요구사항 파악, 사용자 대응, 배포까지 포함한 <strong>제품 전체 생애주기를 경험</strong>한 소중한 기회였습니다.
          특히 AI 분석 로직을 실 서비스와 연결하고, 안정적인 S3 영상 처리를 구현한 것은 기술적으로도 의미 있는 도전이었습니다.
        </p>
      </Section>

      {/* 결과 요약 */}
      <Outcome>
        본 프로젝트는 AI 기반 보행 분석 기능과 사용자 친화적 시각화 인터페이스를 통합한 <strong>경량 웹 솔루션</strong>으로,
        고령자 대상 보건 데이터 수집 및 분석의 실용성을 높였으며,
        <strong> 현장 배포 가능성과 기술 적용성</strong>을 모두 만족시킨 성공적인 사례로 남았습니다.
      </Outcome>
    </ProjectLayout>
  );
}