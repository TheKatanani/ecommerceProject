import React from 'react'
import { dealsData } from '../../Mock';
import Sale from '../Sale';
import Timer from '../Timer';
import { MainStyle } from './Styles';

const Deals = () => {
  return (
    <MainStyle>
        <Timer/>
        <div className="data">
        {dealsData.map(el=>(
          <Sale key={el.name} name={el.name}img={el.img} sale={el.sale}/>
          ))}
          </div>
    </MainStyle>
  )
}

export default Deals