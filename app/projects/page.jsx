import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { Separator } from '@radix-ui/themes';

import { projects } from '@/app/lib/lib';

export default function Page() {

    return (
        <div className='min-h-screen mt-24 mb-28 mx-6'>
            <div className='pb-7 pt-10 border-border-light dark:border-border-dark'>
                <h1 className='text-3xl font-bold'>Projects</h1>
                <p><span className='opacity-70'>I crafted these with</span> ❤️</p>
            </div>

            <Separator className='w-full' orientation='horizontal' size={1} />

            <div className='flex items-center justify-center w-fit'>
                <div className='mt-12 w-full grid grid-cols-1 md:grid-cols-2 gap-6'>

                    {
                        projects.map(project => (
                            <ProjectCard key={project.title + project.id} {...project} />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}