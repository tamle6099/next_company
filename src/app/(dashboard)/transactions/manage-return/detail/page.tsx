"use client"
import React from "react"
import Image from "next/image"

import { Modal, PageAction } from "@/components/moleculs"
import {
  Alerts,
  Badge,
  Button,
  Input,
  Selectbox,
  Title
} from "@/components/atomics"

import { DownloadSimpleIcon, EyeIcon } from "@/assets/icons"

const DBTransactionManageRefundDetail = () => {
  // --------------------------------------------------------------------------------
  const [openModalApprove, setOpenModalApprove] = React.useState(false)
  const [openAlertsApprove, setOpenAlertsApprove] = React.useState(false)
  const [openModalReject, setOpenModalReject] = React.useState(false)
  const [openModalRejectReason, setOpenModalRejectReason] =
    React.useState(false)
  const [openAlertsReject, setOpenAlertsReject] = React.useState(false)
  // --------------------------------------------------------------------------------
  const status = [
    { name: "Process", color: "bg-netral-80" },
    { name: "Waiting", color: "bg-warning-main" },
    { name: "Success", color: "bg-success-main" }
  ]
  // --------------------------------------------------------------------------------

  return (
    <div className='relative space-y-6 p-6'>
      <h1 className='text-heading-sm font-semibold'>Refund</h1>

      <section className='relative space-y-6 rounded-lg-10 bg-white p-6'>
        <Title size='lg' variant='default'>
          Purchased Detail
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
          Return Detail
        </Title>

        <form>
          <div className='flex w-full items-start gap-32 border-b border-netral-20 py-7 first:border-y'>
            <div className='w-full max-w-sm space-y-2'>
              <h5 className='space-y-2 text-body-base font-semibold'>Reason</h5>
            </div>

            <textarea
              name='description'
              id='description'
              className='h-40 w-full rounded-lg-10 border border-netral-30 bg-netral-15 p-3.5 text-body-base shadow-1 outline-none ring-[2.5px] ring-transparent transition-all duration-300 ease-out focus:border-primary-border focus:ring-primary-surface disabled:bg-netral-20'
              placeholder='Description'
              value={
                "The shipping box or envelope isn't damaged but the item is damaged"
              }
            />
          </div>

          <div className='flex w-full items-start gap-32 border-b border-netral-20 py-7 first:border-y'>
            <div className='w-full max-w-sm space-y-2'>
              <h5 className='space-y-2 text-body-base font-semibold'>
                Image Proof
              </h5>
            </div>

            <div className='grid grid-cols-4 gap-6'>
              {[1, 2, 3, 4].map((item) => (
                <figure
                  key={item}
                  className='group relative h-40 w-40 overflow-hidden rounded-lg-10'
                >
                  <Image
                    src={"/return-detail-1.png"}
                    alt='Return Detail 1'
                    fill
                  />

                  <div className='absolute inset-0 flex h-full w-full items-center justify-center bg-black/25 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100'>
                    <div className='flex items-center justify-center gap-1.5'>
                      <Button size='sm' variant='default-bg'>
                        <EyeIcon className='h-4 w-4' />
                      </Button>

                      <Button size='sm' variant='default-bg'>
                        <DownloadSimpleIcon className='h-4 w-4' />
                      </Button>
                    </div>
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </form>
      </section>

      <section className='relative space-y-6 rounded-lg-10 bg-white p-6'>
        <Title size='lg' variant='default'>
          Product Detail
        </Title>

        {/* Table */}
        <div className='mb-6 overflow-x-auto'>
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

      <PageAction
        variant='sticky'
        actionLabel='2 Changes'
        btnPrimaryLabel='Approve'
        btnPrimaryVariant='primary-bg'
        btnPrimaryFun={() => setOpenModalApprove(true)}
        btnSecondaryLabel='Reject'
        btnsecondaryVariant='error-outline'
        btnSecondaryFun={() => setOpenModalReject(true)}
      />

      <Modal
        variant='primary'
        open={openModalApprove}
        title='Approve Return'
        className='max-w-lg'
        setOpen={setOpenModalApprove}
      >
        <main className='mb-10 mt-4'>
          <p className='text-body-base text-netral-80'>
            Are you sure to approve this return?
          </p>
        </main>

        <footer className='flex w-full justify-end gap-3'>
          <Button
            size='md'
            variant='default-nude'
            onClick={() => setOpenModalApprove(false)}
          >
            Cancel
          </Button>
          <Button
            size='md'
            variant='primary-bg'
            onClick={() => {
              setOpenModalApprove(false)
              setOpenAlertsApprove(true)
            }}
          >
            Submit
          </Button>
        </footer>
      </Modal>

      <Alerts
        variant='success'
        open={openAlertsApprove}
        setOpen={setOpenAlertsApprove}
        title='Return has been approved'
        desc='Product returns have been approved, a message will be sent to the customer and return will be processed.'
      />

      <Modal
        variant='error'
        open={openModalReject}
        title='Reject Return'
        className='max-w-lg'
        setOpen={setOpenModalReject}
      >
        <main className='mb-10 mt-4'>
          <p className='text-body-base text-netral-80'>
            Are you sure you want to reject this product return?
          </p>
        </main>

        <footer className='flex w-full justify-end gap-3'>
          <Button
            size='md'
            variant='default-nude'
            onClick={() => setOpenModalReject(false)}
          >
            Cancel
          </Button>

          <Button
            size='md'
            variant='error-bg'
            onClick={() => {
              setOpenModalReject(false)
              setTimeout(() => {
                setOpenModalRejectReason(true)
              }, 500)
            }}
          >
            Submit
          </Button>
        </footer>
      </Modal>

      <Modal
        variant='default'
        open={openModalRejectReason}
        title='Reject Return'
        className='max-w-3xl'
        setOpen={setOpenModalRejectReason}
      >
        <main className='my-6'>
          <textarea
            name='description'
            id='description'
            className='h-40 w-full rounded-lg-10 border border-netral-30 bg-netral-15 p-3.5 text-body-base shadow-1 outline-none ring-[2.5px] ring-transparent transition-all duration-300 ease-out focus:border-primary-border focus:ring-primary-surface disabled:bg-netral-20'
            placeholder='Description'
            value={
              "This product cannot be returned because there is no photo evidence of product damage."
            }
          />
        </main>

        <footer className='flex w-full justify-end gap-3'>
          <Button
            size='md'
            variant='default-nude'
            onClick={() => setOpenModalRejectReason(false)}
          >
            Cancel
          </Button>

          <Button
            size='md'
            variant='primary-bg'
            onClick={() => {
              setOpenModalRejectReason(false)
              setOpenAlertsReject(true)
            }}
          >
            Submit
          </Button>
        </footer>
      </Modal>

      <Alerts
        variant='error'
        open={openAlertsReject}
        setOpen={setOpenAlertsReject}
        title='Return has been rejected'
        desc='Product returns have been rejected, a message will be sent to the customer.'
      />
    </div>
  )
}

export default DBTransactionManageRefundDetail
