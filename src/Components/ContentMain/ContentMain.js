import styled from "styled-components";

export const ContentMainStyled = styled.div`
    display: flex;
    padding:20px;
    gap:5px;
    background-color:${(props) => props.theme.palette.main};
`