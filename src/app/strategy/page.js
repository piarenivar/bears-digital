import ArrowHover from '@/components/buttons/ArrowHover'
import Newsletter from '@/components/util/Newsletter'
import ProjectsShowcase from '@/components/util/ProjectsShowcase'
import RowsDataDisplay from '@/components/util/RowsDataDisplay'
import SectionHeader from '@/components/global/SectionHeader'
import Link from 'next/link'
import { strategy } from '@/data/rowsDataDisplay/strategy'

export default function Home() {
    const heroImg = {
        backgroundImage: `url(https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)`,
    }

    return (
        <main className='flex flex-col items-center'>
            <section id='hero' className='w-screen h-[50rem] flex justify-center items-end' style={heroImg}>
                <div className='hero-overlay w-full h-[50rem]' />
                <div className='z-10 container flex justify-center mb-16'>
                    <a href='#strategy'><ArrowHover text='Digital Strategy' /></a>
                </div>
            </section>
            <section className='container flex flex-col pb-16 px-8 space-y-16'>
                <section id='strategy' className='flex flex-col pt-16 space-y-6'>
                    <SectionHeader text='Digital Strategy' />
                    <p className='text-white-translucent w-4/5 text-2xl font-light leading-normal max-lg:w-full'>Our underlying commitment is to help your business grow. Our team of strategists dives deep into understanding your goals, industry landscape, and target audience. With this valuable insight, we&apos;ll create a tailored digital strategy that works for you. From impactful marketing campaigns that captivate your audience to establishing an optimal online presence, we provide comprehensive guidance. Leveraging the latest trends and data-driven analysis, we optimize your digital ecosystem to drive measurable results and sustainable growth. With our strategic guidance and continuous support, you can navigate the ever-evolving digital landscape with confidence, staying ahead of the competition and achieving your business objectives.</p>
                    <h2 className='text-lg font-medium pt-12'>Our Process</h2>
                    <RowsDataDisplay data={strategy} />
                </section>
                <section id='approach' className='flex flex-col space-y-6'>
                    <SectionHeader text='Our Approach' />
                    <p className='text-white-translucent w-3/5 text-2xl font-light leading-normal max-lg:w-full'>We understand that every business is unique, and we don&apos;t believe in a one-size-fits-all approach. Our process revolves around defining your distinct brand identity, and crafting tailored solutions that work effectively for your business.</p>
                    <h2 className='text-lg font-medium pt-12'>Projects</h2>
                    <ProjectsShowcase />
                </section>
                <section id='philosophy' className='flex flex-col space-y-6 pt-[5rem]'>
                    <SectionHeader text='Our Philosophy' />
                    <div className='w-full flex justify-between max-lg:flex-col max-lg:space-y-6'>
                        <p className='text-white-translucent w-3/5 text-2xl font-light leading-normal max-lg:w-full'>At our core, we are fueled by a passion for creating exceptional design and development solutions. Mediocrity has no place in our work - we strive for nothing less than excellence. We are committed to helping businesses develop their brands to their fullest potential, while delivering unparalleled digital experiences to their customers.</p>
                        <div className='w-fit flex flex-col items-end space-y-2 max-lg:ml-auto'>
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
