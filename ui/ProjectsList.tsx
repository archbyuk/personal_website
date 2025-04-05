'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MetaDataType } from '@/metadata/metadata'

export default function ProjectList({ items }: { items: MetaDataType[] }) {
  return (
    <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 text-left px-4 sm:px-6 md:px-2 lg:pr-24 -mt-6">
      {items.map((project) => (
        <Link
          key={project.slug}
          href={`/projects/${project.slug}`}
          className="block rounded-2xl transition hover:bg-gray-50 p-4 sm:p-5 md:p-6 m-2 sm:m-3"
        >
          <p className="text-sm text-gray-500 mb-1 sm:mb-2">{project.date}</p>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
            {project.title}
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">{project.description}</p>

          <div className="mt-3 sm:mt-4 text-sm font-medium text-primary flex items-center gap-1 text-emerald-400">
            Read article
            <Image src="/icons/arrow-right.svg" alt="arrow" width={12} height={12} />
          </div>
        </Link>
      ))}
    </div>
  )
}