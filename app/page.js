import Image from 'next/image';
import { FaGithub, FaRegFilePdf, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from 'next/link';
// import Projects from './components/Projects';
// import BlogCard from './components/BlogCard';
import CallToAction from './components/CallToAction';

export default function Home() {
  return (
    <main className="min-h-screen max-w-5xl mt-24 mb-40 mx-6 scroll-hide">
      {/* <div className='h-[15rem] w-[17rem] rounded-full opacity-50 bg-gradient-to-br m-auto from-violet-500 to-rose-500 absolute top-0 left-0 md:left-auto right-0 -z-10 blur-2xl'></div> */}
      <div className="spinner overflow-x-hidden absolute top-0 left-0 md:left-auto md:right-[1.38rem] right-0 -z-10 mx-auto rounded-full opacity-50 dark:opacity-60">
        <div className="spinner1 rounded-full overflow-x-hidden"></div>
      </div>

      <div className='mt-[7.5rem] md:mt-[10rem]'>
        <div className='flex flex-col-reverse md:flex-row justify-between'>
          <div className='mt-8'>
            <h1 className='text-3xl font-bold text-gray-900 dark:text-white'>Ashish <span className='text-violet-500'>Singh</span></h1>

            <div className='flex mt-6'>
              <p className="relative inline-block text-sm text-text-light dark:text-text-dark">
                <span className="absolute top-[40%] left-0 w-7 h-[2px] bg-rose-500 opacity-60 transform -skew-y-[16deg]"></span>
                <span>Pull</span>
              </p>
              <p className='font-medium text-gray-900 dark:text-gray-100 pl-2'>Full-stack
                <span className='text-violet-500'> Developer</span>
              </p>
            </div>

            <p className="mt-2 max-w-xl">I&apos;m a passionate full-stack web developer based in India, dedicated to creating impactful and efficient solutions.</p>

            <div className='h-4 md:mb-32'></div>

            <div className='flex items-center gap-6 mt-8'>
              <Link href='https://www.linkedin.com/in/ashpeak/' className='hover:scale-[1.07] transition duration-150' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin size={25} />
              </Link>
              <Link href='/resume.pdf' className='hover:scale-[1.07] transition duration-150' target='_blank' rel='noopener noreferrer'>
                <FaRegFilePdf size={25} />
              </Link>
              <Link href='/resume.pdf' target='_blank' rel='noopener,noreferrer' className='hover:scale-[1.07] transition duration-150'>
                <FaGithub size={25} />
              </Link>
              <Link href='https://www.instagram.com/_.singhashish/' className='hover:scale-[1.07] transition duration-150' target='_blank' rel='noopener noreferrer'>
                <FaInstagram size={25} />
              </Link>

            </div>
          </div>
          <div className='flex md:block justify-center shrink-0'>
            <Image draggable={false} className='rounded-full p-1 border border-[#5758d3] dark:border-[#a88181] shrink-0 h-[14.6875rem] w-[14.6875rem] object-cover' src='/images/aks6.webp' alt='ashish' width={235} height={235} />
          </div>
        </div>


        {/* Skills Section */}
        <div className='mt-12'>
          <h1 className='text-3xl font-bold'>Skills</h1>

          <div className='flex flex-wrap gap-2 mt-4'>
            <p className='border border-violet-500 cursor-pointer px-3 py-1 rounded-2xl h-fit'>NextJs</p>
            <p className='border border-violet-500 cursor-pointer px-3 py-1 rounded-2xl h-fit'>React</p>
            <p className='border border-violet-500 cursor-pointer px-3 py-1 rounded-2xl h-fit'>NodeJS</p>
            <p className='border border-violet-500 cursor-pointer px-3 py-1 rounded-2xl h-fit'>Express</p>
            <p className='border border-violet-500 cursor-pointer px-3 py-1 rounded-2xl h-fit'>Typescript</p>
            <p className='border border-violet-500 cursor-pointer px-3 py-1 rounded-2xl h-fit'>Javascript</p>
            <p className='border border-violet-500 cursor-pointer px-3 py-1 rounded-2xl h-fit'>TailwindCSS</p>
            <p className='border border-violet-500 cursor-pointer px-3 py-1 rounded-2xl h-fit'>MongoDB</p>
            <p className='border border-violet-500 cursor-pointer px-3 py-1 rounded-2xl h-fit'>Java</p>
            <p className='border border-violet-500 cursor-pointer px-3 py-1 rounded-2xl h-fit'>HTML5</p>
            <p className='border border-violet-500 cursor-pointer px-3 py-1 rounded-2xl h-fit'>CSS3</p>
            <p className='border border-violet-500 cursor-pointer px-3 py-1 rounded-2xl h-fit'>Git</p>
            <p className='border border-violet-500 cursor-pointer px-3 py-1 rounded-2xl h-fit'>Socket</p>
            <p className='border border-violet-500 cursor-pointer px-3 py-1 rounded-2xl h-fit'>Zustand</p>
            <p className='border border-violet-500 cursor-pointer px-3 py-1 rounded-2xl h-fit'>Redis</p>
            <p className='border border-violet-500 cursor-pointer px-3 py-1 rounded-2xl h-fit'>Linux</p>
            <p className='border border-violet-500 cursor-pointer px-3 py-1 rounded-2xl h-fit'>Docker</p>
            <p className='border border-violet-500 cursor-pointer px-3 py-1 rounded-2xl h-fit'>Azure</p>
          </div>
        </div>


        {/* Work Experience Section */}
        <div className='mt-12'>
          <h1 className='text-3xl font-bold mt-12'>Work Experience</h1>

          <div className='mt-4'>

            <p className="font-medium text-xl mb-1 tracking-tighter">Fitsheets</p>

            <p className='leading-3 text-neutral-600 dark:text-neutral-400 text-sm mb-1 tracking-tighter'>ECOM • Full Stack Developer - July - Nov 2023</p>

            <ul className='list-disc pl-5 mt-4 md:w-[60%]'>
              <li className='dark:text-[#c3c3c3] dark:[&::marker]:text-[#525252] [&::marker]:text-[#d4d4d4] text-[#404040] text-base pb-3 leading-[1.25rem]'>Led the development team to deliver a high-quality, maintainable, and scalable website.</li>
              <li className='dark:text-[#c3c3c3] dark:[&::marker]:text-[#525252] [&::marker]:text-[#d4d4d4] text-[#404040] text-base pb-3 leading-[1.25rem]'>Developed both front-end and back-end using Next.js and Redis, ensuring responsive design and efficient API caching.</li>
              <li className='dark:text-[#c3c3c3] dark:[&::marker]:text-[#525252] [&::marker]:text-[#d4d4d4] text-[#404040] text-base pb-3 leading-[1.25rem]'>Collaborated with teams to gather requirements and deliver a tailored system meeting user needs.</li>
              <li className='dark:text-[#c3c3c3] dark:[&::marker]:text-[#525252] [&::marker]:text-[#d4d4d4] text-[#404040] text-base pb-3 leading-[1.25rem]'>Implemented a robust and secure payment gateway to enhance user trust and transaction reliability.</li>
              <li className='dark:text-[#c3c3c3] dark:[&::marker]:text-[#525252] [&::marker]:text-[#d4d4d4] text-[#404040] text-base leading-[1.25rem]'>Ensured the website was highly secure, maintainable, and adaptable for future growth.</li>
            </ul>

          </div>

          <div className='mt-8 h-[1px] bg-[#e8e8e8] dark:bg-[#272626] w-[80%] md:w-[60%]'></div>

          <div className='mt-4'>

            <p className="font-medium text-xl mb-1 tracking-tighter">Braintube</p>

            <p className='leading-3 text-neutral-600 dark:text-neutral-400 text-sm mb-1 tracking-tighter'>EDU • Full Stack Developer - March - December 2022</p>

            <ul className='list-disc pl-5 mt-4 md:w-[60%]'>
              <li className='dark:text-[#c3c3c3] dark:[&::marker]:text-[#525252] [&::marker]:text-[#d4d4d4] text-[#404040] text-base pb-3 leading-[1.25rem]'>Designed and developed both the front-end and back-end using React, Node.js, Express, MongoDB, and Redis for efficient API caching.</li>
              <li className='dark:text-[#c3c3c3] dark:[&::marker]:text-[#525252] [&::marker]:text-[#d4d4d4] text-[#404040] text-base pb-3 leading-[1.25rem]'>Implemented essential features such as user signup/login, course enrollment, and note-making to enhance user engagement.</li>
              <li className='dark:text-[#c3c3c3] dark:[&::marker]:text-[#525252] [&::marker]:text-[#d4d4d4] text-[#404040] text-base pb-3 leading-[1.25rem]'>Built a highly responsive website, ensuring seamless functionality across devices.</li>
              <li className='dark:text-[#c3c3c3] dark:[&::marker]:text-[#525252] [&::marker]:text-[#d4d4d4] text-[#404040] text-base pb-3 leading-[1.25rem]'>Delivered a maintainable and scalable platform with robust security measures.</li>
              <li className='dark:text-[#c3c3c3] dark:[&::marker]:text-[#525252] [&::marker]:text-[#d4d4d4] text-[#404040] text-base leading-[1.25rem]'>Focused on creating a user-friendly experience, aligning with best practices for web applications.</li>
            </ul>

          </div>


        </div>


        {/* Work Experience Section */}
        <div className='mt-12'>
          <h1 className='text-3xl font-bold mt-12'>About ME</h1>

          <ul className='list-disc pl-5 mt-4 md:w-[60%]'>
            <li className='dark:text-[#c3c3c3] dark:[&::marker]:text-[#525252] [&::marker]:text-[#d4d4d4] text-[#404040] text-base pb-3 leading-[1.25rem]'>I&apos;m a full-stack developer by day and a code ninja by night 🖥️⚡. I&apos;m tech-savvy, a fast learner, and all about building cool stuff with tools like React, Node, and the MERN stack.</li>
            <li className='dark:text-[#c3c3c3] dark:[&::marker]:text-[#525252] [&::marker]:text-[#d4d4d4] text-[#404040] text-base pb-3 leading-[1.25rem]'>I vibe with teamwork and always keep the energy high (music is my secret weapon 🎵). Coding with a playlist? That&apos;s my jam.</li>
            <li className='dark:text-[#c3c3c3] dark:[&::marker]:text-[#525252] [&::marker]:text-[#d4d4d4] text-[#404040] text-base pb-3 leading-[1.25rem]'>My mission: to master DSA like a boss and level up my dev skills for the future. Balancing serious growth with a chill, fun vibe—because why not? 😎</li>
          </ul>

          <div>

          </div>

          {/* wait! that's not everything, go here link */}
          <div className='mt-8 h-[1px] bg-[#e8e8e8] dark:bg-[#272626] w-[80%] md:w-[60%]'></div>

          <div className='mt-4'>
            <p className='text-sm text-neutral-600 dark:text-neutral-400'>Want to know more about me? <Link href='/about' className='text-violet-500'>Go here</Link></p>
          </div>


        </div>


        {/* CTA section for contact me for hiring or project */}
        <div className='mt-12'>
          <h1 className='text-3xl font-bold mt-12'>Contact</h1>

          <CallToAction />
        </div>

      </div>
    </main>
  )
}
