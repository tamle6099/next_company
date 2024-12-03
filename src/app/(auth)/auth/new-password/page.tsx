import React from "react"

import { Layout } from "@/components/templates"
import { Button, Input } from "@/components/atomics"

const AuthNewPassword = () => {
  return (
    <Layout
      src='/account-woman-photo.png'
      alt='Women Photo Clothes'
      desc='Fashion is like eating, you shouldnt stick to the same menu'
    >
      <header className='mb-8 space-y-3'>
        <h1 className='text-heading-md font-semibold'>Set new password</h1>
        <p className='text-body-lg text-netral-60'>
          Your new password must be different to previously used passwords.
        </p>
      </header>

      <form className='space-y-8'>
        <div className='space-y-6'>
          <Input
            id='email'
            placeholder='Enter your email'
            label='Email'
            variant='default'
          />

          <Input
            id='password'
            placeholder='Enter your password'
            label='Password'
            variant='default'
          />
        </div>

        <Button
          size='lg'
          variant='primary-bg'
          className='w-full'
          href='/auth/success-reset'
        >
          Reset Password
        </Button>
      </form>
    </Layout>
  )
}

export default AuthNewPassword
