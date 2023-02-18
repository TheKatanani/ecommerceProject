import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductsDataContext } from '../../Context'
import { PrimaryButton, WhitePrimaryButton } from '../../Global/components'
import { Arrow } from '../../Icons'
// import { cartData } from '../../Mock'
import MyCartItem from '../MyCartItem'
import { MyCartStyled } from './styled'

const MyCart = () => {
  const [products, setProducts] = useContext(ProductsDataContext);
  const navigate = useNavigate()
  const handleRemoveItem = (id) => {
    setProducts(prev => prev.map(el => {
      return el.id === id ? (
        { ...el, isSelected: false }
      ) : el
    }))
  }
  return (
    <MyCartStyled>
      <h6>My cart (3)</h6>
      <div className="container">
        <div className="items">
          {products.map((el, i) => {
            return el.isSelected && <MyCartItem key={i} data={el} {...{ handleRemoveItem }} />
          })}
        </div>
        <div className="myButtons">
          <PrimaryButton onClick={() => navigate("/Home/page2")}><Arrow /> Back to shop</PrimaryButton>
          <WhitePrimaryButton onClick={() => setProducts([])}>Remove all</WhitePrimaryButton>
        </div>
      </div>
    </MyCartStyled>
  )
}

export default MyCart