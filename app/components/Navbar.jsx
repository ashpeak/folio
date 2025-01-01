"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { Button } from "@radix-ui/themes";
import Image from "next/image";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (isOpen && navRef.current && !navRef.current.contains(e.target) && buttonRef.current && !buttonRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isOpen]);

    const closeNavbar = (e) => {
        e.stopPropagation();
        setIsOpen(prev => !prev);
    }

    return (
        <header className="w-full md:max-w-5xl mx-auto mt-6 px-4 md:px-0 fixed top-0 right-0 left-0 z-[9999]">
            <div className="h-14 border border-neutral-300 dark:border-neutral-700 px-8 rounded-2xl bg-zinc-400/10 backdrop-blur-[13px] w-full flex justify-between items-center">
                <Link href={'/'}>
                    {/* <h1>AKS</h1> */}
                    <Image src="/images/as.png" className="bg-white h-8 w-8 md:h-[35] md:w-[35] rounded-full" alt="AKS" width={35} height={35} />
                </Link>

                <div className="items-center hidden md:flex gap-4 text-sm font-semibold">
                    <Link href={'/'} className="opacity-70 hover:opacity-95 transition-opacity duration-150">Home</Link>
                    <Link href={'/about'} className="opacity-70 hover:opacity-95 transition-opacity duration-150">About</Link>
                    <Link href={'/projects'} className="opacity-70 hover:opacity-95 transition-opacity duration-150">Projects</Link>
                    <Link href={'/contact'} className="opacity-70 hover:opacity-95 transition-opacity duration-150">Contact</Link>
                </div>

                <ThemeSwitcher />

                {/* For Mobile */}
                <div className="md:hidden">
                    <Button ref={buttonRef} onClick={closeNavbar}>
                        {isOpen ? (
                            <svg className="w-6 h-6 md:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"></path>
                            </svg>) : (
                            <svg className="w-6 h-6 md:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        )}
                    </Button>
                </div>
            </div>

            {/* Navbar for Mobile */}
            <div className={`${isOpen ? ' translate-y-16' : ' -translate-y-[calc(100%+2rem)] '} text-black dark:text-white md:hidden absolute top-0 left-0 right-0 backdrop-blur-[13px] p-4 mx-4 bg-zinc-400/10 dark:bg-secondary-dark/50 rounded-2xl transition duration-500 transform gap-4 text-sm font-semibold flex flex-col`} ref={navRef}>
                <Link onClick={closeNavbar} href={'/'} className="opacity-70 hover:opacity-95 transition-opacity duration-150">Home</Link>
                <Link onClick={closeNavbar} href={'/about'} className="opacity-70 hover:opacity-95 transition-opacity duration-150">About</Link>
                <Link onClick={closeNavbar} href={'/projects'} className="opacity-70 hover:opacity-95 transition-opacity duration-150">Projects</Link>
                <Link onClick={closeNavbar} href={'/contact'} className="opacity-70 hover:opacity-95 transition-opacity duration-150">Contact</Link>
            </div>

        </header>
    )
}
