import Image from 'next/image'

// main: 어떤 사이트인지 목적을 명확하게 드러내는 부분
export default function Hero() {
  return (
    <section>
      <div className='px-8'>
        {/* 타이틀 */}
        <h1 className="text-left text-4xl sm:text-5xl font-semibold leading-tight mb-6 tracking-tight">
            Junior Fullstack Developer<br />& Future Architect
        </h1>

        {/* 설명 */}
        <p className="text-left text-gray-600 text-base sm:text-lg mb-8 mr-40">
            사회적인 문제를 기술로 풀어내는 일에 관심이 많습니다. 실제 사용자와의 접점에서 불편함을 발견하고, 그걸 기술적으로 해결해보는 과정을 좋아하기에,
            자연스럽게 서비스 기획부터 설계, 프론트엔드·백엔드 개발까지 다양한 역할을 경험하게 됐습니다. <br />
            <br />
            이 사이트는 그런 경험들을 정리한 공간입니다. <br />
            아직은 배우는 게 더 많지만, 언젠가는 구조를 설계하고 방향을 제시하는 아키텍트가 되고 싶습니다.
        </p>

        {/* 소셜 아이콘 */}
        <div className="flex gap-4 mb-20">
          <a href="https://github.com/JinukSynth" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/github.svg" alt="GitHub" width={32} height={32} />
          </a>
          <a href="https://naver.com">
            <Image src="/icons/tstory.svg" alt="Email" width={24} height={24} className='mt-0.5' />
          </a>
          <a href="https://linkedin.com/in/..." target="_blank" rel="noopener noreferrer">
            <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
          </a>
        </div>

        {/* 이미지 카드 영역 */}
        <div className="w-full sm:px-8 ml-8">
            <div className="flex justify-center gap-6 translate-x-[-36px]">
                {["cardImage1.svg", "cardImage2.svg", "cardImage3.svg", "cardImage4.svg", "cardImage5.svg"].map((src, i) => (
                <div key={i} className={`min-w-[288px] min-h-[320px] w-52 h-52 rounded-2xl overflow-hidden shadow-lg transform transition duration-300 ease-in-out
                    ${i % 2 === 0 ? 'rotate-[-2deg]' : 'rotate-[2deg]'}
                    `}
                >
                    <Image
                        src={`/images/${src}`}
                        alt={`image-${i}`}
                        width={288}
                        height={320}
                        className="object-cover w-full h-full"
                    />
                </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}
