"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Separator } from '@radix-ui/themes';
import { RxHome } from "react-icons/rx";
import { LuGithub } from "react-icons/lu";
import { useParams } from 'next/navigation';
import { projects } from '@/app/lib/lib';


export default function Page() {
    const param = useParams();
    const [project, setProject] = useState({
        id: 1,
        image: '',
        title: '',
        description: '',
        detail: '',
        tags: [],
        live: '',
        github: ''
    },);

    useEffect(() => {
        const id = parseInt(param.id);
        const project = projects.find(project => project.id === id);     
        setProject(project);
    }, [param]);

    return (
        <div className='min-h-screen mt-24 mb-28 mx-6'>
            <div className='pb-7 pt-10 border-border-light dark:border-border-dark'>
                <h1 className='text-3xl font-bold'>Details</h1>
                <p><span className='opacity-70'>Know more about my project</span> 🤗</p>
            </div>

            <Separator className='w-full' orientation='horizontal' size={1} />

            <div className='mt-12'>
                <h1 className='text-2xl font-bold'>{project?.title}</h1>
                <div>
                    <p className='dark:text-[#e4e3e3]'>{project?.detail}</p>
                </div>

                <div className='mt-5 flex flex-wrap gap-4 text-stone-800 dark:text-white '>
                    <div className='flex gap-2 items-center justify-start'>
                        <RxHome className='w-4 h-4' />
                        <Link href={project?.live ?? ""} target='_blank'>{project?.live}</Link>
                    </div>
                    <div className='flex gap-2 items-center justify-start'>
                        <LuGithub className='w-4 h-4' />
                        <Link href={project?.github ?? ""} target='_blank'>{project?.github}</Link>
                    </div>
                </div>

                <div className='mt-5'>
                    <h1 className='text-2xl font-bold'>Tech Stack</h1>
                    <div className='flex flex-wrap gap-3 mt-3'>
                        {
                            project?.tags?.map((tag, i) => (
                                <p key={tag + i} className='border border-violet-500 cursor-pointer px-3 py-1 rounded-2xl h-fit'>{tag}</p>
                            ))}
                    </div>
                </div>

                <div className='mt-12 w-full'>
                    <Image src={`/images/${project?.image}`}
                        alt='Bold typography'
                        height={500}
                        width={640}
                        className='block object-cover w-full h-full bg-gray-200 rounded-md' />
                </div>
            </div>
        </div>
    )
}