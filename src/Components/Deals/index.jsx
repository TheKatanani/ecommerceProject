import React from 'react'
import img from '../../Images/image35.png'
import Sale from '../Sale';
import Timer from '../Timer';
import { MainStyle } from './Styles';
const mydata=[
  {img,name:"Smart watches",sale:"25"},
  {img,name:"Laptops",sale:"10"},
  {img,name:"GoPro cameras",sale:"15"},
  {img,name:"Headphones",sale:"20"},
  {img,name:"Canon camreras",sale:"45"}
];
const Deals = () => {
  return (
    <MainStyle>
        <Timer/>
        {mydata.map(el=>(
          <Sale key={el.name} name={el.name}img={el.img} sale={el.sale}/>
        ))}
    </MainStyle>

  )
}

export default Deals