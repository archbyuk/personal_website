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

export default function OpenChatPage() {
  return (
    <SideProjectLayout>
      <SideProjectHeader
        period="2025.01"
        title="Socket.IO 기반 오픈채팅 시스템"
        summary="카카오톡을 참고하여 노란색 테마의 실시간 오픈채팅 웹 애플리케이션으로, Socket.IO와 React, Vite 기반으로 구현하였습니다."
      />

      <SideSection title="왜 만들게 되었나요?">
        <p>
          Socket.IO를 깊이 이해하고 실시간 통신 구조를 직접 구현해보고자 이 프로젝트를 시작했습니다. 
          단순한 튜토리얼 수준이 아닌, 실제 배포 가능한 수준의 오픈채팅 애플리케이션을 목표로 하였습니다.
        </p>
      </SideSection>

      <SideSection title="사용 기술">
        <SideTechStack
          items={[
            'React',
            'Vite',
            'TailwindCSS',
            'Node.js',
            'Express',
            'Socket.IO',
            'MySQL',
            'Render',
            'Railway'
          ]}
        />
      </SideSection>

      <SideSection title="진행 과정">
        <ProgressTrack
          steps={[
            { title: '기획 및 디자인', description: '노란색 테마의 UI 설계 및 컴포넌트 정의' },
            { title: '백엔드 구조 설계', description: 'Express + Socket.IO 구조 구현 및 메시지 전송 구조 설계' },
            { title: 'DB 설계 및 마이그레이션', description: 'MySQL 테이블 정의 및 ALTER 로직 구성' },
            { title: '프론트엔드 개발', description: '입출력 메시지, 사용자 인터랙션 및 반응형 UI 개발' },
            { title: '배포 및 테스트', description: 'Render와 Railway를 통해 전체 배포 진행' },
          ]}
        />
      </SideSection>

      <SideSection title="시스템 아키텍처">
        <SideArchImage
            src="/openchat/openchat-0.svg"
            alt="OpenChat 시스템 아키텍처"
        />
      </SideSection>


      <SideSection title="주요 기능">
        <FeatureList
          items={[
            '실시간 메시지 전송 및 수신',
            '사용자 입장/퇴장 시 알림 브로드캐스트',
            '과거 메시지 DB에서 불러오기',
            '간단한 반응형 디자인 및 UUID 기반 메시지 식별'
          ]}
        />
      </SideSection>

      <SideSection title="프로그램 예시 이미지">
        <SideProjectImage
          images={[
            { src: "/openchat/openchat-3.svg", alt: "OpenChat 화면 예시 3" },
            { src: "/openchat/openchat-2.svg", alt: "OpenChat 화면 예시 2" },
            { src: "/openchat/openchat-1.svg", alt: "OpenChat 화면 예시 1" },
                  ]}
              />
        </SideSection>

      <SideSection title="문제 해결 사례">
        <SideProblemTable
          items={[
            {
              problem: '채팅방 접속 시 중복 입장 메시지 발생',
              solution: 'Socket.IO handshake 정보를 활용하여 사용자 고유 식별 및 중복 방지 로직 추가',
              result: '중복 입장 알림 없이 안정적으로 사용자 입장 처리'
            },
            {
              problem: '퇴장 메시지 누락 및 저장 오류',
              solution: 'disconnect 이벤트 내에서 UUID 생성 후 DB에 저장되도록 순서 제어',
              result: '퇴장 메시지가 항상 저장되고 전체 브로드캐스트됨'
            }
          ]}
        />
      </SideSection>

      <SideSection title="코드 스니펫">
        <CodeBlock
            language="ts"
            code={
`import "dotenv/config";
import mysql from "mysql2/promise";
import { Server } from "socket.io";
import express from "express";
import * as http from "http";
import ViteExpress from "vite-express";
import { v4 as uuidv4 } from 'uuid';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "*", methods: ["GET", "POST"] }
});

const pool = mysql.createPool({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    port: process.env.MYSQLPORT,
});

io.on("connection", async (client) => {
    const connectedUsername = client.handshake.query.username;
    const entryMessage = {
        id: uuidv4(),
        username: "관리자",
        message: \`\${connectedUsername}님이 채팅에 참가하셨습니다.\`,
        room_id: 'default_room'
    };
    client.broadcast.emit('message', entryMessage);

    client.on('message', async (data) => {
        const messageWithId = { id: uuidv4(), ...data };
        await pool.query(
          "INSERT INTO messages (room_id, username, message) VALUES (?, ?, ?)",
          [data.room_id || 'default_room', data.username, data.message]
        );
        io.emit('message', messageWithId);
    });

    client.on('disconnect', async () => {
        const exitMessage = {
            id: uuidv4(),
            username: "관리자",
            message: \`\${connectedUsername}님이 채팅에서 퇴장하셨습니다.\`,
            room_id: "default_room"
        };
        await pool.query(
            "INSERT INTO messages (room_id, username, message) VALUES (?, ?, ?)",
            [exitMessage.room_id, exitMessage.username, exitMessage.message]
        );
        io.emit('message', exitMessage);
    });
});`    
            }
        />

        <div className="text-gray-700 text-md">
            <p>* Socket.IO를 이용한 실시간 채팅 서버 구성 예시</p>
            <p>* 클라이언트가 접속하면 입장 메시지를 브로드캐스트로 전송</p>
            <p>* 채팅 메시지는 DB에 저장한 후 모든 사용자에게 전송 (`io.emit`)</p>
            <p>* 접속 해제 시에도 퇴장 메시지를 DB에 저장하고 브로드캐스트</p>
            <p>* MySQL + Express + Socket.IO의 조합으로 안정적인 실시간 채팅 구현</p>
        </div>
    </SideSection>

      <SideSection title="배포 링크 및 저장소">
        <ExternalLinks
          links={[{
            label: 'GitHub 저장소',
            url: 'https://github.com/JinukSynth/OpenChat-with-Everyone'
          }]}
        />
      </SideSection>

      <SideReflection>
        Socket.IO를 단순히 사용하는 수준을 넘어서, 실시간 시스템에서 발생할 수 있는 다양한 예외 상황과 이벤트 흐름을 직접 처리해본 경험이었습니다.
        실시간 메시지 처리와 데이터 저장 사이의 연계, 그리고 사용자 경험을 고려한 이벤트 설계 등에서 많은 인사이트를 얻었습니다.
      </SideReflection>
    </SideProjectLayout>
  );
}