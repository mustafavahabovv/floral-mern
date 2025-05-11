import React from 'react'
import style from './Header.module.css'
import { Link } from 'react-router'

function Header() {
  return (
    <div className={style.header}>

      <div className={style.logo}>
        <p>Floral Studio</p>
      </div>

      <div className={style.menu}>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/admin'>Admin</Link></li>
          <li><Link to='/basket'>Basket</Link></li>
          <li><Link to='/wish'>WishList</Link></li>
          <li><Link to='#'>Portfolio</Link></li>
          <li><Link to='#'>Contacts</Link></li>
        </ul>
      </div>

      <i className="fa-solid fa-bars"></i>
    </div>
  )
}

export default Header