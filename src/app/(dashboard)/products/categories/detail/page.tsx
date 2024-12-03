"use client"
import React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

import { Modal, PageAction } from "@/components/moleculs"
import { Alerts, Button, Input, Title, Toggle } from "@/components/atomics"
import {
  PencilSimpleIcon,
  RepeatIcon,
  SelectionPlusIcon,
  UploadSimpleIcon
} from "@/assets/icons"
import { DropzoneIll } from "@/assets/illustration"

const DBProductCategoriesAdd = () => {
  const router = useRouter()
  // -------------------------------------------------------------------------
  const [toggle, setToggle] = React.useState(true)
  const [dropzone, setDropzone] = React.useState(false)
  const [activeState, setActiveState] = React.useState(1)
  const [openModalDropzone, setOpenModalDropzone] = React.useState(false)
  const [openModalSave, setOpenModalSave] = React.useState(false)
  const [openSuccess, setOpenSuccess] = React.useState(false)
  // -------------------------------------------------------------------------
  const nextState = () => {
    if (activeState > 1) {
      setOpenModalDropzone(false)
      setActiveState(1)
      setDropzone(false)
    } else {
      setActiveState(activeState + 1)
    }
  }
  // -------------------------------------------------------------------------

  return (
    <div className='relative space-y-6 p-6'>
      <h1 className='text-heading-sm font-semibold'>Categories</h1>

      <section className='relative w-full space-y-7 rounded-lg-10 bg-white p-6'>
        <Title variant='default' size='lg'>
          Detail Category
        </Title>

        <form>
          <div className='flex w-full items-start gap-32 border-b border-netral-20 py-7 first:border-y'>
            <div className='w-full max-w-sm space-y-2'>
              <h5 className='space-y-2 text-body-base font-semibold'>Name</h5>
              <p className='w-64 text-body-sm text-netral-50'>
                Do not exceed 20 characters when entering the product name.
              </p>
            </div>

            <Input
              type='text'
              id='name'
              variant='default'
              placeholder='Enter category name'
              defaultValue='Outer'
            />
          </div>

          <div className='flex w-full items-start gap-32 border-b border-netral-20 py-7 first:border-y'>
            <div className='w-full max-w-sm space-y-2'>
              <h5 className='space-y-2 text-body-base font-semibold'>
                Description
              </h5>
              <p className='w-64 text-body-sm text-netral-50'>
                Set a description on product to detail your product and better
                visibility
              </p>
            </div>

            <textarea
              name='description'
              id='description'
              className='h-40 w-full rounded-lg-10 border border-netral-30 p-3.5 text-body-base shadow-1 outline-none ring-[2.5px] ring-transparent transition-all duration-300 ease-out focus:border-primary-border focus:ring-primary-surface disabled:bg-netral-20'
              placeholder='Description'
              value={
                "Discovery a variety of outers to keep yourself warm with stylish and comfortable ways."
              }
            />
          </div>

          <div className='flex w-full items-start gap-32 border-b border-netral-20 py-7 first:border-y'>
            <div className='w-full max-w-sm space-y-2'>
              <h5 className='space-y-2 text-body-base font-semibold'>Status</h5>
              <p className='w-64 text-body-sm text-netral-50'>
                Set a status for your product to determine whether your product
                is displayed or not
              </p>
            </div>

            <Toggle enabled={toggle} setEnabled={setToggle} />
          </div>

          <div className='flex w-full items-start gap-32 border-b border-netral-20 py-7 first:border-y'>
            <div className='w-full max-w-sm space-y-2'>
              <h5 className='space-y-2 text-body-base font-semibold'>
                Thumbnail
              </h5>

              <p className='w-64 text-body-sm text-netral-50'>
                Set the product thumbnail image. Only *.png, *.jpg and *.jpeg
                image files are accepted. Recommended minimum width 1080px X
                1080px, with a max size of 5MB
              </p>
            </div>

            <div className='relative flex h-60 w-[30rem] flex-col items-center justify-center rounded-xl border-2 border-dashed border-netral-30 bg-netral-15'>
              {dropzone ? (
                <>
                  <UploadSimpleIcon className='h-8 w-8 text-netral-50' />

                  <Button
                    size='sm'
                    variant='primary-bg'
                    className='mb-2 mt-5'
                    onClick={() => setOpenModalDropzone(true)}
                  >
                    Add Image
                  </Button>

                  <p className='text-body-sm font-medium text-netral-50'>
                    or drop image to upload
                  </p>
                </>
              ) : (
                <>
                  <div className='absolute right-4 top-4 z-10'>
                    <Button size='sm' variant='primary-bg'>
                      Edit
                      <PencilSimpleIcon className='h-4 w-4' />
                    </Button>
                  </div>

                  <div className='relative aspect-square w-60'>
                    <Image
                      src={"/category-upload.png"}
                      alt='Category Upload'
                      fill
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </form>
      </section>

      <PageAction
        actionLabel='Last saved'
        actionDesc='Nov 9, 2022-17.09'
        btnPrimaryLabel='Save'
        btnPrimaryVariant='primary-bg'
        btnPrimaryFun={() => setOpenModalSave(true)}
        btnSecondaryLabel='Cancel'
        btnsecondaryVariant='primary-nude'
        btnSecondaryFun={() => router.back()}
      />

      <Modal
        variant='default'
        title='Add Image'
        open={openModalDropzone}
        setOpen={setOpenModalDropzone}
        className='max-w-4xl'
      >
        {activeState === 1 && (
          <main className='my-10 flex w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-netral-30 bg-netral-15 py-20'>
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
          <main className='relative my-10 flex h-96 w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-netral-30 bg-netral-15'>
            <div className='relative aspect-square w-96'>
              <Image
                className='h-full w-full object-cover'
                src={"/category-upload.png"}
                alt='Category Upload'
                fill
              />
            </div>

            <div className='absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2'>
              <Button size='md' variant='default-bg'>
                <RepeatIcon className='h-6 w-6' />
                Replace
              </Button>
            </div>

            <div className='absolute bottom-4 right-4 z-10'>
              <Button size='md' variant='default-bg'>
                <SelectionPlusIcon className='h-6 w-6' />
                Crop
              </Button>
            </div>
          </main>
        )}

        <footer className='flex flex-row justify-end gap-3'>
          <Button size='md' variant='default-nude'>
            Discard
          </Button>

          <Button size='md' variant='primary-bg' onClick={nextState}>
            Save
          </Button>
        </footer>
      </Modal>

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
        title='Category has been updated'
        desc='Category updated successfully.'
      />
    </div>
  )
}

export default DBProductCategoriesAdd
