import React from 'react'
import { Container } from '../../Global/components'
import {  Menu3 } from '../../Icons'
import Category from '../Category'
import Logo from '../Logo'
import Search from '../Search'
import Sections from '../Sections'
import { Header as Myheader } from './styles'

const Header = ({page}) => {
  return (
    <Myheader page={page}>
          <Container>
            <div style={{padding:"0 15px"}}>
              <div  className='logoBox'>
                <Menu3 color="#1C1C1C"/>
                <Logo/>
              </div>
              <Search page={page}/>
              <Sections/>
            </div>
            <div>
              <Category page={page}/>
            </div>
      </Container>
        </Myheader>
  )
}

export default Header