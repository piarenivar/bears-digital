import Newsletter from "@/components/util/Newsletter"


export default function Contact() {
    return (
        <main className='flex flex-col items-center'>
            <section className='border-b-gray w-screen flex flex-col items-center py-16 px-4'>
                <div className='container flex flex-col max-lg:items-center'>
                    <h2 className='w-3/5 text-5xl font-semibold leading-snug mb-4 max-xl:w-4/5 max-lg:text-4xl max-lg:leading-snug max-lg:text-center max-md:w-full max-md:text-3xl'>Ready to develop your potential?</h2>
                    <p className='w-1/2 text-xl leading-normal text-gray mb-12 max-xl:w-3/5 max-lg:w-4/5 max-lg:text-center max-md:w-full'>Fill out the form below, and we will be in touch before you can say &quot;supercalifragilisticexpialidocious&quot;.</p>
                </div>
            </section>
            <section className='bg-white text-blue w-screen flex justify-center py-16 px-4'>
                <div className='container flex justify-center'>
                    <Newsletter />
                </div>
            </section>
        </main>
    )
}
