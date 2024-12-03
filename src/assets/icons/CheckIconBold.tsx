import React from 'react'

const CheckIconBold: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={`Check_Icon-Bold ${className}`}
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
      viewBox='0 0 256 256'
    >
      <path d='M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z'></path>
    </svg>
  )
}

export default CheckIconBold
