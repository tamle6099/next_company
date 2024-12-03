"use client"
import React from "react"
import { useRouter } from "next/navigation"

import { PageAction } from "@/components/moleculs"
import { Alerts, Input, Selectbox, Title } from "@/components/atomics"

const DBUserRoleAdd = () => {
  const router = useRouter()

  const listMenu = [
    { name: "Select Role", disabled: true },
    { name: "Super Admin" },
    { name: "Admin" },
    { name: "User" },
    { name: "Customer" }
  ]

  const [openSuccess, setOpenSuccess] = React.useState(false)

  return (
    <div className='relative min-h-[calc(100vh_-_80px)] space-y-6 p-6'>
      <h1 className='text-heading-sm font-semibold'>User Role</h1>

      <section className='relative space-y-8 rounded-lg-10 bg-white p-6'>
        <Title size='lg' variant='default'>
          Add User
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
            label='Email Address'
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

          <Selectbox label='Role' datas={listMenu} />
        </form>
      </section>

      <PageAction
        variant='absolute'
        actionLabel='Last saved'
        actionDesc='Nov 9, 2022-17.09'
        btnPrimaryLabel='Save'
        btnPrimaryVariant='primary-bg'
        btnPrimaryFun={() => setOpenSuccess(true)}
        btnSecondaryLabel='Discard'
        btnsecondaryVariant='primary-nude'
        btnSecondaryFun={() => router.back()}
      />

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

export default DBUserRoleAdd
