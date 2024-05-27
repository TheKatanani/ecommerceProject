import React from 'react'
import { RecommendedItemStyled } from './styled'

const RecommendedItem = ({img,price,description}) => {
  return (
    <RecommendedItemStyled>
        <div className="img">
            <img src={img} alt="" />
        </div>
        <div className="content">
            <p className="price">{price}</p>
            <p>{description}</p>
        </div>
    </RecommendedItemStyled>
  )
}

export default RecommendedItem