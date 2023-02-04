import React from 'react'
import styled from 'styled-components'
import SerciseItem from '../ServiceItem'
import img from '../../Images/image108.png'
import img2 from '../../Images/image104.png'
import { Search, Send } from '../../Icons'
const ServiceStyled = styled.div`
    margin:33px 0;
    .content{
        display: flex;
        justify-content:space-between;
        align-items:center;
    }
    h3{
        color:${(props) => props.theme.palette.font};
        font-size:${(props) => props.theme.fontSizes.body}rem;
        margin: 15px 0;
    }
`
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