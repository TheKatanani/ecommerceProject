import styled from "styled-components";

export const NewsletterStyled = styled.div `
    text-align:center;
    margin:30px 0 0;
    height:190px;
    display: flex;
    justify-content:center;
    align-items:center;
    background-color:${(props) => props.theme.palette.ColorApp.gray_200};
    p{
        color:${(props) =>  props.theme.palette.ColorApp.gray_500};
        font-size:${(props) => props.theme.fontSizes.body}rem;
        margin-bottom: 21px;
    }
    h6{
        color:${(props) =>  props.theme.palette.font};
        font-size:${(props) => props.theme.fontSizes.h6}rem;
    }
    .input{
        color:${(props) => props.theme.palette.ColorApp.gray_500};
        background-color:${(props) => props.theme.palette.main};
        border: 1px solid ${(props) => props.theme.palette.ColorApp.gray_300};
        border-radius: 6px;
        
        input{
            padding:10px;
            border: none;
            outline:none;
            background-color:transparent;
            color:${(props) => props.theme.palette.ColorApp.gray_500};
        }
        svg{
            width:40px;
            padding:0px 0px;
            transform:translateY(25%);
        }

    }
    form{
        display: flex;
        justify-content:center;
        align-items:center;
        height:40px;
        gap:8px;
        >*{
            height:100%;
        }
    }
`