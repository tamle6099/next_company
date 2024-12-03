import React from "react"
import Link from "next/link"
import Image from "next/image"

import { ArrowLeftIcon } from "@/assets/icons"
import { usePathname, useRouter } from "next/navigation"
import { NijaLogo } from "@/assets/brands"

interface Layout {
  alt: string
  desc: string
  src: string
  children: React.ReactNode
}

const Layout: React.FC<Layout> = ({ src, alt, desc, children }) => {
  const router = useRouter()
  const currentPath = usePathname()

  return (
    <div className='Layout-Auth relative grid min-h-screen w-full grid-cols-12 bg-netral-15'>
      <section className='Auth-Banner relative col-span-7'>
        <Image
          className='h-full w-full object-cover'
          src={src ?? "/account-baby-photo.png"}
          alt={alt ?? "Auth Layout 1"}
          fill
        />
      </section>

      <section className='Auth-Main relative col-span-5 pb-14 pt-16'>
        <div className='container mx-auto max-w-screen-sm px-12 2xl:max-w-screen-md 2xl:px-10'>
          {currentPath === "/auth/login" ? (
            <Link
              className={`mb-16 flex items-center gap-2`}
              href={"/auth/login"}
            >
              <NijaLogo className='h-8 w-8' />
              <h5 className='text-body-xl font-semibold uppercase'>Nija Kit</h5>
            </Link>
          ) : (
            <div className='mb-16 flex items-center gap-2'>
              <button type='button' onClick={() => router.back()}>
                <ArrowLeftIcon className='h-6 w-6 text-netral-100' />
              </button>

              <Link href={"/auth/login"} className='flex items-center gap-2'>
                <NijaLogo className='h-7 w-7 2xl:h-8 2xl:w-8' />
                <h5 className='text-body-xl font-semibold uppercase'>
                  VEMORA
                </h5>
              </Link>
            </div>
          )}

          {children}
        </div>
      </section>
    </div>
  )
}

export default Layout
