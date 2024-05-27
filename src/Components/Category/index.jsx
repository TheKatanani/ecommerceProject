import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import img2 from '../../Images/DE@2x.png'
import { CatigoryStyled } from './styles'
import { Menu3 } from '../../Icons'
import Select from '../Select'
import { selectData } from '../../Mock'
import { useContext } from 'react'
import { ThemeContext } from '../../Context'

const Category = ({ page }) => {
    const [Help, setHelp] = useState("");
    const [Ship, setShip] = useState("");
    const [Language, setLanguage] = useState("");
  const [theme ] = useContext(ThemeContext)
    return (
        <>
            <CatigoryStyled page={page}>
                <ul>
                    <li>
                        <Link to=""><Menu3 color={theme.palette.font}/> All category</Link>
                    </li>
                    <li>
                        <Link to="">Hot offers</Link>
                    </li>
                    <li>
                        <Link to="">Gift boxes</Link>
                    </li>
                    <li>
                        <Link to="">Projects</Link>
                    </li>
                    <li>
                        <Link to="">Menu item</Link>
                    </li>
                    <li>
                        <Link to="">
                            <Select
                                value={Help}
                                onChange={e => setHelp(e.target.value)}
                                options={selectData.Help}
                            />
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Select
                            value={Language}
                            onChange={e => setLanguage(e.target.value)}
                            options={selectData.Language}
                        />
                    </li>
                    <li>
                        <img src={img2} alt="img" width={20} />
                        <Select
                            value={Ship}
                            onChange={e => setShip(e.target.value)}
                            options={selectData.Ship}
                        />
                    </li>
                </ul>
            </CatigoryStyled>
        </>
    );
};

export default Category;