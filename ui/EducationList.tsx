import { GraduationCap } from "lucide-react";
import Link from "next/link";

export function EducationList({items,}: {
  items: {
    title: string;
    date: string;
    description: string;
    href: string;
  }[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item, idx) => (
        <Link
          key={idx}
          href={item.href}
          className="bg-white border-l-2 border-emerald-300 rounded-r-3xl p-6 hover:bg-gray-50 transition block"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-emerald-100 text-emerald-600 rounded-full p-2">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="text-sm text-gray-500">{item.date}</div>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
          <p className="text-sm text-gray-600">{item.description}</p>
        </Link>
      ))}
    </div>
  );
}