export default function Newsletter() {
    return (
        <div className='w-full flex items-center max-lg:flex-col'>
            <div className='w-1/2 flex flex-col max-lg:w-full max-lg:items-center max-lg:text-center max-lg:mb-8'>
                <h2 className='text-orangered text-3xl font-semibold leading-snug mb-4'>Stay Ahead of the Curve: Join Our Inner Circle</h2>
                <p className='w-4/5 text-gray-dark text-xl'>Sign up for our newsletter to stay informed, inspired, and ready to stand out from the competition.</p>
            </div>
            <form className='w-1/2 h-fit flex justify-center max-md:flex-wrap'>
                <input type='email' placeholder='Enter email address' className='input-newsletter mr-6 max-md:mr-0 max-md:mb-4' />
                <button type='email' className='button-orange-fill w-fit text-lg font-medium py-1 px-4'>Sign up</button>
            </form>
        </div>
    )
}
