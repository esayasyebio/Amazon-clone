import React from 'react'
import { useStateValue } from '../StateProvider/StateProvider';
import './CheckoutProduct.css'
import StarRateIcon from '@material-ui/icons/StarRate';

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
          type: "REMOVE_FROM_BASKET",
          id: id,
        });
      };
     


    return (
        <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarRateIcon/>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}{' '}
      </div>
    </div>
    )
}

export default CheckoutProduct
