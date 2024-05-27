import styled from 'styled-components'
export const TimerStyled=styled.div`
    flex: 2;
    padding:20px;
    background-color:${(props) => props.theme.palette.main};
    color:${(props) => props.theme.palette.font};
    border: 1px solid ${(props) => props.theme.palette.ColorApp.gray_200};
    p{
        color:${(props) =>  props.theme.palette.ColorApp.gray_500};
        font-size:${(props) => props.theme.fontSizes.body}rem;
    }
    h6{
        font-size:${(props) => props.theme.fontSizes.h6}rem;
    }
    .timer{
        display: flex;
        gap:6px;
        margin-top:18px;
        *{
            display: block;
        }
    }
    @media (max-width: 576px) {
        display: flex;
        align-items:center;
        justify-content: space-between;
        padding:8px;
        .timer{
            margin: 0;
        }
        p{
            display: none;
        }
    }
`;
export const TimerBox=styled.div`
    padding:8px 11px;
    border-radius: 4px;
    background-color:${(props) => props.theme.palette.ColorApp.gray_800};
    @media (max-width: 576px) {
        background-color:${(props) => props.theme.palette.ColorApp.gray_400};
    }
    text-align:center;
    h6,p{
        color:${(props) => props.theme.palette.main};
        font-size:${(props) => props.theme.fontSizes.body}rem;
    }
`;
