import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { Message, MyCart, Orders, Profile } from '../../Icons'
const SectionsStyle = styled.div`
    display: flex;
    gap:23px;
    .icon{
          padding:10px 0; 
          text-align:center;
        cursor: pointer;
        font-size:${(props) => props.theme.fontSizes.body2}rem;
        color:${(props) =>  props.theme.palette.ColorApp.gray_500};
    }
`
const Sections = () => {
  return (
    <SectionsStyle>
      <Link to="/Home/page2" className="icon">
        <Profile />
        <p>Profile</p>
      </Link>
      <Link to="" className="icon">
        <Message />
        <p>Message</p>
      </Link>
      <Link to="/Home/page3" className="icon">
        <Orders />
        <p>Orders</p>
      </Link >
      <Link to="/Home/page4" className="icon">
        <MyCart />
        <p>My cart</p>
      </Link >
    </SectionsStyle>
  )
}

export default Sections
