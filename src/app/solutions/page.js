import CTA from "@/components/util/CTA"
import ContentWrapper from "@/components/util/ContentWrapper"
import Newsletter from "@/components/util/Newsletter"
import QuadDisplayLg from "@/components/util/QuadDisplayLg"

export default function Solutions() {
    return (
        <main className='flex flex-col items-center'>
            <section className='w-screen flex flex-col items-center py-16 px-4'>
                <div className='container flex flex-col max-lg:items-center'>
                    <h2 className='w-3/5 text-5xl font-semibold leading-snug mb-4 max-xl:w-4/5 max-lg:text-4xl max-lg:leading-snug max-lg:text-center max-md:w-full max-md:text-3xl'>Bears Digital Helps Businesses Enhance Their Growth</h2>
                    <p className='w-1/2 text-xl leading-normal text-gray mb-12 max-xl:w-3/5 max-lg:w-4/5 max-lg:text-center max-md:w-full'>Working hand in hand with clients, we focus on understanding your business to create personalized digital solutions that drive engagement.</p>
                    <QuadDisplayLg />
                </div>
            </section>
            <section className='bg-white text-blue w-screen flex justify-center py-16 px-4'>
                <div className='container flex flex-col items-center max-md:text-center'>
                    <h2 className='text-3xl font-semibold mb-4'>Leverage A Digital Advantage</h2>
                    <p className='text-gray-dark text-xl mb-8'>Establish an effective online presence</p>
                    <ContentWrapper />
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
