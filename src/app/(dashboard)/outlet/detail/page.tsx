'use client'
import React from 'react'
import Image from 'next/image'

import { Button, Title } from '@/components/atomics'
import { PencilSimpleIcon } from '@/assets/icons'

const DBOutletDetail = () => {
  const tableDetails = [
    {
      id: 1,
      heading: 'Complete Address',
      text: '6391 Elgin St. Celina, Delaware 10299'
    },
    {
      id: 2,
      heading: 'Phone Number',
      text: '(480) 555-0103'
    },
    {
      id: 3,
      heading: 'Manager Branch',
      text: 'Arlene McCoy'
    },
    {
      id: 4,
      heading: 'Total Transaction',
      text: '$5392'
    }
  ]

  return (
    <div className='relative p-6'>
      <h1 className='text-heading-sm font-semibold'>User Role</h1>

      <section className='relative space-y-8 rounded-lg-10 bg-white p-6'>
        <nav className='flex items-center justify-between'>
          <Title size='lg' variant='default'>
            Outlet Detail
          </Title>

          <Button size='md' variant='primary-outline' href='/outlet/edit'>
            <PencilSimpleIcon className='h-5 w-5 stroke-2' />
            Edit Outlet
          </Button>
        </nav>

        <section className='space-y-8'>
          <div className='relative aspect-video h-80 w-full overflow-hidden rounded-lg-10'>
            <Image
              className='h-full w-full object-cover'
              src={'/outlet-1.jpg'}
              alt='Outlet Photo'
              fill
            />
          </div>

          <h3 className='text-heading-sm font-semibold'>Brand Here Delaware</h3>

          <div className='space-y-6'>
            {tableDetails.map((detail) => (
              <span key={detail.id} className='grid grid-cols-2'>
                <h5 className='text-body-sm uppercase text-netral-50'>
                  {detail.heading}
                </h5>

                <p className='text-body-base font-semibold'>{detail.text}</p>
              </span>
            ))}
          </div>
        </section>
      </section>
    </div>
  )
}

export default DBOutletDetail
