'use client';

import {
  SideProjectLayout,
  SideProjectHeader,
  SideSection,
  SideTechStack,
  FeatureList,
  SideProjectImage,
  SideReflection,
  ExternalLinks,
  ProgressTrack,
  SideArchImage,
} from '@/ui/Side-template';

export default function AWSWebSecurityPage() {
  return (
    <SideProjectLayout>
      <SideProjectHeader
        period="2024.08 ~ 2024.10"
        title="AWS 기반 웹 해킹 로그 분석"
        summary="K-Shield.Jr 프로그램의 일환으로, 클라우드 환경에서 웹 해킹을 탐지하고 대응하는 보안 프로젝트입니다. AWS 인프라 기반에서 로그를 분석하고 보안 아키텍처를 설계했습니다."
      />

      <SideSection title="시작하게 된 계기">
        <p>
          실무에서 활용 가능한 보안 기술을 익히기 위해 클라우드 기반 웹 해킹 분석 프로젝트를 진행했습니다. K-Shield.Jr 교육 과정의 일환으로, 웹 해킹 공격 시나리오를 직접 구성하고 AWS에서 이를 분석 및 대응하는 실습을 수행했습니다.
        </p>
      </SideSection>

      <SideSection title="내가 맡은 역할">
        <FeatureList
          items={[
            '팀장 역할 수행 (일정 관리, 팀원 조율, 보고)',
            'AWS 아키텍처 설계 및 구축',
            '웹 해킹 환경 구성 및 로그 수집 구조 설계',
            '프로젝트 발표 자료 제작 및 발표 주도',
          ]}
        />
      </SideSection>

      <SideSection title="사용 기술">
        <SideTechStack
          items={[
            'AWS (VPC, EC2, Security Group)',
            'pfSense',
            'Apache Web Server',
            'Burp Suite',
            'Wireshark',
            'Linux (Ubuntu)',
          ]}
        />
      </SideSection>

      <SideSection title="진행 과정">
        <ProgressTrack
          steps={[
            { title: '환경 설계', description: '클라우드 기반 웹 해킹 환경 기획' },
            { title: '아키텍처 구축', description: 'VPC, EC2, pfSense 등을 활용한 인프라 구성' },
            { title: '시나리오 적용', description: 'XSS 등 웹 해킹 시뮬레이션 및 로그 수집' },
            { title: '분석 및 발표', description: '로그 분석 결과를 기반으로 발표 자료 작성 및 발표' },
          ]}
        />
      </SideSection>

      <SideSection title="시스템 아키텍처">
        <SideArchImage
          src="/aws/aws-0.svg"
          alt="AWS 보안 프로젝트 아키텍처"
        />
      </SideSection>

      <SideSection title="성과 및 배운 점">
        <FeatureList
          items={[
            '인생 첫 팀 프로젝트 완수 경험',
            '보안 기술에 대한 실무 감각 강화',
            'AWS 인프라와 보안 아키텍처 이해도 상승',
            '협업과 발표 역량 향상',
            '웹 해킹 시나리오 구성 및 로그 분석 경험 축적',
          ]}
        />
      </SideSection>

      <SideSection title="프로젝트 예시 이미지">
        <SideProjectImage
          images={[
            { src: "/aws/aws-1.svg", alt: "AWS 보안 환경 구성 예시 1" },
            { src: "/aws/aws-2.svg", alt: "AWS 보안 환경 구성 예시 2" },
          ]}
        />
      </SideSection>

      <SideSection title="배포 링크 및 자료 저장소">
        <ExternalLinks
          links={[
            {
              label: '프로젝트 최종 PPT (PDF보기)',
              url: '/aws/docs/aws-ppt.pdf',
            },
          ]}
        />
      </SideSection>

      <SideReflection>
        이 프로젝트는 클라우드 환경에서의 보안 실습이라는 새로운 도전을 가능하게 해준 경험이었습니다. 단순한 기술 구현을 넘어, 아키텍처 설계와 팀원 간 협업, 발표 준비까지 전체적인 프로젝트 사이클을 경험할 수 있었던 값진 기회였습니다.
      </SideReflection>
    </SideProjectLayout>
  );
}