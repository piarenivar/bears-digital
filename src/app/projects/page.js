import ArrowHover from '@/components/buttons/ArrowHover'
import Newsletter from '@/components/util/Newsletter'
import ProjectsShowcase from '@/components/util/ProjectsShowcase'
import RowsDataDisplay from '@/components/util/RowsDataDisplay'
import SectionHeader from '@/components/global/SectionHeader'
import Link from 'next/link'

export default function Home() {
    const heroImg = {
        backgroundImage: `url(https://images.unsplash.com/photo-1613744358026-dd879eba3a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80)`,
    }

    return (
        <main className='flex flex-col items-center'>
            <section id='hero' className='w-screen h-[50rem] flex justify-center items-end' style={heroImg}>
                <div className='hero-overlay w-full h-[50rem]' />
                <div className='z-10 container flex justify-center mb-16'>
                    <a href='#projects'><ArrowHover text='Projects' /></a>
                </div>
            </section>
            <section className='container flex flex-col pb-16 px-8 space-y-16'>
                <section id='projects' className='flex flex-col pt-16 space-y-6'>
                    <SectionHeader text='Our Approach' />
                    <p className='text-white-translucent w-3/5 text-2xl font-light leading-normal max-lg:w-full max-sm:text-xl max-sm:leading-relaxed'>At Bears Digital, we celebrate the uniqueness of every business. Our approach is centered around understanding your brand identity and crafting customized solutions that align with your goals. With our tailored approach, we deliver exceptional results that help our clients resonate with their target audience.</p>
                    <h2 className='text-lg font-medium pt-12'>Projects</h2>
                    <ProjectsShowcase />
                </section>
                <section id='philosophy' className='flex flex-col space-y-6 pt-[5rem]'>
                    <SectionHeader text='Our Philosophy' />
                    <div className='w-full flex justify-between max-lg:flex-col max-lg:space-y-6'>
                        <p className='text-white-translucent w-3/5 text-2xl font-light leading-normal max-lg:w-full max-sm:text-xl max-sm:leading-relaxed'>At our core, we are fueled by a passion for creating exceptional design and development solutions. Mediocrity has no place in our work - we strive for nothing less than excellence. We are committed to helping businesses develop their brands to their fullest potential, while delivering unparalleled digital experiences to their customers.</p>
                        <div className='w-fit flex flex-col items-end space-y-2 max-lg:ml-auto'>
                            <h3 className='text-lg font-medium'>See what we can do for you.</h3>
                            <Link href='/connect'><ArrowHover text='Get In Touch' /></Link>
                        </div>
                    </div>
                </section>
                <Newsletter />
            </section>
        </main>
    )
}
