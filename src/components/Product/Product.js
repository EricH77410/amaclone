import React from 'react'
import StarIcon from '@material-ui/icons/Star'
import './Product.css'

function Product({ title, price, image, rating }) {
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
      <button>Add to Basket</button>
    </div>
  )
}

export default Product
