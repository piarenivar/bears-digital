import { solutions } from "@/data/quadDisplayLg/solutions"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function QuadDisplayLg() {
    return (
        <div className='w-full flex flex-wrap'>
            {solutions.map(({ description, header, href, hrefText, icon }) => {
                return <Data key={href} description={description} header={header} href={href} hrefText={hrefText} icon={icon} />
            })}
        </div>
    )
}

function Data({ description, header, href, hrefText, icon }) {
    return (
        <Link href={`/${href}`} className='quadDisplay w-1/2 flex flex-col p-8 space-y-4 max-md:w-full'>
            <FontAwesomeIcon icon={icon} className='w-12' />
            <h3 className='text-2xl font-medium'>{header}</h3>
            <p className='text-gray pb-4'>{description}</p>
            <button className='button-orange-fill w-fit text-lg font-medium py-1 px-4'>{hrefText}</button>
        </Link>
    )
}
