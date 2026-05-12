import React from 'react'
import { asset } from '../blog-assets/asset'
import Image from 'next/image'
import Link from 'next/link'

const Sidebar = () => {
  return (
   
      <div className='flex flex-col bg-slate-100 text-black'> 
        <div className='px-2 md:pl-14 py-3 border border-black'>
           <h2> BlogManagemnt Systems</h2>
        </div>
        <div className='relative w-30 sm:w-60 h-screen py-12 border border-black '> 
          <div className=' absolute mx-auto w-[50%] sm:w-[80%]  sm:right-0 '>
            <Link  title='Add Blog' href="/admin/add-new-blog" className='flex items-center border mt-4 gap-3 px-3 py-3 bg-white shadow-gray-600  border-black'>
              <Image width={50} src={asset.add} alt='Add blog' /><p className='hidden sm:block'> Add Blog</p></Link>
            <Link href="/admin/blog-list" className='flex items-center border font-medium mt-4 gap-3 px-3 py-3 bg-white shadow-gray-600  border-black'> <Image  src={asset.blog1} alt="alt" width={50}  /><p className='hidden sm:block'>Blog List</p></Link>
             <Link href="/admin/subscriptions" className='flex items-center border mt-4 gap-3 px-3 py-3 bg-white shadow-gray-600  border-black'> <Image src={asset.email} alt="alt" width={50}  /><p className='hidden sm:block'>Blog List</p></Link>
           
          </div>
        </div>

      </div>
    
  )
}

export default Sidebar
