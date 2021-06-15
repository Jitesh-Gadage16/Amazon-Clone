import React from 'react'
import "./CheckOutProducts.css";
import { useStateValue } from "./StateProvider";

const CheckOutProducts = ({id,image,title,price,rating}) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
        type: 'REMOVE_FROM_BASKET',
        id: id,
    })
}



    return(
        <div className="CheckOutProducts">
           <img src={image} className="CheckOutProduct__image"></img>

           <div className="CheckOutProducts__info">
              <p className="CheckOutProducts__title">{title}</p>
              <p className="CheckOutProducts__price">
                  <small>₹ </small>
                  <strong>{price}</strong>
              </p>
              <div className="CheckOutProducts__rating">
              {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
              </div>
              <button onClick={removeFromBasket}>Remove From Basket</button>
             </div> 
        </div>

    )
}

export default CheckOutProducts;