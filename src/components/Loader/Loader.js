import React from 'react'
import loader from '../../images/loader.gif'

require('./Loader.scss')

function Loader (props) {
  return (
    <div className="loader">
      <img src={loader} alt=""/>
    </div>
  )
}
export default Loader
