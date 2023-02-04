import styled from "styled-components";

export const Header = styled.header`
    padding:11px 0;
    background-color:${(props)=>props.theme.palette.main};
    >div>div{
        display: flex;
        gap:20px;
        justify-content:space-between;
        align-items:center;
    }
`

