import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

export default function ArrowHover({ text }) {
    return (
        <button className='hover-arrow-right flex items-center tracking-wide uppercase'><FontAwesomeIcon icon={faArrowRightLong} className='arrow-right w-3 mr-2' />{text}</button>
    )
}