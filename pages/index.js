import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Joan Osorio Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
          <section className='min-h-screen'>
            <nav className='py-10 mb-12 flex justify-between'>
              <h1 className='text-xl font-burtons dark:text-white'>Developed By Joan</h1>
              <ul className='flex items-center'>
                <li>
                  <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-white'
                  />
                </li>
                <li>
                  <a
                   className ='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' 
                   href='#'
                   >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
            <div className="text-center p-10">
              <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Joan Osorio</h2>
              <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Full-Stack Developer</h3>
              <p className='text-ms py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white'>
                I started my Full-Stack Development journey in 2021 through Harvards CS50x online course.
                 Whilst working as an Electrician i completed the course in 12.2022. I learnt everything 
                 from the fundamentals of using C, moving on to Python, learning to use Databases and 
                 frameworks such as Flask 
              </p>
            </div>
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
              <AiFillTwitterCircle/>
              <AiFillLinkedin/>
              <AiFillYoutube/>
            </div>
            <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </section>

          <section>
            <div className='lg:flex gap-10'>
              <div className='grid place-items-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-500'>
                <Image src={design} width={100} height={100} />
                <h3 className='text-lg font-medium pt-8 pb-2'>
                  Front-End
                </h3>
                <p className='py-2'>
                  As well as using HTML and CSS i also use frameworks such
                   as Tailwind, Flask, React.js and Next.js 
                </p>
                <h4 className='py-4 text-teal-600'>Technologies I Design With </h4>
                <p className='text-gray-800 py-1'>HTML</p>
                <p className='text-gray-800 py-1'>CSS</p>
                <p className='text-gray-800 py-1'>Figma</p>
                <p className='text-gray-800 py-1'>Tailwind</p>
                <p className='text-gray-800 py-1'>Flask</p>
                <p className='text-gray-800 py-1'>Next.js</p>
                <p className='text-gray-800 py-1'>React.js</p>
              </div>
              <div className='grid place-items-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-500'>
                <Image src={consulting} width={100} height={100} />
                <h3 className='text-lg font-medium pt-8 pb-2'>
                  Back-End 
                </h3>
                <p className='py-2'>
                  For my Back-End stack i use Python, C and JavaScript 
                </p>
                <h4 className='py-4 text-teal-600'>Technologies for Back-End</h4>
                <p className='text-gray-800 py-1'>Python</p>
                <p className='text-gray-800 py-1'>C</p>
                <p className='text-gray-800 py-1'>JavaScript</p>
              </div>
              <div className='grid place-items-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-500'>
                <Image src={code} width={100} height={100} object-center/>
                <h3 className='text-lg font-medium pt-8 pb-2'>
                  Version Control and Databases
                </h3>
                <p className='py-2'>
                  My main source of version control is through GitHub
                  and for Databases I use SQLPostgres
                </p>
                <h4 className='py-4 text-teal-600'>Version Control and Databases</h4>
                <p className='text-gray-800 py-1'>SQLPostgres</p>
                <p className='text-gray-800 py-1'>GitHub</p>
              </div>
            </div>
          </section>
          <section>
            <div>
              <h3 className='text-3xl py-1 dark:text-white'>Portfolio</h3>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
                {" "}
                As my final project i developed a Microblogging application using Python, Flask, SQLAlchemy and Jinja2
                these technologies helped me with implementing templates, web forms, databases, email automation, an 
                organised large application structure, user authentication .... Heres a link to my application
              <span className='text-teal-500'> (Microblogging application) </span>
              and a link to my repository <span className='text-teal-500'> (Code) </span>
              Through version control and keeping an organised application structure i managed to keep
              a clear and organised code base
              </p>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
                Below are some example images of my Projects 
              </p>
            </div>
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
              <div className='basis-1/3 flex-1'>
                <Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={web2} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={web3} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={web4} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={web5} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={web6} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
              </div>
            </div>
          </section>
          
      </main>
    </div>
  );
}
