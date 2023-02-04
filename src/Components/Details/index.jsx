import React from 'react'
import { NavLink } from 'react-router-dom'
import { Correct } from '../../Icons'
import { detailsData } from '../../Mock'
import { DetailsStyled } from './styled'

const Details = () => {
    return (
        <DetailsStyled>
            <nav>
                <ul>
                    {detailsData.navItem.map((text, i) => (
                        <li key={i} >
                            <NavLink to={`/${i}`}>{text}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="content">
                <article>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </article>
                <table>
                    <tbody>
                        {detailsData.tableData.map((tr, i) => (
                            <tr key={i}>
                                <td>{tr.title}</td>
                                <td>{tr.decsription}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="features">
                    {detailsData.feature.map((text, i) => (
                        <div key={i} className="feature">
                            <Correct />
                            <p>{text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </DetailsStyled>
    )
}

export default Details