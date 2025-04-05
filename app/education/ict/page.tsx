import {
  EducationLayout,
  EducationHeader,
  EducationSection,
  EducationList,
  CertificateImage,
  EducationReflection,
} from "@/ui/Education-template";

export default function EducationICTPage() {
  return (
    <EducationLayout>
      <EducationHeader
        title="ICT 한이음 멘토링 및 공모전"
        period="2024년 4월 ~ 2024년 12월"
        institution="정보통신산업진흥원(NIPA)"
      />

      <EducationSection title="교육 목적 및 개요">
        <p>
          ICT 분야의 실무 능력을 갖춘 인재 양성을 목표로, 산학 연계를 기반으로 실제 기업 현장에서 요구되는 기술과 개발 프로세스를 경험할 수 있도록 구성된 실무형 교육과정입니다.
        </p>
      </EducationSection>

      <EducationSection title="멘토링 경험">
        <p>
          ‘깡총영어’ 프로젝트를 ICT 한이음 공모전 과제로 제출하며, 실제 기업 창업팀(래빗홀 컴퍼니)에서의 경험을 바탕으로 멘토링을 적극적으로 받았습니다. 개발/설계 방향 개선 방안에 대한 전문 멘토님의 피드백을 수렴하고 실제 프로젝트에 반영했습니다.
        </p>
      </EducationSection>

      <EducationSection title="성과">
      <EducationList
        items={[
          <span key="award"><strong>ICT 한이음 공모전</strong>에서 <strong>한국정보산업연합회장상</strong> 수상</span>,
          "멘토링을 기반으로 프로젝트 완성도 및 기획력을 높이며 부스 운영까지 경험",
          "깡총영어 프로젝트 아키텍처 개선"
        ]}
      />
      </EducationSection>

      <EducationSection title="수료증">
        <CertificateImage
          src="/edu/ict.svg"
          alt="ICT 교육 수료증"
        />
      </EducationSection>

      <EducationReflection>
        멘토링을 통해 부족한 점이 많다는 것을 체감할 수 있었고, 멘토님의 조언을 통해 LMS 확장 및 개선 방향을 구체화할 수 있었습니다.  
        기존 기술적인 부분에서는 백엔드 구조나 인증/보안 로직 등에서 미흡했던 점이 있어 멘토링을 받게 되었지만, 다음에는 이를 반영하여 보다 안정적인 서비스 설계를 고민해보고 싶다는 생각을 했습니다.
      </EducationReflection>
    </EducationLayout>
  );
}