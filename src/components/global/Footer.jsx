import Brand from "./Brand"
import Link from "next/link"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
    return (
        <footer className='footer border-t-gray w-screen flex justify-center py-16 px-4'>
            <div className='container flex justify-between max-md:flex-col-reverse'>
                <div className='flex flex-col space-y-6 max-md:mt-12'>
                    <Brand />
                    <h2 className='text-4xl font-semibold leading-tight'>Elevate<br />Your Brand</h2>
                    <p className='text-sm opacity-80'>© Bears Digital 2023</p>
                </div>
                <div className='md:w-1/2 w-full flex justify-between text-sm'>
                    <div className='flex flex-col space-y-4'>
                        <h3 className='font-semibold'>Company</h3>
                        <hr />
                        <Link href='/about'>About</Link>
                        <Link href='/contact'>Contact</Link>
                        <Link href='/careers'>Careers</Link>
                        <Link href='/solutions'>Solutions</Link>
                        <Link href='/work'>Work</Link>
                        <Link href='/newsletter'>Newsletter</Link>
                        <Link href='/privacy'>Privacy Policy</Link>
                    </div>
                    <div className='flex flex-col space-y-4'>
                        <h3 className='font-semibold'>Solutions</h3>
                        <hr />
                        <Link href='/solutions/web'>Web Development</Link>
                        <Link href='/solutions/ios'>iOS Development</Link>
                        <Link href='/solutions/brand'>Brand Identity</Link>
                        <Link href='/solutions/strategy'>Strategy</Link>
                    </div>
                    <div className='flex flex-col space-y-4'>
                        <h3 className='font-semibold'>Follow Us</h3>
                        <hr />
                        <Link href='' target='_blank'>Facebook</Link>
                        <Link href='https://www.instagram.com/bearsdigitalco/' target='_blank'>Instagram</Link>
                        <Link href='https://twitter.com/BearsDigitalCo' target='_blank'>Twitter</Link>
                        <Link href='' target='_blank'>LinkedIn</Link>
                        <Link href='' target='_blank'>Dribbble</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}