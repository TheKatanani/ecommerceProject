import React from 'react'
import ImageSlider from '../ImageSlider'
import { ContentMainStyled } from './ContentMain'
import Info from '../Info'
import Supplier from '../Supplier'
import { images } from '../../Mock/sliderImages'
const ContentMain = () => {
  return (
    <ContentMainStyled>
        <ImageSlider images={images}/>
        <Info/>
        <Supplier/>
    </ContentMainStyled>
  )
}

export default ContentMain;