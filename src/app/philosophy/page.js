import ArrowHover from '@/components/buttons/ArrowHover'
import Newsletter from '@/components/util/Newsletter'
import SectionHeader from '@/components/global/SectionHeader'
import Link from 'next/link'

export default function Home() {
    const heroImg = {
        backgroundImage: `url(https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)`,
    }

    return (
        <main className='flex flex-col items-center'>
            <section id='hero' className='w-screen h-[50rem] flex justify-center items-end' style={heroImg}>
                <div className='hero-overlay w-full h-[50rem]' />
                <div className='z-10 container flex justify-center mb-16'>
                    <a href='#philosophy'><ArrowHover text='Philosophy' /></a>
                </div>
            </section>
            <section className='container flex flex-col pb-16 px-8 space-y-16'>
                <section id='philosophy' className='flex flex-col space-y-6 pt-16'>
                    <SectionHeader text='Our Philosophy' />
                    <div className='w-full flex justify-between max-lg:flex-col max-lg:space-y-6'>
                        <p className='text-white-translucent w-3/5 text-2xl font-light leading-normal max-lg:w-full max-sm:text-xl max-sm:leading-relaxed'>Bears Digital was founded with a simple purpose: to create digital solutions that transcend the ordinary. We are driven by an unwavering passion for crafting exceptional design and development solutions that enable our clients to scale their growth. Our commitment is to empower businesses in developing their brands to their fullest potential, while providing their customers with meaningful digital experiences. We take immense pride in our work, and we never settle for anything less than extraordinary.</p>
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
