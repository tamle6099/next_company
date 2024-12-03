"use client"

import React from "react"
import Link from "next/link"
import { Switch } from "@headlessui/react"
import { useRouter } from "next/navigation"

import { Layout } from "@/components/templates"
import { Button, Input } from "@/components/atomics"

import { CheckIcon } from "@/assets/icons"
import { GoogleLogo } from "@/assets/brands"

const AuthRegister = () => {
  // ---------------------------------------------------
  const router = useRouter()

  const [isRemember, setIsRemember] = React.useState(false)
  // ---------------------------------------------------

  return (
    <Layout
      src='/account-baby-photo.png'
      alt='Baby Photo Cute'
      desc='Fashion is like eating, you shouldnt stick to the same menu'
    >
      <header className='mb-8 space-y-3 text-left'>
        <h5 className='text-heading-md font-semibold'>Hello Buds!</h5>
        <p className='text-body-lg'>
          Want to see some georgous dashboard? register now!
        </p>
      </header>

      <form className='space-y-6'>
        <Input
          id='name'
          placeholder='Enter your full name'
          label='Full Name'
          variant='default'
        />

        <Input
          id='email'
          placeholder='Enter your email'
          label='Email'
          variant='default'
        />

        <Input
          id='password'
          type='password'
          placeholder='Enter your password'
          label='Password'
          variant='default'
        />

        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-1.5'>
            <Switch
              checked={isRemember}
              onChange={setIsRemember}
              className={`Checkbox ${
                isRemember
                  ? "border-primary-border bg-primary-main text-white ring-primary-surface"
                  : "border-netral-60 bg-white ring-netral-15"
              } relative inline-flex h-5 w-5 items-center rounded-md border ring-2`}
            >
              {isRemember && <CheckIcon className='h-5 w-5' />}
            </Switch>

            <span className='text-body-base text-netral-80'>
              I Accept Terms & Aggrement
            </span>
          </div>

          <Link
            href={"/auth/forgot-password"}
            className='text-body-base font-semibold underline'
          >
            Login Now
          </Link>
        </div>

        <Button
          size='lg'
          variant='primary-bg'
          className='w-full'
          onClick={() => router.push("/")}
        >
          Register
        </Button>

        <div className='flex w-full items-center gap-2'>
          <span className='h-px w-full bg-netral-30'></span>
          <span className='whitespace-nowrap text-body-base font-semibold text-netral-50'>
            Or Register With
          </span>
          <span className='h-px w-full bg-netral-30'></span>
        </div>

        <Button size='md' variant='default-outline' className='w-full'>
          <GoogleLogo className='h-6 w-6' />
          Google
        </Button>
      </form>
    </Layout>
  )
}

export default AuthRegister
