import styled from "styled-components";

export const FilterStyled =styled.div`
padding:11px;
    display: flex;
    justify-content:space-between;
    align-items:center;
    background-color:${(props) =>  props.theme.palette.main};
    border: 2px solid ${(props) =>  props.theme.palette.ColorApp.gray_200};
    color: ${(props) =>  props.theme.palette.font};
    font-size:${(props) => props.theme.fontSizes.body}rem;
    border-radius: 6px;
    >div{
        display: flex;
        gap:8px;
    align-items:center;
    }
    select{
        width:fit-content;
    }
    p{
        margin-left:9px;
        span{
            font-weight: bold;
        }
    }
    input{
        margin-right: 5px;
        width:20px;
        height:20px;
        border-radius: 5px;
        font-size:${(props) => props.theme.fontSizes.body}rem;
    }
    label{
        margin-right: 15px;
        font-size:${(props) => props.theme.fontSizes.body}rem;
    }
    .mood{
        width:76px;
        display: flex;
        align-items:center;
        padding:0;
        >div{
            width:38px;
            height:100%;
            padding:5px;
            display: flex;
            justify-content:center;
            align-items:center;
            cursor: pointer;
            &.active{
                background-color:${(props) =>  props.theme.palette.ColorApp.gray_200};
            }
        }
    }
`