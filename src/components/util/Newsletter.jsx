import ArrowHover from "../buttons/ArrowHover"
import SectionHeader from "../global/SectionHeader"

export default function Newsletter() {
    return (
        <section className='border-t-gray flex flex-col space-y-6 pt-16'>
            <SectionHeader text='Stay Ahead of the Curve' />
            <div className='w-full flex justify-between'>
                <p className='text-white-translucent w-3/5 text-2xl font-light leading-normal'>Sign up for our newsletter to stay informed, inspired, and ready to stand out from the competition.</p>
                <form className='w-fit flex flex-col items-end space-y-2'>
                    <label for='email'>Enter your email address.</label>
                    <input name='email' type='email' className='w-64 font-normal text-right px-2 py-1' placeholder='Email address' />
                    <ArrowHover text='Sign up' />
                </form>
            </div>
        </section>
    )
}
