import React, { useState } from 'react'
import { Menu, Menu2 } from '../../Icons';
import { Input } from "../Input/style";
import { FilterStyled } from './Styled';

const Filter = ({ setIsFull, isFull }) => {
    const [Verified, setVerified] = useState(true);
    const [Featured, setFeatured] = useState("")
    const togleActive = () => { setIsFull(preve => !preve) }
    return (
        <FilterStyled>
            <p>12,911 items in <span>Mobile accessory</span></p>
            <div>
                <input type="checkbox" id="Verified" name="Verified" checked={Verified} onChange={
                    () => setVerified(p => !p)
                } />
                <label htmlFor="Verified">Verified only</label>
                <Input as="select" value={Featured} onChange={(e) => setFeatured(e.target.value)}>
                    <option value="">Featured</option>
                    <option value="Featured1">Featured 1</option>
                    <option value="Featured2">Featured 2</option>
                    <option value="Featured3">Featured 3</option>
                </Input>
                <Input as="div" className='mood' onClick={togleActive}>
                    <div className={!isFull ? 'active' : ""} >
                        <Menu />
                    </div>
                    <div className={isFull ? 'active' : ""} >
                        <Menu2 />
                    </div>
                </Input>
            </div>
        </FilterStyled>
    )
}

export default Filter