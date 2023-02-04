import React from 'react'
import styled from 'styled-components'
import img from '../../Images/Bitmap.png'
import RecommendedItem from '../RecommendedItem'
const RecommendedItemsStyled = styled.div`
    >div{
        display: flex;
        justify-content:space-between;
        flex-wrap: wrap;
        gap:20px;
    }
    h3{
        color:${(props) => props.theme.palette.font};
        font-size:${(props) => props.theme.fontSizes.body}rem;
        margin: 15px 0;
    }
`
const data = [
    { img, price: '$10.5', description: "T-shirts with multiple colors, for men" },
    { img, price: '$10.5', description: "T-shirts with multiple colors, for men" },
    { img, price: '$9.5', description: "T-shirts with multiple colors, for men" },
    { img, price: '$10.5', description: "T-shirts with multiple colors, for men" },
    { img, price: '$10.5', description: "T-shirts with multiple colors, for men" },
    { img, price: '$5.5', description: "T-shirts with multiple colors, for men" },
    { img, price: '$10.5', description: "T-shirts with multiple colors, for men" },
    { img, price: '$10.5', description: "T-shirts with multiple colors, for men" },
    { img, price: '$10.5', description: "T-shirts with multiple colors, for men" },
    { img, price: '$10.5', description: "T-shirts with multiple colors, for men" },
]
const RecommendedItems = () => {
    return (
        <RecommendedItemsStyled>
            <h3>Recommended items</h3>
            <div>
                {data.map((el, i) => (
                    <RecommendedItem key={i} price={el.price} img={el.img} description={el.description} />
                ))}
            </div>
        </RecommendedItemsStyled>
    )
}

export default RecommendedItems