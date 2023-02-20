import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductsDataContext } from '../../Context'
import { PrimaryButton, WhitePrimaryButton } from '../../Global/components'
import { Arrow } from '../../Icons'
import MyCartItem from '../MyCartItem'
import { MyCartStyled } from './styled'

const MyCart = () => {
  const [products, setProducts] = useContext(ProductsDataContext);
  const navigate = useNavigate()
  const productsLenght = products.reduce((count, item) => count + (item.isSelected ? 1 : 0), 0)
  const handleRemoveItem = (id) => {
    setProducts(prev => prev.map(el => {
      return el.id === id ? (
        { ...el, isSelected: false }
      ) : el
    }))
  }
  const handleRemoveAll = () => {
    setProducts(prev => prev.map(el => {
      return  (
        { ...el, isSelected: false }
      ) 
    }))
  }
  return (
    <MyCartStyled>
      <h6>My cart ({productsLenght})</h6>
      <div className="container">
        <div className="items">
          {productsLenght ?
            (products.map((el, i) => {
              return el.isSelected && <MyCartItem key={i} data={el} {...{ handleRemoveItem }} />
            })) : <p className='empty'>your cart is empty</p>
          }
        </div>
        <div className="myButtons">
          <PrimaryButton onClick={() => navigate("/Home/page2")}><Arrow /> Back to shop</PrimaryButton>
          <WhitePrimaryButton onClick={handleRemoveAll}>Remove all</WhitePrimaryButton>
        </div>
      </div>
    </MyCartStyled>
  )
}

export default MyCart