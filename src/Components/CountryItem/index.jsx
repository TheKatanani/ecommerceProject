import React from 'react'
import styled from 'styled-components'
const CountryItemStyeld =styled.div`
    flex:1;
    display: flex;
    align-items:center;
    justify-content:center;
    img{
        padding:11px;
    }
    .title{
        color:${(props) =>  props.theme.palette.font};
        font-size:${(props) => props.theme.fontSizes.body}rem;
    }
    .description{
        color:${(props) =>  props.theme.palette.ColorApp.gray_500};
        font-size:${(props) => props.theme.fontSizes.body}rem;
    }
`
const CountryItem = ({description,title,img}) => {
  return (
    <CountryItemStyeld>
        <img src={img} alt="" />
        <div className="text">
            <p className="title">{title}</p>
            <p className="description">{description}</p>
        </div>
    </CountryItemStyeld>
  )
}

export default CountryItem