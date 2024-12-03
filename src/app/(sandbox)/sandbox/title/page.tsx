import React from 'react'

import { Title } from '@/components/atomics'
import { Header } from '@/components/templates'

interface VariantProps {
  variant: 'default' | 'success' | 'info' | 'warning' | 'error'
}

const page = () => {
  const titles = ['default', 'success', 'info', 'warning', 'error']

  return (
    <Header title='Title'>
      <section className='flex flex-row items-start gap-24'>
        <div className='space-y-8'>
          <h1 className='text-body-xl font-bold'>Small</h1>
          <Title size='sm' variant='default'>
            Dashboard
          </Title>
          <Title size='sm' variant='success'>
            Dashboard
          </Title>
          <Title size='sm' variant='info'>
            Dashboard
          </Title>
          <Title size='sm' variant='warning'>
            Dashboard
          </Title>
          <Title size='sm' variant='error'>
            Dashboard
          </Title>
        </div>

        <div className='space-y-8'>
          <h1 className='text-body-xl font-bold'>Large</h1>
          <Title size='lg' variant='default'>
            Dashboard
          </Title>
          <Title size='lg' variant='success'>
            Dashboard
          </Title>
          <Title size='lg' variant='info'>
            Dashboard
          </Title>
          <Title size='lg' variant='warning'>
            Dashboard
          </Title>
          <Title size='lg' variant='error'>
            Dashboard
          </Title>
        </div>
      </section>
    </Header>
  )
}

export default page
