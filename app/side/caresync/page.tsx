'use client';

import {
  SideProjectLayout,
  SideProjectHeader,
  SideSection,
  SideTechStack,
  FeatureList,
  SideProjectImage,
  SideProblemTable,
  SideReflection,
  CodeBlock,
  ExternalLinks,
  ProgressTrack,
  SideArchImage,
} from '@/ui/Side-template';

export default function CareSyncPage() {
  return (
    <SideProjectLayout>
      <SideProjectHeader
        period="2024.11 ~ 2025.01"
        title="CareSync - 환자 상태 관리 시스템"
        summary="피부과 체인점의 환자 상태를 직관적이고 효율적으로 관리하기 위해 개발된 맞춤형 솔루션입니다. 실제 의료 현장에서 사용 중이며, 유동성과 실시간 반영 기능을 중점으로 설계되었습니다."
      />

      <SideSection title="시작하게 된 계기">
        <p>
          피부과 진료를 오랜 기간 다니던 지인을 통해, 환자 상태를 실시간으로 추적하고 공유할 수 있는 시스템이 절실하다는 이야기를 듣게 되었습니다.
          특히 <strong>“FaceFilter”</strong> 클리닉의 요청을 받아, 시술 대기 및 진행 중인 환자 정보를 효율적으로 관리할 수 있는 프로그램을 직접 설계하고 개발하게 되었습니다.
        </p>
      </SideSection>

      <SideSection title="왜 만들게 되었나요?">
        <p>
          피부과에 예약하고 방문해도 20분 이상 대기하는 경우가 많았고, 이는 내부 환자 상태에 대한 공유 시스템이 없기 때문이라는 이야기를 들었습니다.
          현장의 실질적인 문제를 기술로 해결하고자 바로 개발을 시작했습니다.
        </p>
      </SideSection>

      <SideSection title="사용 기술">
        <SideTechStack
          items={[
            'Electron',
            'React',
            'TypeScript',
            'Vite',
            'TailwindCSS',
            'Firebase (Auth, RealtimeDB)',
            'MUI',
          ]}
        />
      </SideSection>

      <SideSection title="진행 과정">
        <ProgressTrack
          steps={[
            { title: "니즈 파악", description: "FaceFilter 클리닉의 환자 관리 문제 확인" },
            { title: "기획 및 설계", description: "의료진과 협업하여 기능 정의 및 UI 설계" },
            { title: "개발", description: "프론트·백엔드 구현 및 실시간 데이터 연동" },
            { title: "테스트 및 배포", description: "3일간 QA 및 기능 안정화 후 exe 파일 납품" },
          ]}
        />
      </SideSection>

      <SideSection title="시스템 아키텍처">
        <SideArchImage
          src="/caresync/caresync-0.svg"
          alt="CareSync 시스템 아키텍처"
        />
      </SideSection>

      <SideSection title="주요 기능">
        <FeatureList
          items={[
            '환자 상태별 관리 대시보드',
            '시술실별 환자 위치 및 시술 시간 실시간 추적',
            '환자 상태 변경 및 메모 기록 기능',
            'Firebase RealtimeDB 기반 실시간 동기화 및 세션 공유',
            '병원·부서 단위 인증 및 동시 접속 구조 지원',
          ]}
        />
      </SideSection>

      <SideSection title="프로그램 예시 이미지">
        <SideProjectImage
            images={[
              { src: "/caresync/caresync-1.svg", alt: "CareSync 화면 예시 1" },
              { src: "/caresync/caresync-2.svg", alt: "CareSync 화면 예시 2" },
              { src: "/caresync/caresync-3.svg", alt: "CareSync 화면 예시 3" },
              { src: "/caresync/caresync-4.svg", alt: "CareSync 화면 예시 4" },
              { src: "/caresync/caresync-5.svg", alt: "CareSync 화면 예시 5" },
              { src: "/caresync/caresync-6.svg", alt: "CareSync 화면 예시 6" },
            ]}
        />
      </SideSection>

      <SideSection title="문제 해결 사례">
        <SideProblemTable
          items={[
            {
              problem: '상태 변경 시 화면 지연 및 새로고침시 타이머 사라짐 문제',
              solution: 'Firebase onValue와 상태 관리 도입',
              result: '실시간 반영 및 불필요한 새로고침 제거',
            },
            {
              problem: '환자 메모 입력 시 중복 데이터 발생',
              solution: 'useEffect 기반 클라이언트 측 중복 방지 로직 추가',
              result: '입력 오류 방지 및 UX 개선',
            },
            {
              problem: '환자 정보 초기화 후 입력창 재사용 불가',
              solution: '운영체제별 콘솔 디버깅을 통해 로그 관련 처리 개선',
              result: '입력 UI 안정화 및 사용자 오류 최소화',
            },
          ]}
        />
      </SideSection>

      <SideSection title="코드 스니펫">
        <CodeBlock
          language="tsx"
          code={`
// 환자 시술실(Room) 데이터를 실시간으로 구독하는 함수
subscribeToRoomData: (hospitalId, departmentId, sectionId, roomId, callback) => {
  // Firebase Realtime Database 인스턴스를 가져옴
  const db = firebaseService.getDatabase();
  if (!db) throw new Error('Database not initialized');

  // 실시간 구독 대상이 되는 시술실의 경로 생성
  const roomRef = ref(
    db, 
    \`hospitals/\${hospitalId}/departments/\${departmentId}/sections/\${sectionId}/rooms/\${roomId}\`
  );

  // onValue: 해당 경로의 데이터가 변경될 때마다 콜백 실행
  const unsubscribe = onValue(
    roomRef,
    (snapshot) => {
      const data = snapshot.val(); // 데이터 가져오기
      callback(data); // 외부에서 전달받은 콜백 함수로 전달
    },
    (error) => {
      console.error('Room data listener error:', error); // 에러 발생 시 로그 출력
    }
  );

  // 리스너를 해제할 수 있도록 unsubscribe 함수 반환
  return unsubscribe;
}`}
        />
        <div className='text-gray-700 text-md'>
          <p>* 실시간 구독을 위한 onValue 사용</p>
          <p>* 콜백을 외부로 전달 → 화면 상태와 바로 연결 가능</p>
          <p>* unsubscribe 리턴 → 메모리 누수 방지 가능</p>
          <p>* 구조적으로 병원 → 부서 → 섹션 → 룸의 체계적인 데이터 관리 가능</p>
        </div>

        <CodeBlock
          language="tsx"
          code={`
// 타이머 설정 함수 (Room 컴포넌트 내부)
const setupTimer = async (data: RoomTimerData) => {
  if (!data?.timer || shouldResetTimer(data.timer)) {
    setTimer(null);
    return;
  }

  const { timer: timerData } = data;
  let startedAt = timerData.startedAt;

  if (timerData.type === 'countdown' && timerData.targetTime && timerData.targetTime > 0) {
    const elapsed = Math.floor((Date.now() - startedAt) / 1000);
    const remaining = timerData.targetTime - elapsed;

    if (remaining <= 0) {
      setTimer({
        type: 'countdown',
        currentTime: 0,
        isRunning: false,
        startedAt,
        targetTime: timerData.targetTime,
      });
      return;
    }

    if (!startedAt || startedAt === 0) {
      startedAt = Date.now();
      await Promise.resolve(); // DB 업데이트 필요 시 여기에 추가
    }

    setTimer({
      type: 'countdown',
      currentTime: remaining,
      isRunning: true,
      startedAt,
      targetTime: timerData.targetTime,
    });
  }
};`}
        />
        <div className='text-gray-700 text-md'>
          <p>* 환자 상태가 변경되거나 새로 입실할 때, 남은 시술 시간을 실시간으로 계산</p>
          <p>* 타이머 종료 여부 체크 및 자동 종료 처리 포함</p>
          <p>* DB 타이머 저장과 연동할 수 있도록 확장성까지 고려된 구조</p>
        </div>

        <CodeBlock
          language="tsx"
          code={`
useEffect(() => {
  setRoomData(room);
  (async () => {
    if (room && (room as any).timer) {
      await setupTimer({ timer: (room as any).timer });
    } else {
      setTimer(null);
    }
  })();
}, [room, setTimer]);
          `}
        />
        <div className='text-gray-700 text-md'>
          <p>* prop으로 전달된 room 데이터가 바뀔 때마다 내부 타이머 자동 재설정</p>
          <p>* 실시간 상태 변경 + 화면 반영이 연동된 구조</p>
        </div>

      </SideSection>

      <SideSection title="배포 링크 및 자료 저장소">
        <ExternalLinks
          links={[
            {
              label: 'GitHub 저장소',
              url: 'https://github.com/JinukSynth/CareSync',
            },
          ]}
        />
      </SideSection>

      <SideReflection>
        실제 클리닉에서 사용되는 환자 관리 시스템을 직접 설계하고 개발하며, 실사용자의 니즈를 기술적으로 해결하는 과정의 중요성을 체감했습니다.
        단순한 기능 구현을 넘어서, 빠르고 안정적인 실시간 데이터 처리와 협업 기반의 개발 경험이 돋보였던 프로젝트였습니다.
      </SideReflection>
    </SideProjectLayout>
  );
}