import Link from "next/link"

export default function Quad({ linkOne, textOne, linkTwo, textTwo, linkThree, textThree, linkFour, textFour }) {
    return (
        <div id='quad' className='w-[24rem] h-[24rem] flex flex-wrap'>
            <div className='w-1/2 h-1/2 border-b-orange border-r-orange'>
                <Link href={`/solutions/${linkOne}`} className='w-full h-full p-4 text-center text-xl font-semibold flex justify-center items-center'>{textOne}</Link>
            </div>
            <div className='w-1/2 h-1/2 border-b-orange'>
                <Link href={`/solutions/${linkTwo}`} className='w-full h-full p-4 text-center text-xl font-semibold flex justify-center items-center'>{textTwo}</Link>
            </div>
            <div className='w-1/2 h-1/2 border-r-orange'>
                <Link href={`/solutions/${linkThree}`} className='w-full h-full p-4 text-center text-xl font-semibold flex justify-center items-center'>{textThree}</Link>
            </div>
            <div className='w-1/2 h-1/2'>
                <Link href={`/solutions/${linkFour}`} className='w-full h-full p-4 text-center text-xl font-semibold flex justify-center items-center'>{textFour}</Link>
            </div>
        </div>
    )
}
