import React from 'react'
import { Link } from 'react-router-dom'
import { MainButton } from '../../Global/components'
import imgCard from '../../Images/Banner.png'
import MainSectionBox from '../MainSectionBox'
import avatar from '../../Images/Avatar.png'
import { MainSecStyle } from './styles'
import ImageCard from '../ImageCard'
const MainSection = () => {
    return (
        <MainSecStyle>
                <ul>
                    <li  className='active'>
                        <Link to="">Automobiles</Link>
                        {/* use navLink */}
                    </li>
                    <li>
                        <Link to="">Clothes and wear</Link>
                    </li>
                    <li>
                        <Link to="">Home interiors</Link>
                    </li>
                    <li>
                        <Link to="">Computer and tech</Link>
                    </li>
                    <li>
                        <Link to="">Tools, equipments</Link>
                    </li>
                    <li>
                        <Link to="">Sports and outdoor</Link>
                    </li>
                    <li>
                        <Link to="">Animal and pets</Link>
                    </li>
                    <li>
                        <Link to="">Machinery tools</Link>
                    </li>
                    <li>
                        <Link to="">More category</Link>
                    </li>
                </ul>
            <ImageCard img={imgCard} h2="Electronic items"h3="Latest trending"button="Learn more" display="block"/>
            <div className='userBox'>
                <div className='user'>
                    <div>
                        <img src={avatar} alt="avatar" />
                        <p>Hi, user let’s get stated</p>
                    </div>
                    <MainButton>Join now</MainButton>
                    <MainButton>Log in</MainButton>
                </div>
                <MainSectionBox color="#F38332" text="Get US $10 off with a new supplier"/>
                <MainSectionBox color="#55BDC4" text="Send quotes with supplier preferences"/>
            </div>
        </MainSecStyle>
    )
}

export default MainSection