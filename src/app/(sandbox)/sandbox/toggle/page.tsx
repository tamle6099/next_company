'use client'
import React from 'react'
import { Header } from '@/components/templates'
import { CheckIconBold, XIcon, XIconBold } from '@/assets/icons'
import { Toggle } from '@/components/atomics'

const SBToggle = () => {
  const [enabled, setEnabled] = React.useState(false)

  return (
    <Header title='Toggle'>
      <Toggle enabled={enabled} setEnabled={setEnabled} />
    </Header>
  )
}

export default SBToggle
