import styles from '../styles/modules/Home.module.css'
import CardSlide from '@/components/util/CardSlide'
import ContentWrapper from '@/components/util/ContentWrapper'
import CTA from '@/components/util/CTA'
import Newsletter from '@/components/util/Newsletter'
import QuadDisplayLg from '@/components/util/QuadDisplayLg'
import SignatureLarge from "@/components/buttons/SignatureLarge"
import Image from 'next/image'
import Link from "next/link"

import ve from '../../public/valencia-estructuristas-project.png'

export default function Home() {
  return (
    <main className='flex flex-col items-center'>
      <section className='container flex justify-between px-4 max-md:flex-col'>
        <div className='w-1/2 flex flex-col space-y-8 py-16 border-r-gray max-md:w-full max-md:items-center max-md:text-center max-md:border-0'>
          <h1 className='text-7xl font-bold leading-snug max-xl:text-6xl max-xl:leading-tight'>Elevate<br />Your Brand</h1>
          <p className='w-[88%] text-2xl pb-8 leading-normal max-xl:text-xl max-md:w-full'>Bears Digital empowers growing businesses to build meaningful digital experiences for their customers through AI-Driven Creative & Strategic Solutions.</p>
          <SignatureLarge href='contact' hrefText='Get In Touch' />
        </div>
        <div className='w-1/2 flex justify-center max-md:w-full'>
          <div className='w-4/5 flex flex-col justify-center space-y-8 py-12'>
            <h2 className='flex items-center font-medium uppercase tracking-widest'><hr className='text-hr-white' />Spotlight</h2>
            <div className={`w-full ${styles.image_div}`}>
              <Link href='/'>
                <Image src={ve} alt='Website design and development case study.' />
              </Link>
            </div>
            <Link href='/' className='hover-underline font-medium uppercase tracking-widest ml-auto flex items-center'>
              <span>View Case Study</span>
              <svg viewBox="0 0 13 10" height="10px" width="15px" className='a-arrow'>
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      <section className='bg-bears-blue border-t-gray w-screen flex flex-col items-center py-16 px-4'>
        <div className='container flex flex-col max-lg:items-center'>
          <h2 className='w-3/5 text-5xl font-semibold leading-snug mb-4 max-xl:w-4/5 max-lg:text-4xl max-lg:leading-snug max-lg:text-center max-md:w-full max-md:text-3xl'>Bears Digital Helps Businesses Enhance Their Growth</h2>
          <p className='w-1/2 text-xl leading-normal text-gray mb-12 max-xl:w-3/5 max-lg:w-4/5 max-lg:text-center max-md:w-full'>Working hand in hand with clients, we focus on understanding your business to create personalized digital solutions that drive engagement.</p>
          <QuadDisplayLg />
        </div>
      </section>
      <section className='bg-white text-blue w-screen flex justify-center py-16 px-4'>
        <div className='container flex flex-col items-center max-md:text-center'>
          <h2 className='text-3xl font-semibold mb-4'>Leverage A Digital Advantage</h2>
          <p className='text-gray-dark text-xl mb-8'>Establish an effective online presence</p>
          <ContentWrapper />
        </div>
      </section>
      <section className='bg-bears-beige-gradient text-blue w-screen flex justify-center py-16 px-4'>
        <div className='container flex flex-col items-center text-center'>
          <h2 className='text-3xl font-semibold mb-4'>Creating Digital Success Stories</h2>
          <p className='xl:w-3/5 w-4/5 text-gray-dark text-xl mb-8'>We help drive growth for new businesses and established brands. Take a look at some of the clients we&apos;ve worked with.</p>
          <CardSlide />
        </div>
      </section>
      <section className='container flex justify-center py-16 px-4'>
        <CTA />
      </section>
      <section className='bg-white text-blue w-screen flex justify-center py-16 px-4'>
        <div className='container flex justify-center'>
          <Newsletter />
        </div>
      </section>
    </main>
  )
}
