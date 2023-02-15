import React from 'react'
import { recommendedData } from '../../Mock'
import RecommendedItem from '../RecommendedItem'
import { RecommendedItemsStyled } from './styled'

const RecommendedItems = () => {
    return (
        <RecommendedItemsStyled>
            <h3>Recommended items</h3>
            <div>
                {recommendedData.map((el, i) => (
                    <RecommendedItem key={i} price={el.price} img={el.img} description={el.description} />
                ))}
            </div>
        </RecommendedItemsStyled>
    )
}

export default RecommendedItems