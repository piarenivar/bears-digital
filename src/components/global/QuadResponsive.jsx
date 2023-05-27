import Link from "next/link"
// import { solutions } from "@/data/solutions"
import { benefits } from "@/data/benefits"

export default function QuadResponsive() {
    return (
        <div id='quadResponsive' className='w-full flex justify-center flex-wrap'>
            {benefits.map(({ link, text, description }) => {
                return <Quad key={link} link={link} text={text} description={description} />
            })}
        </div>
    )
}

function Quad({ link, text, description }) {
    return (
        <div className='w-1/3 px-12 flex flex-col space-y-4'>
            <Link href={`/solutions/${link}`} className='text-2xl font-medium'>{text}</Link>
            <p className='text-lg'>{description}</p>
        </div>
    )
}
