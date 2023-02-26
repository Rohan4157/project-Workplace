import React from 'react'
import Rafiki from '../../../assets/rafiki.png'
import './index.css'
function BannerImage() {
  return (
    <div className='section4-main'>
      <div>
        <img src={Rafiki} alt="logo" />
      </div>
      <div className='sub-main'>
        <div>
          <p className='main-text'>Get Matched The Most Valuable Jobs, Just Drop Your CV at Staffing Solutions</p>
          <p className='sub-text'>In the subject line of email, write your name, the description of the position you want to apply</p>
        </div>
        <div>
        </div>
      </div>

    </div>
  )
}

export default BannerImage