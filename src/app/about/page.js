import CTA from "@/components/util/CTA"
import Newsletter from "@/components/util/Newsletter"

export default function About() {
    return (
        <main className='flex flex-col items-center'>
            <section className='border-b-gray w-screen flex flex-col items-center py-16 px-4'>
                <div className='container flex flex-col max-lg:items-center'>
                    <h2 className='w-3/5 text-5xl font-semibold leading-snug mb-8 max-xl:w-4/5 max-lg:text-4xl max-lg:leading-snug max-lg:text-center max-md:w-full max-md:text-3xl'>Creative Digital Design and Development Solutions</h2>
                    <p className='w-4/5 text-xl leading-normal text-gray mb-8 max-xl:w-3/5 max-lg:w-4/5 max-lg:text-center max-md:w-full'>At Bears Digital, we are driven by an unwavering passion for creating exceptional design and development solutions. Our philosophy is simple yet powerful: no undertaking is worth pursuing unless we put our entire agency behind it, putting forth our best efforts into every project. As a result, we consistently deliver high-quality work that fuels our clients&apos; business growth.</p>
                    <p className='w-4/5 text-xl leading-normal text-gray mb-8 max-xl:w-3/5 max-lg:w-4/5 max-lg:text-center max-md:w-full'>With this fundamental commitment as the core of our identity, we are here to guide you on your digital journey. Our team of experts will collaborate closely with you, understanding your unique goals and challenges. From brand identity to web development and beyond, we provide tailored solutions that make a lasting impact.</p>
                    <p className='w-4/5 text-xl leading-normal text-gray mb-8 max-xl:w-3/5 max-lg:w-4/5 max-lg:text-center max-md:w-full'>By leveraging our expertise and staying at the forefront of industry trends, we empower your business to stand out in the digital landscape. We are not merely a service provider; we are your dedicated partner, working tirelessly to unlock your brand&apos;s full potential.</p>
                    <p className='w-4/5 text-xl leading-normal text-gray mb-16 max-xl:w-3/5 max-lg:w-4/5 max-lg:text-center max-md:w-full'>Let us be the catalyst for your success. Join us on this transformative journey and experience the power of passion-infused design and development. Together, we will elevate your business to new heights.</p>
                    <h3 className='text-xl font-bold'>Pablo Arenivar,<br />Founder</h3>
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
