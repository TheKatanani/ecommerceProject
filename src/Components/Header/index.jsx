import React, { useState } from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../../Context'
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
  const [theme ] = useContext(ThemeContext)
  return (
    <Myheader page={page}>
          <Container>
            <div style={{padding:"0 15px"}}>
              <div  className='logoBox'>
                <div className="menu" onClick={()=>setShow(true)}>
                  <Menu3 color={theme.palette.font}/>
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