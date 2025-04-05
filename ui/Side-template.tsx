'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

// 레이아웃
export function SideProjectLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 xl:px-6 py-12">
      {/* ← Back 버튼 */}
      <div className="max-w-2xl sm:max-w-3xl md:max-w-4xl xl:max-w-5xl mx-auto text-left mb-4 sm:mb-2 -mt-6 sm:mt-0">
        <button
          onClick={() => router.back()}
          className="text-sm text-gray-500 hover:underline hover:text-emerald-400"
        >
          ← Back
        </button>
      </div>

      {/* 본문 */}
      <div className="max-w-xl sm:max-w-2xl md:max-w-3xl xl:max-w-3xl mx-auto text-left">
        {children}
      </div>
    </div>
  );
}

// 헤더
export function SideProjectHeader({ title, period, summary }: { title: string; period: string; summary: string }) {
  return (
    <div className="mb-10">
      <p className="text-sm text-gray-500 mb-1 border-l-2 border-gray-400">&nbsp;&nbsp;{period}</p>
      <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-3xl font-bold text-gray-900 mb-2">{title}</h1>
      <p className="text-gray-600 text-sm sm:text-base md:text-[16px] leading-7">{summary}</p>
    </div>
  );
}

// 섹션
export function SideSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-14">
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <div className="text-sm sm:text-[15px] md:text-[16.5px] leading-7 text-gray-800">{children}</div>
    </section>
  );
}

// 진행 과정 타임라인
export function ProgressTrack({
  steps,
}: {
  steps: { title: string; description?: string }[];
}) {
  return (
    <div className="relative w-full overflow-x-auto py-8 px-2 sm:px-4">
      <div className="relative flex items-start justify-between min-w-[600px]">
        <div className="absolute top-2 left-0 right-0 h-[2px] bg-gray-300 z-0" />
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center w-full relative z-10">
            <div className="relative w-full flex justify-center">
              <div className="w-4 h-4 bg-emerald-400 rounded-full absolute top-2 -translate-y-1/2" />
            </div>
            <div className="mt-6 text-sm font-semibold text-gray-800 text-center">
              {step.title}
            </div>
            {step.description && (
              <div className="text-xs text-gray-500 mt-1 text-center max-w-[120px]">
                {step.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// 기술 스택
export function SideTechStack({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 mt-2 text-xs sm:text-sm">
      {items.map((tech, idx) => (
        <span
          key={idx}
          className="bg-gray-100 px-3 py-1 rounded-full text-gray-800"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

// 기능 리스트
export function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-[16px] md:text-[16.5px]">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

// 코드 블럭
export function CodeBlock({ language, code }: { language: string; code: string }) {
  return (
    <pre className="bg-gray-900 text-white text-xs sm:text-sm rounded-lg p-4 overflow-x-auto my-6 no-scrollbar">
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
}

// 이미지
export function SideProjectImage({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  const isSingle = images.length === 1;

  return (
    <div
      className={`my-8 gap-4 ${
        isSingle
          ? "rounded-xl overflow-hidden shadow-xl"
          : "grid grid-cols-1 sm:grid-cols-2"
      }`}
    >
      {images.map((img, idx) => (
        <div
          key={idx}
          className={isSingle ? "" : "rounded-xl overflow-hidden shadow-md"}
        >
          <Image
            src={img.src}
            alt={img.alt}
            width={800}
            height={450}
            className="w-full h-auto"
          />
        </div>
      ))}
    </div>
  );
}

// 아키텍처 이미지
export function SideArchImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="my-8 rounded-xl overflow-hidden shadow-xl">
      <Image
        src={src}
        alt={alt}
        width={700}
        height={350}
        className="w-full h-auto"
      />
    </div>
  );
}

// 문제 해결 테이블
export function SideProblemTable({
  items,
}: {
  items: { problem: string; solution: string; result: string }[];
}) {
  return (
    <div className="overflow-x-auto text-xs sm:text-sm">
      <table className="min-w-full text-left border border-gray-200">
        <thead className="bg-gray-100 text-xs sm:text-sm">
          <tr>
            <th className="px-4 py-2 border-b">문제</th>
            <th className="px-4 py-2 border-b">해결 방법</th>
            <th className="px-4 py-2 border-b">결과</th>
          </tr>
        </thead>
        <tbody>
          {items.map((row, i) => (
            <tr key={i} className="border-t">
              <td className="px-4 py-3 align-top">{row.problem}</td>
              <td className="px-4 py-3 align-top">{row.solution}</td>
              <td className="px-4 py-3 align-top">{row.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// 느낀 점
export function SideReflection({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm sm:text-[16px] md:text-[16.5px] leading-7 text-gray-700 mt-3">
      {children}
    </p>
  );
}

// 외부 링크
export function ExternalLinks({ links }: { links: { label: string; url: string }[] }) {
  return (
    <div className="mt-6 space-y-2">
      {links.map((link, idx) => (
        <a
          key={idx}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm sm:text-base text-emerald-500 hover:underline flex items-center gap-1"
        >
          🔗 {link.label}
        </a>
      ))}
    </div>
  );
}