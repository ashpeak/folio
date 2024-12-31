import Image from 'next/image'
import React from 'react';
import Link from 'next/link';
import { Separator } from '@radix-ui/themes';

export default function page() {
    return (
        <div className='min-h-screen mt-24 mb-28 md:-mb-10 mx-6'>
            <div className='pb-7 pt-10 border-border-light dark:border-border-dark'>
                <h1 className='text-3xl font-bold'>Contact</h1>
                <p><span className='opacity-70'>I would love to hear from you!</span> 🤗</p>
            </div>

            <Separator className='w-full' orientation='horizontal' size={1} />

            <div className='w-full flex flex-col-reverse md:flex-row items-center md:gap-y-0 gap-y-5 justify-between mt-10'>

                <div className='md:w-1/2'>
                    <p className='mt-4'>
                        Hey! don&apos;t be shy to say hi. I am always open to new projects, creative ideas, and opportunities.
                    </p>

                    <p className='mt-4'>
                        Feel free to reach out to me. I will try my best to get back to you as soon as possible. 😊
                    </p>

                    <p className='mt-4'>
                        <span className='font-medium pr-4'>Email:</span>
                        <span className='sm:text-lg text-gray-500 dark:text-gray-300 font-medium'>
                            <Link href='mailto:kumarvns130@gmail.com'>kumarvns130@gmail.com</Link>
                        </span>
                    </p>

                    <p className='mt-4'>
                        <span className='font-medium pr-4'>LinkedIn:</span>
                        <span className='sm:text-lg text-gray-500 dark:text-gray-300 font-medium'>
                            <Link href='https://www.linkedin.com/in/ashpeak/' target='_blank' rel='noopener noreferrer'>ashpeak</Link>
                        </span>
                    </p>

                    <p className='mt-4'>
                        <span className='font-medium pr-4'>Github:</span>
                        <span className='sm:text-lg text-gray-500 dark:text-gray-300 font-medium'>
                            <Link href='https://github.com/ashpeak' target='_blank' rel='noopener noreferrer'>ashpeak</Link>
                        </span>
                    </p>

                    <p className='mt-4'>
                        <span className='font-medium pr-4'>Instagram:</span>
                        <span className='sm:text-lg text-gray-500 dark:text-gray-300 font-medium'>
                            <Link href='https://www.instagram.com/_.singhashish/' target='_blank' rel='noopener noreferrer'>_.singhashish</Link>
                        </span>
                    </p>

                </div>

                <Image src={'/images/contact.svg'} alt='ashish' width={235} height={235} />
            </div>
        </div>
    )
}
