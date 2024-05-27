import React from 'react'
import { countryData } from '../../Mock'
import CountryItem from '../CountryItem'
import { CountryStyled } from './styled'

const Country = () => {
    return (
        <CountryStyled>
            <h3>Suppliers by region</h3>
            <div className="content">
                {countryData.map((el, i) => (
                    <CountryItem key={i} img={el.imgCountry} title={el.title} description={el.description} />
                ))}
            </div>
        </CountryStyled>
    )
}

export default Country