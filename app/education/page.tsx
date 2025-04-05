'use client';

import { EducationList } from "@/ui/EducationList";
import { educationItems } from "@/metadata/metadata";

export default function EducationPage() {
  return (
    <main className="w-full max-w-6xl mx-auto py-28 px-8 text-left">
      <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
        성장의 기반이 된 교육 <br/> & 멘토링 기록.
      </h1>
      <p className="text-gray-600 mb-16 text-base">
        제가 참여했던 다양한 교육 프로그램과 멘토링 활동을 정리해둔 공간입니다.<br/>
        실무 중심의 커리큘럼과 협업 경험을 통해 성장한 과정을 확인할 수 있습니다.
      </p>

      <EducationList items={educationItems} />
    </main>
  );
}