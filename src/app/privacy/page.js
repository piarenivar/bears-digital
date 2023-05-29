import Newsletter from "@/components/util/Newsletter"

export default function Privacy() {
    return (
        <main className='flex flex-col items-center'>
            <section className='w-screen flex flex-col items-center py-16 px-4'>
                <div className='container flex flex-col max-lg:items-center'>
                    <h2 className='w-3/5 text-5xl font-semibold leading-snug mb-4 max-xl:w-4/5 max-lg:text-4xl max-lg:leading-snug max-lg:text-center max-md:w-full max-md:text-3xl'>Privacy Policy</h2>
                    <h3 className='text-gray text-sm mb-8'>Last Updated: 06/01/2023</h3>
                    <p>Bears Digital is committed to keeping your data private.</p>
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
