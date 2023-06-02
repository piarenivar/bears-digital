import ArrowHover from '@/components/buttons/ArrowHover'
import Newsletter from '@/components/util/Newsletter'
import SectionHeader from '@/components/global/SectionHeader'
import Link from 'next/link'

export default function Privacy() {
    const heroImg = {
        backgroundImage: `url(https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1763&q=80)`,
    }

    return (
        <main className='flex flex-col items-center'>
            <section id='hero' className='w-screen h-[50rem] flex justify-center items-end' style={heroImg}>
                <div className='hero-overlay w-full h-[50rem]' />
                <div className='z-10 container flex justify-center mb-16'>
                    <a href='#privacy'><ArrowHover text='Privacy Policy' /></a>
                </div>
            </section>
            <section className='container flex flex-col pb-16 px-8 space-y-16'>
                <section id='privacy' className='flex flex-col space-y-6 pt-16'>
                    <SectionHeader text='Privacy Policy' />
                    <p className='text-white-translucent w-3/5 text-2xl font-light leading-normal max-lg:w-full max-sm:text-xl max-sm:leading-relaxed'>Bears Digital prioritizes the privacy of our users, and we are committed to safeguarding their personal information. This Privacy Policy outlines how we collect, utilize, disclose, and manage your data when you interact with our website. Your use of our website signifies your acceptance of the terms stated in this Privacy Policy.</p>
                </section>
                <section className='flex flex-col space-y-6'>
                    <SectionHeader text='Collection of Information' />
                    <p className='text-white-translucent w-3/5 text-2xl font-light leading-normal max-lg:w-full max-sm:text-xl max-sm:leading-relaxed'>When you visit our website, we may gather specific details about you, such as your name, email address, and additional contact information. Additionally, we may collect data regarding your website usage, such as the pages you navigate, the links you interact with, and the duration of your visit. To facilitate this data collection, we employ cookies and other tracking technologies.</p>
                </section>
                <section className='flex flex-col space-y-6'>
                    <SectionHeader text='Use of Information' />
                    <p className='text-white-translucent w-3/5 text-2xl font-light leading-normal max-lg:w-full max-sm:text-xl max-sm:leading-relaxed'>The information we collect from you may serve various purposes, including providing information about our services and products, addressing your inquiries and requests, enhancing our website, and keeping you informed about our products, services, and promotions. Additionally, we may utilize your information to personalize your website experience and deliver newsletters, marketing emails, and other communications that we believe will be relevant and valuable to you.</p>
                </section>
                <section className='flex flex-col space-y-6'>
                    <SectionHeader text='Disclosure of Information' />
                    <p className='text-white-translucent w-3/5 text-2xl font-light leading-normal max-lg:w-full max-sm:text-xl max-sm:leading-relaxed'>We prioritize the security of your personal information and do not disclose it to third parties, except for Google Analytics, which assists us in analyzing website usage. However, we may share your personal information with law enforcement agencies, regulatory bodies, or other third parties if we are legally obligated to do so or if we believe that such disclosure is necessary to protect our rights or the rights of others. Rest assured, we uphold your privacy and take every precaution to safeguard your information.</p>
                </section>
                <section className='flex flex-col space-y-6'>
                    <SectionHeader text='Security' />
                    <p className='text-white-translucent w-3/5 text-2xl font-light leading-normal max-lg:w-full max-sm:text-xl max-sm:leading-relaxed'>We implement appropriate measures to safeguard the personal information you provide us from unauthorized access, use, or disclosure. While we take reasonable precautions, it&apos;s important to note that no method of transmission over the internet or electronic storage is entirely secure. While we strive to protect your information, we cannot guarantee absolute security. We continuously review and enhance our security measures to ensure the highest level of protection for your data.</p>
                </section>
                <section className='flex flex-col space-y-6'>
                    <SectionHeader text='Changes to Privacy Policy' />
                    <p className='text-white-translucent w-3/5 text-2xl font-light leading-normal max-lg:w-full max-sm:text-xl max-sm:leading-relaxed'>We retain the right to modify this Privacy Policy at any time without prior notice. Any revisions will take effect immediately upon being posted on our website. We encourage you to regularly review this policy to stay informed about how we collect, use, and protect your personal information.</p>
                </section>
                <section className='flex flex-col space-y-6'>
                    <SectionHeader text='Contact Information' />
                    <p className='text-white-translucent w-3/5 text-xl font-light leading-normal max-lg:w-full max-sm:text-xl max-sm:leading-relaxed'>If you have any inquiries or concerns regarding this Privacy Policy, please don&apos;t hesitate to reach out to us at <a href='mailto:connect@bearsdigital.io'>connect@bearsdigital.io</a>.</p>
                </section>
            </section>
        </main>
    )
}
