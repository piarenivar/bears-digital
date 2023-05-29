import SignatureLarge from "../buttons/SignatureLarge"

export default function CTA() {
    return (
        <div className='w-full flex flex-col items-center'>
            <h1 className='text-3xl font-semibold text-center mb-4'>Ready to grow your brand?</h1>
            <p className='w-4/5 text-center text-gray text-xl mb-8'>Discover how Bears Digital can help scale your audience and drive growth.</p>
            <SignatureLarge href='contact' hrefText='Get In Touch' />
        </div>
    )
}
