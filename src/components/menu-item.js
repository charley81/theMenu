import React from 'react'

const MenuItem = ({ title, img, price, desc }) => {
  return (
    <div className="menu-item">
      <img src={img} alt="dinner plate" />
      <h3>{title}</h3>
      <h4>{price}</h4>
      <p>{desc}</p>
    </div>
  )
}

export default MenuItem
