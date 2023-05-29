import { caseStudies } from "@/data/cardSlide/case-studies";
import Link from "next/link"

export default function CardSlide() {
    return (
        <div className='w-full h-fit flex justify-around'>
            {caseStudies.map(({ backgroundImage, description, header, href }) => {
                return <Card key={href} backgroundImage={backgroundImage} header={header} href={href} description={description} />
            })}
        </div>
    )
}

function Card({ backgroundImage, description, header, href }) {
    const anchorStyles = {
        backgroundImage: `url(${backgroundImage})`
    };


    return (
        <Link href={`/${href}`} className='card xl:w-1/3 w-[45%] h-fit flex flex-col items-start'>
            <div className='w-full h-[16rem] min-h-max mb-4' style={anchorStyles} />
            <div className='flex flex-col items-start p-2 space-y-2'>
                <h2 className='text-xl font-semibold uppercase'>{header}</h2>
                <p className='text-base'>{description}</p>
            </div>
        </Link>
    )
}