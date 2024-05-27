import styled from 'styled-components'
export const ServiceStyled = styled.div`
    margin:33px 0;
    .content{
        display: flex;
        justify-content:space-between;
        align-items:center;
    }
    h3{
        color:${(props) => props.theme.palette.font};
        font-size:${(props) => props.theme.fontSizes.h6}rem;
        margin: 15px 0;
    }
    ${({theme:{media}})=>media.xs}{
        .content{
            flex-wrap: wrap;
        }
        padding:8px;
        .content{
        justify-content:center;
        gap:20px;
        .content{
            justify-content:flex-start
        }
    }
}
${({theme:{media}})=>media.s} and ${"(max-width:1199px)"}{
    .content{
        flex-wrap: wrap;
    }
        padding:8px;
    .content{
        justify-content:space-evenly;
        gap:20px;
        .content{
            justify-content:flex-start
        }
    }
}
`