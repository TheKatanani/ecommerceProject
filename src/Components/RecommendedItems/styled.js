import styled from 'styled-components'
export const RecommendedItemsStyled = styled.div`
    >div{
        display: grid;
        grid-template-columns:repeat(auto-fill,minmax(200px,1fr));
        justify-content: space-between;
        gap:20px;
    }
    h3{
        color:${(props) => props.theme.palette.font};
        font-size:${(props) => props.theme.fontSizes.body}rem;
        margin: 15px 0;
    }
    ${({theme:{media}})=>media.s}  and ${"(max-width:991px)"}  {
        padding:8px;
        >div{
            justify-content: space-evenly;
            gap:8px;
        }
    }
`