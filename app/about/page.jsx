"use client";
import Image from 'next/image'
import React from 'react';
import Link from 'next/link';

export default function Page() {

    const [src, setSrc] = React.useState('/aks4.png');

    React.useEffect(() => {
        // Random image on every render and after certain interval
        const interval = setInterval(() => {
            const images = ['/aks1.webp', '/aks2.webp', '/aks3.webp', '/aks4.webp', '/aks5.webp', '/aks6.webp', '/aks7.webp'];
            const random = Math.floor(Math.random() * images.length);
            setSrc(images[random]);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='min-h-screen mt-24 mb-36 mx-6'>
            <div className='pb-7 pt-4 border-border-light dark:border-border-dark'>
                <h1 className='text-3xl font-bold'>About ME</h1>
                {/* <p><span className='opacity-70'>This is me</span> 😁</p> */}
            </div>

            <div className='w-full bg-stone-100 rounded-md dark:bg-white/90 flex justify-center'>
                <Image src={`/images${src}`} alt='ashish' width={235} height={235} />
            </div>

            <div>
                <p className='mt-4'>
                    Hi, I&apos;m Ashish Singh, a full-stack Developer from India 🇮🇳. I&apos;m a curious and passionate developer with expertise in the MERN stack and Next.js. I&apos;m a fast learner and tech-savvy professional who thrives in team environments.
                </p>

                <p className='mt-4'>
                    In my spare time I love to watch movies/web series, listen to songs and occasionally hangout with my friends also. 😁
                </p>

                <p className='mt-4'>
                    <span className='font-bold underline'>Currently,</span> I&apos;m exploring TypeScript to broaden my development skills while deepening my understanding of web development. Alongside this, I’m actively working on adding advanced optimization techniques to my skill set, aiming to create more efficient, high-performing, and user-centric applications.
                </p>
                
                <p className='mt-4'>
                    <span className='font-bold underline'>Next year target:</span> In the upcoming year, my goal is to master data structures and algorithms, sharpen my communication abilities, and elevate my development skills to confidently crack interviews and land an exciting job opportunity.
                </p>
            </div>

            <div className='mt-6'>
                <h2 className='text-2xl font-bold'>I&apos;m here <span className='text-xl'>👇</span></h2>

                <ul className='mt-4 list-disc list-inside pl-5'>
                    <li className='dark:text-[#c3c3c3] dark:[&::marker]:text-[#525252] [&::marker]:text-[#d4d4d4] text-[#404040] font-medium'>
                        <Link href='https://www.linkedin.com/in/ashishsingh09dev/' target='_blank' rel='noopener noreferrer'>LinkedIn</Link>
                    </li>
                    <li className='dark:text-[#c3c3c3] dark:[&::marker]:text-[#525252] [&::marker]:text-[#d4d4d4] text-[#404040] font-medium'>
                        <Link href='/' target='_blank' rel='noopener noreferrer'>Github</Link>
                    </li>
                    <li className='dark:text-[#c3c3c3] dark:[&::marker]:text-[#525252] [&::marker]:text-[#d4d4d4] text-[#404040] font-medium'>
                        <Link href='/' target='_blank' rel='noopener noreferrer'>Instagram</Link>
                    </li>
                    <li className='dark:text-[#c3c3c3] dark:[&::marker]:text-[#525252] [&::marker]:text-[#d4d4d4] text-[#404040] font-medium'>
                        <Link href='/resume.pdf' target='_blank' rel='noopener noreferrer'>Resume</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
