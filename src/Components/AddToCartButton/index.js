import React from 'react'
import { useContext } from 'react'
import { ProductsDataContext } from '../../Context'
import { MoveToCart } from '../../Icons';
const AddToCartButton = ({id}) => {
    const [,setProducts]=useContext(ProductsDataContext);
const addToCart = (id)=>{
    setProducts(prev=>{
    return  prev.map(el=>el.id===id?(
        {...el,isSelected:(el.isSelected?false:true)}
      ):el)
    })
}
  return (
    <div className='Select' onClick={()=>addToCart(id)}>
        <MoveToCart/>
    </div>
  )
}

export default AddToCartButton