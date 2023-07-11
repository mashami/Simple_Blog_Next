import React from 'react'
import Link from 'next/link'
import { FaYoutube, FaGithub, FaTwitter, FaLaptop } from "react-icons/fa"

export default function NavBar() {
  return (
    <nav className='bg-slate-600 p-2 sticky top-0 drop-shadow-xl z-10'>
        <div className='prose prose-xl mx-auto flex justify-between flex-col sm:flex-row'>

        <h1 className='text-3xl front-bold text-white grid place-content-center mb-2 md:mb-0'>

        
        <Link href='/'
        className='text-white/90 no-underline hover:text-white' 
        >
            Paccy
        </Link>
        </h1> 
        <div className='flex flex-row justify-content sm:justify-evenly 
        align-middle gap-8 test-while text-4xt lg:text-3xl  
        '>
            <Link className='text-white/90 hover:text-white' href="https://github.com/mashami">
                <FaGithub />
            </Link>
            <Link className='text-white/90 hover:text-white' href="https://twitter.com/MashamiPaccy">
                <FaTwitter />
            </Link>
            <Link className='text-white/90 hover:text-white' href="https://mashami.github.io/Prortofolia/">
                <FaLaptop />
            </Link>

        </div>
        </div>
         
    </nav>
  )
}
