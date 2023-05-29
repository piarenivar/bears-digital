import { benefits } from "@/data/contentWrapper/benefits"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function ContentWrapper() {
    return (
        <div className='contentWrapper w-full flex justify-between text-center max-md:flex-col'>
            {benefits.map(({ description, header, href, icon }) => {
                return <Data key={href} description={description} header={header} href={href} icon={icon} />
            })}
        </div>
    )
}

function Data({ description, header, href, icon }) {
    return (
        <Link href={`/${href}`} className='w-full flex flex-col items-center space-y-4 p-6'>
            <FontAwesomeIcon icon={icon} className='w-10' />
            <h3 className='text-2xl font-semibold'>{header}</h3>
            <p className='text-gray-dark text-lg'>{description}</p>
        </Link>
    )
}