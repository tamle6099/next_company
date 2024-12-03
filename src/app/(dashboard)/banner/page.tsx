"use client"

import React, { useState } from "react"
import Image from "next/image"

import { Modal } from "@/components/moleculs"
import {
  Alerts,
  Button,
  Pagination,
  Selectbox,
  Title,
  Toggle
} from "@/components/atomics"

import {
  FolderSimplePlusIcon,
  MagnifyingGlassIcon,
  PencilSimpleIcon,
  RepeatIcon,
  SelectionPlusIcon,
  TrashIcon
} from "@/assets/icons"

import { DropzoneIll, NoBannersIll } from "@/assets/illustration"

const DBBanner = () => {
  /**
   * =======================
   * Dummy Data - Outlets
   * =======================
   */
  const [listData, setListData] = useState([
    {
      image: "/banners/banner-photo-1.png",
      type: "Banner Best Seller Collection",
      createdAt: "05-12-2022",
      show: false
    },
    {
      image: "/banners/banner-photo-2.png",
      type: "Banner Hero Section",
      createdAt: "24-11-2022",
      show: false
    },
    {
      image: "/banners/banner-photo-3.png",
      type: "Banner Popular Collection",
      createdAt: "29-11-2022",
      show: false
    }
  ])
  // -----------------------------------------------------------------------------//
  const changeShow = (index: number, show: boolean) => {
    const newListData = [...listData]
    newListData[index].show = show
    setListData(newListData)
  }
  const [openAlertsSuccess, setOpenAlertsSuccess] = React.useState(false)
  const [openAlertsEditSuccess, setOpenAlertsEditSuccess] =
    React.useState(false)
  const [openAlertsDeleteSuccess, setOpenAlertsDeleteSuccess] =
    React.useState(false)
  const [openModalConfirmation, setOpenModalConfirmation] =
    React.useState(false)
  const [openModalEditConfirmation, setOpenModalEditConfirmation] =
    React.useState(false)
  const [openModalDeleteConfirmation, setOpenModalDeleteConfirmation] =
    React.useState(false)
  const [openModalDropzoneBanner, setOpenModalDropzoneBanner] =
    React.useState(false)
  const [openModalEditBanner, setOpenModalEditBanner] = React.useState(false)
  // -----------------------------------------------------------------------------//
  const [activeState, setActiveState] = React.useState(1)

  const nextState = () => {
    if (activeState > 1) {
      setOpenModalDropzoneBanner(false)

      setTimeout(() => {
        setOpenModalConfirmation(true)
      }, 500)

      setActiveState(1)
    } else {
      setActiveState(activeState + 1)
    }
  }

  const saveChanges = () => {
    setOpenModalEditBanner(false)

    setOpenModalEditConfirmation(true)
  }
  // -----------------------------------------------------------------------------//

  return (
    <div className='relative space-y-6 p-6'>
      <h1 className='text-heading-sm font-semibold'>Banner</h1>

      <section className='relative space-y-6 rounded-lg-10 bg-white p-6'>
        {/* Navigation */}
        <nav className='space-y-6'>
          <Title size='lg' variant='default'>
            Banner
          </Title>

          <div className='flex items-center justify-between'>
            <div className='relative w-72 2xl:w-96'>
              <MagnifyingGlassIcon className='absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-netral-50' />
              <input
                className='w-full rounded-lg border border-transparent bg-netral-20 px-3.5 py-2 pl-11 outline-0 ring-2 ring-transparent transition-all duration-300 ease-out focus-within:ring-primary-surface focus:border-primary-main 2xl:py-2.5'
                placeholder='Search'
              />
            </div>

            <Button
              size='md'
              variant='primary-bg'
              onClick={() => setOpenModalDropzoneBanner(true)}
            >
              <FolderSimplePlusIcon className='h-5 w-5 fill-white stroke-white stroke-[4px]' />
              Add Banner
            </Button>
          </div>
        </nav>

        {/* Table */}
        <div className='mb-6 overflow-x-auto'>
          <table className='w-full table-auto'>
            <thead className='bg-netral-15 text-body-sm font-semibold uppercase'>
              <tr>
                <th className='w-px whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>No</span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>Image</span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>Type</span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>Created At</span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>Show</span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>Action</span>
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-netral-20 pt-4 text-sm'>
              {listData.map((item, index) => (
                <tr key={item.type}>
                  <td className='w-px whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='text-body-base font-medium text-netral-80'>
                      {index + 1}
                    </span>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <div className='relative aspect-video w-40 overflow-hidden rounded-lg-10'>
                      <Image
                        src={item.image}
                        className='h-full w-full object-cover'
                        alt={`Banner Image ${item}`}
                        fill
                      />
                    </div>
                  </td>

                  <td className='whitespace-pre-wrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='w-[200px] whitespace-pre-wrap break-words text-body-base font-medium text-netral-80'>
                      {item.type}
                    </span>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='text-body-base font-medium text-netral-80'>
                      {item.createdAt}
                    </span>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <Toggle
                      enabled={item.show}
                      setEnabled={(value: boolean) => changeShow(index, value)}
                    />
                  </td>
                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <div className='flex flex-row gap-3'>
                      <Button
                        size='md'
                        variant='default-bg'
                        onClick={() => setOpenModalEditBanner(true)}
                      >
                        <PencilSimpleIcon className='h-5 w-5' />
                      </Button>

                      <Button
                        size='md'
                        variant='default-bg'
                        onClick={() => setOpenModalDeleteConfirmation(true)}
                      >
                        <TrashIcon className='h-5 w-5 text-error-main' />
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
        title='Add Banner'
        open={openModalDropzoneBanner}
        setOpen={setOpenModalDropzoneBanner}
        className='max-w-4xl !overflow-y-visible'
      >
        {activeState === 1 && (
          <>
            <main className='mt-10 flex w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-netral-30 bg-netral-15 py-20'>
              <DropzoneIll className='h-32 w-32' />

              <h5 className='mb-1 mt-6 text-body-lg font-semibold'>
                Click to upload, or drag and drop
              </h5>

              <p className='text-body-sm text-netral-50'>
                {"SVG, PNG, JPEG (MAX 800X400px)"}
              </p>
            </main>

            <div className='relative z-[99999999999] mb-6 mt-4'>
              <Selectbox
                datas={[
                  {
                    id: 1,
                    name: "Select Type"
                  },
                  {
                    id: 2,
                    name: "Banner Hero Section"
                  },
                  {
                    id: 2,
                    name: "Banner Best Seller Collection"
                  },
                  {
                    id: 2,
                    name: "Banner Popular Collection"
                  }
                ]}
              />
            </div>
          </>
        )}

        {activeState === 2 && (
          <>
            <main className='relative my-10 flex w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-netral-30 bg-netral-15'>
              <div className='relative aspect-video h-96 before:absolute before:z-10 before:h-full before:w-full before:bg-black/20'>
                <Button
                  size='md'
                  variant='default-bg'
                  className='absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2'
                >
                  <RepeatIcon className='h-5 w-5' />
                  Replace
                </Button>
                <Image
                  className='h-full w-full object-cover'
                  src={"/banner-dropzone-1.png"}
                  alt='Banner Dropzone 1'
                  fill
                />
              </div>

              <div className='absolute bottom-4 right-4 z-30'>
                <Button size='md' variant='default-bg'>
                  <SelectionPlusIcon className='h-5 w-5' />
                  Crop
                </Button>
              </div>
            </main>

            <div className='relative z-[99999999999] mb-6 mt-4'>
              <Selectbox
                datas={[
                  {
                    id: 1,
                    name: "Select Type"
                  },
                  {
                    id: 2,
                    name: "Banner Hero Section"
                  },
                  {
                    id: 2,
                    name: "Banner Best Seller Collection"
                  },
                  {
                    id: 2,
                    name: "Banner Popular Collection"
                  }
                ]}
              />
            </div>
          </>
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
        open={openModalConfirmation}
        title='Add Banner'
        className='max-w-lg !overflow-y-visible'
        setOpen={setOpenModalConfirmation}
      >
        <main className='mb-10 mt-4'>
          <p className='text-body-base text-netral-80'>
            Are you sure to add this banner?
          </p>
        </main>

        <footer className='flex w-full justify-end gap-3'>
          <Button
            size='md'
            variant='default-nude'
            onClick={() => setOpenModalConfirmation(false)}
          >
            Cancel
          </Button>

          <Button
            size='md'
            variant='primary-bg'
            onClick={() => {
              setOpenModalConfirmation(false)
              setOpenAlertsSuccess(true)
            }}
          >
            Yes
          </Button>
        </footer>
      </Modal>

      <Alerts
        variant='success'
        open={openAlertsSuccess}
        setOpen={setOpenAlertsSuccess}
        title='Banner added successfully'
        desc='Banner successfully added, you can edit or replace the banner in the action column.'
      />

      <Modal
        variant='default'
        title='Edit Banner'
        open={openModalEditBanner}
        setOpen={setOpenModalEditBanner}
        className='max-w-4xl !overflow-y-visible'
      >
        <main className='relative my-10 flex w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-netral-30 bg-netral-15'>
          <div className='relative aspect-video h-96 before:absolute before:z-10 before:h-full before:w-full before:bg-black/20'>
            <Button
              size='md'
              variant='default-bg'
              className='absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2'
            >
              <RepeatIcon className='h-5 w-5' />
              Replace
            </Button>
            <Image
              className='h-full w-full object-cover'
              src={"/banner-dropzone-1.png"}
              alt='Banner Dropzone 1'
              fill
            />
          </div>

          <div className='absolute bottom-4 right-4 z-30'>
            <Button size='md' variant='default-bg'>
              <SelectionPlusIcon className='h-5 w-5' />
              Crop
            </Button>
          </div>
        </main>

        <div className='relative z-[99999999999] mb-6 mt-4'>
          <Selectbox
            datas={[
              {
                id: 1,
                name: "Select Type"
              },
              {
                id: 2,
                name: "Banner Hero Section"
              },
              {
                id: 2,
                name: "Banner Best Seller Collection"
              },
              {
                id: 2,
                name: "Banner Popular Collection"
              }
            ]}
          />
        </div>

        <footer className='flex flex-row justify-end gap-3'>
          <Button size='md' variant='default-nude'>
            Discard
          </Button>

          <Button size='md' variant='primary-bg' onClick={saveChanges}>
            Save
          </Button>
        </footer>
      </Modal>

      <Modal
        variant='primary'
        open={openModalEditConfirmation}
        title='Update Banner'
        className='max-w-lg !overflow-y-visible'
        setOpen={setOpenModalEditConfirmation}
      >
        <main className='mb-10 mt-4'>
          <p className='text-body-base text-netral-80'>
            Are you sure to want to update this banner?
          </p>
        </main>

        <footer className='flex w-full justify-end gap-3'>
          <Button
            size='md'
            variant='default-nude'
            onClick={() => setOpenModalEditConfirmation(false)}
          >
            Cancel
          </Button>

          <Button
            size='md'
            variant='primary-bg'
            onClick={() => {
              setOpenModalEditConfirmation(false)
              setOpenAlertsEditSuccess(true)
            }}
          >
            Yes
          </Button>
        </footer>
      </Modal>

      <Alerts
        variant='success'
        open={openAlertsEditSuccess}
        setOpen={setOpenAlertsEditSuccess}
        title='Banner updated successfully'
        desc='Banner successfully updated, you can view the updated banner.'
      />

      <Modal
        variant='primary'
        open={openModalDeleteConfirmation}
        title='Delete Banner'
        className='max-w-lg !overflow-y-visible'
        setOpen={setOpenModalDeleteConfirmation}
      >
        <main className='mb-10 mt-4'>
          <p className='text-body-base text-netral-80'>
            Are you sure want to delete this banner?
          </p>
        </main>

        <footer className='flex w-full justify-end gap-3'>
          <Button
            size='md'
            variant='default-nude'
            onClick={() => setOpenModalDeleteConfirmation(false)}
          >
            Cancel
          </Button>

          <Button
            size='md'
            variant='primary-bg'
            onClick={() => {
              setOpenModalDeleteConfirmation(false)
              setOpenAlertsDeleteSuccess(true)
            }}
          >
            Yes
          </Button>
        </footer>
      </Modal>

      <Alerts
        variant='error'
        open={openAlertsDeleteSuccess}
        setOpen={setOpenAlertsDeleteSuccess}
        title='Banner deleted successfully'
        desc='Banner successfully deleted.'
      />
    </div>
  )
}

export default DBBanner
