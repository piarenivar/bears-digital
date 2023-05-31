import Image from "next/image"
import Link from "next/link"



export default function ProjectsShowcase() {
    return (
        <div className='w-full flex justify-around'>
            {data.map(({ header, href, src, alt, text }) => {
                return <Project key={href} header={header} href={href} src={src} alt={alt} text={text} />
            })}
        </div>
    )
}

function Project({ header, href, src, text }) {
    const anchorImage = {
        backgroundImage: `url(${src})`,
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

    return (
        <Link href={href} className='project-showcase w-2/5'>
            <div className='w-full h-[40rem]' style={anchorImage} />
            <h3 className='font-medium mt-6 mb-2'>{header}</h3>
            <p>{text}</p>
        </Link>
    )
}

const data = [
    {
        header: 'Valencia Estructuristas',
        href: '',
        src: 'https://images.unsplash.com/photo-1602646993875-70bc0ba52c87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1065&q=80',
        alt: 'Alt',
        text: 'Web / Strategy',
    },
    {
        header: 'Anna Adami',
        href: '',
        src: 'https://images.unsplash.com/photo-1602646993875-70bc0ba52c87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1065&q=80',
        alt: 'Alt',
        text: 'Brand / Web / Strategy',
    },
]