import React from 'react'
import styled from 'styled-components'
import ProductCard from '../ProductCard'
import SliderControl from '../SliderControl'
import { Data } from './data'
const ProductsStyled = styled.div`
    .content2{
        height:calc(100% - 40px);
        margin: 20px 0 30px;
        ${props=>!props.full&&`
            display: grid;
            grid-template-columns:repeat(3,auto);
            gap:10px;
        `}
    }
`
const Products = ({isFull}) => {
    const myData=()=>{
        if(isFull){
            return Data.slice(0,6);
        }
        return Data.slice(0,9);
    }
  return (
    <ProductsStyled full={isFull}>
        <div className="content2">
            {myData().map((el,i)=>(
                <ProductCard key={i} data={el} isFull={isFull}/>
            ))}
        </div>
        <SliderControl  content = {['Content 1', 'Content 2', 'Content 3', 'Content 4', 'Content 5']}/>
    </ProductsStyled>
  )
}

export default Products