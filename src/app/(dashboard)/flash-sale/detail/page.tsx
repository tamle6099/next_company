"use client"
import React from "react"
import { useRouter } from "next/navigation"

import { Modal, PageAction } from "@/components/moleculs"
import { Alerts, Button, Input, Title } from "@/components/atomics"

const DBFlashSaleDetail = () => {
  // --------------------------------------------------------------------------------
  const router = useRouter()
  // --------------------------------------------------------------------------------
  const data = {
    startDate: "20-11-2022",
    startTime: "16.30",
    endDate: "21-11-2022",
    endTime: "12.00",
    products: [
      {
        productName: "T-Men's UA Storm Armour Down 2.0 Jacket",
        category: "outer",
        quota: 22,
        price: "$178",
        discount: "$30",
        discountPrice: "$148",
        checked: false
      },
      {
        productName: "Windproof Handbell Oversized Long Coat",
        category: "outer",
        quota: 44,
        price: "$178",
        discount: "$30",
        discountPrice: "$148",
        checked: false
      },
      {
        productName: "Women's Stripe Sweater",
        category: "sweater",
        quota: 65,
        price: "$178",
        discount: "$30",
        discountPrice: "$148",
        checked: false
      },
      {
        productName: "Women's Turtleneck Sweater",
        category: "sweater",
        quota: 15,
        price: "$178",
        discount: "$30",
        discountPrice: "$148",
        checked: false
      },
      {
        productName: "One Set - Casual Hoodie with Buttons",
        category: "kids",
        quota: 15,
        price: "$178",
        discount: "$30",
        discountPrice: "$148",
        checked: false
      }
    ]
  }
  // --------------------------------------------------------------------------------
  const [openModalSave, setOpenModalSave] = React.useState(false)
  const [openAlertsSave, setOpenAlertsSave] = React.useState(false)
  // --------------------------------------------------------------------------------

  return (
    <div className='relative space-y-6 p-6'>
      <h1 className='text-heading-sm font-semibold'>Flash Sale Detail</h1>

      <section className='relative space-y-6 rounded-lg-10 bg-white p-6'>
        <Title size='lg' variant='default'>
          Date & Time
        </Title>

        <form className='grid grid-flow-col grid-rows-2 gap-5'>
          <div>
            <h5 className='mb-1.5 font-semibold text-netral-80'>Start Date</h5>
            <Input
              type='text'
              id='name'
              variant='default'
              placeholder='Please input the start date'
              defaultValue='20-11-2022'
            />
          </div>
          <div>
            <h5 className='mb-1.5 font-semibold text-netral-80'>Start Time</h5>
            <Input
              type='text'
              id='name'
              variant='default'
              placeholder='Please input the start time'
              defaultValue='16.30'
            />
          </div>
          <div>
            <h5 className='mb-1.5 font-semibold text-netral-80'>End Date</h5>
            <Input
              type='text'
              id='name'
              variant='default'
              placeholder='Please input the end date'
              defaultValue='21-11-2022'
            />
          </div>
          <div>
            <h5 className='mb-1.5 font-semibold text-netral-80'>End Time</h5>
            <Input
              type='text'
              id='name'
              variant='default'
              placeholder='Please input the end time'
              defaultValue='12.00'
            />
          </div>
        </form>
      </section>

      <section className='relative space-y-6 rounded-lg-10 bg-white p-6'>
        <Title size='lg' variant='default'>
          Product
        </Title>

        {/* Table */}
        <div className='overflow-x-auto'>
          <table className='w-full table-auto'>
            <thead className='bg-netral-15 text-body-sm font-semibold uppercase'>
              <tr>
                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>No</span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>Product</span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>Category</span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>Quota</span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>Price</span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>Discount</span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>
                    Discount Price
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-netral-20 pt-4 text-sm'>
              {data.products.map((item, index) => (
                <tr key={item.productName}>
                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='text-body-base font-medium text-netral-80'>
                      {index + 1}
                    </span>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='text-body-base font-medium text-netral-80'>
                      {item.productName}
                    </span>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='whitespace-pre-wrap break-words text-body-base font-medium text-netral-80'>
                      {item.category}
                    </span>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='whitespace-pre-wrap break-words text-body-base font-medium text-netral-80'>
                      {item.quota}
                    </span>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='whitespace-pre-wrap break-words text-body-base font-medium text-netral-80'>
                      {item.price}
                    </span>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='whitespace-pre-wrap break-words text-body-base font-medium text-netral-80'>
                      {item.discount}
                    </span>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='whitespace-pre-wrap break-words text-body-base font-medium text-netral-80'>
                      {item.discountPrice}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
        desc='You have successfully updated the flash sale data.'
      />
    </div>
  )
}

export default DBFlashSaleDetail
