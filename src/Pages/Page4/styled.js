import styled from 'styled-components'
export const PageStyled = styled.div`
    .flex,.features{
      display: flex;
      justify-content:space-between;
      gap:20px;
      flex-wrap: wrap;
      @media (max-width: 576px) {
          justify-content:center;
      }
    }
    .features{
        justify-content:flex-start;
        align-items:center;
        gap:40px;
        margin:20px 0;
        @media (max-width: 576px) {
            justify-content:center;
        }
    }
    aside{
      margin-top: 47px;
      @media (max-width: 576px) {
        margin-top: 20px;
        width:100%;
      }
    }
`