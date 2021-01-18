import React from 'react'

const MenuItem = ({ title, img, price, desc }) => {
  return (
    <div className="menu-item">
      <header className="item-header">
        <img src={img} alt="dinner plate" />
        <div className="item-info">
          <h3>{title}</h3>
          <h4>{price}</h4>
        </div>
      </header>
      <div className="underline"></div>
      <p>{desc}</p>
    </div>
  )
}

export default MenuItem
