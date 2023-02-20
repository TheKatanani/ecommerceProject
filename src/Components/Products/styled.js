import styled from 'styled-components'
export const ProductsStyled = styled.div`
    .content2{
        height:calc(100% - 40px);
        margin: 20px 0 30px;
        ${props=>!props.full&&`
            display: grid;
            grid-template-columns:repeat(3,auto);
            gap:10px;
        `}
         @media (max-width: 576px) {
            grid-template-columns:repeat(1,auto);
            justify-content:center;
    }
    }
`