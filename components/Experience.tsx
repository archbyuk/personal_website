'use client';

import Image from 'next/image';
import ProjectList from '@/ui/ProjectsList';
import { MetaData } from '@/metadata/metadata';
import ContactForm from '@/ui/ContactForm';

export default function Experience() {
  return (
    <section className="w-full mt-28 bg-white min-h-[70vh]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3">
        {/* LEFT: 연혁 목록 */}
        <div className="xl:col-span-2">
          <ProjectList items={MetaData} />
        </div>

        {/* RIGHT: 구독 영역 + 워크 리스트 */}
        <div className="space-y-10 w-full max-w-xl mx-auto mt-12 xl:mt-0">
          {/* 이메일 송신 구간 */}
          <div className="border border-gray-200 rounded-2xl p-6 text-left">
            <h4 className="flex items-center gap-2 font-semibold text-gray-900 mb-2 text-base">
              <Image src="/icons/e-mail.svg" alt="Email" width={20} height={20} />
              이메일로 연락하기
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              이메일과 메시지를 남겨주시면 빠르게 답변드리겠습니다.
            </p>

            <ContactForm /> {/* 이메일 송신 컴포넌트 */}
            <p className='text-xs text-gray-400 mt-5 -mb-4'>* 광고나 스팸은 보내지 않습니다.</p>
          </div>

          {/* 워크 리스트 */}
          <div className="border border-gray-200 rounded-2xl p-6 text-left">
            <h4 className="flex items-center gap-2 font-semibold text-gray-900 mb-6 text-base">
              <Image src="/icons/work.svg" alt="Work" width={20} height={20} />
              Work
            </h4>

            <ul className="space-y-5 text-sm">
              {[
                {
                  icon: 'rabbithole.svg',
                  title: '래빗홀컴퍼니',
                  role: 'Frontend Manager',
                  period: '24.07 ~ 현재',
                },
                {
                  icon: 'taean.svg',
                  title: 'AI융합산업진흥원',
                  role: 'Full Stack Developer',
                  period: '24.10 ~ 24.12',
                },
                {
                  icon: 'ctilab.svg',
                  title: 'Ctilab',
                  role: '인턴',
                  period: '24.01 ~ 24.02',
                },
                {
                  icon: 'hanshin.svg',
                  title: '한신대학교',
                  role: '학부생',
                  period: '20.03 ~ 25.02',
                },
              ].map((item, idx) => (
                <li key={idx} className="flex items-center justify-between flex-wrap gap-y-2">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                      <Image src={`/icons/${item.icon}`} alt={item.title} width={40} height={40} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                      <p className="text-xs text-gray-500">{item.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 whitespace-nowrap">{item.period}</p>
                </li>
              ))}
            </ul>

            <button className="mt-6 w-full border border-gray-300 text-gray-700 py-2 rounded-md text-sm hover:bg-gray-50">
              Download CV ↓
            </button>
            <p className='text-gray-500 text-xs mt-3 -mb-3'>* 이력서 삽입 예정(현재 x)</p>
          </div>
        </div>
      </div>
    </section>
  );
}