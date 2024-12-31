import Link from 'next/link'
import React from 'react'

export default function CallToAction() {
  return (
    <div className='flex flex-wrap justify-between items-center'>
        <p className='mt-4'>Love ❤ to hear from you</p>
        <Link href={'/contact'} className='mt-4 bg-rose-500 text-white px-2 py-1 tracking-tighter rounded-2xl'>Say HI ✋</Link>
    </div>
  )
}
