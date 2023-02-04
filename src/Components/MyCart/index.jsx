import React from 'react'
import { PrimaryButton, WhitePrimaryButton } from '../../Global/components'
import { Arrow } from '../../Icons'
import { cartData } from '../../Mock'
import MyCartItem from '../MyCartItem'
import { MyCartStyled } from './styled'

const MyCart = () => {
  return (
    <MyCartStyled>
      <h6>My cart (3)</h6>
      <div className="container">
        <div className="items">
          {cartData.map((el, i) => (
            <MyCartItem key={i} data={el} />
          ))}
        </div>
        <div className="myButtons">
          <PrimaryButton><Arrow /> Back to shop</PrimaryButton>
          <WhitePrimaryButton>Remove all</WhitePrimaryButton>
        </div>
      </div>
    </MyCartStyled>
  )
}

export default MyCart