'use client';
import { useState, useEffect } from 'react';

export default function Intro() {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mq = window.matchMedia('(max-width: 768px)');
      setIsMobile(mq.matches);
      const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
      mq.addEventListener('change', handler);
      return () => mq.removeEventListener('change', handler);
    }
  }, []);

  const introParagraphs = [
    `지금까지 다양한 프로젝트를 경험하며, 프론트엔드와 백엔드는 물론 시스템 구조와 데이터 흐름까지 고민하는 개발자로 성장해왔습니다. 그 동안의 개인 프로젝트, 스타트업, 외주를 넘나들며 서비스를 기획하고 설계하며, 개발과 운영까지 직접 주도해본 경험이 있습니다.`,
    `특히 사회적인 문제를 해결하기 위한 서비스를 만드는 데 관심이 많습니다. 산간지역 초등학생의 영어 말하기 문제를 해결한 VR 기반 학습 플랫폼, 노인의 건강관리를 위한 보행 분석 시스템과`, 
    `스마트링 관제 시스템, 소상공인과 MZ세대를 연결하는 여행 플랫폼, 병원의 운영 효율을 개선한 프로그램 등 다양한 분야에서 문제 해결을 경험했습니다.`,
    `복잡한 기능과 흐름을 단순하고 명확한 구조로 정리하고, 다양한 사람들과의 협업 속에서 프로젝트의 방향을 조율해나가는 것을 좋아합니다. 실제 사용자와의 접점에서 얻은 피드백을 기술적으로 풀어내는 일에 흥미를 느끼며, 커뮤니케이션과 설계를 가장 중요하게 생각합니다.`,
    `단순히 개발을 넘어서, 제품의 전체 아키텍처를 이해하고 팀을 이끌 수 있는 기술 아키텍트가 되는 것이 제 목표입니다. 기술로 문제를 해결하고, 사용자와 비즈니스의 연결고리를 설계하는 사람으로 성장하고 싶습니다.`,
  ];

  const visibleParagraphs = isMobile && !expanded
    ? introParagraphs.slice(0, 2)
    : introParagraphs;

  const shouldShowToggle = isMobile && introParagraphs.length > 2;

  return (
    <div className="md:col-span-2 space-y-6 text-gray-800 md:mr-32 px-4 md:px-0">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight text-left">
        코더를 넘어 아키텍트를 꿈꾸는 주니어, 정진욱입니다.
      </h1>

      <div className="text-gray-600 text-left mt-10 space-y-6 text-base sm:text-lg leading-relaxed">
        {visibleParagraphs.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}

        {shouldShowToggle && (
          <button
            className="block mt-4 text-sm text-primary font-medium underline text-emerald-400"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? '접기' : '더보기'}
          </button>
        )}
      </div>
    </div>
  );
}