import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Header.module.css'

const Header = () => {
  return (
    <nav className={style.header}>
      <ul>
        <li>
          <NavLink className={style.link} to='/' end>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink className={style.link} to='contact'>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header
