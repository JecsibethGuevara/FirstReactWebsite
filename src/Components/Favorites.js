import React from 'react'
import Product from './Product'

export default function Favorites() {
  return (
    <div className='favorites'>
        <div className='btn-circular'></div>
        <div className='fav-products'>            
            <Product class='one'/>
            <Product className='two'/>
            <Product className='three'/>
            
        </div>
        <div className='btn-circular'></div>
    </div>
  )
}
