import ArrowHover from '@/components/buttons/ArrowHover'
import Newsletter from '@/components/util/Newsletter'
import ProjectsShowcase from '@/components/util/ProjectsShowcase'
import SectionHeader from '@/components/global/SectionHeader'
import Link from 'next/link'
import { projects } from '@/data/projectsShowcase/projects'
import { valencia } from '@/data/projects/valencia'

export default function Home() {
    const { approach, heroImgUrl, href, objectives, overview, title } = valencia;

    const heroImg = {
        backgroundImage: `url(${heroImgUrl})`,
    }

    const styles = {
        backgroundImage: `url(${heroImgUrl})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

    return (
        <main className='flex flex-col items-center'>
            <section id='hero' className='w-screen h-[50rem] flex justify-center items-end' style={heroImg}>
                <div className='hero-overlay w-full h-[50rem]' />
                <div className='z-10 container flex justify-center mb-16'>
                    <a href='#valencia'><ArrowHover text={title} /></a>
                </div>
            </section>
            <section className='container flex flex-col pb-16 px-8 space-y-16'>
                <section id='valencia' className='flex flex-col pt-16 space-y-6'>
                    <Link href={href} target='_blank' className='text-white'><h1 className='text-3xl font-semibold pb-6'>{title}</h1></Link>
                    <SectionHeader text='Project Overview' />
                    <p className='text-white-translucent w-3/5 text-2xl font-light leading-relaxed max-xl:w-4/5 max-lg:w-full max-sm:text-xl max-sm:leading-relaxed'>{overview}</p>
                </section>
                <section className='flex flex-col space-y-6'>
                    <SectionHeader text='Project Requirements' />
                    <ul className='text-white-translucent text-lg list-disc pl-8 space-y-4'>
                        {objectives.map((({ objective, id }) => {
                            return <li key={id}>{objective}</li>
                        }))}
                    </ul>
                </section>
                <section className='flex flex-col space-y-6'>
                    <SectionHeader text='Our Approach' />
                    <p className='text-white-translucent w-3/5 text-2xl font-light leading-relaxed max-xl:w-4/5 max-lg:w-full max-sm:text-xl max-sm:leading-relaxed'>{approach}</p>
                </section>
                <section className='flex justify-center'>
                    <Link href={href} target='_blank' className='w-3/5 h-[32rem] flex flex-col justify-between space-y-6 max-xl:h-[24rem] max-lg:w-4/5 max-md:w-full max-sm:h-[16rem]'>
                        <div className='w-full h-full' style={styles} />
                        <ArrowHover text='View Site' styles='ml-auto' />
                    </Link>
                </section>
                <section className='border-t-gray flex flex-col space-y-6 pt-[5rem]'>
                    <SectionHeader text='Our Philosophy' />
                    <div className='w-full flex justify-between max-lg:flex-col max-lg:space-y-6'>
                        <p className='text-white-translucent w-3/5 text-2xl font-light leading-relaxed max-lg:w-full max-sm:text-xl max-sm:leading-relaxed'>At our core, we are fueled by a passion for creating exceptional design and development solutions. Mediocrity has no place in our work - we strive for nothing less than excellence. We are committed to helping businesses develop their brands to their fullest potential, while delivering unparalleled digital experiences to their customers.</p>
                        <div className='w-fit flex flex-col items-end space-y-2 max-lg:ml-auto'>
                            <h3 className='text-lg font-medium'>See what we can do for you.</h3>
                            <Link href='/connect'><ArrowHover text='Get In Touch' /></Link>
                        </div>
                    </div>
                </section>
                {/* <Newsletter /> */}
            </section>
        </main>
    )
}
