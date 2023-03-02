import React from 'react'
import { Cart } from './components/Cart'
import { Item } from './components/Item'

export const App = () => {
  return (
    <div className="text-center">
      <Item name="Mackbook Pro" price={1599} />
      <Item name="Iphone 14" price={999} />
      <Item name="Mac Pro" price={2599} />

      <Cart />
    </div>
  )
}