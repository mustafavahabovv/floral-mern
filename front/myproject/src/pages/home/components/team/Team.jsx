import React from 'react'
import style from './Team.module.css'

function Team() {
  return (
    <div className={style.team}>
        <i>Devoted to wonderful beauty</i>
        <h1>Our Team</h1>

        <div className={style.team_box}>
            <div className={style.team_box_item}>
                <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr1.jpg" alt="" />
                <h4>John Doe</h4>
                <p>Designer</p>
            </div>
            <div className={style.team_box_item}>
                <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr1.jpg" alt="" />
                <h4>John Doe</h4>
                <p>Designer</p>
            </div>
            <div className={style.team_box_item}>
                <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr1.jpg" alt="" />
                <h4>John Doe</h4>
                <p>Designer</p>
            </div>
        </div>
    </div>
  )
}

export default Team