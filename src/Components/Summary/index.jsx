import React from 'react'
import { MainButton } from '../../Global/components'
import Payments from '../Payments'
import { SummaryStyled } from './styled'

const Summary = () => {
  return (
    <SummaryStyled>
        <div className="info">
            <ul>
                <li>
                    <p>Subtotal:</p>
                    <p>$1403.97</p>
                </li>
                <li>
                    <p>Discount:</p>
                    <p>- $60.00</p>
                </li>
                <li>
                    <p>Tax:</p>
                    <p>+ $14.00</p>
                </li>
            </ul>
        </div>
            <div className="total">
                <p>Total:</p>
                <p>$1357.97</p>
            </div>
            <MainButton>Checkout</MainButton>
            <Payments/>
    </SummaryStyled>
  )
}

export default Summary