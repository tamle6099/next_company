"use client"

import React from "react"
import * as Dialog from "@radix-ui/react-dialog"

import { XIcon } from "@/assets/icons"
import { Title } from "../atomics"

interface Modal {
  children: React.ReactNode
  className: string
  open: any
  setOpen: any
  title: string
  variant: "default" | "success" | "info" | "warning" | "error" | "primary"
}

const Modal: React.FC<Modal> = ({
  children,
  className,
  open,
  setOpen,
  title,
  variant
}) => {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.DialogTrigger></Dialog.DialogTrigger>

      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 z-[998] overflow-hidden bg-black/25 data-[state=open]:animate-overlayShow' />

        <Dialog.Content
          className={`fixed left-1/2 top-1/4 z-[999] max-h-[85vh] w-full overflow-y-auto ${className} -translate-x-1/2 -translate-y-1/4 rounded-lg-10 bg-white p-6 shadow-lg focus:outline-none data-[state=open]:animate-contentShow`}
        >
          <Dialog.Title className='flex items-center justify-between'>
            <Title size='sm' variant={variant}>
              {title}
            </Title>

            <Dialog.Close asChild>
              <button aria-label='Close'>
                <XIcon className='h-6 w-6 text-netral-50' />
              </button>
            </Dialog.Close>
          </Dialog.Title>

          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default Modal
