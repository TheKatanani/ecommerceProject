import styled from 'styled-components'
export const CountryStyled = styled.div`
    .content{
        display: grid;
        grid-template-columns:repeat(5,auto);
        justify-content:space-between;
    }
    h3{
        color:${(props) => props.theme.palette.font};
        font-size:${(props) => props.theme.fontSizes.h6}rem;
        margin: 15px 0;
    }
    /* Small */
    @media (max-width: 576px) {
        h3{
            padding:8px;
        }
        .content{
            grid-template-columns:repeat(2,auto);
            justify-content:space-evenly;
        }
    }
`