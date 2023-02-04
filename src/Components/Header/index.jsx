import React from 'react'
import { Container } from '../../Global/components'
import Category from '../Category'
import Logo from '../Logo'
import Search from '../Search'
import Sections from '../Sections'
import { Header as Myheader } from './styles'

const Header = ({page}) => {
  return (
    <Myheader page={page}>
          <Container>
            <div>
              <Logo/>
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