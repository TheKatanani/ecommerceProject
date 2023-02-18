import React from 'react'
import { useContext } from 'react'
import { ProductsDataContext } from '../../Context'
import {  OrdersNull } from '../../Icons';
const LikeButton = ({id}) => {
    const [,setProducts]=useContext(ProductsDataContext);
const LikeHandler = (id)=>{
    setProducts(prev=>{
    return  prev.map(el=>el.id===id?(
        {...el,isLike:(el.isLike?false:true)}
      ):el)
    })
}
  return (
    <div className='Like' onClick={()=>LikeHandler(id)}>
        <OrdersNull/>
    </div>
  )
}

export default LikeButton