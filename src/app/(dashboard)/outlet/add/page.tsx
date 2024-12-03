"use client"

import React from "react"
import { useRouter } from "next/navigation"

import { Button, Input, Title } from "@/components/atomics"
import { UploadSimpleIcon } from "@/assets/icons"
import { PageAction } from "@/components/moleculs"

const DBOutletAdd = () => {
  const router = useRouter()

  return (
    <div className='relative min-h-[calc(100vh_-_80px)] space-y-6 p-6'>
      <h1 className='text-heading-sm font-semibold'>Outlet</h1>

      <section className='relative space-y-8 rounded-lg-10 bg-white p-6'>
        <Title size='lg' variant='default'>
          Outlet Detail
        </Title>

        <div className='grid grid-cols-2 gap-x-5 gap-y-8'>
          <Input
            id='name'
            type='text'
            variant='default'
            label='Outlet Name'
            placeholder='Enter outlet name'
          />

          <Input
            id='address'
            type='text'
            variant='default'
            label='Complete Address'
            placeholder='Enter address'
          />

          <Input
            id='phone-number'
            type='text'
            variant='phone'
            label='Phone Number'
            placeholder='0000-0000-0000'
          />

          <Input
            id='manager-branch'
            type='text'
            variant='default'
            label='Manager Branch'
            placeholder='Enter manager name'
          />

          <div className='relative flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-netral-30 bg-netral-15 py-14'>
            <UploadSimpleIcon className='mb-5 h-8 w-8 text-netral-50' />

            <Button size='sm' variant='primary-bg' className='mb-2'>
              Add Image
            </Button>

            <h5 className='text-body-sm text-netral-50'>
              or drop image to upload
            </h5>
          </div>
        </div>
      </section>

      <PageAction
        variant='sticky'
        actionLabel='Last saved'
        actionDesc='Nov 9, 2022-17.09'
        btnPrimaryLabel='Save'
        btnPrimaryVariant='primary-bg'
        btnPrimaryFun={() => {}}
        btnSecondaryLabel='Discard'
        btnsecondaryVariant='primary-nude'
        btnSecondaryFun={() => router.back()}
      />
    </div>
  )
}

export default DBOutletAdd
