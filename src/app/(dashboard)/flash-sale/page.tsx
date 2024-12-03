"use client"
import React from "react"

import {
  Alerts,
  Badge,
  Button,
  Input,
  Pagination,
  Title
} from "@/components/atomics"
import { Modal } from "@/components/moleculs"

import {
  CheckIcon,
  FunnelIcon,
  LightningIcon,
  MagnifyingGlassIcon,
  SortAscendingIcon,
  TrashIcon
} from "@/assets/icons"

const DBFlashSale = () => {
  // -------------------------------------------------------------------------------------//
  const [listData, setListData] = React.useState([
    {
      startDate: "20-11-2022, 16.30",
      endDate: "21-11-2022, 16.30",
      totalProducts: 65,
      status: "upcoming"
    },
    {
      startDate: "12-12-2022, 00.00",
      endDate: "12-12-2022, 12.00",
      totalProducts: 44,
      status: "ongoing"
    },
    {
      startDate: "11-11-2022, 00.00",
      endDate: "11-11-2022, 12.00",
      totalProducts: 32,
      status: "expired"
    },
    {
      startDate: "11-11-2022, 00.00",
      endDate: "11-11-2022, 12.00",
      totalProducts: 54,
      status: "expired"
    },
    {
      startDate: "11-11-2022, 00.00",
      endDate: "11-11-2022, 12.00",
      totalProducts: 76,
      status: "expired"
    }
  ])
  const [activeState, setActiveState] = React.useState(1)
  const [openModalFlashSale, setOpenModalFlashSale] = React.useState(false)
  const [openModalDelete, setOpenModalDelete] = React.useState(false)
  // -------------------------------------------------------------------------------------//
  const [openSuccess, setOpenSuccess] = React.useState(false)
  const [openAlertsDelete, setOpenAlertsDelete] = React.useState(false)

  const openSuccessAlerts = () => {
    setOpenSuccess(true)

    setTimeout(() => {
      setOpenSuccess(false)
    }, 3000)
  }
  // -------------------------------------------------------------------------------------//

  return (
    <div className='relative space-y-6 p-6'>
      <h1 className='text-heading-sm font-semibold'>Flash Sale</h1>

      <section className='relative space-y-6 rounded-lg-10 bg-white p-6'>
        {/* Navigation */}
        <nav className='space-y-6'>
          <Title size='lg' variant='default'>
            Flash Sale
          </Title>

          <section className='flex items-center justify-between'>
            <div className='relative w-72 2xl:w-96'>
              <MagnifyingGlassIcon className='absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-netral-50' />
              <input
                className='w-full rounded-lg border border-transparent bg-netral-20 px-3.5 py-2.5 pl-11  outline-0 ring-2 ring-transparent transition-all duration-300 ease-out focus-within:ring-primary-surface focus:border-primary-main'
                placeholder='Search'
              />
            </div>

            <div className='flex flex-row gap-3'>
              <Button size='md' variant='default-bg'>
                Sort
                <SortAscendingIcon className='h-4 w-4 stroke-netral-100 stroke-[4px]' />
              </Button>

              <Button size='md' variant='default-bg'>
                Filter
                <FunnelIcon className='h-4 w-4 stroke-netral-100 stroke-[4px]' />
              </Button>

              <Button
                size='md'
                variant='primary-bg'
                onClick={() => setOpenModalFlashSale(true)}
              >
                <LightningIcon className='h-4 w-4 stroke-[4px] text-white' />
                Add flash sale
              </Button>
            </div>
          </section>
        </nav>

        {/* Table */}
        <div className='mb-6 overflow-x-auto'>
          <table className='w-full table-auto'>
            <thead className='bg-netral-15 text-body-sm font-semibold uppercase'>
              <tr>
                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>Start Date</span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>End Date</span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>
                    Total Products
                  </span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>Status</span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>Action</span>
                </th>
              </tr>
            </thead>

            <tbody className='divide-y divide-netral-20 pt-4 text-sm'>
              {listData.map((item, index) => (
                <tr key={item.totalProducts}>
                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='text-body-base font-medium text-netral-80'>
                      {item.startDate}
                    </span>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='text-body-base font-medium text-netral-80'>
                      {item.endDate}
                    </span>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='text-body-base font-medium text-netral-80'>
                      {item.totalProducts}
                    </span>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left capitalize first:pl-5 last:pr-5'>
                    {item.status === "ongoing" ? (
                      <Badge variant='success'>{item.status}</Badge>
                    ) : item.status === "upcoming" ? (
                      <Badge variant='default'>{item.status}</Badge>
                    ) : item.status === "expired" ? (
                      <Badge variant='error'>{item.status}</Badge>
                    ) : null}
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <div className='flex'>
                      <Button
                        size='md'
                        variant='default-bg'
                        className='mr-4'
                        href={"/flash-sale/detail"}
                      >
                        <svg
                          width='16'
                          height='16'
                          viewBox='0 0 16 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M5.79289 13.4999H3C2.86739 13.4999 2.74021 13.4472 2.64645 13.3535C2.55268 13.2597 2.5 13.1325 2.5 12.9999V10.207C2.5 10.1414 2.51293 10.0764 2.53806 10.0157C2.56319 9.95503 2.60002 9.89991 2.64645 9.85348L10.1464 2.35348C10.2402 2.25971 10.3674 2.20703 10.5 2.20703C10.6326 2.20703 10.7598 2.25971 10.8536 2.35348L13.6464 5.14637C13.7402 5.24014 13.7929 5.36732 13.7929 5.49992C13.7929 5.63253 13.7402 5.75971 13.6464 5.85348L6.14645 13.3535C6.10002 13.3999 6.0449 13.4367 5.98424 13.4619C5.92357 13.487 5.85855 13.4999 5.79289 13.4999Z'
                            stroke='#3B4453'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                          <path
                            d='M8.5 4L12 7.5'
                            stroke='#3B4453'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                          <path
                            d='M5.96848 13.4675L2.53223 10.0312'
                            stroke='#3B4453'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>
                      </Button>
                      <Button
                        size='md'
                        variant='default-bg'
                        onClick={() => setOpenModalDelete(true)}
                      >
                        <svg
                          width='16'
                          height='16'
                          viewBox='0 0 16 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M13.5 3.5L2.5 3.50001'
                            stroke='#FF5630'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                          <path
                            d='M6.5 6.5V10.5'
                            stroke='#FF5630'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                          <path
                            d='M9.5 6.5V10.5'
                            stroke='#FF5630'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                          <path
                            d='M12.5 3.5V13C12.5 13.1326 12.4473 13.2598 12.3536 13.3536C12.2598 13.4473 12.1326 13.5 12 13.5H4C3.86739 13.5 3.74021 13.4473 3.64645 13.3536C3.55268 13.2598 3.5 13.1326 3.5 13V3.5'
                            stroke='#FF5630'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                          <path
                            d='M10.5 3.5V2.5C10.5 2.23478 10.3946 1.98043 10.2071 1.79289C10.0196 1.60536 9.76522 1.5 9.5 1.5H6.5C6.23478 1.5 5.98043 1.60536 5.79289 1.79289C5.60536 1.98043 5.5 2.23478 5.5 2.5V3.5'
                            stroke='#FF5630'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <Pagination />
      </section>

      <Modal
        variant='default'
        className='max-w-6xl'
        title='Add Flash Sale'
        open={openModalFlashSale}
        setOpen={setOpenModalFlashSale}
      >
        <main className='my-10 flex flex-col items-center justify-center gap-10'>
          <nav className='relative w-fit'>
            <div className='absolute left-1/2 top-5 -z-10 h-0.5 w-10/12 -translate-x-1/2 bg-netral-40'></div>
            <section className='flex items-center justify-center gap-20'>
              <div className='relative z-10 flex flex-col items-center gap-2'>
                <span className='flex h-10 w-10 items-center justify-center rounded-full border border-primary-border bg-primary-main text-body-xl font-semibold text-white'>
                  {activeState === 1 ? (
                    "1"
                  ) : (
                    <CheckIcon className='h-6 w-6 text-white' />
                  )}
                </span>

                <h5 className='text-body-sm font-semibold text-netral-100'>
                  Set Date & Time
                </h5>
              </div>

              <div className='flex flex-col items-center gap-2'>
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full border ${
                    activeState > 2
                      ? "border-primary-border bg-primary-main"
                      : "border-netral-50 bg-netral-50"
                  } text-body-xl font-semibold text-white`}
                >
                  {activeState > 0 && activeState <= 2 && "2"}

                  {activeState > 2 && (
                    <CheckIcon className='h-6 w-6 text-white' />
                  )}
                </span>

                <h5 className='text-body-sm font-semibold text-netral-50'>
                  Select Merchant
                </h5>
              </div>

              <div className='flex flex-col items-center gap-2'>
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full border ${
                    activeState < 3
                      ? "border-netral-50 bg-netral-50"
                      : "border-primary-border bg-primary-main"
                  } text-body-xl font-semibold text-white`}
                >
                  3
                </span>
                <h5 className='text-body-sm font-semibold text-netral-50'>
                  Confirmation
                </h5>
              </div>
            </section>
          </nav>

          <header className='space-y-2 text-center'>
            <h3 className='text-heading-sm font-semibold'>
              {activeState === 1 && "Set Date & Time"}
              {activeState === 2 && "Set Discount"}
              {activeState === 3 && "Set Confirmation"}
            </h3>
            <p className='text-body-base text-netral-50'>
              {activeState === 1 &&
                "Set the date and time for the upcoming flash sale"}
              {activeState === 2 &&
                "Set a discount for each product in the flash sale"}
              {activeState === 3 &&
                "Double check each product for the upcoming flash sale"}
            </p>
          </header>

          {activeState === 1 && (
            <div className='grid w-full grid-cols-2 gap-6'>
              <Input
                id='start-date'
                variant='default'
                label='Start Date'
                placeholder='DD/MM/YYYY'
              />

              <Input
                id='end-date'
                variant='default'
                label='End Date'
                placeholder='DD/MM/YYYY'
              />

              <Input
                id='start-time'
                variant='default'
                label='Start Time'
                placeholder='00.00'
              />

              <Input
                id='end-time'
                variant='default'
                label='End Time'
                placeholder='00.00'
              />
            </div>
          )}

          {activeState === 2 && (
            <div className='w-full overflow-x-auto'>
              <table className='w-full table-auto'>
                <thead className='bg-netral-15 text-body-sm font-semibold uppercase'>
                  <tr>
                    <th className='whitespace-nowrap px-8 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                      <span className='text-body-sm font-semibold'>
                        Product
                      </span>
                    </th>

                    <th className='whitespace-nowrap px-8 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                      <span className='text-body-sm font-semibold'>
                        Category
                      </span>
                    </th>

                    <th className='whitespace-nowrap px-8 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                      <span className='text-body-sm font-semibold'>Price</span>
                    </th>

                    <th className='whitespace-nowrap px-8 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                      <span className='text-body-sm font-semibold'>Quota</span>
                    </th>

                    <th className='whitespace-nowrap px-8 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                      <span className='text-body-sm font-semibold'>
                        Discount by Percent
                      </span>
                    </th>

                    <th className='whitespace-nowrap px-8 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                      <span className='text-body-sm font-semibold'>Action</span>
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-netral-20 pt-4 text-sm'>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <tr key={item}>
                      <td className='whitespace-pre-wrap px-8 py-5 text-left first:pl-5 last:pr-5'>
                        <span className='w-24 whitespace-pre-wrap text-body-base font-medium text-netral-80'>
                          One Set - Casual Hoodie with Buttons for Tooddler
                        </span>
                      </td>

                      <td className='whitespace-nowrap px-8 py-5 text-left first:pl-5 last:pr-5'>
                        <span className='text-body-base font-medium text-netral-80'>
                          Hodie
                        </span>
                      </td>

                      <td className='whitespace-nowrap px-8 py-5 text-left first:pl-5 last:pr-5'>
                        <span className='text-body-base font-medium text-netral-80'>
                          $309C
                        </span>
                      </td>

                      <td className='whitespace-nowrap px-8 py-5 text-left first:pl-5 last:pr-5'>
                        <Input
                          id='start-date'
                          variant='default'
                          placeholder='Quota'
                          defaultValue='65'
                        />
                      </td>

                      <td className='whitespace-nowrap px-8 py-5 text-left first:pl-5 last:pr-5'>
                        <Input
                          id='start-date'
                          variant='default'
                          placeholder='Discount'
                          defaultValue='30'
                        />
                      </td>

                      <td className='whitespace-nowrap px-8 py-5 text-left first:pl-5 last:pr-5'>
                        <Button size='sm' variant='default-bg'>
                          <TrashIcon className='h-4 w-4 stroke-[4px] text-error-main' />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeState === 3 && (
            <div className='w-full overflow-x-auto'>
              <table className='w-full table-auto'>
                <thead className='bg-netral-15 text-body-sm font-semibold uppercase'>
                  <tr>
                    <th className='whitespace-nowrap px-8 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                      <span className='text-body-sm font-semibold'>No</span>
                    </th>

                    <th className='whitespace-nowrap px-8 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                      <span className='text-body-sm font-semibold'>
                        Product
                      </span>
                    </th>

                    <th className='whitespace-nowrap px-8 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                      <span className='text-body-sm font-semibold'>
                        Category
                      </span>
                    </th>

                    <th className='whitespace-nowrap px-8 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                      <span className='text-body-sm font-semibold'>Price</span>
                    </th>

                    <th className='whitespace-nowrap px-8 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                      <span className='text-body-sm font-semibold'>Quota</span>
                    </th>

                    <th className='whitespace-nowrap px-8 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                      <span className='text-body-sm font-semibold'>
                        Discount
                      </span>
                    </th>

                    <th className='whitespace-nowrap px-8 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                      <span className='text-body-sm font-semibold'>
                        Discount Percent
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-netral-20 pt-4 text-sm'>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <tr key={item}>
                      <td className='whitespace-nowrap px-8 py-5 text-left first:pl-5 last:pr-5'>
                        <span className='text-body-base font-medium text-primary-main'>
                          {item}
                        </span>
                      </td>

                      <td className='whitespace-pre-wrap px-8 py-5 text-left first:pl-5 last:pr-5'>
                        <span className='w-24 whitespace-pre-wrap text-body-base font-medium text-netral-80'>
                          One Set - Casual Hoodie with Buttons for Tooddler
                        </span>
                      </td>

                      <td className='whitespace-nowrap px-8 py-5 text-left first:pl-5 last:pr-5'>
                        <span className='text-body-base font-medium text-netral-80'>
                          Jacket
                        </span>
                      </td>

                      <td className='whitespace-nowrap px-8 py-5 text-left first:pl-5 last:pr-5'>
                        <span className='text-body-base font-medium text-netral-80'>
                          22
                        </span>
                      </td>

                      <td className='whitespace-nowrap px-8 py-5 text-left first:pl-5 last:pr-5'>
                        <span className='text-body-base font-medium text-netral-80'>
                          $129
                        </span>
                      </td>

                      <td className='whitespace-nowrap px-8 py-5 text-left first:pl-5 last:pr-5'>
                        <span className='text-body-base font-medium text-netral-80'>
                          $30
                        </span>
                      </td>

                      <td className='whitespace-nowrap px-8 py-5 text-left first:pl-5 last:pr-5'>
                        <span className='text-body-base font-medium text-netral-80'>
                          $232
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </main>

        <footer className='flex justify-end gap-3'>
          <Button
            size='md'
            variant='primary-nude'
            onClick={() => {
              if (activeState === 1) {
                setOpenModalFlashSale(false)
              } else {
                setActiveState(activeState - 1)
              }
            }}
          >
            {activeState === 1 ? "Cancel" : "Previous"}
          </Button>

          <Button
            size='md'
            variant='primary-bg'
            onClick={() => {
              if (activeState < 3) {
                if (openModalFlashSale === false) {
                  setActiveState(1)
                } else {
                  setActiveState(activeState + 1)
                }
              } else {
                setActiveState(1)
                setOpenModalFlashSale(false)
                openSuccessAlerts()
              }
            }}
          >
            {activeState === 3 ? "Submit" : "Next"}
          </Button>
        </footer>
      </Modal>

      <Modal
        variant='primary'
        open={openModalDelete}
        title='Delete Flash Sale'
        className='max-w-lg'
        setOpen={setOpenModalDelete}
      >
        <main className='mb-10 mt-4'>
          <p className='text-body-base text-netral-80'>
            Are you sure want to delete this flash sale? Flash sale which
            already deleted can not be recovered.
          </p>
        </main>

        <footer className='flex w-full justify-end gap-3'>
          <Button
            size='md'
            variant='default-nude'
            onClick={() => setOpenModalDelete(false)}
          >
            Cancel
          </Button>
          <Button
            size='md'
            variant='error-bg'
            onClick={() => {
              setOpenModalDelete(false)
              setOpenAlertsDelete(true)
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
        title='Flash sale has been added'
        desc='Flash sale has been added, you can check the status of the flash sale to make sure.'
      />

      <Alerts
        variant='success'
        open={openAlertsDelete}
        setOpen={setOpenAlertsDelete}
        title='Flash sale has been deleted'
        desc='Flash sale has been deleted, you can check the status of the flash sale to make sure.'
      />
    </div>
  )
}

export default DBFlashSale
