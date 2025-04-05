'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

// ✅ 레이아웃
export function EducationLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 xl:px-6 py-12 leading-tight tracking-tight">
      {/* ← 버튼 */}
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

// ✅ 헤더
export function EducationHeader({
  title,
  period,
  institution,
}: {
  title: string;
  period: string;
  institution: string;
}) {
  return (
    <section className="mb-12 border-b pb-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{title}</h1>
      <div className="text-gray-600 text-sm sm:text-base">
        <p><strong>수강 기간:</strong> {period}</p>
        <p><strong>기관:</strong> {institution}</p>
      </div>
    </section>
  );
}

// ✅ 섹션
export function EducationSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 border-l-4 border-emerald-400 pl-3">
        {title}
      </h2>
      <div className="text-gray-700 leading-relaxed text-sm sm:text-[15px]">
        {children}
      </div>
    </section>
  );
}

// ✅ 리스트
export function EducationList({ items }: { items: React.ReactNode[] }) {
  return (
    <div className="ml-4 sm:ml-5">
      <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// ✅ 증명서 이미지
export function CertificateImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mt-4 rounded-lg overflow-hidden shadow-md max-w-md sm:max-w-lg">
      <Image
        src={src}
        alt={alt}
        width={800}
        height={600}
        className="w-full h-auto"
      />
    </div>
  );
}

// ✅ 느낀 점
export function EducationReflection({ children }: { children: React.ReactNode }) {
  return (
    <section className="mt-12 mb-20">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 border-l-4 border-emerald-400 pl-3">
        느낀 점
      </h2>
      <div className="text-gray-700 leading-relaxed text-sm sm:text-[15px] pt-3">
        {children}
      </div>
    </section>
  );
}