import { HistoryType } from '@/metadata/metadata';

export default function History({items}:{items:HistoryType[]}) {
  
    return (
      <div className="relative w-full mt-48 mb-20">
        {/* 수평선 */}
        <div className="absolute top-1/2 left-[-4%] right-[-4%] h-0.5 bg-gray-300" />
        {/* 좌우 텍스트 */}
        <div className="absolute top-[calc(50%--0.5rem)] left-[-4%] text-sm text-gray-500 font-medium">
            2023
        </div>
        <div className="absolute top-[calc(50%--0.5rem)] right-[-4%] text-sm text-gray-500 font-medium">
            현재
        </div>
  
        {/* 타임라인 카드 */}
        <div className="flex justify-between items-center w-full relative z-10">
          {items.map((item, idx) => {
            const isTop = idx % 2 === 0;
  
            return (
              <div key={idx} className="relative w-1/4 px-2">
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2">
                  {/* 수직선 */}
                  <div
                    className={`w-0.5 h-8 bg-gray-300 ${
                      isTop ? "-translate-y-full" : ""
                    }`}
                  />
                </div>
  
                {/* 카드 */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 ${
                    isTop ? "-top-27" : "top-6"
                  } w-full max-w-lg bg-white rounded-lg py-2`}
                >
                  <p className="text-sm text-gray-500">{item.date}</p>
                  <h4 className="text-base font-semibold text-gray-800 mt-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-600 mt-1">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }