'use client'

export default function Footer() {
  return (
    <footer className="w-full py-12 mt-16 border-t border-gray-200">
      <div className="mx-auto px-6">
        {/* 저작권 및 연락처 */}
        <div className="flex justify-between items-center mb-8">
          <p className="text-sm text-gray-500">
            © 2025 Jinuk Jung. All rights reserved.
          </p>
          <div className="text-sm text-gray-500">
            <a href="https://github.com/JinukSynth" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
            <span className="mx-3">|</span>
            <a href="https://jinuk-io.tistory.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Blog</a>
          </div>
        </div>

        {/* 사이트 설명 또는 기타 정보 */}
        <div className="text-center text-sm text-gray-500 mt-4">
          <p>
            A personal portfolio showcasing software development, creative projects, and problem-solving processes. <br />
            Built with Next.js, React and TailwindCSS.
          </p>
        </div>
      </div>
    </footer>
  )
}