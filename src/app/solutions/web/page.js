import CTA from "@/components/util/CTA"
import Newsletter from "@/components/util/Newsletter"

export default function Solution() {
    return (
        <main className='flex flex-col items-center'>
            <section className='border-b-gray w-screen flex flex-col items-center py-16 px-4'>
                <div className='container flex flex-col max-lg:items-center'>
                    <h2 className='w-3/5 text-5xl font-semibold leading-snug mb-8 max-xl:w-4/5 max-lg:text-4xl max-lg:leading-snug max-lg:text-center max-md:w-full max-md:text-3xl'>Web Development</h2>
                    <p className='w-4/5 text-xl leading-normal text-gray mb-8 max-xl:w-3/5 max-lg:w-4/5 max-lg:text-center max-md:w-full'>From simple business websites to full-scale web applications, our expert team crafts custom solutions tailored to your unique needs. We combine cutting-edge technology with intuitive design to create seamless user experiences that drive engagement and conversions, helping your business thrive online.</p>
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
