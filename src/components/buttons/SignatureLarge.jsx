import Link from "next/link"

export default function SignatureLarge({ link, text }) {
    return (
        <Link href={`/${link}`} className='button-signature button-signature-large'>
            <span className='text-3xl font-semibold'>{text}</span>
            <svg viewBox="0 0 13 10" height="16px" width="24px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
        </Link>
    )
}
