"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

const Projects = () => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const currentRef = containerRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <motion.ul
            ref={containerRef}
            className="grid grid-cols-1 grid-rows-1 gap-y-4 md:grid-cols-2 md:grid-rows-2 mt-4"
            variants={container}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
        >
            {[0, 1, 2, 3].map((index) => (
                <motion.li key={index} className="item" variants={item}>
                    <div className='border border-border-light rounded-xl dark:border-border-dark gap-2 pl-2 pr-4 py-4 flex flex-row'>
                        <Image src='/images/blink.png' className='border border-border-dark object-cover' alt='blink' width={50} height={50} />
                        <div>
                            <h3 className='text-base md:text-xl font-bold'>Project {index + 1}</h3>
                            <p className=''>
                                Lorem ipsum dolormagna aliqua.
                            </p>
                        </div>
                    </div>
                </motion.li>
            ))}
        </motion.ul>
    );
};

export default Projects;