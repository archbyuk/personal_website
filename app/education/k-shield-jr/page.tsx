import {
    EducationLayout,
    EducationHeader,
    EducationSection,
    EducationList,
    CertificateImage,
    EducationReflection,
  } from "@/ui/Education-template";
  
  export default function EducationKShieldPage() {
    return (
      <EducationLayout>
        <EducationHeader
          title="K-Shield Jr 클라우드 보안 운영 교육"
          period="2023년 7월 ~ 2023년 10월"
          institution="한국인터넷진흥원(KISA) / 과학기술정보통신부"
        />
  
        <EducationSection title="교육 목적 및 개요">
          <p>
            K-Shield Jr는 사이버 보안 전문가 양성을 위한 실무 중심의 교육과정으로,
            네트워크, 웹, 클라우드 등 다양한 보안 영역을 다루며 실제 적용 가능한 보안 역량을 강화하는 데 중점을 둔 프로그램입니다.
          </p>
        </EducationSection>
  
        <EducationSection title="주요 커리큘럼">
          <EducationList
            items={[
              "보안 기초 지식: OSI 7 Layer, TCP/IP, 네트워크 구조 이해",
              "네트워크 보안: 스캐닝, NAT, HTTPS, Dos 대응 등",
              "웹 보안: SQL Injection, XSS 분석 및 방어 실습",
              "클라우드 보안: Docker 보안 진단, 클라우드 서비스 보안 실습",
            ]}
          />
        </EducationSection>
  
        <EducationSection title="교육 중 성취">
          <EducationList
            items={[
              "다양한 보안 공격 유형과 방어 기법에 대한 이해",
              "가상 환경 기반의 실습을 통한 네트워크 및 클라우드 보안 실무 경험",
              "보안 사례 기반 문제 해결 및 팀 프로젝트 진행",
              <span key="project">팀 프로젝트: <strong>AWS 기반 웹 해킹 로그 분석</strong></span>,
            ]}
          />
        </EducationSection>
  
        <EducationSection title="수료증">
          <CertificateImage
            src="/edu/ksj.svg"
            alt="K-Shield 교육 수료증"
          />
        </EducationSection>
  
        <EducationReflection>
          K-Shield Jr 교육은 단순한 보안 기술 습득을 넘어, 실무에서의 보안 적용과 협업의 중요성을 체감하게 해준 과정이었습니다.
          프로젝트를 통해 보안 로그 분석의 실제 적용 방안을 고민했고, 특히 PM 역할을 맡으며 팀워크와 책임감에 대한 깊은 고민을 하게 되었습니다.
          갈등 상황을 조율하고, 최종적으로 프로젝트를 성공적으로 마무리한 경험은 앞으로의 협업과 리더십에 큰 자산이 되었습니다.
        </EducationReflection>
      </EducationLayout>
    );
  }
  