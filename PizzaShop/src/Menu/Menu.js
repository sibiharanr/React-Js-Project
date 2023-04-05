import React from 'react'
import './Menu.css'
import { MenuList } from "../MenuList/MenuList"
import MenuItem from "../MenuItem/MenuItem"

function Menu() {
  return (
    <div className="Menu">
        <h1 className="MenuTitle">Our Menu</h1>
        <div className="menulist">
            { MenuList.map((menuItem, key) => {
              return (
                    <MenuItem
                       key={key}
                       image={menuItem.image}
                       name={menuItem.name}
                       price={menuItem.price}
                       />
                       );
                })}
          </div>
    </div>
  );
}

export default Menu;