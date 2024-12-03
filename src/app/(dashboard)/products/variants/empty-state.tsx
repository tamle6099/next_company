'use client'
import React from 'react'

import { Button } from '@/components/atomics'

import { PlusIconBold } from '@/assets/icons'
import { VariantIll } from '@/assets/illustration'

interface VariantEmptyState {
  action: any
}

const VariantEmptyState: React.FC<VariantEmptyState> = ({ action }) => {
  return (
    <section className='flex w-full flex-col items-center justify-center'>
      <VariantIll className='h-60 w-60' />

      <h5 className='mb-2 text-center text-heading-sm font-bold'>
        No variant available
      </h5>

      <p className='mb-6 max-w-md text-center text-body-base text-netral-60'>
        Product variety refers to the number and range of products
        (differentiated by specifications) offered by sellers. And also product
        variety is beneficial for consumers because they can choose from a
        variety of alternatives.
      </p>

      <Button size='lg' variant='primary-bg' onClick={action}>
        <PlusIconBold className='h-5 w-5 stroke-2' />
        Add Variant
      </Button>
    </section>
  )
}

export default VariantEmptyState
