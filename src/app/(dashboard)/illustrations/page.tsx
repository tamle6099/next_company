import React from "react"
import { Title } from "@/components/atomics"
import {
  NoBannersIll,
  NoBuyersIll,
  NoCategoryIll,
  NoFlashsaleIll,
  NoOutletsIll,
  NoProductsIll,
  NoReturnsIll,
  NoTransactionIll,
  NoUserRoleIll,
  NoUsersIll
} from "@/assets/illustration"

const DBIllustrations = () => {
  const listIllustration = [
    {
      id: 1,
      name: "NoUsersIll",
      location: "@/assets/illustration",
      component: <NoUsersIll />
    },
    {
      id: 2,
      name: "NoBuyersIll",
      location: "@/assets/illustration",
      component: <NoBuyersIll />
    },
    {
      id: 3,
      name: "NoBannersIll",
      location: "@/assets/illustration",
      component: <NoBannersIll />
    },
    {
      id: 4,
      name: "NoOutletsIll",
      location: "@/assets/illustration",
      component: <NoOutletsIll />
    },
    {
      id: 5,
      name: "NoReturnsIll",
      location: "@/assets/illustration",
      component: <NoReturnsIll />
    },
    {
      id: 6,
      name: "NoCategoryIll",
      location: "@/assets/illustration",
      component: <NoCategoryIll />
    },
    {
      id: 7,
      name: "NoProductsIll",
      location: "@/assets/illustration",
      component: <NoProductsIll />
    },
    {
      id: 8,
      name: "NoUserRoleIll",
      location: "@/assets/illustration",
      component: <NoUserRoleIll />
    },
    {
      id: 9,
      name: "NoFlashSaleIll",
      location: "@/assets/illustration",
      component: <NoFlashsaleIll />
    },
    {
      id: 9,
      name: "NoTransactionIll",
      location: "@/assets/illustration",
      component: <NoTransactionIll />
    }
  ]
  return (
    <div className='relative space-y-6 p-6'>
      <h1 className='text-heading-sm font-semibold'>Illustration </h1>

      <section className='relative w-full space-y-7 rounded-lg-10 bg-white p-6'>
        <Title variant='default' size='lg'>
          Illustration List
        </Title>

        <div className='grid grid-cols-3 gap-8'>
          {listIllustration.map((ill) => (
            <section
              key={ill.id}
              className='group relative flex items-center justify-center overflow-hidden rounded-xl'
            >
              <figure className='absolute z-10 flex h-full w-full items-end justify-between bg-black/10 p-4 opacity-0 transition-all duration-300 ease-in group-hover:opacity-100'>
                <span className='h-fit w-full space-y-3 rounded-xl border border-primary-surface/25 bg-white/90 px-6 py-3 backdrop-blur-sm'>
                  <div>
                    <p className='font-medium text-netral-80'>Name: </p>
                    <p className='font-medium text-primary-main'>{ill.name}</p>
                  </div>

                  <div>
                    <p className='font-medium text-netral-80'>Location: </p>
                    <p className='font-medium text-primary-main'>
                      {ill.location}
                    </p>
                  </div>
                </span>
              </figure>

              <div className='[&>svg]:h-56 [&>svg]:w-56'>{ill.component}</div>
            </section>
          ))}
        </div>
      </section>
    </div>
  )
}

export default DBIllustrations
