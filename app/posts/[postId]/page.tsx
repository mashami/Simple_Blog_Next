import React from 'react'
import { getPostData, getSortedPostsData } from '@/lib/post'
import { notFound } from  "next/navigation"
import getFormattedDate from '@/lib/getFormattedDate'
import Link from 'next/link'

export function generateStaticparams(){
      const posts = getSortedPostsData()// deduped ! 
      return posts.map((post) =>({
        postId:post.id
      }))
}

export function generatedMetaData({ params}:{params:{postId:string}}) {
    
    const posts = getSortedPostsData() // deduped ! 
    const { postId } = params;

    
    
    const post= posts.find(post => post.id === postId)
     if (!post){
        return {
            title:'Post Not found '
        }
     }
   
     
    return {
        title:post.title, 

    }
    
}

export default async function post({ params}:{params:{postId:string}}) {
    const posts = getSortedPostsData() // deduped ! 
    const { postId } = params 
    if (!posts.find(post => post.id === postId)){
        return notFound ()
    }
    const { title, date, contentHtlm } = await getPostData(postId)

    const pubData = getFormattedDate (date)
    
  return (
        <main className='px-6 prose prose-xl prose-slate dark:prose-invert mx-auto text-white'>
           <h1 className='text-3xl mt-4 mb-0 text-slate-50'> {title} </h1>
           <p className='mt-0 text-white'>
            {pubData}

           </p>
         <article className='text-white'>
            <section dangerouslySetInnerHTML={{__html:contentHtlm}}>
            </section>
            <p>
                <Link href='/' className='text-white'> Back to home </Link>
            </p>
         </article> 
        </main>
    
  )
 
}
