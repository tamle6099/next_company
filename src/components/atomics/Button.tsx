import React from "react"
import { useRouter } from "next/navigation"

interface Button {
  children: React.ReactNode
  className?: string
  disabled?: boolean
  href?: string
  size?: "sm" | "md" | "lg"
  variant:
    | "primary-bg"
    | "primary-outline"
    | "primary-nude"
    | "warning-bg"
    | "warning-outline"
    | "warning-nude"
    | "error-bg"
    | "error-outline"
    | "error-nude"
    | "default-bg"
    | "default-outline"
    | "default-nude"
    | "disabled-bg"
    | "disabled-outline"
    | "disabled-nude"

  onClick?: React.MouseEventHandler
}

const Button: React.FC<Button> = ({
  children,
  className,
  disabled = false,
  href,
  onClick,
  size = "lg",
  variant = "primary-bg"
}) => {
  const router = useRouter()

  const gotoLink = () => {
    router.push(`${href}`)
  }

  return (
    <button
      type='button'
      onClick={(href && gotoLink) || onClick}
      className={`Button ${
        (variant === "primary-bg" &&
          "Primary-Bg border-transparent bg-primary-main text-white hover:bg-primary-hover focus:ring-primary-border") ||
        (variant === "error-bg" &&
          "Error-Bg border-transparent bg-error-main text-white hover:bg-error-hover focus:ring-error-border") ||
        (variant === "warning-bg" &&
          "Warning-Bg border-transparent bg-warning-main text-white hover:bg-warning-hover focus:ring-warning-border") ||
        (variant === "default-bg" &&
          "Default-Bg border-transparent bg-netral-20 text-netral-100 hover:bg-netral-30 focus:border-netral-30 focus:ring-netral-40") ||
        (variant === "primary-outline" &&
          "Primary-Outline border-primary-main bg-transparent text-primary-main hover:bg-primary-surface focus:ring-primary-border/25") ||
        (variant === "warning-outline" &&
          "Warning-Outline border-warning-main bg-transparent text-warning-main hover:bg-warning-surface focus:ring-warning-border/25") ||
        (variant === "error-outline" &&
          "Erorr-Outline border-error-main bg-transparent text-error-main hover:bg-error-surface focus:ring-error-border/25") ||
        (variant === "default-outline" &&
          "Default-Outline border-netral-70 bg-transparent text-netral-70 hover:bg-netral-30 focus:ring-netral-50/25") ||
        (variant === "primary-nude" &&
          "Primary-Nude border-transparent bg-transparent text-primary-main hover:bg-primary-surface focus:ring-primary-border/25") ||
        (variant === "warning-nude" &&
          "Warning-Nude border-transparent bg-transparent text-warning-main hover:bg-warning-surface focus:ring-warning-border/25") ||
        (variant === "error-nude" &&
          "Error-Nude border-transparent bg-transparent text-error-main hover:bg-error-surface focus:ring-error-border/25") ||
        (variant === "default-nude" &&
          "Default-Nude border-transparent bg-transparent text-netral-70 hover:bg-netral-30 focus:ring-netral-50/25") ||
        (variant === "disabled-bg" &&
          "Disabled-Bg cursor-auto bg-netral-20 text-netral-40") ||
        (variant === "disabled-outline" &&
          "Disabled-Outline cursor-auto border-netral-30 bg-transparent text-netral-40") ||
        (variant === "disabled-nude" &&
          "Disabled-Nude cursor-auto border-transparent bg-transparent text-netral-40")
      } ${
        (size === "lg" &&
          "Size-Large gap-3 rounded-lg-10 p-4 text-body-base") ||
        (size === "md" &&
          "Size-Medium gap-2.5 rounded-lg-10 p-3 text-body-base") ||
        (size === "sm" && "Size-Small gap-2 rounded-lg p-2 text-body-sm")
      } relative flex h-fit items-center justify-center whitespace-nowrap border font-semibold leading-none outline-none ring-2 ring-transparent transition-all duration-300 ease-out [&>svg]:flex-shrink-0 ${className}`}
      disabled={disabled ? true : false}
    >
      {children}
    </button>
  )
}

export default Button
