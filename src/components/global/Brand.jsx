import bearWhite from '../../../public/bear-white-200.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Brand() {
    return (
        <Link href='/' className='brand w-fit flex justify-center items-center space-x-2'>
            <Image src={bearWhite} width={40} alt='Bears Digital Logo' />
            <h1 className='text-xl font-medium'>Bears Digital</h1>
        </Link>
    )
}