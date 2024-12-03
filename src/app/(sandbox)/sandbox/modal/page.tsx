"use client"

import React from "react"

import { Modal } from "@/components/moleculs"
import { Header } from "@/components/templates"
import { Button, Input } from "@/components/atomics"

const SandboxModal = () => {
  const [openSuccess, setOpenSuccess] = React.useState(false)

  return (
    <Header title='Modal'>
      <Button
        size='md'
        variant='primary-bg'
        onClick={() => setOpenSuccess(true)}
      >
        Open Modal
      </Button>

      <Modal
        variant='default'
        title='Hapus Data'
        className='max-w-[640px]'
        open={openSuccess}
        setOpen={setOpenSuccess}
      >
        <section className='space-y-6'>
          <Input
            type='password'
            id='password'
            label='Current Password'
            placeholder='Current password'
            variant='default'
            defaultValue='Halo1234567890'
          />
          <Input
            type='password'
            id='password'
            label='New Password'
            placeholder='New password'
            variant='default'
            defaultValue='Halo1234567890'
          />
          <Input
            type='password'
            id='password'
            label='Confirm Password'
            placeholder='New password'
            variant='default'
            defaultValue='Halo1234567890'
          />
        </section>

        <section className='flex w-full justify-end gap-3'>
          <Button size='lg' variant='primary-nude'>
            Discard
          </Button>

          <Button size='lg' variant='primary-bg'>
            Save
          </Button>
        </section>
      </Modal>
    </Header>
  )
}

export default SandboxModal
