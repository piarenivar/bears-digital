"use client";

import Link from "next/link";
import { useState } from "react"

export default function Burger() {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <>
            <div className={`lg:hidden burger flex flex-col justify-between ${toggle ? 'toggle' : ''}`} onClick={handleToggle}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={`lg:hidden burger-links w-fit flex flex-col p-6 space-y-8 text-lg ${toggle ? 'burger-slide' : ''}`} onClick={handleToggle}>
                <div className={`lg:hidden burger ml-auto flex flex-col justify-between ${toggle ? 'toggle' : ''}`} onClick={handleToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <Link href='/solutions' className='hover-underline'>Solutions</Link>
                <Link href='/projects' className='hover-underline'>Projects</Link>
                <Link href='/case-studies' className='hover-underline'>Case Studies</Link>
                <Link href='/about' className='hover-underline'>About</Link>
                <Link href='/contact' className='button-round'>Contact</Link>
            </div>
        </>
    )
}
