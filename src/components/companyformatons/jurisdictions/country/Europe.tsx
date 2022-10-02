import React from 'react'
import { data } from '../../../../utils/data'
import { CardCountry } from './CardCountry'

function Europe() {
  return (
    <div className="grid grid-cols-3 gap-8">
      {data.europes.map((datafile) => (
        <CardCountry key={datafile.slug} {...datafile} />
      ))}
      </div>
  )
}

export default Europe