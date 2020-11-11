import React from 'react'
import { useStateValue } from '../../StateProvider/StateProvider'
import StarIcon from '@material-ui/icons/Star'
import './CheckoutProduct.css'

const CheckoutProduct = (props) => {
  const { image, title, price, rating, id } = props.product

  const [{ basket }, dispatch] = useStateValue()

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id,
    })
  }

  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct__image' src={image} alt='product' />
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='checkoutProduct__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <StarIcon />
              </p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
