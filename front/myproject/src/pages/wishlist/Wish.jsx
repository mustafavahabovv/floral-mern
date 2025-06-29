import React, { useEffect, useState } from 'react'
import style from './Wishlist.module.css'
import { Link } from 'react-router'

function Wishlist() {
  const [wishlist, setWishlist] = useState([])

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishList')) || []
    setWishlist(storedWishlist)
  }, [])

  const removeFromWishlist = (_id) => {
    const updatedWishlist = wishlist.filter(item => item._id !== _id)
    localStorage.setItem('wishList', JSON.stringify(updatedWishlist))
    setWishlist(updatedWishlist)
  }

  return (
    <div className={style.wishlist}>
      <h1>Wishlist</h1>
      <Link to="/">Home</Link>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul>
          {wishlist.map(item => (
            <li key={item._id}>
              <img src={item.image || item.img} alt={item.name || item.title} />
              <span>{item.name || item.title}</span>
              <button onClick={() => removeFromWishlist(item._id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Wishlist
