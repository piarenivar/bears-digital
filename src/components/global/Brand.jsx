import Link from 'next/link';

export default function Brand() {
    return (
        <div className='text-white w-fit flex flex-col uppercase'>
            <Link href='/' className='text-white text-lg font-semibold'>Bears Digital</Link>
            <p>Creative Design and Development</p>
            <p>© 2023</p>
        </div>
    )
}