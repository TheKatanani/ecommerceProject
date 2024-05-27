import React from 'react'
import { TimerBox, TimerStyled } from './styled'

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
        <div className="text">
            <h6>Deals and offers</h6>
            <p>Hygiene equipments</p>
        </div>
    <div className='timer'>
        <TimerComp num="04" text="Day"/>
        <TimerComp num="13" text="Hour"/>
        <TimerComp num="34" text="Min"/>
        <TimerComp num="56" text="Sec"/>
    </div>
    </TimerStyled>
  )
}

export default Timer;