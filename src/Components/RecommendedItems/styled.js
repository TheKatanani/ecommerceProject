import styled from 'styled-components'
export const RecommendedItemsStyled = styled.div`
    >div{
        display: grid;
        grid-template-columns:repeat(5,auto);
        gap:20px;
    }
    h3{
        color:${(props) => props.theme.palette.font};
        font-size:${(props) => props.theme.fontSizes.body}rem;
        margin: 15px 0;
    }
    /* Small */
    @media (max-width: 576px) {
        padding:8px;
        >div{
            grid-template-columns:repeat(2,auto);
            gap:8px;
        }
    }
`