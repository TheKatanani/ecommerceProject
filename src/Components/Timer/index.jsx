import React from 'react'
import styled from 'styled-components'

const TimerStyled=styled.div`
    flex: 1.8;
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
    div{
        display: flex;
        gap:6px;
        margin-top:18px;
        *{
            display: block;
        }
    }
`;
const TimerBox=styled.div`
    padding:8px 11px;
    border-radius: 4px;
    background-color:${(props) => props.theme.palette.ColorApp.gray_800};
    text-align:center;
    h6,p{
        color:${(props) => props.theme.palette.main};
        font-size:${(props) => props.theme.fontSizes.body}rem;
    }
`;
const TimerComp=({num,text})=>{
    return(
        <TimerBox>
            <h6>{num}</h6>
            <p>{text}</p>
        </TimerBox>
    )
}
const Timer = () => {
  return (
    <TimerStyled>
    <h6>Deals and offers</h6>
    <p>Hygiene equipments</p>
    <div>
        <TimerComp num="04" text="Day"/>
        <TimerComp num="13" text="Hour"/>
        <TimerComp num="34" text="Min"/>
        <TimerComp num="56" text="Sec"/>
    </div>
    </TimerStyled>
  )
}

export default Timer