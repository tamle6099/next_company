'use client'

import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { ArrowRight2Icon, HomeIcon } from '@/assets/icons'

interface Dropdown {
  children: React.ReactNode
  open: any
  setOpen: any
}
const Dropdown: React.FC<Dropdown> = ({ children, open, setOpen }) => {
  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger></DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className='min-w-[270px] rounded-lg-10 border border-netral-15 bg-white p-3 shadow-dropdown will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade'>
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default Dropdown
