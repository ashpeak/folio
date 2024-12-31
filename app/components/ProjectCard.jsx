import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Box, Card, Inset, Separator, Strong, Text } from '@radix-ui/themes';

export default function ProjectCard({ id, image, title, description, tags }) {
    return (
        <Link href={`/projects/${id}`} className="opacity-100 hover:opacity-85 transition-opacity duration-200">
            <Box maxWidth="240px" className='max-w-md flex-1 mx-auto'>
                <Card size="2">
                    <Inset clip="padding-box" side="top" pb="current" className='p-4'>
                        <Image
                            src={`/images/${image}`}
                            alt="Bold typography"
                            height={240}
                            width={240}
                            className='block object-cover w-full h-60 bg-gray-200 rounded-md'
                        />
                    </Inset>
                    <Text as="p" size="6">
                        <Strong>{title ?? "Error"}</Strong>
                    </Text>
                    <Text as="p" size="3" className='dark:text-[#A1A1AA] text-[#71717A]'>{description ?? "Error fetching description...!"}</Text>

                    <div className='flex flex-wrap gap-2 mt-4'>
                        {tags.map((tag, i) => (
                            <p key={tag + i} className='border border-violet-500 cursor-pointer px-3 py-1 rounded-2xl h-fit'>{tag}</p>
                        ))}
                    </div>
                </Card>
            </Box>
        </Link>
    )
}
