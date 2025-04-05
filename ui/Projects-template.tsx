'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

// Section Wrapper
export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-16 px-4 sm:px-6 md:px-0">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <div className="text-[17px] leading-8 text-gray-800">{children}</div>
    </section>
  );
}

export function ContributionList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc list-inside space-y-2 text-gray-700 text-[17px] px-4 sm:px-6 md:px-0">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export function ResultHighlight({ results }: { results: string[] }) {
  return (
    <ul className="list-disc list-inside space-y-1.5 text-emerald-500 font-semibold text-[17px] mb-5 px-4 sm:px-6 md:px-0">
      {results.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export function TechStack({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 mt-2 px-4 sm:px-6 md:px-0">
      {items.map((tech, idx) => (
        <span
          key={idx}
          className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-800"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

export function ProjectImage({ images }: { images: { src: string; alt: string }[] }) {
  const isSingle = images.length === 1;
  return (
    <div
      className={`my-8 gap-4 px-4 sm:px-6 md:px-0 ${
        isSingle
          ? "rounded-xl overflow-hidden shadow-xl"
          : "grid grid-cols-1 sm:grid-cols-2"
      }`}
    >
      {images.map((img, idx) => (
        <div key={idx} className={isSingle ? "" : "rounded-xl overflow-hidden shadow-md"}>
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

export function ProjectHeader({ date, title }: { date: string; title: string }) {
  return (
    <div className="mb-10 px-4 sm:px-6 md:px-0">
      <p className="text-sm text-gray-500 mb-1 border-l-2 border-gray-400">&nbsp;&nbsp;{date}</p>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
    </div>
  );
}

export function ProjectLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 py-12 leading-tight tracking-tight">
      <div className="max-w-5xl mx-auto text-left -mt-8 sm:-mt-6 md:-mt-8">
        <button
          onClick={() => router.back()}
          className="text-sm text-gray-500 hover:underline hover:text-emerald-400"
        >
          ← Back
        </button>
      </div>
      <div className="max-w-3xl mx-auto text-left mt-5">
        {children}
      </div>
    </div>
  );
}

export function ProblemStatement({ children }: { children: React.ReactNode }) {
  return (
    <section className="mb-16 px-4 sm:px-6 md:px-0">
      <h3 className="text-xl font-bold text-red-500 mb-4">Problem & Context</h3>
      <div className="text-[17px] leading-8 text-gray-800">{children}</div>
    </section>
  );
}

export function ProcessStep({ steps }: { steps: string[] }) {
  return (
    <div className="relative border-l-2 border-emerald-400 pl-6 ml-2 space-y-6 px-2 sm:px-4 md:px-0">
      {steps.map((step, idx) => (
        <div key={idx} className="relative">
          <div className="absolute -left-3 top-2.5 w-2 h-2 rounded-full bg-emerald-400 shadow-md" />
          <div className="ml-1 text-[16px] leading-7 text-gray-800">
            <span className="font-semibold text-emerald-700 mr-2">Step {idx + 1}.</span>
            {step}
          </div>
        </div>
      ))}
    </div>
  );
}

export function Outcome({ children }: { children: React.ReactNode }) {
  return (
    <section className="mb-16 px-4 sm:px-6 md:px-0">
      <h3 className="text-xl font-bold text-blue-600 mb-4">Outcome</h3>
      <div className="text-[17px] leading-8 text-gray-800">{children}</div>
    </section>
  );
}

export function ProblemSolving({
  title,
  challenge,
  solution,
  impact,
}: {
  title: string;
  challenge: string;
  solution: string;
  impact?: string;
}) {
  return (
    <div className="mb-12 space-y-2 px-4 sm:px-6 md:px-0">
      <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
      <p><strong className="text-gray-700">문제:</strong> {challenge}</p>
      <p><strong className="text-gray-700">접근 및 해결:</strong> {solution}</p>
      {impact && <p><strong className="text-gray-700">결과:</strong> {impact}</p>}
    </div>
  );
}

export function ProblemTable({
  items,
}: {
  items: { problem: string; solution: string; result?: string }[];
}) {
  return (
    <div className="overflow-x-auto text-[15px] px-4 sm:px-6 md:px-0">
      <table className="min-w-full border border-gray-200 text-left">
        <thead className="bg-gray-50 text-sm text-gray-700 font-semibold">
          <tr>
            <th className="border px-4 py-2 w-1/4">문제</th>
            <th className="border px-4 py-2 w-1/2">접근 및 해결</th>
            <th className="border px-4 py-2 w-1/4">결과</th>
          </tr>
        </thead>
        <tbody className="text-gray-800">
          {items.map((item, i) => (
            <tr key={i} className="hover:bg-gray-50">
              <td className="border px-4 py-3 align-top leading-relaxed">{item.problem}</td>
              <td className="border px-4 py-3 align-top leading-relaxed">{item.solution}</td>
              <td className="border px-4 py-3 align-top leading-relaxed">{item.result || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function FeatureTable({
  items,
}: {
  items: { name: string; description: string }[];
}) {
  return (
    <div className="overflow-x-auto text-sm px-4 sm:px-6 md:px-0">
      <table className="min-w-full border border-gray-100 text-left bg-gray-50">
        <thead className="bg-gray-100 text-gray-600 font-medium">
          <tr>
            <th className="border px-4 py-2 w-1/3">기능명</th>
            <th className="border px-4 py-2">설명</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 bg-white">
          {items.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
