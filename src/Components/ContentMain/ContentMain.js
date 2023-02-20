import styled from "styled-components";

export const ContentMainStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding:20px;
    gap:5px;
    background-color:${(props) => props.theme.palette.main};
`