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
            <section className='container flex flex-col pb-16 px-8 space-y-16'>
                <section id='brand' className='flex flex-col pt-16 space-y-6'>
                    <SectionHeader text='Brand Identity' />
                    <p className='text-white-translucent w-4/5 text-2xl font-light leading-normal max-lg:w-full max-sm:text-xl max-sm:leading-relaxed'>We understand the power of a strong brand. Your brand is the driving force behind your business, embodying its unique essence and values. Our team will work closely with you to craft a compelling brand identity that resonates with your target audience. Whether you&apos;re starting from scratch or seeking a brand refresh, our team will dive deep into market research, competitor analysis, and consumer insights to create a brand that stands out. We ensure consistency and cohesiveness across all touchpoints, from your logo and visual elements to your messaging and brand voice. With our creative and strategic approach, our brand identity solutions will enhance your brand&apos;s connection to your audience, fostering brand loyalty and driving long-term success.</p>
                    <h2 className='text-lg font-medium pt-12'>Our Process</h2>
                    <RowsDataDisplay data={brand} />
                </section>
                <section className='flex flex-col space-y-6'>
                    <SectionHeader text='Our Approach' />
                    <div className='w-full flex justify-between max-lg:flex-col max-lg:space-y-6'>
                        <p className='text-white-translucent w-3/5 text-2xl font-light leading-normal max-lg:w-full max-sm:text-xl max-sm:leading-relaxed'>We understand that every business is unique, and we don&apos;t believe in a one-size-fits-all approach. Our process revolves around defining your distinct brand identity, and crafting tailored solutions that work effectively for your business.</p>
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
