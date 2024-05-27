import React, { useState } from 'react'
import { Container } from '../../Global/components'
import { AppStore, FaceBook, GooglePlay, Instagram, LinkedIn, Twitter, Youtube } from '../../Icons'
import FooterList from '../FooterList'
import Logo from '../Logo'
import { FooterfoStyled, FooterStyled } from './styled'
import English from '../../Images/US@2x.png'
import { footerData } from '../../Mock'

const Footer = () => {

    const [Ship, setShip] = useState("")
    return (
        <>
            <FooterStyled>
                <Container>
                    <div className='logoBox'>
                        <Logo />
                        <p>Best information about the company gies here but now lorem ipsum is </p>
                        <div className="icons">
                            <FaceBook />
                            <Twitter />
                            <LinkedIn />
                            <Instagram />
                            <Youtube />
                        </div>
                    </div>
                    <div className='uls'>
                        {footerData.map((el, i) => (
                            <FooterList key={i} title={el.title} data={el.lis} />
                        ))}
                    </div>
                    <div>
                        <h4>Get app</h4>
                        <div className="stores">
                            <div className="store">
                                <AppStore />
                            </div>
                            <div className="store">
                                <GooglePlay />
                            </div>
                        </div>
                    </div>
                </Container>
            </FooterStyled>
            <FooterfoStyled>
                <Container>
                    <p>© 2023 Ecommerce. </p>
                    <div>
                        <img src={English} alt="" />
                        <select value={Ship} onChange={(e) => setShip(e.target.value)}>
                            <option value="">Ship to </option>
                            <option value="Ship1">Ship 1</option>
                            <option value="Ship2">Ship 2</option>
                            <option value="Ship3">Ship 3</option>
                        </select>
                    </div>
                </Container>
            </FooterfoStyled>
        </>
    )
}

export default Footer