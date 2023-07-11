import React from 'react'
import Image from 'next/image'
export default function MyProfilePic() {
  return (
    <section className='w-full mx-auto z-0'>
        < Image 
        className='border-4 border-slate-500 drop-shadow-xl
         shadow-black rounded-full  mx-auto mt-8'
        
        src="/images/image.jpg"
        width={200}
        height= {200}
        alt='Paccy'
        priority={true}
        />


    </section>
  )
}
