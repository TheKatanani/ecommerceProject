import React from 'react'
import styled from 'styled-components'
const BoxStyle=styled.div`
    width:200px;
    height: 95px;
    margin:10px 0;
    padding: 15px;
    border-radius:6px;
    font-size:${props=>props.theme.fontSizes.body};
    background-color:${props=>props.color};
`
const MainSectionBox = ({color,text}) => {
  return (
    <BoxStyle color={color}>
        <p>
            {text}
        </p>
    </BoxStyle>
  )
}

export default MainSectionBox