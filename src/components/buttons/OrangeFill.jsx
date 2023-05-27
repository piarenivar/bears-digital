import Link from "next/link"

export default function OrangeFill({ link, text }) {
    return (
        <Link href={`/${link}`} className='a-orange-fill text-2xl font-medium'>{text}</Link>
    )
}
