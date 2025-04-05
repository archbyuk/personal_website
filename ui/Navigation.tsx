'use client'

import { SunIcon, ChevronDownIcon, XIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes' // for dark mode

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [showNav, setShowNav] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { theme, setTheme } = useTheme()

  // navbar items
  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Side', href: '/side' },
    { label: 'Education', href: '/education' },
    { label: 'Uses', href: '/uses' },
  ]

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY > lastScrollY) {
        setShowNav(false) // 아래로 스크롤하면 숨김
      } else {
        setShowNav(true) // 위로 스크롤하면 보임
      }
      setLastScrollY(currentY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header className={`fixed top-0 left-0 w-full z-50 px-6 py-6 transition-transform duration-300 ${
        showNav ? 'navbar-visible' : 'navbar-hidden'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* 왼쪽: 프로필 이미지 */}
        <Link href="/">
          <div className="w-10 h-10 rounded-full overflow-hidden relative cursor-pointer shadow-sm">
            <Image
              src="/profile/profile.png"
              alt="Jinuk Profile"
              fill
              className="object-cover object-center"
            />
          </div>
        </Link>

        {/* 네비게이션: 데스크탑용 */}
        <nav className="hidden md:flex gap-6 px-8 py-2 rounded-full shadow-md bg-white text-sm font-medium transition">
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

        {/* 모바일 + 다크모드 버튼 */}
        <div className="flex items-center gap-4">
          {/* 모바일용 Menu 버튼 */}
          <div className="md:hidden relative">
            <button
              className="px-4 py-2 rounded-full bg-white shadow-md flex items-center gap-2 text-sm font-medium"
              onClick={() => setIsOpen(!isOpen)}
            >
              Menu
              <ChevronDownIcon className="w-4 h-4 text-gray-600" />
            </button>

            {isOpen && (
              <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-start justify-center px-4 pt-8">
                <div className="w-full max-w-sm bg-white rounded-4xl px-8 py-10 shadow-xl">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-gray-500 text-sm font-medium">Navigation</span>
                    <button
                      className="text-gray-500"
                      onClick={() => setIsOpen(false)}
                      aria-label="Close Menu"
                    >
                      <XIcon className="w-5 h-5" />
                    </button>
                  </div>

                  <nav className="flex flex-col text-left">
                    {navItems.map((item, index) => {
                      const isActive = pathname.startsWith(item.href)
                      return (
                        <div key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`block py-3 text-base font-medium ${
                              isActive
                                ? 'text-emerald-500'
                                : 'text-gray-900 hover:text-emerald-400'
                            }`}
                          >
                            {item.label}
                          </Link>
                          {/* 마지막 메뉴 뒤에는 border 안 넣음 */}
                          {index < navItems.length - 1 && (
                            <div className="border-t border-gray-200" />
                          )}
                        </div>
                      )
                    })}
                  </nav>
                </div>
              </div>
            )}
          </div>

          {/* 다크모드 버튼 */}
          <button
            className="w-10 h-10 rounded-full shadow-md bg-white dark:bg-gray-800 flex items-center justify-center"
            aria-label="Toggle Dark Mode"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <SunIcon className="w-5 h-5 text-gray-500 dark:text-yellow-400" />
          </button>
        </div>
      </div>
    </header>
  )
}