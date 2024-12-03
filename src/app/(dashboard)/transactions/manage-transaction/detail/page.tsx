"use client"
import React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

import { Modal, PageAction } from "@/components/moleculs"
import {
  Alerts,
  Badge,
  Button,
  Input,
  Selectbox,
  Title
} from "@/components/atomics"

const DBTransactionManageTransactionDetail = () => {
  // --------------------------------------------------------------------------------
  const router = useRouter()
  // --------------------------------------------------------------------------------
  const [openModalSave, setOpenModalSave] = React.useState(false)
  const [openAlertsSave, setOpenAlertsSave] = React.useState(false)
  // --------------------------------------------------------------------------------
  const status = [
    { name: "Process", color: "bg-netral-80" },
    { name: "Waiting", color: "bg-warning-main" },
    { name: "Success", color: "bg-success-main" }
  ]
  // --------------------------------------------------------------------------------

  return (
    <div className='relative space-y-6 p-6'>
      <h1 className='text-heading-sm font-semibold'>Transaction</h1>

      <section className='relative space-y-6 rounded-lg-10 bg-white p-6'>
        <Title size='lg' variant='default'>
          Transaction Detail
        </Title>

        <form>
          <div className='flex w-full items-start gap-32 border-b border-netral-20 py-7 first:border-y'>
            <div className='w-full max-w-sm space-y-2'>
              <h5 className='space-y-2 text-body-lg font-semibold'>
                Transaction Number
              </h5>
            </div>

            <Input
              type='text'
              id='name'
              placeholder='Please add your name'
              defaultValue='20129380132'
            />
          </div>

          <div className='flex w-full items-start gap-32 border-b border-netral-20 py-7 first:border-y'>
            <div className='w-full max-w-sm space-y-2'>
              <h5 className='space-y-2 text-body-lg font-semibold'>Date</h5>
            </div>

            <Input
              type='text'
              id='name'
              placeholder='Please add your name'
              defaultValue='21/08/2022'
            />
          </div>

          <div className='flex w-full items-start gap-32 border-b border-netral-20 py-7 first:border-y'>
            <div className='w-full max-w-sm space-y-2'>
              <h5 className='space-y-2 text-body-lg font-semibold'>Invoice</h5>
            </div>

            <Input
              type='text'
              id='name'
              placeholder='Please add your name'
              defaultValue='INV/20221114/MPL/28203158839'
            />
          </div>

          <div className='flex w-full items-start gap-32 border-b border-netral-20 py-7 first:border-y'>
            <div className='w-full max-w-sm space-y-2'>
              <h5 className='space-y-2 text-body-lg font-semibold'>
                Customer Name
              </h5>
            </div>

            <Input
              type='text'
              id='name'
              placeholder='Please add your name'
              defaultValue='Samanta Legend'
            />
          </div>

          <div className='flex w-full items-start gap-32 border-b border-netral-20 py-7 first:border-y'>
            <div className='w-full max-w-sm space-y-2'>
              <h5 className='space-y-2 text-body-lg font-semibold'>
                Phone Number
              </h5>
            </div>

            <Input
              type='text'
              id='name'
              variant='phone'
              placeholder='Please add your name'
              defaultValue='8723781236'
            />
          </div>

          <div className='flex w-full items-start gap-32 border-b border-netral-20 py-7 first:border-y'>
            <div className='w-full max-w-sm space-y-2'>
              <h5 className='space-y-2 text-body-lg font-semibold'>Status</h5>
              <p className='text-body-base text-netral-50'>
                {`This is the customer's order status. You can arrange your
                customer's order status according to the order process.`}
              </p>
            </div>

            <Selectbox variant='status' datas={status} />
          </div>
        </form>
      </section>

      <section className='relative space-y-6 rounded-lg-10 bg-white p-6'>
        <Title size='lg' variant='default'>
          Shipping Detail
        </Title>

        <form>
          <div className='flex w-full items-start gap-32 border-b border-netral-20 py-7 first:border-y'>
            <div className='w-full max-w-sm space-y-2'>
              <h5 className='space-y-2 text-body-lg font-semibold'>
                Receipt Number
              </h5>
            </div>

            <Input
              type='text'
              id='name'
              variant='default'
              placeholder='Please add your name'
              defaultValue='BSDJA2130923UK'
            />
          </div>

          <div className='flex w-full items-start gap-32 border-b border-netral-20 py-7 first:border-y'>
            <div className='w-full max-w-sm space-y-2'>
              <h5 className='space-y-2 text-body-lg font-semibold'>Shipping</h5>
            </div>

            <Input
              type='text'
              id='name'
              variant='logo'
              logoSrc='/shipping-logo.png'
              placeholder='Please add your name'
              defaultValue='FedEx (2-3 Days)'
            />
          </div>

          <div className='flex w-full items-start gap-32 border-b border-netral-20 py-7 first:border-y'>
            <div className='w-full max-w-sm space-y-2'>
              <h5 className='space-y-2 text-body-lg font-semibold'>Address</h5>
            </div>

            <Input
              type='text'
              id='name'
              variant='default'
              placeholder='Please add your name'
              defaultValue='2972 Westheimer Rd. Santa Ana, Illinois 85486 '
            />
          </div>

          <div className='flex w-full items-start gap-32 border-b border-netral-20 py-7 first:border-y'>
            <div className='w-full max-w-sm space-y-2'>
              <h5 className='space-y-2 text-body-lg font-semibold'>Payment</h5>
            </div>

            <Input
              type='text'
              id='name'
              variant='logo'
              placeholder='Please add your name'
              defaultValue='Maybank Virtual Account'
            />
          </div>
        </form>
      </section>

      <section className='relative space-y-6 rounded-lg-10 bg-white p-6'>
        <Title size='lg' variant='default'>
          Product Detail
        </Title>

        {/* Table */}
        <div className='overflow-x-auto'>
          <table className='w-full table-auto'>
            <thead className='bg-netral-15 text-body-sm font-semibold uppercase'>
              <tr>
                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>Product</span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>SKU</span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>Size</span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>Color</span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>Qty</span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>Price</span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>Total</span>
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-netral-20 pt-4 text-sm'>
              {[1, 2].map((item) => (
                <tr key={item}>
                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <div className='flex items-center gap-3'>
                      <div className='relative h-20 w-20 overflow-hidden rounded-lg-10'>
                        <Image
                          src={"/products-1.png"}
                          className='h-full w-full object-cover'
                          alt='Products'
                          fill
                        />
                      </div>

                      <span className='w-48 whitespace-pre-wrap break-words text-body-base font-medium text-netral-80'>
                        {"T-Men's UA Storm Armour Down 2.0 Jacket"}
                      </span>
                    </div>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='text-body-base font-medium text-netral-80'>
                      123980123490
                    </span>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className=' whitespace-pre-wrap break-words text-body-base font-medium text-netral-80'>
                      M
                    </span>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <div className='flex w-fit items-center gap-2 rounded-[4px] bg-netral-20 px-2 py-1.5'>
                      <span className='h-5 w-5 rounded-sm bg-[#DCD5C3]'></span>
                      <span className='text-body-sm font-medium text-netral-80'>
                        Cream
                      </span>
                    </div>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='text-body-base font-medium text-netral-80'>
                      2
                    </span>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='text-body-base font-medium text-netral-80'>
                      $140
                    </span>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='text-body-base font-medium text-netral-80'>
                      $280
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className='space-y-4 border-t pt-6'>
          <div className='flex items-center justify-end'>
            <h5 className='w-32 text-body-base font-semibold text-netral-80'>
              Discount
            </h5>
            <p className='w-32 text-body-base font-semibold text-netral-80'>
              20%
            </p>
          </div>

          <div className='flex items-center justify-end'>
            <h5 className='w-32 text-body-base font-semibold text-netral-80'>
              Shipping
            </h5>
            <p className='w-32 text-body-base font-semibold text-netral-80'>
              $10
            </p>
          </div>

          <div className='flex items-center justify-end'>
            <h5 className='w-32 text-body-base font-semibold text-netral-80'>
              Tax
            </h5>
            <p className='w-32 text-body-base font-semibold text-netral-80'>
              $10
            </p>
          </div>

          <div className='flex items-center justify-end'>
            <h5 className='w-32 text-body-base font-semibold text-netral-80'>
              Subtotal
            </h5>
            <p className='w-32 text-body-base font-semibold text-netral-80'>
              $389
            </p>
          </div>
        </section>
      </section>

      <PageAction
        variant='sticky'
        actionLabel='Last Saved'
        btnPrimaryLabel='Save'
        btnPrimaryVariant='primary-bg'
        btnPrimaryFun={() => setOpenModalSave(true)}
        btnSecondaryLabel='Cancel'
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
              setOpenAlertsSave(true)
            }}
          >
            Submit
          </Button>
        </footer>
      </Modal>

      <Alerts
        variant='success'
        open={openAlertsSave}
        setOpen={setOpenAlertsSave}
        title='Update success'
        desc='You have successfully updated the transaction data.'
      />
    </div>
  )
}

export default DBTransactionManageTransactionDetail
