'use client'

import { SunIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Side', href: '/side' },
    { label: 'Education', href: '/education' },
    { label: 'Uses', href: '/uses' },
  ]

  return (
    <header className="w-full px-6 py-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/">
          <div className="w-10 h-10 rounded-full overflow-hidden relative cursor-pointer">
            <Image
              src="/profile/profile.png"
              alt="Jinuk Profile"
              fill
              className="object-cover object-center"
            />
          </div>
        </Link>

        {/* 가운데: 네비게이션 */}
        <nav className="flex gap-6 px-8 py-2 rounded-full shadow-md bg-white text-sm font-medium transition">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition ${
                  isActive
                    ? 'text-emerald-400'
                    : 'text-gray-800 hover:text-emerald-400'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* 오른쪽: 다크모드 버튼 */}
        <button
          className="w-10 h-10 rounded-full shadow-md bg-white flex items-center justify-center"
          aria-label="Toggle Dark Mode"
        >
          <SunIcon className="w-5 h-5 text-gray-500" />
        </button>
      </div>
    </header>
  )
}