import ArrowHover from '@/components/buttons/ArrowHover'
import ConnectForm from '@/components/util/ConnectForm'
import Newsletter from '@/components/util/Newsletter'

export default function Home() {
    const heroImg = {
        backgroundImage: `url(https://images.unsplash.com/photo-1522096823084-2d1aa8411c13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)`,
    }

    return (
        <main className='flex flex-col items-center'>
            <section id='hero' className='w-screen h-[50rem] flex justify-center items-end' style={heroImg}>
                <div className='hero-overlay w-full h-[50rem]' />
                <div className='z-10 container flex justify-center mb-16'>
                    <a href='#connect'><ArrowHover text='Connect' /></a>
                </div>
            </section>
            <section className='container flex flex-col pb-16 px-8 space-y-16'>
                <ConnectForm />
                <Newsletter />
            </section>
        </main>
    )
}
