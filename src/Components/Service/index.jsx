import React from 'react'
import SerciseItem from '../ServiceItem'
import img from '../../Images/image108.png'
import img2 from '../../Images/image104.png'
import { Search, Send } from '../../Icons'
import { ServiceStyled } from './styled'

const Service = () => {
  return (
    <ServiceStyled>
        <h3>Our extra services</h3>
        <div className="content">
            <SerciseItem bg={img} Icon={Search} text="Source from Industry Hubs"/>
            <SerciseItem bg={img2} Icon={Search} text="Source from Industry Hubs"/>
            <SerciseItem bg={img} Icon={Send} text="Fast, reliable shipping by ocean or air"/>
            <SerciseItem bg={img} Icon={Search} text="Source from Industry Hubs"/>
        </div>
    </ServiceStyled>
  )
}

export default Service