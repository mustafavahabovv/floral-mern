import React from 'react'
import style from './Pricing.module.css'

function Pricing() {
  return (
    <div className={style.pricing}>
      <i>Devoted to wonderful beauty</i>
      <h1>Events Pricing</h1>
      <div className={style.pricing_box}>
        <div className={style.pricing_box_item}>
          <p><span>$ 31</span>  per table </p>
          <h4>Birthday Events</h4>
          <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
          <button>Book Now</button>
        </div>
        <div className={style.pricing_box_item}>
          <p><span>$ 31</span>  per table </p>
          <h4>Birthday Events</h4>
          <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
          <button>Book Now</button>
        </div>
        <div className={style.pricing_box_item}>
          <p><span>$ 31</span>  per table </p>
          <h4>Birthday Events</h4>
          <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
          <button>Book Now</button>
        </div>
      </div>
    </div>
  )
}

export default Pricing