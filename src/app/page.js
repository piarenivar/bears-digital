import ArrowHover from '@/components/buttons/ArrowHover'
import Newsletter from '@/components/util/Newsletter'
import ProjectsShowcase from '@/components/util/ProjectsShowcase'
import RowsDataDisplay from '@/components/util/RowsDataDisplay'
import SectionHeader from '@/components/global/SectionHeader'
import Link from 'next/link'

import { solutions } from '@/data/rowsDataDisplay/solutions'
import { homeProjects } from '@/data/projectsShowcase/home'

export default function Home() {
  const heroImg = {
    backgroundImage: `url(https://images.unsplash.com/photo-1605859465655-84c45e14a0af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80)`,
  }

  return (
    <main className='flex flex-col items-center'>
      <section id='hero' className='w-screen h-[50rem] flex justify-center items-center px-8' style={heroImg}>
        <div className='hero-overlay w-full h-[50rem]' />
        <div className='z-10 container flex flex-col items-center text-center space-y-6'>
          <h1 className='text-white text-6xl font-semibold'>Elevate Your Brand</h1>
          <p className='text-white w-1/2 text-xl leading-relaxed max-lg:w-full max-sm:text-xl max-sm:leading-relaxed'>Fuel your growth with captivating digital experiences that bring your brand identity to life.</p>
          <div className='w-fit flex space-x-8 pt-6'>
            <a href='#explore'><ArrowHover text='Explore' /></a>
            <Link href='/connect'><ArrowHover text='Connect' /></Link>
          </div>
        </div>
      </section>
      <section className='container flex flex-col pb-16 px-8 space-y-16'>
        <section id='explore' className='flex flex-col pt-16 space-y-6'>
          <SectionHeader text='Our Focus' />
          <p className='text-white-translucent w-3/5 text-2xl font-light leading-relaxed max-xl:w-4/5 max-lg:w-full max-sm:text-xl max-sm:leading-relaxed'>Our goal is simple: help businesses grow. In the modern age, every business needs a brand and an online presence. Our focus is to provide businesses with impeccable digital solutions that enhance their growth.</p>
          <h2 className='text-lg font-medium pt-12'>Solutions</h2>
          <RowsDataDisplay data={solutions} />
        </section>
        <section className='flex flex-col space-y-6'>
          <SectionHeader text='Our Approach' />
          <p className='text-white-translucent w-3/5 text-2xl font-light leading-relaxed max-xl:w-4/5 max-lg:w-full max-sm:text-xl max-sm:leading-relaxed'>We understand that every business is unique, and we don&apos;t believe in a one-size-fits-all approach. Our process revolves around defining your distinct brand identity, and crafting tailored solutions that work effectively for your business.</p>
          <h2 className='text-lg font-medium pt-12'>Projects</h2>
          <hr className='hr border-t-gray pb-4' />
          <ProjectsShowcase data={homeProjects} />
        </section>
        <section className='border-t-gray flex flex-col space-y-6 pt-16'>
          <SectionHeader text='Our Philosophy' />
          <div className='w-full flex justify-between max-lg:flex-col max-lg:space-y-6'>
            <p className='text-white-translucent w-3/5 text-2xl font-light leading-relaxed max-lg:w-full max-sm:text-xl max-sm:leading-relaxed'>At our core, we are fueled by a passion for creating exceptional design and development solutions. Mediocrity has no place in our work - we strive for nothing less than excellence. We are committed to helping businesses develop their brands to their fullest potential, while delivering unparalleled digital experiences to their customers.</p>
            <div className='w-fit flex flex-col items-end space-y-2 max-lg:ml-auto'>
              <h3 className='text-lg font-medium'>See what we can do for you.</h3>
              <Link href='/connect'><ArrowHover text='Get In Touch' /></Link>
            </div>
          </div>
        </section>
        {/* <Newsletter /> */}
      </section>
    </main>
  )
}
