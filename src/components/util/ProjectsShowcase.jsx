import Link from "next/link"

export default function ProjectsShowcase({ data }) {
    return (
        <div className='w-full flex justify-around max-md:flex-col'>
            {data.map(({ header, href, src, alt, text }) => {
                return <Project key={href} header={header} href={href} src={src} alt={alt} text={text} />
            })}
        </div>
    )
}

function Project({ header, href, src, text }) {
    const anchorImage = {
        backgroundImage: `url(${src})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

    return (
        <Link href={`/projects/${href}`} className='project-showcase w-2/5 max-md:w-full'>
            <div className='w-full h-[40rem] max-lg:h-[24rem]' style={anchorImage} />
            <h3 className='font-medium mt-6 mb-2'>{header}</h3>
            <p>{text}</p>
        </Link>
    )
}