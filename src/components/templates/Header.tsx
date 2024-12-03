'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ArrowRight2Icon } from '@/assets/icons'

interface Header {
  title: string
  children: React.ReactNode
}

const Header: React.FC<Header> = ({ children, title }) => {
  const path = usePathname()

  const pathName = path.split('/')
  const currentActive = pathName[pathName.length - 1].replace(/\-+/g, ' ')

  return (
    <>
      <header className='HEADER HEADER-SANDBOX bg-netral-20 py-16'>
        <div className='absolute inset-0 h-2 w-full bg-primary-main' />

        <section className='container relative mx-auto max-w-screen-xl space-y-6'>
          <nav className='flex items-center gap-2 px-6 py-1 capitalize leading-none text-netral-60'>
            <Link href='/sandbox'>Components</Link>

            <ArrowRight2Icon className='h-3.5 w-3.5 stroke-2' />

            <Link className='font-semibold' href={path}>
              {currentActive}
            </Link>
          </nav>

          <nav className='px-6 py-1'>
            <h1 className='text-4xl font-medium capitalize'>
              {title ?? 'button'}
            </h1>
          </nav>
        </section>
      </header>

      <main className='MAIN MAIN-SANDBOX container relative mx-auto mt-8 max-w-screen-xl px-6 py-8'>
        {children}
      </main>
    </>
  )
}

export default Header
