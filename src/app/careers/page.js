import CTA from "@/components/util/CTA"
import Newsletter from "@/components/util/Newsletter"
import Link from "next/link"

export default function Careers() {
    return (
        <main className='flex flex-col items-center'>
            <section className='border-b-gray w-screen flex flex-col items-center py-16 px-4'>
                <div className='container flex flex-col max-lg:items-center'>
                    <h2 className='w-3/5 text-5xl font-semibold leading-snug mb-8 max-xl:w-4/5 max-lg:text-4xl max-lg:leading-snug max-lg:text-center max-md:w-full max-md:text-3xl'>Work for Bears Digital</h2>
                    <p className='w-4/5 text-xl leading-normal text-gray mb-8 max-xl:w-3/5 max-lg:w-4/5 max-lg:text-center max-md:w-full'>Thank you for your interest in working for Bears Digital! At the moment, we do not have any open positions; however, feel free to submit your resume for future considerations.</p>
                    <Link href='mailto:careers@bearsdigital.io' className='hover-underline mb-8'>careers@bearsdigital.io</Link>
                </div>
            </section>
            <section className='container flex justify-center py-16 px-4'>
                <CTA />
            </section>
            <section className='bg-white text-blue w-screen flex justify-center py-16 px-4'>
                <div className='container flex justify-center'>
                    <Newsletter />
                </div>
            </section>
        </main>
    )
}
