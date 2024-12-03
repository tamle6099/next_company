"use client"

import React from "react"

import { Layout } from "@/components/templates"
import { Button, Input } from "@/components/atomics"

const AuthForgotPassword = () => {
  return (
    <Layout
      src='/account-woman-photo.png'
      alt='Women Photo Clothes'
      desc='Fashion is like eating, you shouldnt stick to the same menu'
    >
      <header className='mb-8 space-y-3'>
        <h1 className='text-heading-md font-semibold'>Forgot password?</h1>
        <p className='text-body-lg text-netral-60'>
          No worries, we’ll send you reset instruction.
        </p>
      </header>

      <form className='space-y-10'>
        <Input
          id='email'
          placeholder='Enter your email'
          label='Email'
          variant='default'
        />

        <Button
          size='lg'
          variant='primary-bg'
          className='w-full'
          href='/auth/verify-email'
        >
          Reset Password
        </Button>
      </form>
    </Layout>
  )
}

export default AuthForgotPassword
