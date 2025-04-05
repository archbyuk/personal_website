'use client';

import {
  ProjectLayout,
  Section,
  ProjectHeader,
  TechStack,
  ContributionList,
  ProjectImage,
  ResultHighlight,
} from "@/ui/Projects-template";

export default function MainProjectDetailPage() {
  return (
    <ProjectLayout>
      <ProjectHeader
        date="" // 프로젝트 날짜
        title="" // 프로젝트 제목
      />

      <Section title="프로젝트 개요">
        <p>
          {/* 프로젝트 개요 설명 */}
        </p>
      </Section>

      <Section title="사용 기술">
        <TechStack
          items={[
            // 기술 스택 예: "React", "TypeScript", "TailwindCSS", ...
          ]}
        />
      </Section>

      <Section title="담당 업무">
        <ContributionList
          items={[
            // 담당 업무 리스트
          ]}
        />
      </Section>

      <Section title="개발된 UI 이미지">
        <ProjectImage
          images={[
            // { src: "/images/예시.png", alt: "화면 설명" },
          ]}
        />
      </Section>

      <Section title="성과 및 회고">
        <ResultHighlight
          results={[
            // 핵심 성과 요약 리스트
          ]}
        />
        <p>
          {/* 회고 및 느낀 점 */}
        </p>
      </Section>
    </ProjectLayout>
  );
}