import React from 'react'
import { useStateValue } from '../../StateProvider/StateProvider'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'

const Subtotal = () => {
  const [{ basket }, dispath] = useStateValue()

  const getTotalPrice = () => {
    return basket.reduce((acc, item) => acc + item.price, 0)
  }

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getTotalPrice()} // part of the homework
        displayType={'text'}
        thousandSeparator={true}
        prefix={' $ '}
      />

      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
