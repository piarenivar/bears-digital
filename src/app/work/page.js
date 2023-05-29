import CTA from "@/components/util/CTA"
import CardSlide from "@/components/util/CardSlide"
import Newsletter from "@/components/util/Newsletter"

export default function Solutions() {
    return (
        <main className='flex flex-col items-center'>
            <section className='border-b-gray w-screen flex flex-col items-center py-16 px-4'>
                <div className='container flex flex-col max-lg:items-center'>
                    <h2 className='w-3/5 text-5xl font-semibold leading-snug mb-4 max-xl:w-4/5 max-lg:text-4xl max-lg:leading-snug max-lg:text-center max-md:w-full max-md:text-3xl'>Creating Digital Success Stories</h2>
                    <p className='w-1/2 text-xl leading-normal text-gray mb-12 max-xl:w-3/5 max-lg:w-4/5 max-lg:text-center max-md:w-full'>We help drive growth for new businesses and established brands. Take a look at some of the clients we&apos;ve worked with.</p>
                    <CardSlide />
                </div>
            </section>
            {/* <section className='bg-bears-beige-gradient text-blue w-screen flex justify-center py-16 px-4'>
                <div className='container flex flex-col items-center text-center'>
                    <h2 className='text-3xl font-semibold mb-4'>Creating Digital Success Stories</h2>
                    <p className='xl:w-3/5 w-4/5 text-gray-dark text-xl mb-8'>We help drive growth for new businesses and established brands. Take a look at some of the clients we&apos;ve worked with.</p>
                    <CardSlide />
                </div>
            </section> */}
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
