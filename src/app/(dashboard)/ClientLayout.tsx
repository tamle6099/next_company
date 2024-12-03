'use client' 
import { useEffect } from 'react'

export default function ClientLayout({
  children
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    document.body.removeAttribute('data-new-gr-c-s-check-loaded')
    document.body.removeAttribute('data-gr-ext-installed')
    document.body.removeAttribute('cz-shortcut-listen')
  }, [])

  return <body suppressHydrationWarning={true}>{children}</body>
}