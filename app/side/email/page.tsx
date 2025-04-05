'use client';

import {
  SideProjectLayout,
  SideProjectHeader,
  SideSection,
  SideTechStack,
  FeatureList,
  SideProblemTable,
  SideReflection,
  CodeBlock,
  ExternalLinks,
  ProgressTrack,
  SideProjectImage,
  SideArchImage,
} from '@/ui/Side-template';

export default function EmailClassifierPage() {
  return (
    <SideProjectLayout>
      <SideProjectHeader
        period="2024.09"
        title="Email Classifier - Gmail 자동 분류 크롬 확장 프로그램"
        summary="이 프로젝트는 Gmail 웹페이지 상의 이메일 제목을 자동 분석하여, 카테고리를 구분하고 UI에 라벨로 표시해주는 크롬 확장 프로그램입니다."
      />

      <SideSection title="왜 만들게 되었나요?">
        <p>
          받은 편지함을 매번 열어보면서 어떤 이메일이 중요한지 한눈에 구분하기 어려웠습니다. 
          Gmail 웹 UI에 직접 라벨을 붙여줄 수 있는 자동 분류 시스템을 만들고자 크롬 확장 프로그램으로 개발하게 되었습니다.
        </p>
      </SideSection>

      <SideSection title="사용 기술">
        <SideTechStack items={["JavaScript", "HTML", "Chrome Extension API"]} />
      </SideSection>

      <SideSection title="진행 과정">
        <ProgressTrack
          steps={[
            { title: '아이디어 기획', description: '수신 메일을 빠르게 파악하는 방법 고민' },
            { title: '카테고리 키워드 정리', description: '각 카테고리별 키워드와 가중치 설정' },
            { title: '스크립트 개발', description: 'Gmail DOM 분석 및 MutationObserver 적용' },
            { title: 'UI 적용 및 배포', description: '카테고리 라벨을 스타일과 함께 UI에 삽입' },
          ]}
        />
      </SideSection>

      <SideSection title="시스템 아키텍처">
        <SideArchImage
            src="/email/email-0.svg"
            alt="Email Classifier 시스템 아키텍처"
        />
      </SideSection>

      <SideSection title="주요 기능">
        <FeatureList
          items={[
            '이메일 제목 기반 자동 분류',
            '카테고리별 색상 라벨 표시',
            '실시간 변경 감지(MutationObserver)',
            '확장 가능한 키워드 기반 로직 구조'
          ]}
        />
      </SideSection>

      <SideSection title="프로그램 예시 이미지">
        <SideProjectImage
            images={[
                { src: "/email/email-1.svg", alt: "Email Clssifier 화면 예시 1" },
                { src: "/email/email-2.svg", alt: "Email Clssifier 화면 예시 2" },
            ]}
        />
      </SideSection>

      <SideSection title="문제 해결 사례">
        <SideProblemTable
          items={[
            {
              problem: '페이지 이동 시 기존 라벨이 사라지는 문제',
              solution: 'URL 변화 감지를 위한 MutationObserver 추가',
              result: 'Gmail 페이지 전환에도 자동 분류 유지'
            },
            {
              problem: 'Gmail의 다양한 제목 DOM 구조 대응 필요',
              solution: '여러 클래스명을 탐색하는 다중 선택자 로직 구성',
              result: '모든 이메일 제목에 안정적으로 라벨 적용'
            }
          ]}
        />
      </SideSection>

      <SideSection title="코드 스니펫">
        <CodeBlock
          language="js"
          code={`
// 카테고리 결정 함수
function determineCategory(subject) {
  subject = subject.toLowerCase();
  let categoryScores = { '비즈니스': 0, '학교': 0, '개인': 0, '광고': 0, '기타': 0 };
  for (let category in categoryKeywords) {
    let { keywords, weight } = categoryKeywords[category];
    keywords.forEach(keyword => {
      if (subject.includes(keyword)) categoryScores[category] += weight;
    });
  }
  return Object.entries(categoryScores).reduce((a, b) => a[1] > b[1] ? a : b)[0];
}`}
        />
        <div className="text-gray-700 text-md">
            <p>* 이메일 제목(Subject)을 기반으로 카테고리를 자동 결정</p>
            <p>* 카테고리별 키워드와 가중치를 계산하여 점수가 가장 높은 카테고리로 분류</p>
            <p>* 카테고리 설정만으로도 분류 로직을 확장하거나 조정 가능</p>
        </div>

        <CodeBlock
          language="js"
          code={`
// 이메일 UI 업데이트 함수
function updateEmailUI(emailElement, category) {
  const label = document.createElement('span');
  label.textContent = category;
  label.style.padding = '2px 6px';
  label.style.borderRadius = '4px';
  label.style.backgroundColor = '#eee';
  // ...카테고리별 스타일 적용 생략
  const subject = emailElement.querySelector('.bog, .y6');
  if (subject) subject.prepend(label);
}`}
        />
        <div className="text-gray-700 text-md">
            <p>* Gmail DOM 상의 이메일 제목 요소에 라벨(span)을 삽입</p>
            <p>* 카테고리별 배경 색상과 텍스트로 시각적으로 구분</p>
            <p>* 중복 삽입 방지를 위한 라벨 관리도 가능 (data-attribute 활용 시)</p>
        </div>
      </SideSection>

      <SideSection title="배포 링크 및 자료 저장소">
        <ExternalLinks
          links={[{
            label: 'GitHub 저장소',
            url: 'https://github.com/JinukSynth/Email_Classifier'
          }]}
        />
      </SideSection>

      <SideReflection>
        실사용 메일함에서 직접 동작하는 확장 프로그램을 만들며, 사용자 인터페이스 개선이 어떻게 자동화될 수 있는지를 체감할 수 있었습니다.
        특히 Gmail의 DOM 구조에 대응하고, 페이지 전환에도 견고하게 유지되도록 구현하는 경험이 인상 깊었습니다.  
        다만, 키워드 기반 분류 방식은 예상보다 정확도가 낮고 분류 지연이 발생하는 경우도 있어 아쉬움이 남았습니다.  
        다음에는 LLM이나 이메일 본문 분석 기반의 AI 자동 분류 방식을 적용해, 정확도와 반응 속도 모두 개선해보고 싶다는 생각을 하게 되었습니다.
        </SideReflection>
    </SideProjectLayout>
  );
}
