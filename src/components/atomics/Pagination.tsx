import React from 'react'

import { ArrowLeft2Icon, ArrowRight2Icon } from '@/assets/icons'

const Pagination = () => {
  const paginations = [
    { name: '1', isActive: true },
    { name: '2', isActive: false },
    { name: '3', isActive: false },
    { name: '4', isActive: false },
    { name: '5', isActive: false },
    { name: '...', isActive: false },
    { name: '10', isActive: false }
  ]

  return (
    <div className='Pagination flex w-full items-center justify-between border-t border-netral-30 pt-4'>
      <h5 className='text-body-sm font-medium text-netral-50'>Page 1 of 2</h5>
      <div className='flex flex-row gap-3'>
        <button className='flex h-8 w-8 items-center justify-center rounded-lg-10 bg-transparent text-body-sm font-semibold leading-none text-netral-60 transition-all duration-300 ease-out hover:bg-netral-30'>
          <ArrowLeft2Icon className='h-4 w-4 stroke-2' />
        </button>

        {paginations.map((pagination, index) => (
          <button
            key={index}
            className={`flex h-8 w-8 items-center justify-center rounded-lg-10 ${
              pagination.isActive
                ? 'cursor-auto bg-primary-main text-white'
                : 'cursor-pointer bg-white text-netral-60 hover:bg-netral-30'
            } text-body-sm font-semibold leading-none transition-all duration-300 ease-out`}
          >
            {pagination.name}
          </button>
        ))}

        <button className='flex h-8 w-8 items-center justify-center rounded-lg-10 bg-transparent text-body-sm font-semibold leading-none text-netral-60 transition-all duration-300 ease-out hover:bg-netral-30'>
          <ArrowRight2Icon className='h-4 w-4 stroke-2' />
        </button>
      </div>
    </div>
  )
}

export default Pagination
