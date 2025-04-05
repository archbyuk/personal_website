'use client';

import { skillData } from "@/metadata/metadata";

// 기술 스택
export default function UsesPage() {
  return (
    <main className="w-full max-w-2xl sm:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto lg:py-28 py-14 px-4 sm:px-6 md:px-8 text-left">
      {/* 헤더 */}
      <div className="mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
          개발할 때 사용하고 경험한<br className="hidden sm:block" /> 기술과 도구들.
        </h1>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          지금까지 다양한 프로젝트와 실무에서 사용해본 기술 스택을 정리했습니다. <br className="hidden sm:block" />
          각 기술에 대한 이해도와 실제 사용 경험을 함께 표시했습니다.
        </p>
      </div>

      {/* 기술 리스트 */}
      <div className="space-y-20">
        {skillData.map((category, idx) => (
          <section
            key={idx}
            className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-4 sm:gap-6 border-l sm:border-l border-gray-200 pl-4 sm:pl-6"
          >
            <h2 className="text-sm font-semibold text-gray-900 ml-1 sm:ml-3 pr-4 mt-1">
              {category.title}
            </h2>
            <div className="space-y-6">
              {category.items.map((item, i) => (
                <div key={i}>
                  {/* 라벨 + 레벨 */}
                  <div className="flex flex-col sm:flex-row sm:justify-between mb-1 gap-y-1">
                    <span className="text-sm font-medium text-gray-800">{item.label}</span>
                    <span className="text-xs text-gray-500 sm:mr-44">Lv. {item.level} / 5</span>
                  </div>

                  {/* 개선된 그래프 */}
                  <div
                    className="
                      w-full h-2 bg-gray-100 rounded-full
                      max-w-[80vw]
                      sm:max-w-[70vw]
                      md:max-w-[55vw]
                      lg:max-w-[450px]
                      xl:max-w-[512px]
                    "
                  >
                    <div
                      className="h-2 bg-emerald-500 rounded-full"
                      style={{ width: `${(item.level / 5) * 100}%` }}
                    />
                  </div>

                  {/* 맥락 설명 */}
                  {item.context && (
                    <p className="text-xs text-gray-500 mt-1 italic">{item.context}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* 학습 중인 기술 */}
        <section className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-4 sm:gap-6 border-l sm:border-l border-gray-200 pl-4 sm:pl-6">
          <h2 className="text-sm font-semibold text-gray-900 ml-1 sm:ml-3 pr-4 mt-1">
            현재 관심 기술
          </h2>
          <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-1">
            <li>tRPC, Zustand, Supabase, App Router</li>
            <li>테스트 자동화 및 Storybook 기반 UI 개발</li>
          </ul>
        </section>
      </div>
    </main>
  );
}