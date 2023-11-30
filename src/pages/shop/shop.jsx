import React from 'react'
import { PRODUCTS } from '../../product'
import {Product} from "./product"
import "./shop.css"
export const Shop = () => {
  return (
    <div className='shop'>
        <div className='shopTitle'>
        <h1>Tevin's Store</h1></div>
        <div className='products'>
            {PRODUCTS.map((prod) => (
                <Product data = {prod} />
            ))}
        </div>

        
    </div>
  )
}
