import React from 'react'
import styled from 'styled-components'
import myLogo from '../../Images/mainLogo.png'
const LogoStyled =styled.div`
   @media (max-width: 576px) {
    width:116px;  
  }
`
const Logo = () => {
  return (
    <LogoStyled>
        <img src={myLogo} alt="Logo" />
    </LogoStyled>
  )
}

export default Logo