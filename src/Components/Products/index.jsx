import React , { useContext } from 'react'
import { ProductsDataContext } from '../../Context'
import ProductCard from '../ProductCard'
import SliderControl from '../SliderControl'
import { ProductsStyled } from './styled'

const Products = ({isFull}) => {
    const [productsData,]=useContext(ProductsDataContext);
    const myData=()=>{
        if(isFull){
            return productsData.slice(0,6);
        }
        return productsData.slice(0,9);
    }
  return (
    <ProductsStyled full={isFull}>
        <div className="content2">
            {myData().map((el,i)=>(
                <ProductCard key={i} data={el} isFull={isFull}/>
            ))}
        </div>
        <SliderControl/>
    </ProductsStyled>
  )
}

export default Products