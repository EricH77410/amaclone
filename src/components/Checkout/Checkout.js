import React from 'react'
import { useStateValue } from '../../StateProvider/StateProvider'
import './Checkout.css'
import Subtotal from './Subtotal'

const Checkout = () => {
  const [{ basket }] = useStateValue()

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Ad"
        />
        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {/* parcours basket */}
          {basket?.map((item, idx) => (
            <h3 key={idx}>{item.title}</h3>
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
