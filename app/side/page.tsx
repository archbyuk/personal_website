'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Link as LinkIcon } from "lucide-react";
import { sideProjects } from "@/metadata/metadata";

export default function SideProjectsPage() {
  const router = useRouter();

  return (
    <main className="w-full max-w-6xl mx-auto py-28 text-left">
      {/* 헤더 */}
      <div className="max-w-2xl mb-20 px-8">
        <h1 className="text-5xl font-bold tracking-tight leading-tight text-gray-900 mb-6">
          다양한 계기와 이유로 시작된 <br/> 사이드 프로젝트.
        </h1>
        <p className="text-base text-gray-600">
          때로는 사회적 문제를 해결하고 싶어서, 또 어떤 때는 단순한 궁금증이나 기술 체험을 위해 시작했습니다.
          이 페이지는 그렇게 다양한 이유로 만들었던 프로젝트들을 모아둔 공간입니다.
          각각에 프로젝트에서 저마다의 목표와 그에 맞는 배움이 담겨 있습니다.
        </p>
      </div>

      {/* 프로젝트 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-2 gap-y-5 -mx-3">
        {sideProjects.map((project) => (
          <div
            key={project.slug}
            onClick={() => router.push(`/side/${project.slug}`)}
            className="group block rounded-lg p-6 hover:bg-gray-50 transition w-full max-w-lg mx-auto cursor-pointer"
          >
            <div className="flex flex-col items-start space-y-4 px-3">
              {/* 이미지 */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white">
                <Image
                  src={project.logo}
                  alt={`${project.title} logo`}
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>

              <h2 className="text-lg font-semibold text-gray-900 group-hover:underline">
                {project.title}
              </h2>
              <p className="text-sm text-gray-600">{project.description}</p>

              {/* 외부 링크 */}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()} // 카드 클릭 방지
                  className="mt-3 text-sm text-gray-500 flex items-center gap-1 hover:text-emerald-400"
                >
                  <LinkIcon className="w-4 h-4" />
                  {new URL(project.url).hostname}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}