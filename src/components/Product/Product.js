import React from 'react'
import { useStateValue } from '../../StateProvider/StateProvider'
import StarIcon from '@material-ui/icons/Star'
import './Product.css'

function Product({ title, price, image, rating }) {
  const [state, dispatch] = useStateValue()

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      payload: {
        title,
        image,
        price,
        rating,
      },
    })
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} />
            ))}
        </div>
      </div>

      <img src={image} alt="Product" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product
