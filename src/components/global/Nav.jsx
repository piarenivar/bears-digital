import Brand from './Brand';
import Burger from './burger';
import Link from 'next/link';

export default function Nav() {
    return (
        <nav className='border-b-gray w-screen flex justify-center py-6 px-4'>
            <div className='container flex justify-between'>
                <Brand />
                <div className='w-fit flex items-center space-x-12 text-lg max-lg:hidden'>
                    <Link href='/solutions' className='hover-underline'>Solutions</Link>
                    <Link href='/work' className='hover-underline'>Work</Link>
                    {/* <Link href='/projects' className='hover-underline'>Projects</Link>
                    <Link href='/case-studies' className='hover-underline'>Case Studies</Link> */}
                    <Link href='/about' className='hover-underline'>About</Link>
                    <Link href='/contact' className='button-round'>Contact</Link>
                </div>
                <Burger />
            </div>
        </nav>
    )
}