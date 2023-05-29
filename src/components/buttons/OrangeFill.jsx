import Link from "next/link"

export default function OrangeFill({ href, hrefText }) {
    return (
        <Link href={`/${href}`} className='button-orange-fill flex items-center text-lg font-medium py-1 px-4'>{hrefText}</Link>
    )
}
