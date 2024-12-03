"use client"
import React from "react"
import { useRouter } from "next/navigation"

import { Modal, PageAction } from "@/components/moleculs"
import { Alerts, Button, Input, Title } from "@/components/atomics"

const DBCustomersUsersDetail = () => {
  // -------------------------------------------------------------------------- //
  const router = useRouter()
  // -------------------------------------------------------------------------- //
  const [openModalSave, setOpenModalSave] = React.useState(false)
  const [openSuccess, setOpenSuccess] = React.useState(false)
  // -------------------------------------------------------------------------- //

  return (
    <div className='relative h-[calc(100vh_-_80px)] p-6'>
      <div className='space-y-6'>
        <h1 className='text-heading-sm font-semibold'>Users</h1>

        <section className='relative space-y-6 rounded-lg-10 bg-white p-6'>
          <Title size='lg' variant='default'>
            Users
          </Title>

          <form className='grid grid-cols-2 gap-x-5 gap-y-8'>
            <Input
              id='name'
              placeholder='Enter name'
              label='Name'
              variant='default'
            />

            <Input
              id='email'
              placeholder='Enter email address'
              label='Email Adress'
              variant='default'
            />

            <Input
              id='phone'
              placeholder='0000-0000-0000'
              label='Phone Number'
              variant='phone'
            />

            <Input
              id='complete-address'
              placeholder='Enter complete adress'
              label='Complete Address'
              variant='default'
            />
          </form>
        </section>
      </div>

      <PageAction
        variant='absolute'
        actionLabel='Last saved'
        actionDesc='Nov 9, 2022-17.09'
        btnPrimaryLabel='Save'
        btnPrimaryVariant='primary-bg'
        btnPrimaryFun={() => setOpenModalSave(true)}
        btnSecondaryLabel='Discard'
        btnsecondaryVariant='primary-nude'
        btnSecondaryFun={() => router.back()}
      />

      <Modal
        variant='primary'
        open={openModalSave}
        title='Save updates?'
        className='max-w-lg'
        setOpen={setOpenModalSave}
      >
        <main className='mb-10 mt-4'>
          <p className='text-body-base text-netral-80'>
            Are you sure to save this update?
          </p>
        </main>

        <footer className='flex w-full justify-end gap-3'>
          <Button
            size='md'
            variant='default-nude'
            onClick={() => setOpenModalSave(false)}
          >
            Cancel
          </Button>
          <Button
            size='md'
            variant='primary-bg'
            onClick={() => {
              setOpenModalSave(false)
              setOpenSuccess(true)
            }}
          >
            Submit
          </Button>
        </footer>
      </Modal>

      <Alerts
        variant='success'
        open={openSuccess}
        setOpen={setOpenSuccess}
        title='Users has been updated'
        desc='User updated successfully.'
      />
    </div>
  )
}

export default DBCustomersUsersDetail
