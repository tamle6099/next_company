/* eslint-disable @next/next/no-img-element */
import React from 'react'
import TextSetUp from './TextSetUp';

function IconSetup() {
  return (
    <>
    <div className='grid grid-cols-4 mt-10 m-5'>
        <div className='grid justify-center items-center'>
            <div className='p-5 shadow-lg bg-fees'>
            <img src="/share/icon-provide.png" alt="" />
            </div>
           
        </div>
        <div className='grid justify-center'>
            <div className='p-5 shadow-lg bg-fees'>
            <img src="/share/icon-upload.png" alt="" />
            </div>
           
        </div>
        <div className='grid justify-center'>
            <div className='p-5 shadow-lg bg-fees'>
            <img src="/share/icon-finish.png" alt="" />
            </div>
           
        </div>
        <div className='grid justify-center'>
            <div className='p-5 shadow-lg bg-fees'>
            <img src="/share/icon-receive.png" alt="" />
            </div>
           
        </div>
       
    </div>
    <div className='flex justify-center pt-5'>
        <div className='flex items-center'>
                <span className='rounded-full border-2 px-3 py-1 bg-text-blue '>1</span>
                <span className='p-1'><img src="/share/icon-arrow-right-dark.png" alt="" /></span>
            </div>
            <div className='flex items-center'>
                <span className='rounded-full border-2 px-3 py-1 bg-text-blue'>2</span>
                <span className='p-1'><img src="/share/icon-arrow-right-dark.png" alt="" /></span>
            </div>
            <div className='flex items-center'>
                <span className='rounded-full border-2 px-3 py-1 bg-text-blue'>3</span>
                <span  className='p-1'><img src="/share/icon-arrow-right-dark.png" alt="" /></span>
            </div>
            <div className='flex items-center'>
                <span className='rounded-full border-2 px-3 py-1 bg-text-blue'>4</span>
            </div>
    </div>
   <TextSetUp />
    </>
  )
}

export default IconSetup;