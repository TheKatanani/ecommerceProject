import React from 'react'

import BlockItems from '../../Components/BlockItems';
import Deals from '../../Components/Deals';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import MainSection from '../../Components/MainSection';
import RecommendedItems from '../../Components/RecommendedItems';
import Newsletter from '../../Components/Newsletter';
import SendQuote from '../../Components/SendQuote';
import Service from '../../Components/Service';
import Country from '../../Components/Country';

import { Container } from '../../Global/components';
import { HomeData } from '../../Mock';

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <MainSection />
        <Deals />
        <BlockItems mydata={HomeData.mydata} />
        <BlockItems mydata={HomeData.mydata2} />
        <SendQuote />
        <RecommendedItems />
        <Service />
        <Country />
      </Container>
      <Newsletter />
      <Footer />
    </>
  )
}
export default Home;