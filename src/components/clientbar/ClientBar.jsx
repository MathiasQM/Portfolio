import React from 'react'
import './clientbar.css'
import synkronlogo from '../../assets/synkron-logo.webp'
import muxlogo  from '../../assets/MUX-logo2.svg'
import nlmlogo  from '../../assets/NLMlogo.webp'

const ClientBar = () => {
  return (
    <div className='clientbar_container'>
        <h4>Featured Clients</h4>
        <div className='client-logo'>
            <img src={synkronlogo} alt="" />
            <img src={muxlogo} alt="" />
            <img src={nlmlogo} alt="" />
        </div>
    </div>
  )
}

export default ClientBar