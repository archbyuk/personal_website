'use client';

import { MetaData } from "@/metadata/metadata";
import ProjectList from "@/ui/ProjectsList";

export default function ProjectsPage() {
  return (
    <main className="w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto lg:py-28 py-14 px-4 sm:px-6 md:px-8 xl:px-0">
      {/* 타이틀 */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-tight text-left">
        다양한 동료들과 함께 만든, <br className="hidden sm:block" />
        실제 서비스 중심의 프로젝트. <br className="hidden sm:block" />
      </h1>

      {/* 서브타이틀 */}
      <p className="text-base sm:text-md xl:text-md text-gray-600 mb-16 text-left leading-relaxed">
        실무에 깊이 관여하며, 기획부터 출시까지 전 과정을 함께한 경험들입니다. <br className="hidden sm:block" />
        기술만이 아닌, 문제 해결과 협업의 본질을 배운 프로젝트들입니다.
      </p>

      {/* 프로젝트 리스트 */}
      <div className="border-l-2 border-gray-100 mt-5">
        <ProjectList items={MetaData} />
      </div>
    </main>
  );
}