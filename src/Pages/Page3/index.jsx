import React from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import Newsletter from '../../Components/Newsletter'
import Path from '../../Components/Path'
import { Container } from '../../Global/components'
import styled from 'styled-components'
import ContentMain from '../../Components/ContentMain'
import Details from '../../Components/Details'
import AsideItems from '../../Components/AsideItems'
import ItemsCard from '../../Components/ItemsCard'
import DiscountSlide from '../../Components/DiscountSlide'
const path = ["Home", "Clothings", "Men's wear", "Summer clothing"]
const PageStyled = styled.div`
    .flex{
      display: flex;
      justify-content:space-between;
      flex-wrap: wrap;
      gap:20px;
    }
`
const Page3 = () => {
  return (
    <PageStyled>
      <Header />
      <Container>
        <Path path={path} />
        <ContentMain />
        <div className="flex">
          <Details />
          <AsideItems />
        </div>
        <ItemsCard type="RelatedProducts" title="You may like"/>
        <DiscountSlide/>
      </Container>
      <Newsletter />
      <Footer />
    </PageStyled>
  )
}

export default Page3