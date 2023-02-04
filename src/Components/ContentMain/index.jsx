import React from 'react'
import ImageSlider from '../ImageSlider'
import { ContentMainStyled } from './ContentMain'
import img1 from '../../Images/image38.png'
import img2 from '../../Images/image40.png'
import img3 from '../../Images/image36.png'
import img4 from '../../Images/image39.png'
import img5 from '../../Images/image335.png'
import img6 from '../../Images/image37.png'
import Info from '../Info'
import Supplier from '../Supplier'
const images=[img1,img2,img3,img4,img5,img6]

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