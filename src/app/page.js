import styles from '../styles/modules/Home.module.css'
import OrangeFill from '@/components/buttons/OrangeFill'
import Quad from '@/components/global/Quad'
import QuadResponsive from '@/components/global/QuadResponsive'
import SignatureLarge from "@/components/buttons/SignatureLarge"
import Image from 'next/image'
import Link from "next/link"

import ve from '../../public/valencia-estructuristas-project.png'

export default function Home() {
  return (
    <main className='container'>
      <section className='flex justify-between'>
        <div className='w-1/2 flex flex-col space-y-8 py-16 border-r-white'>
          <h1 className='text-7xl font-bold leading-snug max-xl:text-6xl max-xl:leading-tight'>Elevate<br />Your Brand</h1>
          <p className='w-[88%] text-2xl font-medium pb-8 leading-normal max-xl:text-xl'>Bears Digital empowers growing businesses to build meaningful digital experiences for their customers through AI-Driven Creative & Strategic Solutions.</p>
          <SignatureLarge link='contact' text='Get In Touch' />
        </div>
        <div className='w-1/2 flex justify-center'>
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
      <section id='container-absolute-white' className='h-[64rem]'>
        <section className='container flex justify-between'>
          <div className='w-1/2 flex justify-center items-center'>
            <Quad linkOne='web' textOne='Web Development' linkTwo='ios' textTwo='iOS Development' linkThree='brand' textThree='Brand Identity' linkFour='strategy' textFour='Strategy' />
          </div>
          <div className='w-1/2 flex justify-center items-center'>
            <div className='w-4/5 h-fit space-y-6 max-xl:w-full'>
              <h2 className='text-3xl font-semibold'>Leverage A Digital Advantage</h2>
              <p className='text-lg pb-10'>Optimize Your Customer Engagement and Conversion Rate. We Enable the Full Potential of Your Brand by seamlessly integrating captivating designs, powerful technology, and personalized strategies to grow your business. Our unique approach positions your business as an industry leader, granting you a distinct advantage over your competition. Let us help you make your mark.</p>
              <OrangeFill link='contact' text='Discover Your Potential' />
            </div>
          </div>
        </section>
        <hr className='container hr-blue' />
        <section className='container flex flex-col space-y-8'>
          <h2 className='text-3xl font-semibold flex items-center'><hr className='text-hr-blue' />How We Help</h2>
          <QuadResponsive />
        </section>
      </section>
      <section className='mt-[64rem] container'>
        <h2>Leverage A Digital Advantage</h2>
        <p>Leut us be your catalyst for growth and innovation. We unleash the full potential of your brand by seamlessly integrating captivating designs, powerful technology, and ingenious strategies. With our unique approach, we position your business as an industry leader, giving you an advantage over your competitors. Get ready to surpass expectations and make your mark on the digital landscape.</p>
        <Link href='/contact'>Let&apos;s Talk</Link>
      </section>
    </main>
  )
}
