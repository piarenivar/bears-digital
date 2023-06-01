import ArrowHover from '@/components/buttons/ArrowHover'
import Newsletter from '@/components/util/Newsletter'
import ProjectsShowcase from '@/components/util/ProjectsShowcase'
import RowsDataDisplay from '@/components/util/RowsDataDisplay'
import SectionHeader from '@/components/global/SectionHeader'
import Link from 'next/link'
import { web } from '@/data/rowsDataDisplay/web'

export default function Home() {
    const heroImg = {
        backgroundImage: `url(https://images.unsplash.com/photo-1572610283235-8d3b4a70c60e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)`,
    }

    return (
        <main className='flex flex-col items-center'>
            <section id='hero' className='w-screen h-[50rem] flex justify-center items-end' style={heroImg}>
                <div className='hero-overlay w-full h-[50rem]' />
                <div className='z-10 container flex justify-center mb-16'>
                    <a href='#web'><ArrowHover text='Web Design and Development' /></a>
                </div>
            </section>
            <section className='container flex flex-col pb-16 px-8 space-y-16'>
                <section id='web' className='flex flex-col pt-16 space-y-6'>
                    <SectionHeader text='Web Design and Development' />
                    <p className='text-white-translucent w-4/5 text-2xl font-light leading-normal max-lg:w-full'>At Bears Digital, we believe that a website is more than just an online presence. It&apos;s a powerful tool to connect with your target audience, build credibility, and drive business growth. Our dedicated team of web development experts combines technical expertise and creative finesse to craft bespoke digital solutions tailored to your unique business needs. We go beyond aesthetics, focusing on optimizing user experiences, enhancing functionality, and maximizing conversions. Using cutting-edge technology and user-centric designs, we create seamless online experiences that captivate users, inspire engagement, and leave a lasting impression on your brand.</p>
                    <h2 className='text-lg font-medium pt-12'>Web Development Life Cycle</h2>
                    <RowsDataDisplay data={web} />
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
