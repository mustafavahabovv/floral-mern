import React from 'react'
import style from './Home.module.css'
import MainImg from './components/mainimg/MainImg'
import Detail from './components/detail/Detail'
import Flowers from './components/flowers/Flowers'
import Pricing from './components/pricing/Pricing'
import Team from './components/team/Team'

function Home() {
  return (
    <div className={style.home}> 
    <MainImg />
    <Detail/>
    <Flowers/>
    <Pricing/>
    <Team/>
    </div>

  )
}

export default Home