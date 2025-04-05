import Image from 'next/image'
import ProjectList from '@/ui/ProjectsList'
import { MetaData } from '@/metadata/metadata'

export default function Experience() {
  return (
    <section className="w-full mt-28 bg-white min-h-[75vh]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3">
        
        {/* LEFT: 연혁 목록 */}
        <div className="col-span-2">
          <ProjectList items={MetaData} />
        </div>

        {/* RIGHT: 구독 영역 + 워크 리스트 */}
        <div className="space-y-10 w-full max-w-xl mx-auto">
          {/* 이메일 송신 구간: 실제 구현할 것 */}
          <div className="border border-gray-200 rounded-2xl p-6 text-left">
            <h4 className="flex items-center gap-2 font-semibold text-gray-900 mb-2">
                <Image src="/icons/e-mail.svg" alt="Email" width={20} height={20} />
                Stay up to date
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              Get notified when I publish something new, and unsubscribe at any time.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 rounded-l-md border border-gray-300 px-3 py-2 text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 text-sm font-medium rounded-r-md hover:bg-gray-800"
              >
                Join
              </button>
            </form>
          </div>

          {/* 워크 리스트 */}
          <div className="border border-gray-200 rounded-2xl p-6 text-left">
            <h4 className="flex items-center gap-2 font-semibold text-gray-900 mb-6">
                <Image src="/icons/work.svg" alt="Work" width={20} height={20} />
                Work
            </h4>

            <ul className="space-y-5 text-sm">
                <li className="flex items-center justify-between">
                    {/* 왼쪽 아이콘 + 텍스트 묶음 */}
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                            <Image src="/icons/rabbithole.svg" alt="RabbitHole" width={40} height={40} />
                        </div>
                        <div>
                        <p className="text-sm font-semibold text-gray-900">래빗홀컴퍼니</p>
                        <p className="text-xs text-gray-500">Frontend Manager</p>
                        </div>
                    </div>
                    {/* 기간 */}
                    <p className="text-sm text-gray-500 whitespace-nowrap">24.07 ~ 현재</p>
                </li>

                <li className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                            <Image src="/icons/taean.svg" alt="태안 AI융합진흥원" width={48} height={48} />
                        </div>
                        <div>
                        <p className="text-sm font-semibold text-gray-900">태안 AI융합산업진흥원</p>
                        <p className="text-xs text-gray-500">Full Stack Developer</p>
                        </div>
                    </div>
                    <p className="text-sm text-gray-500 whitespace-nowrap">24.10 ~ 24.12</p>
                </li>

                <li className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                            <Image src="/icons/ctilab.svg" alt="씨티아이랩" width={48} height={48} />
                        </div>
                        <div>
                        <p className="text-sm font-semibold text-gray-900">Ctilab</p>
                        <p className="text-xs text-gray-500">인턴</p>
                        </div>
                    </div>
                    <p className="text-sm text-gray-500 whitespace-nowrap">24.01 ~ 24.02</p>
                </li>

                <li className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                            <Image src="/icons/hanshin.svg" alt="한신대학교" width={32} height={32} />
                        </div>
                        <div>
                        <p className="text-sm font-semibold text-gray-900">한신대학교</p>
                        <p className="text-xs text-gray-500">학부생</p>
                        </div>
                    </div>
                    <p className="text-sm text-gray-500 whitespace-nowrap">20.03 ~ 25.02</p>
                </li>
                
            </ul>

            <button className="mt-6 w-full border border-gray-300 text-gray-700 py-2 rounded-md text-sm hover:bg-gray-50">
                Download CV ↓
            </button>
            </div>
        </div>
      </div>
    </section>
  )
}