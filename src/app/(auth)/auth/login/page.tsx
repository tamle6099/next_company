"use client"

import React from "react"
import Link from "next/link"
import { Switch } from "@headlessui/react"
import { useRouter } from "next/navigation"

import { Button, Input } from "@/components/atomics"
import { Layout } from "@/components/templates"
import { CheckIcon } from "@/assets/icons"
import { GoogleLogo } from "@/assets/brands"

const AuthLogin = () => {
  // ---------------------------------------------------
  const router = useRouter()

  const [isRemember, setIsRemember] = React.useState(false)
  // ---------------------------------------------------

  const [email, setEmail] = React.useState("")
  // ---------------------------------------------------

  return (
    <Layout
      src='/account-baby-photo.png'
      alt='Baby Photo Cute'
      desc='Fashion is like eating, you shouldnt stick to the same menu'
    >
      <header className='mb-8 space-y-3 text-left'>
        <h5 className='text-heading-md font-semibold'>Hi There!</h5>
        <p className='text-body-lg'>Welcome back to e-commerce dashboard</p>
      </header>

      <form className='space-y-6'>
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

            <span className='text-body-base text-netral-80'>Remember Me</span>
          </div>

          <Link
            href={"/auth/forgot-password"}
            className='text-body-base font-semibold underline'
          >
            Forgot password?
          </Link>
        </div>

        <Button
          size='lg'
          variant='primary-bg'
          className='w-full'
          onClick={() => router.push("/")}
        >
          Login
        </Button>
      </form>
    </Layout>
  )
}

export default AuthLogin
