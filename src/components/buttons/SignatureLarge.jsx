import Link from "next/link"

export default function SignatureLarge({ href, hrefText }) {
    return (
        <Link href={`/${href}`} className='button-signature button-signature-large'>
            <span className='text-3xl font-semibold'>{hrefText}</span>
            <svg viewBox="0 0 13 10" height="16px" width="24px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
        </Link>
    )
}
