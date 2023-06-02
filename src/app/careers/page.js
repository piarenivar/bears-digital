import ArrowHover from '@/components/buttons/ArrowHover'
import Newsletter from '@/components/util/Newsletter'
import SectionHeader from '@/components/global/SectionHeader'
import Link from 'next/link'

export default function Careers() {
    const heroImg = {
        backgroundImage: `url(https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80)`,
    }

    return (
        <main className='flex flex-col items-center'>
            <section id='hero' className='w-screen h-[50rem] flex justify-center items-end' style={heroImg}>
                <div className='hero-overlay w-full h-[50rem]' />
                <div className='z-10 container flex justify-center mb-16'>
                    <a href='#careers'><ArrowHover text='Careers' /></a>
                </div>
            </section>
            <section className='container flex flex-col pb-16 px-8 space-y-16'>
                <section id='careers' className='flex flex-col space-y-6 pt-16'>
                    <SectionHeader text='Careers at Bears Digital' />
                    <div className='w-full flex justify-between max-lg:flex-col max-lg:space-y-6'>
                        <p className='text-white-translucent w-3/5 text-2xl font-light leading-normal max-lg:w-full max-sm:text-xl max-sm:leading-relaxed'>Thank you for your interest in joining the Bears Digital creative team. While we do not have any open positions at this time, we invite you to submit your resume for future opportunities. Your information will be kept on file, and we will reach out when a suitable position becomes available.</p>
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
