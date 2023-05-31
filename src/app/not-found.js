import ArrowHover from "@/components/buttons/ArrowHover"
import Link from "next/link"

export default function NotFound() {
    const heroImg = {
        backgroundImage: `url(https://images.unsplash.com/photo-1602984338060-bfddce132ebc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)`,
    }

    return (
        <main className='flex flex-col items-center'>
            <section id='hero' className='w-screen h-[50rem] flex justify-center items-center' style={heroImg}>
                <div className='hero-overlay w-full h-[50rem]' />
                <div className='z-10 container flex flex-col items-center text-center space-y-6'>
                    <h1 className='text-white text-6xl font-semibold'>Page Not Found</h1>
                    <p className='text-white w-1/2 text-xl'>Either this page doesn&apos;t exist, or something went terribly wrong.</p>
                    <Link href='/'><ArrowHover text='Home' /></Link>
                </div>
            </section>
        </main>
    )
}