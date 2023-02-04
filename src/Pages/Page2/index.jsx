import React from 'react'
import Aside from '../../Components/Aside'
import Main from '../../Components/Main'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import Newsletter from '../../Components/Newsletter'
import Path from '../../Components/Path'
import { Container } from '../../Global/components'
import styled from 'styled-components'
const path = ["Home", "Clothings", "Men's wear", "Summer clothing"]
const PageStyled = styled.div`
    .content1{
        display: flex;
    }
`
const Page2 = () => {
  return (
    <PageStyled>
      <Header />
      <Container>
        <Path path={path} />
        <div className="content1">
          <Aside />
          <Main />
        </div>
      </Container>
      <Newsletter />
      <Footer />
    </PageStyled>
  )
}

export default Page2