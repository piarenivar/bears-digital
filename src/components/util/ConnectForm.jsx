"use client";

import ArrowHover from "../buttons/ArrowHover"
import SectionHeader from "../global/SectionHeader"
import { useState } from "react";

export default function ConnectForm() {
    const [success, setSuccess] = useState(false)

    const onSubmit = async (e) => {
        e.preventDefault();

        const data = {
            name: String(e.target.name.value),
            phone: String(e.target.phone.value),
            email: String(e.target.email.value),
            subject: String(e.target.subject.value),
            message: String(e.target.message.value),
        }

        const response = await fetch('/api/connect', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        if (response.ok) {
            console.log('Message sent successfully.')
            e.target.name.value = ''
            e.target.phone.value = ''
            e.target.email.value = ''
            e.target.subject.value = ''
            e.target.message.value = ''
            setSuccess(true)
        } else if (!response.ok) {
            console.log('Error sending message.')
        }
    }

    return (
        <section id='connect' className='flex flex-col pt-16 max-lg:space-y-6'>
            <SectionHeader text='Connect with Bears Digital' />
            <form className='w-3/5 ml-auto flex flex-wrap justify-between max-lg:w-full' onSubmit={onSubmit} required>
                <input name='name' type='text' className='w-[48%] font-normal px-2 py-1 h-fit mb-6 max-sm:w-full' placeholder='Name' required />
                <input name='phone' type='tel' className='w-[48%] font-normal px-2 py-1 h-fit mb-6 max-sm:w-full' placeholder='Phone' required />
                <input name='email' type='email' className='w-[48%] font-normal px-2 py-1 h-fit mb-6 max-sm:w-full' placeholder='Email' required />
                <input name='subject' type='text' className='w-[48%] font-normal px-2 py-1 h-fit mb-6 max-sm:w-full' placeholder='Subject' />
                <textarea name='message' className='w-full px-2 py-1 h-32 mb-6' placeholder='Enter your message.' minLength={10} required />
                {success && <p className='text-sm text-green-600 max-sm:ml-auto max-sm:mb-6'>Your message was successfully sent!</p>}
                <ArrowHover styles='ml-auto' text='Submit' type='submit' />
            </form>
        </section>
    )
}