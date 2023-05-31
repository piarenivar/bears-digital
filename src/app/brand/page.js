import ArrowHover from '@/components/buttons/ArrowHover'
import Newsletter from '@/components/util/Newsletter'
import ProjectsShowcase from '@/components/util/ProjectsShowcase'
import RowsDataDisplay from '@/components/util/RowsDataDisplay'
import SectionHeader from '@/components/global/SectionHeader'
import Link from 'next/link'
import { brand } from '@/data/rowsDataDisplay/brand'

export default function Home() {
    const heroImg = {
        backgroundImage: `url(https://images.unsplash.com/photo-1546605623-996b4ee7caff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2055&q=80)`,
    }

    return (
        <main className='flex flex-col items-center'>
            <section id='hero' className='w-screen h-[50rem] flex justify-center items-end' style={heroImg}>
                <div className='hero-overlay w-full h-[50rem]' />
                <div className='z-10 container flex justify-center mb-16'>
                    <a href='#brand'><ArrowHover text='Brand Identity' /></a>
                </div>
            </section>
            <section className='container flex flex-col pb-16 px-4 space-y-16'>
                <section id='brand' className='flex flex-col pt-16 space-y-6'>
                    <SectionHeader text='Brand Identity' />
                    <p className='text-white-translucent w-1/2 text-2xl font-light leading-normal'>Your brand is the heart and soul of your business, representing its essence and values. Whether you&apos;re starting from scratch or seeking a brand refresh, our team will collaborate closely with you to develop a compelling brand identity. We ensure consistency and cohesiveness across all touchpoints, creating a strong connection with your target audience and fostering brand loyalty.</p>
                    <h2 className='text-lg font-medium pt-12'>What We Offer</h2>
                    <RowsDataDisplay data={brand} />
                </section>
                <section id='approach' className='flex flex-col space-y-6'>
                    <SectionHeader text='Our Approach' />
                    <p className='text-white-translucent w-1/2 text-2xl font-light leading-normal'>We understand that every business is unique, and we don&apos;t believe in a one-size-fits-all approach. Our process revolves around defining your distinct brand identity, and crafting tailored solutions that work effectively for your business.</p>
                    <h2 className='text-lg font-medium pt-12'>Projects</h2>
                    <ProjectsShowcase />
                </section>
                <section id='philosophy' className='flex flex-col space-y-6 pt-[5rem]'>
                    <SectionHeader text='Our Philosophy' />
                    <div className='w-full flex justify-between'>
                        <p className='text-white-translucent w-1/2 text-2xl font-light leading-normal'>At our core, we are fueled by a passion for creating exceptional design and development solutions. Mediocrity has no place in our work - we strive for nothing less than excellence. We are committed to helping businesses develop their brands to their fullest potential, while delivering unparalleled digital experiences to their customers.</p>
                        <div className='w-fit flex flex-col items-end space-y-2'>
                            <h3 className='text-lg font-medium'>See what we can do for you.</h3>
                            <Link href='/'><ArrowHover text='Get In Touch' /></Link>
                        </div>
                    </div>
                </section>
                <Newsletter />
            </section>
        </main>
    )
}
