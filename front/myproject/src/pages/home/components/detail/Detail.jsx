import React from 'react'
import style from './Detail.module.css'

function Detail() {
  return (
    <div className={style.detail}>
        <div className={style.detail_left}>
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit amet, pri omnium verterem id, sit labore dicunt an, ea civibus.</p>
            <button>Read More</button>
        </div>
        <div className={style.detail_right}>
            <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/b4.jpg" alt="" />
        </div>
    </div>
  )
}

export default Detail