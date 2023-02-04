import styled from "styled-components";

export const CatigoryStyled = styled.div `
        display: flex;
        width: 100%;
        gap:20px;
        justify-content:space-between;
        align-items:center;
        padding:8px 0;
        ul{
            display: flex;
            gap:20px;
            justify-content:center;
            align-items:center;
            a{
                color:${props=>props.theme.palette.font};
            }
            }
    select{
        border:none;
        background-color:${props=>props.theme.palette.main};
        color:${props=>props.theme.palette.font};
    }
    ${props=>props.page==="page4"&&`display:none;`}
    `