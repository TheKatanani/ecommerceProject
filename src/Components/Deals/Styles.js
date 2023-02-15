import styled from "styled-components";

export const MainStyle=styled.div`
    display: flex;
    flex: 1;
    height:240px;
    margin:30px 0;
    border: 1px solid ${(props) => props.theme.palette.ColorApp.gray_200};
    border-radius: 6px;
    .data{
        width:100%;
        display:grid;
        grid-template-columns: repeat(5,auto);
        overflow: scroll;
    }
    /* Small */
    @media (max-width: 576px) {
        flex-wrap: wrap;
        height:initial;
    }
`