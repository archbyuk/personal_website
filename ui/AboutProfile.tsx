'use client'

import Image from "next/image";
import { Mail } from "lucide-react";

export default function AboutProfile() {
  return (
    <div className="flex flex-col items-start space-y-6 w-full px-4 md:px-0 mt-12 md:mt-0">
      {/* 프로필 이미지 */}
      <div className="relative w-full aspect-square rounded-xl overflow-hidden rotate-[6deg] mx-auto md:mx-0 md:w-[360px] md:h-[360px]">
        <Image
          src="/profile/profile3.png"
          alt="Jinuk Profile"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* 수상 경력 */}
      <div className="mt-10 space-y-4 w-full text-left">
        <h3 className="text-md font-semibold text-gray-900">🏆 수상 경력</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>한국관광공사 사장상</li>
            <li>한국정보산업협회장상</li>
            <li>(졸업 작품) 캡스톤 디자인 장려상</li>
            <li>한국 디지털콘텐츠학회 장려상</li>
        </ul>
      </div>

      {/* 이메일 */}
      <div className="pt-3 border-t border-gray-300 w-full text-sm text-gray-700 font-semibold space-y-3">
        <div className="flex items-center gap-3">
            <Mail className="w-4 h-4" />
            <span>jinuk.work@gmail.com</span>
        </div>
        <div className="flex items-center gap-3">
            <span className="w-4 h-4 flex items-center justify-center text-gray-500">📞</span>
            <span>010-3847-0467</span>
        </div>
        </div>
    </div>
  );
}