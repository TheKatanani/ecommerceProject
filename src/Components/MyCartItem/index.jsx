import React, { useState } from 'react'
import { WhitePrimaryButton } from '../../Global/components'
import { selectData } from '../../Mock';
import Select from '../Select';
import { MyCartItemStyled } from './styled'

const MyCartItem = ({ handleRemoveItem, data: { img, title, price, details, id } }) => {

  const [qty, setQty] = useState("");

  return (
    <MyCartItemStyled>
      <div className="imgarea">
        <img src={img} alt="" />
      </div>
      <div className="text">
        <p className='title'>{title}</p>
        <p className='details'>{details}</p>
        <div className="buttons">
          <WhitePrimaryButton onClick={() => handleRemoveItem(id)}> Remove</WhitePrimaryButton>
          <WhitePrimaryButton> Move to cart</WhitePrimaryButton>
        </div>
      </div>
      <div className="text">
        <p className='price'>{price}</p>
        <Select
          defualt
          value={qty}
          onChange={e => setQty(e.target.value)}
          options={selectData.Qty}
        />
      </div>
    </MyCartItemStyled>
  )
}

export default MyCartItem