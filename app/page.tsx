import Experience from '@/components/Experience'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
      <div>
        <Hero />
        <Experience />
      </div>
    </main>
  );
}