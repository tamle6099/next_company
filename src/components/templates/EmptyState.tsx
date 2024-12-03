import React from "react"
import { Button } from "../atomics"
import { PlusIconBold } from "@/assets/icons"

interface EmptyState {
  ill: React.ReactElement
  toggler: any
  title: string
  description: string
  btnLabel?: string
}
const EmptyState: React.FC<EmptyState> = ({
  ill,
  title,
  toggler,
  description,
  btnLabel
}) => {
  return (
    <div className='Empty-State relative flex min-h-[50vh] flex-col items-center justify-center'>
      <div className='[&>svg]:h-56 [&>svg]:w-56 [&>svg]:2xl:h-60 [&>svg]:2xl:w-60'>
        {ill}
      </div>

      <h1 className='mb-1 text-body-xl font-semibold'>
        {title ?? "No transaction list"}
      </h1>

      <p className='mb-4 text-body-sm text-netral-50'>
        {`${description}. ${
          !btnLabel && "Click the illustration to see the content"
        }` ?? "The transaction you are looking for is not available."}
      </p>

      {!btnLabel && (
        <button
          onClick={() => toggler(false)}
          className='absolute inset-0 z-10 h-full w-full'
        />
      )}

      {btnLabel && (
        <Button variant='primary-bg' size='md' onClick={() => toggler(false)}>
          <PlusIconBold className='h-4 w-4' />
          {btnLabel ?? "Add Category"}
        </Button>
      )}
    </div>
  )
}

export default EmptyState
