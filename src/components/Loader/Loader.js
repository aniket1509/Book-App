import React from 'react'
import Hourglass from '../../images/Hourglass.gif'
import './Loader.css'

const Loader = () => {
  return (
    <div className='loader flex flex-c'>
      <img src={Hourglass} alt="Loader" />
    </div>
  )
}

export default Loader