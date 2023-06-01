import Link from "next/link"

export default function RowsDataDisplay({ data }) {
    return (
        <div className='w-full flex flex-col'>
            {data.map(({ header, href, text }) => {
                return <Solution key={href} header={header} href={href} text={text} />
            })}
        </div>
    )
}


function Solution({ header, href, text }) {
    return (
        <Link href={href} className='row-solution border-b-gray w-full flex justify-between py-16 px-4 max-lg:flex-col max-lg:space-y-6 max-sm:py-8'>
            <h2 className='text-white text-2xl font-light'>{header}</h2>
            <p className='text-white-translucent w-1/2 text-xl leading-relaxed max-lg:w-full max-sm:text-lg max-sm:leading-relaxed'>{text}</p>
        </Link>
    )
}