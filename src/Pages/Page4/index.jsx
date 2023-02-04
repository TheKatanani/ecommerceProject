import React from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import { Container } from '../../Global/components'
import styled from 'styled-components'
import ItemsCard from '../../Components/ItemsCard'
import DiscountSlide from '../../Components/DiscountSlide'
import MyCart from '../../Components/MyCart'
import Coupon from '../../Components/Coupon'
import Summary from '../../Components/Summary'
import FeatureItem from '../../Components/FeatureItem'
import { Message } from '../../Icons'
const PageStyled = styled.div`
    .flex,.features{
      display: flex;
      justify-content:space-between;
      gap:20px;
    }
    .features{
      justify-content:flex-start;
      align-items:center;
      gap:40px;
      margin:20px 0;
    }
    aside{
      margin-top: 47px;
    }
`
const Page4 = () => {
  return (
    <PageStyled page="page4">
      <Header page="page4"/>
      <Container>
        <div className="flex">
          <MyCart/>
          <aside>
            <Coupon/>
            <Summary/>
          </aside>
        </div>
        <div className="features">
          <FeatureItem Icon={Message} title="Customer support" description="Have you ever finally just " />
          <FeatureItem Icon={Message} title="Customer support" description="Have you ever finally just " />
          <FeatureItem Icon={Message} title="Customer support" description="Have you ever finally just " />
        </div>
        <ItemsCard title="Saved for later" button/>
        <DiscountSlide/>
      </Container>
      <Footer />
    </PageStyled>
  )
}

export default Page4;