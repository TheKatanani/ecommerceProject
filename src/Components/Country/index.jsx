import React from 'react'
import styled from 'styled-components'
import img from '../../Images/US@2x.png'
import img2 from '../../Images/DE@2x.png'
import CountryItem from '../CountryItem'
const data = [
    { img, title: "United States", description: "shopname.ae" },
    { img: img2, title: "United States", description: "shopname.ae" },
    { img, title: "United States", description: "shopname.ae" },
    { img: img2, title: "United States", description: "shopname.ae" },
    { img, title: "United States", description: "shopname.ae" },
    { img, title: "United States", description: "shopname.ae" },
    { img, title: "United States", description: "shopname.ae" },
    { img: img2, title: "United States", description: "shopname.ae" },
    { img, title: "United States", description: "shopname.ae" },
    { img, title: "United States", description: "shopname.ae" },
]
const CountryStyled = styled.div`
    .content{
        display: grid;
        grid-template-columns:repeat(5,auto);
        justify-content:space-between;
    }
    h3{
        color:${(props) => props.theme.palette.font};
        font-size:${(props) => props.theme.fontSizes.body}rem;
        margin: 15px 0;
    }
`
const Country = () => {
    return (
        <CountryStyled>
            <h3>Suppliers by region</h3>
            <div className="content">
                {data.map((el, i) => (
                    <CountryItem key={i} img={el.img} title={el.title} description={el.description} />
                ))}
            </div>
        </CountryStyled>
    )
}

export default Country