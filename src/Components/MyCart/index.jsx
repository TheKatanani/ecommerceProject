import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PrimaryButton, WhitePrimaryButton } from '../../Global/components'
import useProducts from '../../Hook/useProducts'
import { Arrow } from '../../Icons'
import MyCartItem from '../MyCartItem'
import { MyCartStyled } from './styled'

const MyCart = () => {
  const navigate = useNavigate()
  const { total, products,removeAll,removeFromCart} = useProducts()
  return (
    <MyCartStyled>
      <h6>My cart ({total})</h6>
      <div className="container">
        <div className="items">
          {total ?
            (products.map((el, i) => {
              return el.isSelected && <MyCartItem key={i} data={el} {...{ removeFromCart }} />
            })) : <p className='empty'>your cart is empty</p>
          }
        </div>
        <div className="myButtons">
          <PrimaryButton onClick={() => navigate("/Home/page2")}><Arrow /> Back to shop</PrimaryButton>
          <WhitePrimaryButton onClick={removeAll}>Remove all</WhitePrimaryButton>
        </div>
      </div>
    </MyCartStyled>
  )
}

export default MyCart