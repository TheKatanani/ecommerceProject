import React from 'react'
import styled from 'styled-components'
import ItemList from '../ItemList'
import Range from '../Range'
import Rating from '../Rating'
const data = {
    li: [
        { id: 1, text: "Mobile accessory" },
        { id: 2, text: "Electronics" },
        { id: 3, text: "Smartphones" },
        { id: 4, text: "Modern tech" },
        { id: 5, text: "Electronics" },
        { id: 6, text: "Smartphones" },
        { id: 7, text: "Modern tech" },
    ],
    checkbox: [
        { id: 8, text: "Samsung" },
        { id: 9, text: "Apple" },
        { id: 10, text: "Smartphones" },
        { id: 11, text: "Huawei" },
        { id: 12, text: "Pocco" },
        { id: 13, text: "Lenovo" },
        { id: 14, text: "Modern tech" },
    ],
    checkbox2: [
        { id: 15, text: "Metallic" },
        { id: 16, text: "Plastic cover" },
        { id: 17, text: "Super power" },
        { id: 18, text: "Large Memory" },
        { id: 19, text: "Electronics" },
        { id: 20, text: "Smartphones" },
        { id: 21, text: "Modern tech" },
    ],
    radio: [
        { id: 21, text: "Samsung" },
        { id: 22, text: "Apple" },
        { id: 23, text: "Smartphones" },
        { id: 24, text: "Huawei" },
        { id: 25, text: "Pocco" },
        { id: 26, text: "Lenovo" },
        { id: 27, text: "Modern tech" },
    ],
    checkbox3: [
        { id: 28, text: <Rating num="4"/> },
        { id: 29, text: <Rating num="3"/> },
        { id: 30, text: <Rating num="2"/>},
        { id: 31, text: <Rating num="1"/> },
    ],
}
const AsideStyle=styled.aside`
    width:240px;
`
const Aside = () => {
    return (
        <AsideStyle>
            <ItemList title="Categories" items={data.li} type="li" />
            <ItemList title="Brands" items={data.checkbox} type="checkbox" />
            <ItemList title="Materials" items={data.checkbox2} type="checkbox" />
            <Range/>
            <ItemList title="Phone Type" items={data.radio} type="radio" />
            <ItemList title="Rating" items={data.checkbox3} type="checkbox" />
        </AsideStyle>
    )
}

export default Aside