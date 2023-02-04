import styled from "styled-components";

export const MainStyle=styled.div`
    display: flex;
    height:240px;
    margin:30px 0;
    border: 1px solid ${(props) => props.theme.palette.ColorApp.gray_200};
`