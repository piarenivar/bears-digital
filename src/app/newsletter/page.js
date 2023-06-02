import ArrowHover from '@/components/buttons/ArrowHover'
import Newsletter from '@/components/util/Newsletter'
import SectionHeader from '@/components/global/SectionHeader'
import Link from 'next/link'

export default function NewsletterPage() {
    const heroImg = {
        backgroundImage: `url(https://images.unsplash.com/photo-1512236258305-32fb110fdb01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80)`,
    }

    return (
        <main className='flex flex-col items-center'>
            <section id='hero' className='w-screen h-[50rem] flex justify-center items-end' style={heroImg}>
                <div className='hero-overlay w-full h-[50rem]' />
                <div className='z-10 container flex justify-center mb-16'>
                    <a href='#newsletter'><ArrowHover text='Newsletter' /></a>
                </div>
            </section>
            <section className='container flex flex-col pb-16 px-8 space-y-16'>
                <section id='newsletter' className='flex flex-col space-y-6 pt-16'>
                    <SectionHeader text='Newsletter' />
                    <div className='w-full flex justify-between max-lg:flex-col max-lg:space-y-6'>
                        <p className='text-white-translucent w-3/5 text-2xl font-light leading-relaxed max-xl:w-4/5 max-lg:w-full max-sm:text-xl max-sm:leading-relaxed'>Thank you for your interest in our newsletter! This feature is currently being developed, and will be up and running soon.</p>
                        <div className='w-fit flex flex-col items-end space-y-2 max-lg:ml-auto'>
                            <h3 className='text-lg font-medium'>Connect with Bears Digital</h3>
                            <a href='mailto:connect@bearsdigital.io'><ArrowHover text='Get In Touch' /></a>
                        </div>
                    </div>
                </section>
            </section>
        </main>
    )
}
