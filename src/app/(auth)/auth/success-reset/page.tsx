import React from "react"

import { Button } from "@/components/atomics"
import { Layout } from "@/components/templates"

import { CheckIconBold } from "@/assets/icons"

const AuthSuccessReset = () => {
  return (
    <Layout
      src='/account-woman-photo.png'
      alt='Woman Clothes Photo'
      desc='Fashion is like eating, you shouldnt stick to the same menu'
    >
      <div className='flex w-full flex-col items-center'>
        <section className='mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary-surface/50'>
          <span className='flex h-16 w-16 items-center justify-center rounded-full bg-primary-surface'>
            <CheckIconBold className='h-10 w-10 stroke-primary-main stroke-2 text-primary-main' />
          </span>
        </section>

        <section className='max-w-md text-center'>
          <h1 className='mb-3 text-heading-md font-bold'>
            Password reset was successful
          </h1>

          <p className='mb-10 text-body-lg text-netral-60'>
            Your password has been successfully reset. Click bellow to log in
            magically.
          </p>

          <Button
            size='lg'
            variant='primary-bg'
            className='w-full'
            href='/auth/login'
          >
            Log in
          </Button>
        </section>
      </div>
    </Layout>
  )
}

export default AuthSuccessReset
