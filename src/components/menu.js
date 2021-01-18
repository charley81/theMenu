import React from 'react'
import MenuItem from './menu-item'

const Menu = ({ menu }) => {
  return (
    <div className="menu-container">
      {menu.map(item => (
        <MenuItem key={item.id} {...item} />
      ))}
    </div>
  )
}

export default Menu
