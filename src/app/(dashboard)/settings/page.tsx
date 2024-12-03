"use client"

import React from "react"
import Image from "next/image"

import { Modal } from "@/components/moleculs"
import { Alerts, Button, Input, Title } from "@/components/atomics"

import {
  ArrowClockwiseIcon,
  PencilSimpleIcon,
  PlusIcon,
  TrashIcon,
  UploadSimpleIcon
} from "@/assets/icons"
import { DropzoneIll } from "@/assets/illustration"

const DashboardSettings = () => {
  // -------------------------------------------------------------------------
  const [openModalPassword, setOpenModalPassword] = React.useState(false)
  // -------------------------------------------------------------------------
  const [stateAvatar, setStateAvatar] = React.useState(0)
  const [openModalAvatar, setOpenModalAvatar] = React.useState(false)
  const [activeState, setActiveState] = React.useState(1)
  const [filledVariant, setFilledVariant] = React.useState(false)
  const [openAlertsSuccess, setOpenAlertsSuccess] = React.useState(false)

  const nextState = () => {
    if (activeState > 1) {
      setOpenModalAvatar(false)

      setTimeout(() => {
        setOpenAlertsSuccess(true)
      }, 500)

      setFilledVariant(true)
      setActiveState(1)
    } else {
      setActiveState(activeState + 1)
    }
  }
  // -------------------------------------------------------------------------
  const [changePasswordAlerts, setChangePasswordAlerts] = React.useState(false)

  const openChangePasswordAlerts = () => {
    setOpenModalPassword(false)
    setChangePasswordAlerts(true)

    setTimeout(() => {
      setChangePasswordAlerts(false)
    }, 3000)
  }
  // -------------------------------------------------------------------------

  return (
    <div className='relative space-y-6 p-6'>
      <h1 className='text-heading-sm font-semibold'>Settings</h1>

      <section className='relative w-full space-y-7 rounded-lg-10 bg-white p-6'>
        <Title variant='default' size='lg'>
          Manage Profile
        </Title>

        <form>
          <div className='flex w-full items-start gap-32 border-b border-netral-20 py-7 first:border-y'>
            <div className='w-full max-w-xs space-y-2 2xl:max-w-sm'>
              <h5 className='space-y-2 text-body-lg font-semibold'>Avatar</h5>
              <p className='text-body-base text-netral-50'>
                Only *.png, *.jpg and *.jpeg image files are accepted
              </p>
            </div>

            <figure className='relative flex h-28 w-28 items-center justify-center overflow-hidden rounded-lg bg-netral-20 2xl:h-32 2xl:w-32'>
              {stateAvatar === 1 ? (
                <>
                  <Image
                    className='h-full w-full object-cover'
                    src='/avatar-settings-1.png'
                    alt='Avatar Settings 1'
                    sizes='responsive'
                    fill
                  />

                  <button
                    type='button'
                    className='absolute right-2 top-2 z-10 flex h-6 w-6 items-center justify-center rounded-lg bg-netral-20 text-netral-80 hover:bg-netral-30'
                  >
                    <PencilSimpleIcon className='h-5 w-5' />
                  </button>
                </>
              ) : (
                <>
                  <div className='flex flex-col items-center gap-3'>
                    <UploadSimpleIcon className='h-8 w-8 text-netral-50' />

                    <Button
                      size='sm'
                      variant='primary-bg'
                      onClick={() => setOpenModalAvatar(true)}
                    >
                      Add Image
                    </Button>
                  </div>
                </>
              )}
            </figure>

            <Modal
              variant='default'
              title='Upload Variant Image'
              open={openModalAvatar}
              setOpen={setOpenModalAvatar}
              className='max-w-4xl'
            >
              {activeState === 1 && (
                <main className='my-10 flex min-h-[360px] w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-netral-30 bg-netral-15 py-20'>
                  <DropzoneIll className='h-32 w-32' />

                  <h5 className='mb-1 mt-6 text-body-lg font-semibold'>
                    Click to upload, or drag and drop
                  </h5>

                  <p className='text-body-sm text-netral-50'>
                    {"SVG, PNG, JPEG (MAX 800X400px)"}
                  </p>
                </main>
              )}

              {activeState === 2 && (
                <main className='my-10 flex min-h-[360px] w-full flex-row flex-wrap items-start justify-start gap-4 rounded-xl border-2 border-dashed border-netral-30 bg-netral-15 p-6'>
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className='relative h-40 w-40 flex-shrink-0 overflow-hidden rounded-lg-10'
                    >
                      <div className='absolute bottom-2.5 right-2.5 z-10 flex flex-row gap-1.5'>
                        <button className='rounded-lg bg-white/50 p-2 outline-none ring-2 ring-transparent transition-all duration-300 ease-out hover:bg-white/75 focus:ring-white/25'>
                          <ArrowClockwiseIcon className='h-5 w-5 text-netral-80' />
                        </button>

                        <button className='rounded-lg bg-white/50 p-2 outline-none ring-2 ring-transparent transition-all duration-300 ease-out hover:bg-white/75 focus:ring-white/25'>
                          <TrashIcon className='h-5 w-5 text-error-main' />
                        </button>
                      </div>
                      <Image
                        className='h-full w-full object-cover'
                        alt='Image'
                        src={"/outlet-1.jpg"}
                        fill
                      />
                    </div>
                  ))}

                  <div className='relative'>
                    <label
                      htmlFor='dropzone'
                      className='relative flex h-40 w-40 cursor-pointer flex-col items-center justify-center gap-4 rounded-lg-10 border-2 border-dashed border-netral-30 transition-all duration-300 ease-out hover:bg-netral-20'
                    >
                      <PlusIcon className='h-6 w-6 text-netral-50' />

                      <h5 className='w-24 text-center text-body-sm font-medium text-netral-50'>
                        Add more images
                      </h5>

                      <input
                        type='file'
                        id='dropzone'
                        name='dropzone'
                        className='peer hidden cursor-pointer'
                        accept='image/*'
                      />
                    </label>
                  </div>
                </main>
              )}

              <footer className='flex flex-row justify-end gap-3'>
                <Button
                  size='md'
                  variant='default-nude'
                  onClick={() => setOpenModalAvatar(false)}
                >
                  Discard
                </Button>

                <Button size='md' variant='primary-bg' onClick={nextState}>
                  Save
                </Button>
              </footer>
            </Modal>
          </div>

          <div className='flex w-full items-start gap-32 border-b border-netral-20 py-7 first:border-y'>
            <div className='w-full max-w-xs space-y-2 2xl:max-w-sm'>
              <h5 className='space-y-2 text-body-lg font-semibold'>Name</h5>
            </div>

            <Input
              id='name'
              type='text'
              placeholder='Please add your name'
              defaultValue='Marvin McKinney'
            />
          </div>

          <div className='flex w-full items-start gap-32 border-b border-netral-20 py-7 first:border-y'>
            <div className='w-full max-w-xs space-y-2 2xl:max-w-sm'>
              <h5 className='space-y-2 text-body-lg font-semibold'>Role</h5>
            </div>

            <Input
              id='role'
              type='text'
              placeholder='Please add your role'
              defaultValue='Super Admin'
            />
          </div>

          <div className='flex w-full items-start gap-32 border-b border-netral-20 py-7 first:border-y'>
            <div className='w-full max-w-xs space-y-2 2xl:max-w-sm'>
              <h5 className='space-y-2 text-body-lg font-semibold'>
                Phone Number
              </h5>
            </div>

            <Input
              id='phone'
              type='text'
              variant='phone'
              placeholder='Please add your phone number'
              defaultValue='762394289312'
            />
          </div>

          <div className='flex w-full items-start gap-32 border-b border-netral-20 py-7 first:border-y'>
            <div className='w-full max-w-xs space-y-2 2xl:max-w-sm'>
              <h5 className='space-y-2 text-body-lg font-semibold'>Address</h5>
            </div>

            <Input
              id='address'
              placeholder='Please add your address'
              defaultValue='8502 Preston Rd. Inglewood, Maine 98380'
            />
          </div>
        </form>

        <Modal
          title='Hapus Data'
          className='max-w-[640px]'
          open={openModalPassword}
          setOpen={setOpenModalPassword}
          variant='default'
        >
          <section className='space-y-6'>
            <Input
              id='current-password'
              type='password'
              label='Current Password'
              placeholder='Current password'
              variant='default'
              defaultValue='Halo1234567890'
            />
            <Input
              type='password'
              id='new-password'
              label='New Password'
              placeholder='New password'
              variant='default'
              defaultValue='Halo1234567890'
            />
            <Input
              type='password'
              id='new-confirm-password'
              label='Confirm Password'
              placeholder='New password'
              variant='default'
              defaultValue='Halo1234567890'
            />
          </section>

          <section className='flex w-full justify-end gap-3'>
            <Button
              size='lg'
              variant='primary-nude'
              onClick={() => setOpenModalPassword(false)}
            >
              Discard
            </Button>
            <Button
              size='lg'
              variant='primary-bg'
              onClick={openChangePasswordAlerts}
            >
              Save
            </Button>
          </section>
        </Modal>

        <Alerts
          variant='success'
          open={changePasswordAlerts}
          setOpen={setChangePasswordAlerts}
          title='Password Updated'
          desc='Password update was successful. It is possible to update the password again after 30 days.'
        />
      </section>

      <section className='w-full space-y-7 rounded-lg-10 bg-white p-6'>
        <Title variant='default' size='lg'>
          Manage Account
        </Title>

        <form
          onChange={() => {
            return
          }}
        >
          <div className='flex w-full items-center justify-between gap-4 border-b border-netral-20 py-7 first:border-y'>
            <div className='flex w-full items-center gap-32 space-y-2'>
              <h5 className='w-full max-w-sm text-body-lg font-semibold'>
                Email
              </h5>

              <Input
                id='full-name'
                type='text'
                placeholder='Please add your name'
                defaultValue='samantalegend@mail.com'
              />
            </div>

            <Button className='!h-full' variant='primary-outline' size='md'>
              Change Email
            </Button>
          </div>

          <div className='flex w-full items-center justify-between gap-4 border-b border-netral-20 py-7 first:border-y'>
            <div className='flex w-full items-center gap-32 space-y-2'>
              <h5 className='w-full max-w-sm text-body-lg font-semibold'>
                Password
              </h5>

              <Input
                type='password'
                id='password'
                placeholder='Please add your password'
                defaultValue='beittt123'
                disabled
              />
            </div>

            <Button
              className='!h-full'
              variant='primary-outline'
              size='md'
              onClick={() => setOpenModalPassword(true)}
            >
              Change Password
            </Button>
          </div>

          <div className='flex w-full items-center justify-between gap-4 border-b border-netral-20 py-7 first:border-y'>
            <h5 className='w-full max-w-sm text-body-lg font-semibold'>
              Password
            </h5>

            <Button variant='error-bg' size='md'>
              Log out
            </Button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default DashboardSettings
