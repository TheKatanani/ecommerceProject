import styled from 'styled-components'
export const CountryStyled = styled.div`
    .content{
        display: grid;
        grid-template-columns:repeat(auto-fill,160px);
        justify-content:space-between;
    }
    h3{
        color:${(props) => props.theme.palette.font};
        font-size:${(props) => props.theme.fontSizes.h6}rem;
        margin: 15px 0;
    }
    ${({theme:{media}})=>media.s}{
        h3{
            padding:8px;
        }
        .content{
            justify-content:space-evenly;
        }
    }
`