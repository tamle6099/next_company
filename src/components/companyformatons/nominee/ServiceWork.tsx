/* eslint-disable @next/next/no-img-element */

import React from 'react'

type IServiceWork = {
    title:string,
    Icon1?:string,
    Icon2?:string,
    Icon3?:string,
    text1:string,
    text2:string,
    text3:string,

}

function ServiceWork(props: IServiceWork) {
  return (
    <div className=''>
        <h3 className='text-lg font-medium'>{props.title}</h3>
         <div className='grid grid-cols-3 m-5'>
        <div className='grid justify-center items-center'>
            <div className='p-5 shadow-lg bg-fees'>
            <img src={props.Icon1} alt="" />
            </div>
        </div>
        <div className='grid justify-center'>
            <div className='p-5 shadow-lg bg-fees'>
            <img src={props.Icon2} alt="" />
            </div>
        </div>
        <div className='grid justify-center'>
            <div className='p-5 shadow-lg bg-fees'>
            <img src={props.Icon3} alt="" />
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
            </div>
    </div>
    <div className='px-[6rem]'>
    <div className='flex pt-5'>
    <div className='w-1/3'>
        <div className='pt-5 text-center'>
        <p className='text-sm '>{props.text1}</p>
       
        </div>
    </div>
    <div className='w-1/3 '>
    <div className='pt-5 text-center'>
    <p className='text-sm'>{props.text2}</p>
    </div>
    </div>
    <div className='w-1/3'>
    <div className='pt-5 text-center'>
    <p className='text-sm'>{props.text3}</p>
    </div>
    </div>
   
</div>
    </div>
    </div>
  )
}

export default ServiceWork