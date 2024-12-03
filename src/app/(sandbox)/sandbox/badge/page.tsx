import React from 'react'

import { Badge } from '@/components/atomics'
import { Header } from '@/components/templates'

const BadgePage = () => {
  return (
    <Header title='Badge'>
      <div className='flex items-center gap-4'>
        <Badge variant='default'>Neutral</Badge>
        <Badge variant='success'>Success</Badge>
        <Badge variant='info'>Informational</Badge>
        <Badge variant='warning'>Warning</Badge>
        <Badge variant='error'>Error</Badge>
      </div>
    </Header>
  )
}

export default BadgePage
