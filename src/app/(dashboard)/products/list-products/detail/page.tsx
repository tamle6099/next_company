"use client"
import React from "react"
import { useRouter } from "next/navigation"

import { Modal, PageAction } from "@/components/moleculs"
import {
  Alerts,
  Button,
  Input,
  Selectbox,
  Title,
  Toggle
} from "@/components/atomics"

const DBProductsListProductsDetail = () => {
  const router = useRouter()
  // -------------------------------------------------------------------------
  const categories = [
    { name: "Select Category", disabled: true },
    { name: "Jacket" },
    { name: "Outer" },
    { name: "T-shirt" }
  ]
  // -------------------------------------------------------------------------
  const genders = [
    { name: "Select Gender", disabled: true },
    { name: "Male" },
    { name: "Female" }
  ]
  // -------------------------------------------------------------------------
  const discountType = [
    { name: "Select Discount Type", disabled: true },
    { name: "Fixed" },
    { name: "Price" }
  ]
  // -------------------------------------------------------------------------
  const [toggle, setToggle] = React.useState(true)
  // -------------------------------------------------------------------------
  const [openModalSave, setOpenModalSave] = React.useState(false)
  const [openSuccess, setOpenSuccess] = React.useState(false)

  return (
    <div className='relative space-y-6 p-6'>
      <h1 className='text-heading-sm font-semibold'>Add Product</h1>

      <section className='relative w-full space-y-7 rounded-lg-10 bg-white p-6'>
        <Title variant='default' size='lg'>
          Product Information
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
              placeholder='Enter product name'
              value={"Women's Clothing Azure"}
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
                "A comfortable dress made of yarn that has a cotton surface and an airy polyester core. Cotton provides a durable yet lightweight feel and is machine washable. A turtle neck design with a soft and pleasant texture. Relaxed fit for comfort."
              }
            />
          </div>

          <div className='flex w-full items-start gap-32 border-b border-netral-20 py-7 first:border-y'>
            <div className='w-full max-w-sm space-y-2'>
              <h5 className='space-y-2 text-body-base font-semibold'>
                Category
              </h5>
              <p className='w-64 text-body-sm text-netral-50'>
                Please select your product category from the list provided
              </p>
            </div>

            <Selectbox datas={categories} selectedNow></Selectbox>
          </div>

          <div className='flex w-full items-start gap-32 border-b border-netral-20 py-7 first:border-y'>
            <div className='w-full max-w-sm space-y-2'>
              <h5 className='space-y-2 text-body-base font-semibold'>
                Category
              </h5>
              <p className='w-64 text-body-sm text-netral-50'>
                Please select your product category from the list provided
              </p>
            </div>

            <Selectbox datas={genders} selectedNow></Selectbox>
          </div>

          <div className='flex w-full items-start gap-32 border-b border-netral-20 py-7 first:border-y'>
            <div className='w-full max-w-sm space-y-2'>
              <h5 className='space-y-2 text-body-base font-semibold'>Weight</h5>
            </div>

            <Input id='weight' placeholder='000' defaultValue='500' />
          </div>

          {/* Status */}
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

          {/* Discount Type */}
          <div className='flex w-full items-start gap-32 border-b border-netral-20 py-7 first:border-y'>
            <div className='w-full max-w-sm space-y-2'>
              <h5 className='space-y-2 text-body-base font-semibold'>
                Discount Type
              </h5>
              <p className='w-64 text-body-sm text-netral-50'>
                Set your discount type. You can choose the type of discount with
                a percent or cash discount.
              </p>
            </div>

            <Selectbox datas={discountType} selectedNow></Selectbox>
          </div>

          {/* Set Discount */}
          <div className='flex w-full items-start gap-32 border-b border-netral-20 py-7 first:border-y'>
            <div className='w-full max-w-sm space-y-2'>
              <h5 className='space-y-2 text-body-base font-semibold'>
                Set Discount
              </h5>
              <p className='w-64 text-body-sm text-netral-50'>
                Please fill in how many discounts you will give for this
                products.
              </p>
            </div>

            <Input
              id='set-discount'
              variant='discount'
              placeholder='Enter nominal discount'
              defaultValue='30'
            />
          </div>
        </form>
      </section>

      <section className='relative w-full space-y-7 rounded-lg-10 bg-white p-6'>
        <Title variant='default' size='lg'>
          Price
        </Title>

        {/* Set Discount */}
        <div className='flex w-full items-start gap-32 border-b border-netral-20 py-7 first:border-y'>
          <div className='w-full max-w-sm space-y-2'>
            <h5 className='space-y-2 text-body-base font-semibold'>
              Set Discount
            </h5>
            <p className='w-64 text-body-sm text-netral-50'>
              Please fill in how many discounts you will give for this products.
            </p>
          </div>

          <Input
            id='set-discount'
            variant='currency'
            placeholder='Enter nominal discount'
            defaultValue='30'
          />
        </div>
      </section>

      <PageAction
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
        title='Product has been updated'
        desc='Product updated successfully.'
      />
    </div>
  )
}

export default DBProductsListProductsDetail
