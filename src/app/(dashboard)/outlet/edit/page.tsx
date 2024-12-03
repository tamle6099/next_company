"use client"

import React from "react"
import { useRouter } from "next/navigation"

import { Alerts, Button, Input, Title } from "@/components/atomics"
import { UploadSimpleIcon } from "@/assets/icons"
import { Modal, PageAction } from "@/components/moleculs"

const DBOutletAdd = () => {
  const router = useRouter()

  const [data, setData] = React.useState({
    name: "Brand Here Delaware",
    address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    phone: "(603) 555-0123",
    managerBranch: "Arlene McCoy"
  })

  const [openModalEditConfirmation, setOpenModalEditConfirmation] =
    React.useState(false)
  const [openAlertsEditSuccess, setOpenAlertsEditSuccess] =
    React.useState(false)

  return (
    <div className='relative min-h-[calc(100vh_-_80px)] space-y-6 p-6'>
      <h1 className='text-heading-sm font-semibold'>Edit Outlet</h1>

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
            value={data.name}
          />

          <Input
            id='address'
            type='text'
            variant='default'
            label='Complete Address'
            placeholder='Enter address'
            value={data.address}
          />

          <Input
            id='phone-number'
            type='text'
            variant='phone'
            label='Phone Number'
            placeholder='0000-0000-0000'
            value={data.phone}
          />

          <Input
            id='manager-branch'
            type='text'
            variant='default'
            label='Manager Branch'
            placeholder='Enter manager name'
            value={data.managerBranch}
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
        btnPrimaryFun={() => setOpenModalEditConfirmation(true)}
        btnSecondaryLabel='Discard'
        btnsecondaryVariant='primary-nude'
        btnSecondaryFun={() => router.back()}
      />

      <Modal
        variant='primary'
        open={openModalEditConfirmation}
        title='Update Outlet'
        className='max-w-lg !overflow-y-visible'
        setOpen={setOpenModalEditConfirmation}
      >
        <main className='mb-10 mt-4'>
          <p className='text-body-base text-netral-80'>
            Are you sure to want to update this outlet?
          </p>
        </main>

        <footer className='flex w-full justify-end gap-3'>
          <Button
            size='md'
            variant='default-nude'
            onClick={() => setOpenModalEditConfirmation(false)}
          >
            Cancel
          </Button>

          <Button
            size='md'
            variant='primary-bg'
            onClick={() => {
              setOpenModalEditConfirmation(false)
              setOpenAlertsEditSuccess(true)
            }}
          >
            Yes
          </Button>
        </footer>
      </Modal>

      <Alerts
        variant='success'
        open={openAlertsEditSuccess}
        setOpen={setOpenAlertsEditSuccess}
        title='Outlet updated successfully'
        desc='Outlet successfully updated, you can view the updated banner.'
      />
    </div>
  )
}

export default DBOutletAdd
