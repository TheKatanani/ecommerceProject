import styled from "styled-components";

export const BlockStyled =styled.div`
background-color:${(props) => props.theme.palette.main};
    margin:24px 0;
    display: flex;
    flex-wrap: wrap;
    height: 257px;
    .items{
        flex:3.8;
        display: grid;
        grid-template-columns:repeat(4,auto);
        border:1px solid ${(props) => props.theme.palette.ColorApp.gray_200};
        .item{
            border:1px solid ${(props) => props.theme.palette.ColorApp.gray_200};
            display: flex;
            justify-content:space-between;
            padding:10px;
            .img{
                display: flex;
                align-items:center
            }
            img{
                width:70px;
            }
            h6{
                color:${(props) => props.theme.palette.font};
                font-size:${(props) => props.theme.fontSizes.body}rem;
            }
            p{
                width:60px;
                color:${(props) => props.theme.palette.ColorApp.gray_500};
                font-size:${(props) => props.theme.fontSizes.bod2}rem;
            }
        }
    }
    
`