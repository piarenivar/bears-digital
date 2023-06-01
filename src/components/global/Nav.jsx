"use client";

import ArrowHover from '../buttons/ArrowHover'
import Brand from './Brand'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Nav() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isVisible = prevScrollPos > currentScrollPos;

            setPrevScrollPos(currentScrollPos);
            setVisible(isVisible);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <nav id='navbar' className={`container flex justify-between py-6 px-8 z-10 ${!visible && 'nav-hidden'}`}>
            <Brand />
            <div className='nav-links flex flex-col items-end space-y-2'>
                <Link href='/'><ArrowHover text='Home' /></Link>
                <Link href='/solutions'><ArrowHover text='Solutions' /></Link>
                <Link href='/projects'><ArrowHover text='Projects' /></Link>
                <Link href='/philosophy'><ArrowHover text='Philosophy' /></Link>
                <ArrowHover text='Connect' />
            </div>
        </nav>
    )
}