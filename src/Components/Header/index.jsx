import React, { useState } from 'react'
import { Container } from '../../Global/components'
import {  Menu3 } from '../../Icons'
import Category from '../Category'
import Logo from '../Logo'
import Menu from '../Menu'
import Search from '../Search'
import Sections from '../Sections'
import { Header as Myheader } from './styles'

const Header = ({page}) => {
  const [show,setShow]=useState(false)
  return (
    <Myheader page={page}>
          <Container>
            <div style={{padding:"0 15px"}}>
              <div  className='logoBox'>
                <div className="menu" onClick={()=>setShow(true)}>
                  <Menu3 color="#1C1C1C"/>
                </div>
                <Logo/>
              </div>
              <Search page={page}/>
              <Sections/>
            </div>
            <div>
              <Category page={page}/>
            </div>
      </Container>
      {show&&<div className="layout" onClick={()=>setShow(false)}/>}
      <Menu {...{show}}/>
        </Myheader>
  )
}

export default Header