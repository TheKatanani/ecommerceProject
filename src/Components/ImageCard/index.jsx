import React from 'react'
import styled from 'styled-components'
import { MainButton } from '../../Global/components'
const ImgStyled = styled.div`
        background-image: url(${props => props.src});
        height:100%;
        background-size: cover;
        flex: 1;
        padding:0 2.5rem;
        border-radius: 6px;
        .contint{
            margin-top: 3.5rem;
            height: 1px;
            h3,h2,h6{
                color:${props => props.theme.palette.ColorApp.dark};
            }
            h2{
                font-size:${props => props.theme.fontSizes.h2}rem;
            }
            h3{
                font-size:${props => props.theme.fontSizes.h3}rem;
            }
            h6{
                max-width:170px;
                font-size:${props => props.theme.fontSizes.h6}rem;
            }
            button{
                margin-top: 1rem;
                width: 112px;
                font-weight: 500;
                color:${props => props.theme.palette.ColorApp.dark};
                background-color:${props => props.theme.palette.ColorApp.white};
            }
        }
`
const ImageCard = ({ button, h3, h2, h6,img }) => {
    return (
        <ImgStyled src={img}>
            <div className="contint">
                {h3 && <h3>{h3}</h3>}
                {h2 && <h2>{h2}</h2>}
                {h6 && <h6>{h6}</h6>}
                <MainButton>{button}</MainButton>
            </div>
        </ImgStyled>
    )
}

export default ImageCard