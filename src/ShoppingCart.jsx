import { useState } from 'react'
import CartItem from './components/CartItem';
import TotalCostOfBag from './components/TotalCostOfBag';
import TotalItemsInBag from './components/TotalItemsInBag';

import beltImage from './assets/belt.jpg';
import sunglassesImage from './assets/sunglasses.jpg';
import watchImage from './assets/watch.jpg';

const defaultCartItems = [
  {
    id: 1,
    img: beltImage,
    name: "Buffalo",
    description: "Belt with Buckle Closure",
    mrp: 399.00,
    offer: 20,
    offerPrice: 319.00,
    quantity: 2,
  },
  {
    id: 2,
    img: sunglassesImage,
    name: "Resist Eyewear",
    description: "UV Protected Rimless Wayfarers",
    mrp: 5999.00,
    offer: 74,
    offerPrice: 1560.00,
    quantity: 3,
  },
  {
    id: 3,
    img: watchImage,
    name: "Fossil Watch",
    description: "FS4813I Chronograph Watch with Leather Strap",
    mrp: 9995.00,
    offer: 0,
    offerPrice: 9995.00,
    quantity: 1,
  }
]

function ShoppingCart() {
  const [cart, setCart] = useState(defaultCartItems)

  return (
    <>
      <TotalItemsInBag cart={cart}/>
      <div className='grow h-full w-full overflow-scroll'>
          {
            cart.map((item) => {
              return <CartItem key={item.id} item={item} setCart={setCart}/>
            })
          }
      </div>
      <TotalCostOfBag cart={cart} />
    </>
  )
}

export default ShoppingCart
