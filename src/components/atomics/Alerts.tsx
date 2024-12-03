import React from 'react'
import * as Toast from '@radix-ui/react-toast'

import { TrashIcon, XIcon } from '@/assets/icons'

interface Alerts {
  desc: string
  open: any
  setOpen: any
  title: string
  variant: 'success' | 'info' | 'warning' | 'error'
}

const Alerts: React.FC<Alerts> = ({
  desc,
  open,
  setOpen,
  title,
  variant = 'error'
}) => {
  setTimeout(() => {
    setOpen(false)
  }, 10000)
  return (
    <Toast.Provider swipeDirection='right'>
      <Toast.Root
        className='Alerts fixed right-6 top-24 z-[999] w-96 overflow-hidden rounded-lg-10 bg-white p-7 shadow-alerts data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]'
        open={open}
        onOpenChange={setOpen}
      >
        <span
          className={`absolute left-0 top-0 h-full w-1 ${
            (variant === 'success' && 'bg-success-main') ||
            (variant === 'info' && 'bg-info-main') ||
            (variant === 'warning' && 'bg-warning-main') ||
            (variant === 'error' && 'bg-error-main')
          }`}
        />

        <section className='relative flex w-full items-start gap-3 text-netral-80'>
          <TrashIcon
            className={`h-6 w-6 flex-shrink-0 ${
              (variant === 'success' && 'text-success-main') ||
              (variant === 'info' && 'text-info-main') ||
              (variant === 'warning' && 'text-warning-main') ||
              (variant === 'error' && 'text-error-main')
            }`}
          />

          <div className='w-64 space-y-3'>
            <Toast.Title className='text-body-base font-semibold'>
              {title ?? 'Title'}
            </Toast.Title>

            <Toast.Description className='text-body-sm'>
              {desc ??
                'Lorem ipsum dolor sit amet consectetur. Orci nec leo risus turpis.'}
            </Toast.Description>
          </div>

          <Toast.Action
            className='absolute right-0 top-0'
            asChild
            altText='Goto schedule to undo'
          >
            <button>
              <XIcon className='h-6 w-6 flex-shrink-0 text-netral-50' />
            </button>
          </Toast.Action>
        </section>
      </Toast.Root>
      <Toast.Viewport className='fixed right-8 top-8 z-[2147483647] m-0 flex w-[390px] max-w-[100vw] list-none flex-col gap-[10px] p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]' />
    </Toast.Provider>
  )
}

export default Alerts
