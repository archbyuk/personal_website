'use client';

import {
  EducationLayout,
  EducationHeader,
  EducationSection,
  EducationList,
  CertificateImage,
  EducationReflection,
} from "@/ui/Education-template";

export default function EducationMetaversePage() {
  return (
    <EducationLayout>
      <EducationHeader
        title="메타버스 아카데미 3기 실무자 멘토링"
        period="3개월"
        institution="한국메타버스산업협회"
      />

      <EducationSection title="멘토링 목적 및 개요">
        <p>
          실무 환경에서 다양한 직무와 협업 방식을 배우고, 실제 프로젝트
          기획 및 개선 과정을 실습하며 커뮤니케이션 능력과 문제 해결 능력을 키우는
          데 목적을 둔 실무자 멘토링 과정입니다.
        </p>
      </EducationSection>

      <EducationSection title="멘토링 내용">
        <EducationList
          items={[
            "PM/PO 역할, UX 설계, 커뮤니케이션 중심 실무자 멘토링 진행",
            "기획–디자인 간 의견 충돌 조율 및 사용자 피드백 기반 UI 개선 경험",
            "정기 미팅, 문서화, 역할 분담 등 협업을 위한 구체적 전략 학습"
          ]}
        />
      </EducationSection>

      <EducationSection title="수료증">
        <CertificateImage
          src="/edu/metaverse.svg"
          alt="메타버스 아카데미 수료증"
        />
      </EducationSection>

      <EducationReflection>
        메타버스 아카데미 멘토링을 통해 가장 크게 배운 점은 협업과 소통의 중요성이었습니다. 기획팀과 디자인팀 간의 의견 차이를 조율하며 사용자 관점에서 문제를 해결하는 접근법을 익혔고, 그 과정에서 PM으로서의 리더십과 방향성 설정의 중요성도 깊이 체감했습니다.
        멘토님의 조언 중 <strong>&quot;각자의 영역을 존중하되, 사용자 중심으로 결론을 내릴 것&quot;</strong>이라는 말은 팀 문제 해결의 핵심 원칙이 되었고, 이후에도 실무 협업에 큰 영향을 미치고 있습니다. 향후 프로젝트에서도 이러한 태도를 바탕으로 실질적인 사용자 가치를 창출하는 팀워크를 이어가고자 합니다.
      </EducationReflection>
    </EducationLayout>
  );
}