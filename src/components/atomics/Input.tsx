import React from "react"

import { ArrowDown2Icon, CurrencyDollarIcon, PercentIcon } from "@/assets/icons"

interface Input {
  disabled?: boolean
  defaultValue?: any
  id: string
  message?: string
  label?: string
  logoSrc?: string
  placeholder: string
  type?: "text" | "password"
  value?: string
  variant?:
    | "default"
    | "default-error"
    | "phone"
    | "phone-error"
    | "logo"
    | "logo-error"
    | "discount"
    | "currency"
}

const Input: React.FC<Input> = ({
  disabled = false,
  defaultValue,
  id,
  label,
  logoSrc,
  message,
  placeholder,
  type = "text",
  value,
  variant = "default"
}) => {
  return (
    <div className='INPUT relative flex w-full flex-col items-start gap-1.5'>
      {label && (
        <label
          htmlFor={id}
          className={`text-body-base font-semibold ${
            (variant === "default" && "text-netral-80") ||
            (variant?.includes("error") && "text-error-main")
          }`}
        >
          {label ?? "Please Add Label"}
        </label>
      )}

      <div className='relative w-full'>
        {variant?.includes("phone") && (
          <div className='absolute left-3 top-1/2 z-10 flex w-fit -translate-y-1/2 items-center gap-1.5'>
            <button className='flex items-center gap-1 rounded-md bg-netral-20 px-2 py-1 text-netral-80'>
              <span className='text-body-base font-bold'>+62</span>

              <ArrowDown2Icon className='h-5 w-5 stroke-2' />
            </button>

            <span className='text-body-base font-normal text-netral-40'>|</span>
          </div>
        )}

        {variant?.includes("discount") && (
          <div className='absolute left-3 top-1/2 z-10 flex w-fit -translate-y-1/2 items-center gap-1.5'>
            <button className='flex items-center gap-1 rounded-md bg-netral-20 px-2 py-1 text-netral-80'>
              <PercentIcon className='h-5 w-5 stroke-2' />
            </button>
            <span className='text-body-base font-normal text-netral-30'>|</span>
          </div>
        )}

        {variant?.includes("currency") && (
          <div className='absolute left-3 top-1/2 z-10 flex w-fit -translate-y-1/2 items-center gap-1.5'>
            <button className='flex items-center gap-1 rounded-md bg-netral-20 px-2 py-1 text-netral-80'>
              <CurrencyDollarIcon className='h-5 w-5 stroke-2' />
            </button>
            <span className='text-body-base font-normal text-netral-30'>|</span>
          </div>
        )}

        {variant?.includes("logo") && (
          <div className='absolute left-3 top-1/2 z-10 flex w-fit -translate-y-1/2 items-center gap-1.5'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className='h-6 w-auto'
              src={logoSrc ?? "/input-bank-logo.png"}
              alt='Maybank Logo'
            />
          </div>
        )}
        <input
          id={id}
          name={id}
          type={type}
          className={`relative z-0 w-full rounded-lg border p-3 text-body-base font-normal text-netral-80 shadow-1 outline-none ring-[2.5px] ring-transparent transition-all duration-300 ease-out placeholder:text-netral-50 2xl:p-3.5 ${
            (variant === "default" &&
              "border-netral-30 focus:border-primary-border focus:ring-primary-surface disabled:bg-netral-20") ||
            (variant === "default-error" &&
              "border-error-border/50 focus:border-error-main focus:ring-error-surface") ||
            (variant === "phone" &&
              "border-netral-30 pl-24 focus:border-primary-border focus:ring-primary-surface disabled:bg-netral-20 2xl:pl-[102px]") ||
            (variant === "phone-error" &&
              "border-error-border/50 pl-24 focus:border-error-border focus:ring-error-surface 2xl:pl-[102px]") ||
            (variant === "currency" &&
              "border-netral-30 pl-16 focus:border-primary-border focus:ring-primary-surface disabled:bg-netral-20 2xl:pl-16") ||
            (variant === "discount" &&
              "border-netral-30 pl-16 focus:border-primary-border focus:ring-primary-surface disabled:bg-netral-20 2xl:pl-16") ||
            (variant === "logo" &&
              "border-netral-30 pl-28 focus:border-primary-border focus:ring-primary-surface disabled:bg-netral-20 2xl:pl-28") ||
            (variant === "logo-error" &&
              "border-error-border/50 pl-28 focus:border-error-border focus:ring-error-surface 2xl:pl-28")
          }`}
          placeholder={placeholder ?? "Please add your placeholder"}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
        />
      </div>

      {variant && message && (
        <p
          className={`text-body-base tracking-[1%] ${
            variant.includes("error") ? "text-error-main" : "text-netral-50"
          }`}
        >
          {message ?? "This is an error message."}
        </p>
      )}
    </div>
  )
}

export default Input
