import React from 'react'
import { useCart } from '../context/Cart'

export const Item = (props) => {
    const cart = useCart()
  return (
    <div >
    <div className="item-card">
        <h4>{props.name}</h4>
        <p>Price: ${props.price}</p>
        <button 
            onClick={() => 
                cart.setItems(
                    [ ...cart.items, {name: props.name, price: props.price}]
                )}
        >
            Add To Cart
        </button>
    </div>
    </div>
  )
}
