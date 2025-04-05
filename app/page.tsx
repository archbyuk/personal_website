import Experience from '@/components/Experience'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main>
      <div className='mt-24'>
        <Hero />
        <Experience/>
      </div>
    </main>
  )
}