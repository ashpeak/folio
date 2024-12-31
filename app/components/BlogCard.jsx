import Image from 'next/image'
import React from 'react'

export default function BlogCard() {
    return (
        <div className='flex gap-4 mt-4 w-full h-fit border border-border-light dark:border-border-dark rounded-xl'>
            <div className='w-full h-fit p-4'>
                <div className='w-full h-52 relative'>
                    <Image src='/images/sc.png' className='rounded-xl md:rounded-md border h-full w-full border-border-dark object-cover' alt='blink' width={250} height={250} />
                
                {/* date time on bottom of image */}
                <div className='absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-[#030303] to-transparent rounded-b-xl flex flex-col justify-end'>
                    <p className='w-full text-xs pb-2 pr-3 opacity-80 text-right'>February 07, 2024</p>
                </div>
                </div>

                <h3 className='text-base md:text-xl font-bold mt-4'>Blog 1</h3>
                <p className='opacity-70 mt-1'>
                    Lorem ipsum dolormagna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>
    )
}
