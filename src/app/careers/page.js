import Link from "next/link"

export default function Careers() {
    return (
        <main className='container py-8 space-y-4'>
            <h1 className='text-3xl font-semibold'>Careers</h1>
            <hr />
            <p className=''> Thank you for your interest in Bears Digital. We do not have any openings at the moment; however, we invite you to submit your resume for future openings.</p>
            <br />
            <Link href='mailto:jobs@bearsdigital.io' target='_blank' className='hover-underline'>jobs@bearsdigital.io</Link>
        </main>
    )
}
