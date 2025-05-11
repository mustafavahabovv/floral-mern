import React from 'react'
import style from './Layout.module.css'
import { Outlet } from 'react-router'
import Header from './header/Header'
import Footer from './footer/Footer'

function Layout() {
  return (
    <div className={style.layout}>
        <div className={style.layout_header}><Header /></div>
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout