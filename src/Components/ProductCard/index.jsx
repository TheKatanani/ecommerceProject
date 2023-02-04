import React from 'react'
import { ProductCardStyeld } from './styled'
import { Link } from 'react-router-dom'
import { MoveToCart, MyCart, Orders, OrdersNull } from '../../Icons'
import { Info } from '../../Global/components'
import Rating from '../Rating'
const ProductCard = ({isFull,data:{ description,img, title, price, prevPrice, orders, freeShipping }}) => {
    return (
        <ProductCardStyeld full={isFull}>
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div className="content">
                <p className="price">{price} <span className="prevCost">{prevPrice}</span>   </p>
                <Info>
                    <div className="rating"><Rating num="4" num2="7.5"/></div>
                    {isFull && <><p className="orders">{orders} orders</p>
                        {freeShipping && <p className="freeShipping">Free Shipping</p>}</>}
                </Info>
                {isFull&&<p className="description">{description}</p>}
                {isFull&&<Link to="/" className="ViewDetails">View details</Link>}
                <p className="title">{title}</p>
                <div className="icons">
                    <MoveToCart/>
                    <OrdersNull/>
                </div>
            </div>
        </ProductCardStyeld>
    )
}

export default ProductCard