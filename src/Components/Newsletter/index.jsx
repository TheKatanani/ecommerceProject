import React from 'react'
import {  NewsletterButton } from '../../Global/components'
import { Email } from '../../Icons'
import { NewsletterStyled } from './styles'

const Newsletter = () => {
  return (
    <NewsletterStyled>
        <div>
        <h6>Subscribe on our newsletter</h6>
        <p>Get daily news on upcoming offers from many suppliers all over the world</p>
        <form>
            <div className='input'> 
                <Email/><input type="email" name="email" id="email" placeholder='Email'/>
            </div>
            <NewsletterButton>Subscribe</NewsletterButton>
        </form>
        </div>
    </NewsletterStyled>
  )
}

export default Newsletter