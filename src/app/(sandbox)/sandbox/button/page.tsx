'use client'

import { Button } from '@/components/atomics'
import { Header } from '@/components/templates'

import { CircleIcon } from '@/assets/icons'

export default function SandboxButton() {
  return (
    <Header title='Button'>
      <section className='w-full space-y-16'>
        {/* Background */}
        <div className='flex flex-col items-start justify-center gap-8'>
          <section className='flex flex-row gap-4'>
            <Button variant='primary-bg' size='lg'>
              <CircleIcon className='h-4 w-4 stroke-2' />
              Button
              <CircleIcon className='h-4 w-4 stroke-2' />
            </Button>
            <Button variant='warning-bg' size='lg'>
              <CircleIcon className='h-4 w-4 stroke-2' />
              Button
              <CircleIcon className='h-4 w-4 stroke-2' />
            </Button>
            <Button variant='error-bg' size='lg'>
              <CircleIcon className='h-4 w-4 stroke-2' />
              Button
              <CircleIcon className='h-4 w-4 stroke-2' />
            </Button>
            <Button variant='default-bg' size='lg'>
              <CircleIcon className='h-4 w-4 stroke-2' />
              Button
              <CircleIcon className='h-4 w-4 stroke-2' />
            </Button>
            <Button variant='disabled-bg' size='lg' disabled>
              <CircleIcon className='h-4 w-4 stroke-2' />
              Button
              <CircleIcon className='h-4 w-4 stroke-2' />
            </Button>
          </section>

          <section className='flex flex-row gap-4'>
            <Button variant='primary-bg' size='md'>
              <CircleIcon className='h-4 w-4 stroke-2' />
              Button
              <CircleIcon className='h-4 w-4 stroke-2' />
            </Button>
            <Button variant='warning-bg' size='md'>
              <CircleIcon className='h-4 w-4 stroke-2' />
              Button
              <CircleIcon className='h-4 w-4 stroke-2' />
            </Button>
            <Button variant='error-bg' size='md'>
              <CircleIcon className='h-4 w-4 stroke-2' />
              Button
              <CircleIcon className='h-4 w-4 stroke-2' />
            </Button>
            <Button variant='default-bg' size='md'>
              <CircleIcon className='h-4 w-4 stroke-2' />
              Button
              <CircleIcon className='h-4 w-4 stroke-2' />
            </Button>
            <Button variant='disabled-bg' size='md' disabled>
              <CircleIcon className='h-4 w-4 stroke-2' />
              Button
              <CircleIcon className='h-4 w-4 stroke-2' />
            </Button>
          </section>

          <section className='flex flex-row gap-4'>
            <Button variant='primary-bg' size='sm'>
              <CircleIcon className='h-3.5 w-3.5 stroke-2' />
              Button
              <CircleIcon className='h-3.5 w-3.5 stroke-2' />
            </Button>
            <Button variant='warning-bg' size='sm'>
              <CircleIcon className='h-3.5 w-3.5 stroke-2' />
              Button
              <CircleIcon className='h-3.5 w-3.5 stroke-2' />
            </Button>
            <Button variant='error-bg' size='sm'>
              <CircleIcon className='h-3.5 w-3.5 stroke-2' />
              Button
              <CircleIcon className='h-3.5 w-3.5 stroke-2' />
            </Button>
            <Button variant='default-bg' size='sm'>
              <CircleIcon className='h-3.5 w-3.5 stroke-2' />
              Button
              <CircleIcon className='h-3.5 w-3.5 stroke-2' />
            </Button>
            <Button variant='disabled-bg' size='sm' disabled>
              <CircleIcon className='h-3.5 w-3.5 stroke-2' />
              Button
              <CircleIcon className='h-3.5 w-3.5 stroke-2' />
            </Button>
          </section>
        </div>

        {/* Outline */}
        <div className='flex flex-col items-start justify-center gap-8'>
          <section className='flex flex-row gap-4'>
            <Button variant='primary-outline' size='lg'>
              <CircleIcon className='h-4 w-4 stroke-2' />
              Button
              <CircleIcon className='h-4 w-4 stroke-2' />
            </Button>
            <Button variant='warning-outline' size='lg'>
              <CircleIcon className='h-4 w-4 stroke-2' />
              Button
              <CircleIcon className='h-4 w-4 stroke-2' />
            </Button>
            <Button variant='error-outline' size='lg'>
              <CircleIcon className='h-4 w-4 stroke-2' />
              Button
              <CircleIcon className='h-4 w-4 stroke-2' />
            </Button>
            <Button variant='default-outline' size='lg'>
              <CircleIcon className='h-4 w-4 stroke-2' />
              Button
              <CircleIcon className='h-4 w-4 stroke-2' />
            </Button>
            <Button variant='disabled-outline' size='lg'>
              <CircleIcon className='h-4 w-4 stroke-2' />
              Button
              <CircleIcon className='h-4 w-4 stroke-2' />
            </Button>
          </section>

          <section className='flex flex-row gap-4'>
            <Button variant='primary-outline' size='md'>
              <CircleIcon className='h-4 w-4 stroke-2' />
              Button
              <CircleIcon className='h-4 w-4 stroke-2' />
            </Button>
            <Button variant='warning-outline' size='md'>
              <CircleIcon className='h-4 w-4 stroke-2' />
              Button
              <CircleIcon className='h-4 w-4 stroke-2' />
            </Button>
            <Button variant='error-outline' size='md'>
              <CircleIcon className='h-4 w-4 stroke-2' />
              Button
              <CircleIcon className='h-4 w-4 stroke-2' />
            </Button>
            <Button variant='default-outline' size='md'>
              <CircleIcon className='h-4 w-4 stroke-2' />
              Button
              <CircleIcon className='h-4 w-4 stroke-2' />
            </Button>
            <Button variant='disabled-outline' size='md'>
              <CircleIcon className='h-4 w-4 stroke-2' />
              Button
              <CircleIcon className='h-4 w-4 stroke-2' />
            </Button>
          </section>

          <section className='flex flex-row gap-4'>
            <Button variant='primary-outline' size='sm'>
              <CircleIcon className='h-3.5 w-3.5 stroke-2' />
              Button
              <CircleIcon className='h-3.5 w-3.5 stroke-2' />
            </Button>
            <Button variant='warning-outline' size='sm'>
              <CircleIcon className='h-3.5 w-3.5 stroke-2' />
              Button
              <CircleIcon className='h-3.5 w-3.5 stroke-2' />
            </Button>
            <Button variant='error-outline' size='sm'>
              <CircleIcon className='h-3.5 w-3.5 stroke-2' />
              Button
              <CircleIcon className='h-3.5 w-3.5 stroke-2' />
            </Button>
            <Button variant='default-outline' size='sm'>
              <CircleIcon className='h-3.5 w-3.5 stroke-2' />
              Button
              <CircleIcon className='h-3.5 w-3.5 stroke-2' />
            </Button>
            <Button variant='disabled-outline' size='sm'>
              <CircleIcon className='h-3.5 w-3.5 stroke-2' />
              Button
              <CircleIcon className='h-3.5 w-3.5 stroke-2' />
            </Button>
          </section>
        </div>

        {/* Nude */}
        <div className='flex flex-col items-start justify-center gap-8'>
          <section className='flex flex-row gap-4'>
            <Button variant='primary-nude' size='lg'>
              <CircleIcon className='h-4 w-4 stroke-2' />
              Button
              <CircleIcon className='h-4 w-4 stroke-2' />
            </Button>
            <Button variant='warning-nude' size='lg'>
              <CircleIcon className='h-4 w-4 stroke-2' />
              Button
              <CircleIcon className='h-4 w-4 stroke-2' />
            </Button>
            <Button variant='error-nude' size='lg'>
              <CircleIcon className='h-4 w-4 stroke-2' />
              Button
              <CircleIcon className='h-4 w-4 stroke-2' />
            </Button>
            <Button variant='default-nude' size='lg'>
              <CircleIcon className='h-4 w-4 stroke-2' />
              Button
              <CircleIcon className='h-4 w-4 stroke-2' />
            </Button>
            <Button variant='disabled-nude' size='lg'>
              <CircleIcon className='h-4 w-4 stroke-2' />
              Button
              <CircleIcon className='h-4 w-4 stroke-2' />
            </Button>
          </section>

          <section className='flex flex-row gap-4'>
            <Button variant='primary-nude' size='md'>
              <CircleIcon className='h-4 w-4 stroke-2' />
              Button
              <CircleIcon className='h-4 w-4 stroke-2' />
            </Button>
            <Button variant='warning-nude' size='md'>
              <CircleIcon className='h-4 w-4 stroke-2' />
              Button
              <CircleIcon className='h-4 w-4 stroke-2' />
            </Button>
            <Button variant='error-nude' size='md'>
              <CircleIcon className='h-4 w-4 stroke-2' />
              Button
              <CircleIcon className='h-4 w-4 stroke-2' />
            </Button>
            <Button variant='default-nude' size='md'>
              <CircleIcon className='h-4 w-4 stroke-2' />
              Button
              <CircleIcon className='h-4 w-4 stroke-2' />
            </Button>
            <Button variant='disabled-nude' size='md'>
              <CircleIcon className='h-4 w-4 stroke-2' />
              Button
              <CircleIcon className='h-4 w-4 stroke-2' />
            </Button>
          </section>

          <section className='flex flex-row gap-4'>
            <Button variant='primary-nude' size='sm'>
              <CircleIcon className='h-3.5 w-3.5 stroke-2' />
              Button
              <CircleIcon className='h-3.5 w-3.5 stroke-2' />
            </Button>
            <Button variant='warning-nude' size='sm'>
              <CircleIcon className='h-3.5 w-3.5 stroke-2' />
              Button
              <CircleIcon className='h-3.5 w-3.5 stroke-2' />
            </Button>
            <Button variant='error-nude' size='sm'>
              <CircleIcon className='h-3.5 w-3.5 stroke-2' />
              Button
              <CircleIcon className='h-3.5 w-3.5 stroke-2' />
            </Button>
            <Button variant='default-nude' size='sm'>
              <CircleIcon className='h-3.5 w-3.5 stroke-2' />
              Button
              <CircleIcon className='h-3.5 w-3.5 stroke-2' />
            </Button>
            <Button variant='disabled-nude' size='sm'>
              <CircleIcon className='h-3.5 w-3.5 stroke-2' />
              Button
              <CircleIcon className='h-3.5 w-3.5 stroke-2' />
            </Button>
          </section>
        </div>
      </section>
    </Header>
  )
}
