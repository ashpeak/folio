import Link from 'next/link'
import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className='mb-10 mx-6'>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-y-6'>
        <div className='flex flex-col gap-y-4'>
          <Link href='/' className='opacity-70 hover:opacity-95 transition-opacity duration-200 '>Home</Link>
          <Link href='/about' className='opacity-70 hover:opacity-95 transition-opacity duration-200 '>About</Link>
          <Link href='/contact' className='opacity-70 hover:opacity-95 transition-opacity duration-200 '>Contact</Link>
          <Link href='/' className='opacity-70 hover:opacity-95 transition-opacity duration-200 '>Projects</Link>
        </div>
        <div className='flex flex-col gap-y-4'>
          <Link href='https://www.linkedin.com/in/ashpeak/' target='_blank' rel='noopener noreferrer' className='opacity-70 hover:opacity-95 transition-opacity duration-200 '>LinkedIn</Link>
          <Link href='https://www.instagram.com/_.singhashish/' target='_blank' rel='noopener noreferrer' className='opacity-70 hover:opacity-95 transition-opacity duration-200 '>Instagram</Link>
          <Link href='https://github.com/ashpeak' target='_blank' rel='noopener noreferrer' className='opacity-70 hover:opacity-95 transition-opacity duration-200 '>Github</Link>
          <Link href='/resume.pdf' target='_blank' rel='noopener,noreferrer' className='opacity-70 hover:opacity-95 transition-opacity duration-200 '>Resume</Link>
        </div>
        <div className='flex flex-col gap-y-4'>
          <Link href='mailto:kumarvns130@gmail.com' className='opacity-70 hover:opacity-95 transition-opacity duration-200 '>Email</Link>
          <Link href='https://t.me/AshishDogo' className='opacity-70 hover:opacity-95 transition-opacity duration-200 ' target='_blank'>Telegram</Link>
        </div>
      </div>

      <div className='flex mt-16 justify-between items-center'>
        <p className='h-full font-bold dark:text-white text-stone-600 text-center text-xs opacity-70'>© {year} Ashish</p>
        
        {/* <p className='text-center dark:text-white text-stone-600 font-bold text-xs opacity-70'>Im watching you</p> */}

      </div>

    </div>
  )
}
