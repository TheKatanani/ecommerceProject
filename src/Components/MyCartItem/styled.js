import styled from "styled-components";

export const MyCartItemStyled =styled.div`
    display: flex;
    align-items:flex-start;
    justify-content:space-between;
    margin:10px;
    gap:11px;
    .imgarea{
        width: 90px;
        height: 90px;
        max-width: 90px;
        max-height: 90px;
        margin:5px;
        border: 1px solid ${props=> props.theme.palette.ColorApp.gray_300};
        border-radius: 6px;
        display: flex;
        align-items:center;
        justify-content:center;
        padding:5px;
            img{
                max-width:80%;
                max-height:80%;
            }
    }
    .text{
    margin:10px 0;
    .title{
        margin:0 0 7px;
        font-size:${(props) => props.theme.fontSizes.body}rem;
        color:${(props) =>  props.theme.palette.font};
    }
    .price{
        font-size:${(props) => props.theme.fontSizes.body}rem;
        color:${(props) =>  props.theme.palette.font}};
    }
    .details{
        margin:10px 0 6px;
        line-height: 24px;
        width:70%;
        font-size:${(props) => props.theme.fontSizes.body}rem;
        color:${(props) =>  props.theme.palette.ColorApp.gray_500};
    }
    .buttons{
        button{
            width:fit-content;
            padding:10px;
        }
        display: flex;
        gap:10px;
        button:first-child{
            color:red;
        }
    }
    select{
        margin:12px 0 0%;
        width:123px;
    }
`