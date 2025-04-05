'use client';

import Intro from "@/ui/Intro";
import History from "@/ui/History";
import { history } from "@/metadata/metadata";
import AboutProfile from "@/ui/AboutProfile";

// 추후 이력서 다운로드 버튼 추가
export default function AboutPage() {
  return (
    <main className="w-full max-w-5xl mx-auto py-28">
      <div className="grid grid-cols-1 md:grid-cols-3 items-start">
        
        <div className="md:col-span-2 space-y-20 text-gray-800">
          <Intro /> {/* 왼쪽: 자기소개 + 연혁 */}
        </div>
        
        <AboutProfile /> {/* 오른쪽: 이미지 + 링크 */}
      </div>

      <History items={history} /> {/* 연혁 */}
    </main>
  );
}