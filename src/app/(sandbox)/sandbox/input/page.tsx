import React from 'react'

import { Input } from '@/components/atomics'
import { Header } from '@/components/templates'

const page = () => {
  return (
    <Header title='Input'>
      <div className='container mx-auto max-w-screen-xl space-y-8'>
        <div className='grid w-full grid-cols-3 gap-6'>
          <Input
            id='full-name'
            variant='default'
            label='Full Name'
            placeholder='What is your name'
          />

          <Input
            id='full-name'
            variant='default'
            label='Full Name'
            placeholder='What is your name'
            message='Please add your correct full name'
            disabled
          />

          <Input
            id='full-name'
            variant='default-error'
            label='Full Name'
            placeholder='What is your name'
            message='Please add your correct full name'
          />
        </div>

        <div className='grid w-full grid-cols-3 gap-6'>
          <Input
            id='phone-number'
            variant='phone'
            label='Phone Number'
            placeholder='What is your name'
            message='Please add your correct phone number'
          />

          <Input
            id='phone-number'
            variant='phone'
            label='Phone Number'
            placeholder='What is your name'
            message='Please add your correct phone number'
            disabled
          />

          <Input
            id='phone-number'
            variant='phone-error'
            label='Phone Number'
            placeholder='What is your name'
            message='Please add your correct phone number'
          />
        </div>

        <div className='grid w-full grid-cols-3 gap-6'>
          <Input
            id='bank-logo'
            variant='logo'
            label='Phone Number'
            placeholder='What is your name'
            message='Please add your correct bank number'
          />

          <Input
            id='bank-logo'
            variant='logo'
            label='Phone Number'
            placeholder='What is your name'
            message='Please add your correct bank number'
            disabled
          />

          <Input
            id='bank-logo'
            variant='logo-error'
            label='Phone Number'
            placeholder='What is your name'
            message='Please add your correct bank number'
          />
        </div>
      </div>
    </Header>
  )
}

export default page
