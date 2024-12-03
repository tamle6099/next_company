'use client'

import React from 'react'
import { Dropdown } from '@/components/moleculs'
import { Header } from '@/components/templates'
import { Button } from '@/components/atomics'
import { GearSixIcon, SignOutIcon } from '@/assets/icons'

const SandboxDropdown = () => {
  const [openDropdown, setOpenDropdown] = React.useState(false)

  return (
    <Header title='Dropdown'>
      <Button
        variant='primary-bg'
        size='md'
        onClick={() => setOpenDropdown(true)}
      >
        Open Dropdown
      </Button>

      <Dropdown open={openDropdown} setOpen={setOpenDropdown}>
        <div className='flex flex-col gap-2'>
          <button className='flex items-center gap-2 rounded-lg-10 px-3 py-2 hover:bg-netral-20'>
            <GearSixIcon className='h-6 w-6 text-netral-60' />
            <h5 className='text-body-base font-medium text-netral-80'>
              Setting
            </h5>
          </button>
          <div className='h-px w-full bg-netral-20'></div>

          <button className='flex items-center gap-2 rounded-lg-10 px-3 py-2 hover:bg-netral-20'>
            <SignOutIcon className='h-6 w-6 text-netral-60' />
            <h5 className='text-body-base font-medium text-netral-80'>
              Logout
            </h5>
          </button>
        </div>
      </Dropdown>
    </Header>
  )
}

export default SandboxDropdown
