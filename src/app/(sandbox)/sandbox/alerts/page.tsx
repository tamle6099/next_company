'use client'
import React from 'react'

import { Header } from '@/components/templates'

import { Alerts, Button } from '@/components/atomics'

const SandboxAlerts = () => {
  // -------------------------------------------------------------------------
  const [openSuccess, setOpenSuccess] = React.useState(false)

  const openSuccessAlerts = () => {
    setOpenSuccess(true)

    setTimeout(() => {
      setOpenSuccess(false)
    }, 3000)
  }
  // -------------------------------------------------------------------------
  const [openInfo, setOpenInfo] = React.useState(false)

  const openInfoAlerts = () => {
    setOpenInfo(true)

    setTimeout(() => {
      setOpenInfo(false)
    }, 3000)
  }
  // -------------------------------------------------------------------------
  const [openWarning, setOpenWarning] = React.useState(false)

  const openWarningAlerts = () => {
    setOpenWarning(true)

    setTimeout(() => {
      setOpenWarning(false)
    }, 3000)
  }
  // -------------------------------------------------------------------------
  const [openError, setOpenError] = React.useState(false)

  const openErrorAlerts = () => {
    setOpenError(true)

    setTimeout(() => {
      setOpenError(false)
    }, 3000)
  }
  // -------------------------------------------------------------------------

  return (
    <Header title='Alerts'>
      <div className='flex items-center gap-4'>
        <Button size='md' variant='primary-bg' onClick={openSuccessAlerts}>
          Open Success
        </Button>

        <Button size='md' variant='primary-outline' onClick={openInfoAlerts}>
          Open Info
        </Button>

        <Button size='md' variant='warning-bg' onClick={openWarningAlerts}>
          Open Warning
        </Button>

        <Button size='md' variant='error-bg' onClick={openErrorAlerts}>
          Open Error
        </Button>
      </div>

      <Alerts
        variant='success'
        open={openSuccess}
        setOpen={setOpenSuccess}
        title='Message Success'
        desc='Your message sent successfuly'
      />

      <Alerts
        variant='info'
        open={openInfo}
        setOpen={setOpenInfo}
        title='Dont forget to breakfast'
        desc='Hey it is time to eat your breakfast'
      />

      <Alerts
        variant='warning'
        open={openWarning}
        setOpen={setOpenWarning}
        title='Dont forget to sleep'
        desc='Your time is out, please take a nap'
      />

      <Alerts
        variant='error'
        open={openError}
        setOpen={setOpenError}
        title='Message deleted'
        desc='Once you delete, the message cannot be restored'
      />
    </Header>
  )
}

export default SandboxAlerts
