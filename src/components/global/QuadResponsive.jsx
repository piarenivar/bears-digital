import Link from "next/link"

export default function QuadResponsive({ link, solution }) {
    return (
        <div id='quadResponsive' className='w-full flex flex-wrap'>
            {solutions.map(({ link, solution, description }) => {
                return <Solution key={solution} link={link} solution={solution} description={description} />
            })}
        </div>
    )
}

function Solution({ link, solution, description }) {
    return (
        <div className='w-1/4 px-6 flex flex-col space-y-4'>
            <Link href={`/solutions/${link}`} className='text-xl font-medium'>{solution}</Link>
            <p>{description}</p>
        </div>
    )
}

const solutions = [
    {
        link: 'web',
        solution: 'Web Development',
        description: 'From a simple business website to a full-fledged e-commerse store, our expert team creates custom solutions tailored to your unique business needs. We combine cutting-edge technology with user friendly designs to create seamless user experiences that drive engagement and conversions, helping your business thrive online.'
    },
    {
        link: 'ios',
        solution: 'iOS Development',
        description: 'Unleash the potential of iOS with our expert development services. We create captivating, user-friendly iOS apps that drive growth. From sleek designs to seamless functionality, we craft personalized experiences that engage and delight users. Elevate your brand with our iOS expertise.'
    },
    {
        link: 'brand',
        solution: 'Brand Identity',
        description: 'Your brand is the face of your business, and we specialize in crafting captivating brand identities. From logo design to marketing collateral and overall company image, we ensure consistency and coherence across all touchpoints. Stand out from the competition and leave a memorable imprint on your audience with a strong and cohesive brand presence.'
    },
    {
        link: 'strategy',
        solution: 'Strategy',
        description: 'We excel in developing effective digital marketing strategies tailored to your business. Our expertise spans search engine optimization (SEO), social media marketing, paid advertising, content creation, and more. By harnessing the power of data-driven insights and industry trends, we create strategic campaigns that drive brand awareness, generate leads, and boost conversions.'
    }
]
