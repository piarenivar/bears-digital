import bearWhite from '../../public/bear-white-200.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import Link from 'next/link'



export default function Home() {
  return (
    <main className='container flex flex-col justify-between h-[88vh]'>
      <div className='flex justify-center items-center space-x-2'>
        <Image src={bearWhite} width={40} alt='Bears Digital Logo' />
        <h1 className='text-xl'>bears digital</h1>
      </div>
      <div className='flex flex-col items-center text-center space-y-16'>
        <h2 className='cmoing-soon text-7xl font-semibold max-sm:text-5xl'>Coming Soon</h2>
        {/* drop-shadow-2xl */}
        <p className='text-2xl font-medium w-[64%] max-sm:w-[80%]'>Empowering Brands with AI-Driven Creative & Strategic Digital Design & Development Solutions.</p>
      </div>
      <div className='flex justify-center space-x-8'>
        <Link href='https://www.instagram.com/bearsdigitalco' target='_blank' className='flex items-center'><FontAwesomeIcon icon={faInstagram} className='w-6' /></Link>
        <Link href='https://twitter.com/BearsDigitalCo' target='_blank' className='flex items-center'><FontAwesomeIcon icon={faTwitter} className='w-6' /></Link>
      </div>
    </main>
  )
}
