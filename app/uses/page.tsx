'use client';

import { skillData } from "@/metadata/metadata";

// 기술 스택
export default function UsesPage() {
  return (
    <main className="w-full max-w-6xl mx-auto py-28 text-left px-8">
      <div className="mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
          개발할 때 사용하고 경험한<br /> 기술과 도구들.
        </h1>
        <p className="text-base text-gray-600">
          지금까지 다양한 프로젝트와 실무에서 사용해본 기술 스택을 정리했습니다. <br/>
          각 기술에 대한 이해도와 실제 사용 경험을 함께 표시했습니다.
        </p>
      </div>

      <div className="space-y-20">
        {skillData.map((category, idx) => (
          <section key={idx} className="grid grid-cols-[180px_1fr] gap-6 border-l border-gray-200 pl-6">
            <h2 className="text-sm font-semibold text-gray-900 ml-3 pr-4 mt-1">{category.title}</h2>
            <div className="space-y-6">
              {category.items.map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-800">{item.label}</span>
                    <span className="text-xs text-gray-500 mr-44">Lv. {item.level} / 5</span>
                  </div>
                  <div className="w-md bg-gray-100 rounded-full h-2">
                    <div
                      className="bg-emerald-500 h-2 rounded-full"
                      style={{ width: `${(item.level / 5) * 100}%` }}
                    ></div>
                  </div>
                  {item.context && (
                    <p className="text-xs text-gray-500 mt-1 italic">{item.context}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* 학습 중인 기술 */}
        <section className="grid grid-cols-[180px_1fr] gap-6 border-l border-gray-200 pl-6">
          <h2 className="text-sm font-semibold text-gray-900 ml-3 pr-4 mt-1">현재 관심 기술</h2>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>tRPC, Zustand, Supabase, App Router</li>
            <li>테스트 자동화 및 Storybook 기반 UI 개발</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
