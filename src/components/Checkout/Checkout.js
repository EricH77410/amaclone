import React from 'react'
import { useStateValue } from '../../StateProvider/StateProvider'
import './Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'

const Checkout = () => {
  const [{ basket, user }] = useStateValue()

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt='Ad'
        />
        <div>
          <h3>{user.email}</h3>
          <h2 className='checkout__title'>Your shopping Basket</h2>

          {/* parcours basket */}
          {basket?.map((item, idx) => (
            <CheckoutProduct key={idx} product={item} />
          ))}
        </div>
      </div>

      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
