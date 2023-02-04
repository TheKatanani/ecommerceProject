import React from 'react'
import { Divstyled } from './syles'
const Sale = ({img,name,sale}) => {
  return (
    <Divstyled>
        <div className='img'>
          <img src={img} alt="" />
        </div>
        <p>{name}</p>
        <span>-{sale}%</span>
    </Divstyled>
  )
}

export default Sale