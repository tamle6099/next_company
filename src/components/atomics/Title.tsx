import React from "react"

interface Title {
  children: React.ReactNode
  className?: string
  variant: "default" | "success" | "info" | "warning" | "error" | "primary"
  size: "sm" | "lg"
}

const Title: React.FC<Title> = ({ children, className, variant, size }) => {
  return (
    <div
      className={`Title flex w-fit flex-row items-center gap-2 2xl:gap-3 ${className}`}
    >
      <span
        className={`${
          (variant === "default" && "Default bg-netral-100") ||
          (variant === "primary" && "Primary bg-primary-main") ||
          (variant === "success" && "Success bg-success-main") ||
          (variant === "info" && "Info bg-info-main") ||
          (variant === "warning" && "Warning bg-warning-main") ||
          (variant === "error" && "Error bg-error-main")
        } h-5 w-1.5 flex-shrink-0 rounded-xl 2xl:h-6 2xl:w-2`}
      />

      <span
        className={`${
          (size === "lg" && "text-body-lg 2xl:text-body-xl") ||
          (size === "sm" && "text-body-lg")
        } font-semibold`}
      >
        {children}
      </span>
    </div>
  )
}

export default Title
