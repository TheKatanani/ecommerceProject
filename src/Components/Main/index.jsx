import React, { useState } from 'react'
import styled from 'styled-components'
import Filter from '../Filter'
import Products from '../Products'
const MainStyled = styled.main`
    flex:1;
    margin: 30px 0 0 30px;
    ${({theme:{media}})=>media.xs} {
      margin: 0 ;
    }
`
const Main = () => {
  const [isFull,setIsFull]=useState(false)

  return (
    <MainStyled>
        <Filter setIsFull={setIsFull}isFull={isFull}/>
        <Products isFull={isFull}/>
    </MainStyled>
  )
}

export default Main