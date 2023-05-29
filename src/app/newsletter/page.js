import Newsletter from "@/components/util/Newsletter"


export default function NewsletterPage() {
    return (
        <main className='flex flex-col items-center'>
            <section className='border-b-gray w-screen flex flex-col items-center py-16 px-4'>
                <div className='container flex flex-col max-lg:items-center'>
                    <h2 className='w-3/5 text-5xl font-semibold leading-snug mb-4 max-xl:w-4/5 max-lg:text-4xl max-lg:leading-snug max-lg:text-center max-md:w-full max-md:text-3xl'>Stay Ahead of the Curve: Join Our Inner Circle</h2>
                    <p className='w-1/2 text-xl leading-normal text-gray mb-12 max-xl:w-3/5 max-lg:w-4/5 max-lg:text-center max-md:w-full'>Sign up for our newsletter to stay informed, inspired, and ready to stand out from the competition.</p>
                </div>
            </section>
        </main>
    )
}
