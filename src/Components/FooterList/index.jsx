import React from 'react'
import styled from 'styled-components'
const BoxStyled=styled.div`
    li{
        color:${(props) => props.theme.palette.ColorApp.gray_500};
        font-size:${(props) => props.theme.fontSizes.body}rem;
        margin:3px 0 0;
    }
    h4{
        font-size:${(props) => props.theme.fontSizes.body}rem;
        margin-bottom: 10px;
    }
`
const FooterList = ({ title, data }) => {
    return (
        <BoxStyled>
            {/* the font is body */}
            <h4>{title}</h4>
            <ul>{
                data.map((el, i) => (
                    <li key={i}>{el}</li>
                ))
            }
            </ul>
        </BoxStyled>
    )
}

export default FooterList