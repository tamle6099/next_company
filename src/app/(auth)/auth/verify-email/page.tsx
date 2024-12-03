"use client"
import React from "react"

import { Button } from "@/components/atomics"
import { Layout } from "@/components/templates"

const AuthVerifyEmail = () => {
  return (
    <Layout
      src='/account-woman-photo.png'
      alt='Women Photo Clothes'
      desc='Fashion is like eating, you shouldnt stick to the same menu'
    >
      <header className='mb-40 space-y-3'>
        <h1 className='text-heading-md font-semibold'>Verify your email</h1>
        <p className='text-body-lg text-netral-60'>
          Hi Samanta! Use the link below to verify your email.
        </p>
      </header>

      <form className='space-y-8 text-center'>
        <Button
          size='lg'
          variant='primary-bg'
          href='/auth/new-password'
          className='w-full'
        >
          Verify email
        </Button>

        <p className='text-body-base text-netral-80'>
          Didn’t receive the email?{" "}
          <button className='font-semibold text-netral-100 underline'>
            Click to resend
          </button>
        </p>
      </form>
    </Layout>
  )
}

export default AuthVerifyEmail
