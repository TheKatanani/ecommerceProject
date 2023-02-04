import React from 'react'
import styled from 'styled-components'
const RecommendedItemStyled =styled.div`
    padding:10px;
    background-color:${(props) => props.theme.palette.main};
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme.palette.ColorApp.gray_300};

    .img{
        width:180px;
        height:180px;
        overflow:hidden;
        display: flex;
        justify-content:center;
        img{
            margin:15px auto;
            max-width:150px;
        }
    }
    .content{
        max-width:150px;
        padding:6px;
        p{
            font-size:${(props) => props.theme.fontSizes.body}rem;
            color:${(props) =>  props.theme.palette.ColorApp.gray_500};
        }
        .price{
            color:${(props) =>  props.theme.palette.font};
        }
    }

`
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