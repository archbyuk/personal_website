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
  SideArchImage,
  SideProjectImage,
} from '@/ui/Side-template';

export default function EumProjectPage() {
  return (
    <SideProjectLayout>
      <SideProjectHeader
        period="2024.04 ~ 2024.08"
        title="이음: AI 여행 플래너 서비스"
        summary="여행자와 소상공인을 연결하여 지역 경제를 활성화하고 개인화된 여행 경험을 제공하는 AI 기반 여행 플래너 플랫폼입니다."
      />

      <SideSection title="프로젝트 배경">
        <p>
            다양한 지역을 방문하며, 각 지역의 매력과 잠재력을 발견했습니다. 
            그러나 여행자들이 특정 지역을 충분히 경험하지 못하거나, 소상공인들이 효과적으로 가치를 알리지 못하는 문제를 목격했습니다. 
            이러한 문제를 해결하기 위해 '이음' 프로젝트를 시작하게 되었습니다.
        </p>
      </SideSection>

      <SideSection title="왜 만들게 되었나요?">
        <p>
          '이음' 플랫폼의 목표는 <strong>지역 경제 활성화</strong>입니다. 이를 위해 세 가지 세부 목표를 설정하였습니다.
        </p>
        <ol>
          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. AI 기반 맞춤형 여행지 추천과 일정 공유 기능으로 여행 계획을 간소화하고 특별한 경험을 제공</li>
          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. 광고 성과 모니터링, 저렴한 수수료, 인테리어 최적화 컨설팅을 통해 소상공인의 매출 증대와 매장 환경 개선 지원</li>
          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3. 여행자와 소상공인을 연결하여 지역 경제 활성화와 상호 성장을 도모하는 지속 가능한 플랫폼 구축</li>
        </ol>
      </SideSection>

      <SideSection title="사용 기술">
        <SideTechStack
          items={[
            'Flask',
            'BeautifulSoup',
            'Kakao Local API',
            'Next.js',
            'React',
            'Tailwind CSS',
            'OpenAI API',
            'Google Maps API',
          ]}
        />
      </SideSection>

      <SideSection title="주요 기능">
        <FeatureList
          items={[
            'SNS 및 블로그 크롤링을 통한 데이터 수집',
            '사용자 입력 데이터를 활용한 개인화된 여행지 추천',
            '지도 시각화를 통한 장소 정보 제공',
            'AI 기반 여행 일정 자동 생성 및 공유 기능',
            '소상공인을 위한 광고 성과 모니터링 및 컨설팅 지원',
          ]}
        />
      </SideSection>

      <SideSection title="진행 과정">
        <ProgressTrack
          steps={[
            { title: '기획 및 디자인', description: '목표 설정 및 사용자 경험 설계' },
            { title: '백엔드 개발', description: 'SNS 및 블로그 크롤러 및 API 구현' },
            { title: '프론트엔드 개발', description: 'FE 프레임워크를 활용한 사용자 인터페이스 개발' },
            { title: 'AI 모델 통합', description: '외부 API를 연동하여 개인화된 추천 시스템 구축' },
            { title: '해커톤 및 대회 참가', description: '기획과 MVP로 대회 시연발표 후 입상' },
          ]}
        />
      </SideSection>

      <SideSection title="시스템 아키텍처">
        <SideArchImage
          src="/eum/eum-7.svg"
          alt="이음 시스템 아키텍처"
        />
      </SideSection>

      <SideSection title="대회 입상 내역">
        <SideProjectImage
            images={[
                { src: "/eum/eum-1.svg", alt: "이음 입상 0" },
                { src: "/eum/eum-2.svg", alt: "이음 입상 1" },
                { src: "/eum/eum-0.svg", alt: "이음 입상 2" },
                { src: "/eum/eum-8.svg", alt: "이음 입상 3" },
            ]}
        />
      </SideSection>

            {/* 여기는 프로토 동영상 */}
      <SideSection title="프로그램 예시 이미지"> 
        <SideProjectImage
            images={[
                { src: "/eum/eum-3.svg", alt: "이음 1" },
                { src: "/eum/eum-4.svg", alt: "이음 2" },
                { src: "/eum/eum-5.svg", alt: "이음 3" },
                { src: "/eum/eum-6.svg", alt: "이음 4" },
            ]}
        />
      </SideSection>

      <SideSection title="문제 해결 사례">
        <SideProblemTable
            items={[
            {
                problem: '크롤링 데이터의 정보 부족 및 정확도 낮음',
                solution: 'OpenAI GPT API를 활용해 게시물 본문에서 장소명, 주소, 설명을 추출',
                result: '사용자 친화적인 장소 설명과 구조화된 장소 정보 확보',
            },
            {
                problem: '장소 좌표 및 상세 주소 매칭의 어려움',
                solution: 'Kakao Local API를 연동해 장소명 기반 정제된 주소 및 좌표 확보',
                result: '정확한 위치 기반 지도 시각화 가능',
            },
            {
                problem: '인스타그램에서 본문 콘텐츠 추출의 어려움',
                solution: 'BeautifulSoup을 활용해 og:description 메타태그에서 콘텐츠 추출',
                result: '로그인 없이도 게시글 본문 확보 가능',
            },
            {
                problem: '지도 내 마커 간 거리 조절 및 초기 위치 문제',
                solution: 'LatLngBounds 객체를 활용해 모든 마커가 보이도록 자동 확대/이동',
                result: '여러 장소를 한눈에 볼 수 있는 사용자 중심의 인터페이스 완성',
              }
            ]}
        />
      </SideSection>

      <SideSection title="코드 스니펫">
      <CodeBlock
            language="tsx"
            code={`
# 주요 부분 요약
def crawl_and_extract_places(url):
    if not is_valid_url(url): return {"error": "Invalid URL"}
    html = fetch_html_content(url)
    content = extract_content_instagram(html)
    places, addresses, descriptions = extract_place_and_address(content)
    place_candidates = get_place_candidates(places)

    # 최종 데이터 구성
    extracted_data = []
    for place_name, candidates in place_candidates.items():
        if candidates and isinstance(candidates, list):
            candidate = candidates[0]
            extracted_data.append({
                "name": place_name,
                "location": candidate['Address'],
                "description": descriptions[places.index(place_name)],
                "latitude": candidate['latitude'],
                "longitude": candidate['longitude'],
                "link": url
            })
    return extracted_data`}
        />
        <div className="text-gray-700 text-md">
            <p>* 사용자가 제공한 SNS 게시글 URL을 기반으로 콘텐츠를 분석</p>
            <p>* GPT-3.5 API로 장소명, 주소, 장소 설명 추출</p>
            <p>* Kakao Map API를 통해 위치 후보 데이터 보완 및 좌표 확보</p>
            <p>* JSON 형태로 가공하여 추천 시스템 및 지도 시각화에 활용</p>
        </div>
        
        <CodeBlock
            language="python"
            code={`
# 장소 정보 추출을 위한 OpenAI 기반 자연어 처리
def extract_place_and_address(text):
    prompt = f\"\"\"
        아래 본문에서 장소명, 주소, 그리고 해당 장소에 대한 설명을 추출해주세요. 설명은 본문을 요약해서 친근하게 작성해주세요.

        본문: {text}

        출력 형식:
        장소명: [장소명]
        주소: [주소]
        설명: [친근한 요약]
        \"\"\"
        completion_executor = CompletionExecutor()
        result = completion_executor.execute(prompt)
        ...
        
    return places, addresses, descriptions`}
        />
        <div className="text-gray-700 text-md">
            <p>* 인스타그램 등 SNS 본문에서 자연어로 기술된 장소 정보를 추출하기 위해 GPT API 활용</p>
            <p>* 장소명, 주소, 설명 등을 친근한 문장으로 정제하여 사용자가 이해하기 쉽게 가공</p>
        </div>

        <CodeBlock
            language="tsx"
            code={`
// Google Maps API를 이용해 마커 생성 및 InfoWindow 표시
places.forEach((place) => {
  const marker = new google.maps.Marker({
    position: { lat: Number(place.latitude), lng: Number(place.longitude) },
    map,
    title: place.name,
  });

  const infoWindow = new google.maps.InfoWindow({
    content: \`<div>
                <h3>\${place.name}</h3>
                <p>\${place.description}</p>
                <a href="\${place.link}" target="_blank">원문 보기</a>
              </div>\`,
  });

  marker.addListener('click', () => {
    infoWindow.open(map, marker);
  });

  markersRef.current.push(marker);
});`}
        />
        <div className="text-gray-700 text-md">
            <p>* 크롤링된 장소 정보를 Google Maps에 마커로 표시</p>
            <p>* 클릭 시 InfoWindow로 설명 및 원문 링크를 제공하여 사용자 편의성 향상</p>
            <p>* 모든 마커를 감싸는 bounds 계산으로 지도의 자동 확대/이동도 포함</p>
        </div>
      </SideSection>

      <SideSection title="자료 저장소">
        <ExternalLinks
          links={[
            {
              label: 'GitHub 저장소',
              url: 'https://github.com/JinukSynth/Hackathon-Eum',
            },
            {
              label: '이음 PPT',
              url: 'https://file.notion.so/f/f/96a8c609-5a4a-4ff1-b1b7-fbb02e10e394/2b7c7dba-8768-4764-9d0e-14d9eed9420d/%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%B3%E1%86%B7_%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC_PT(pdf).pdf?table=block&id=16fb332e-c754-809d-91a8-d91294771e17&spaceId=96a8c609-5a4a-4ff1-b1b7-fbb02e10e394&expirationTimestamp=1743811200000&signature=Bc9e5ZVowwmajbkLp8G_Ly92YbS302uHy0WREM9HI8I&downloadName=%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%B3%E1%86%B7+%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC+PT%28pdf%29.pdf',
            },
            {
              label: '이음 학술대회 포스터',
              url: 'https://file.notion.so/f/f/96a8c609-5a4a-4ff1-b1b7-fbb02e10e394/4764eddc-b252-43da-b9cf-652a22bd44d7/%E1%84%92%E1%85%A1%E1%86%A8%E1%84%89%E1%85%AE%E1%86%AF%E1%84%83%E1%85%A2%E1%84%92%E1%85%AC_%E1%84%91%E1%85%A9%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5(%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%B3%E1%86%B7_%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC).pdf?table=block&id=16fb332e-c754-806d-b147-dcc583b00227&spaceId=96a8c609-5a4a-4ff1-b1b7-fbb02e10e394&expirationTimestamp=1743811200000&signature=IhZskKaTvAKPVqYTqFHNFZTJLXSxmf22mVIHfNqknNU&downloadName=%E1%84%92%E1%85%A1%E1%86%A8%E1%84%89%E1%85%AE%E1%86%AF%E1%84%83%E1%85%A2%E1%84%92%E1%85%AC+%E1%84%91%E1%85%A9%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%28%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%B3%E1%86%B7+%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC%29.pdf',
            },
          ]}
        />
      </SideSection>

      <SideReflection>
        '이음' 프로젝트는 AI와 크롤링을 결합해 여행자와 소상공인을 연결하는 플랫폼을 개발한 의미 있는 경험이었습니다. 
        특히 크롤링 자동화와 Google Maps 시각화를 통해 사용자 경험을 개선하려 했습니다.

        다만 기술적으로 아쉬운 점도 분명했습니다.  
        예를 들어, 메시지 브로커(RabbitMQ, Kafka 등)를 도입하지 않아 <strong>대량 요청 처리 시 확장성과 안정성에 한계</strong>가 있었고,  
        크롤링 진행 상황이나 오류에 대한 사용자 피드백이 부족했습니다.

        다음에는 <strong>큐 기반 비동기 처리</strong>와 을 추가해 더욱 견고하고 확장 가능한 구조로 발전시키고 싶습니다.
      </SideReflection>
    </SideProjectLayout>
  );
}