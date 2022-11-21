import React from 'react'
import img from "./images/img1.jpg"
import "./Navigation.css"

const Navigation = () => {
  return (
    <div className='navigation'>
      <logo className="nav">
        <img src={img} alt="logo"/>
      </logo>
      <span>Fill the form to get your booking ticket</span>
    </div>
  )
}

export default Navigation