import React from 'react'
import { getSortedPostsData } from '@/lib/post'
import ListPosts from './ListPosts'

export default function Posts() {
    const posts = getSortedPostsData()

  return (
   <section className='mt-6 mx-auto max-w-2xl'>
    <h2 className='text-4xl front-bold dark:text-white/90'>BLOG</h2>

     <ul className='w-full'>
          {posts.map(post =>(
            <ListPosts key={post.id} post={post} />
            // JSON.stringify(post)
          ))}
     </ul>
   </section>
  )
}
