import styled from "styled-components";

export const MyCartItemStyled =styled.div`
    display: flex;
    align-items:flex-start;
    justify-content:space-between;
    flex-wrap:wrap;
    margin:10px;
    gap:11px;
    .content{
        display: flex;
        gap:20px;
    }
    .imgarea{
        min-width: 90px;
        min-height: 90px;
        max-width: 90px;
        max-height: 90px;
        object-fit: contain;
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
    .text ,.quntity{
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
    @media (max-width: 576px) {
    .quntity{
        margin:0 0 10px;
        width:100%;
        display: flex;
        justify-content:space-between;
        align-items: center;
        select{
            order: -1;
        }
    }
    .content{
    gap:0px;
    }
    .imgarea{
        min-width: 70px;
        min-height: 70px;
        max-width: 70px;
        max-height: 70px;
    }
    }
`