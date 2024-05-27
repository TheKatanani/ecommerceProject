import React from 'react'
import useProducts from '../../Hook/useProducts';
import {  OrdersNull } from '../../Icons';
const LikeButton = ({id}) => {
    const { likeItem} = useProducts()
  return (
    <div className='Like' onClick={()=>likeItem(id)}>
        <OrdersNull/>
    </div>
  )
}

export default LikeButton