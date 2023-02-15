import React from 'react'
import { Link } from 'react-router-dom'
import { Vector } from '../../Icons'
import ImageCard from '../ImageCard'
import { BlockStyled } from './styled'

const BlockItems = ({ mydata }) => {
    return (
        <BlockStyled>
            <ImageCard img={mydata.imgcard.img} h6={mydata.imgcard.h6} button={mydata.imgcard.button} />
            <div className="title">
                <h6>
                    Home and outdoor
                </h6>
                </div>
            <div className='items'>
                {mydata.items.map((item, i) => (
                    <div key={i} className='item'>
                        <div className="text">
                            <h6>{item.title}</h6>
                            <p>{item.description}</p>
                        </div>
                        <div className="img">
                            <img src={item.img} alt={item.img} />
                        </div>
                    </div>
                ))}
            </div>
            <div className="source">
                <Link to="">Source now <Vector/></Link>
            </div>
        </BlockStyled>

    )
}

export default BlockItems