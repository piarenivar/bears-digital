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
        <Link href={href} className='row-solution border-b-gray w-full flex justify-between py-16 px-4'>
            <h2 className='text-white text-2xl font-light'>{header}</h2>
            <p className='text-white-translucent w-1/2 text-xl leading-relaxed'>{text}</p>
        </Link>
    )
}