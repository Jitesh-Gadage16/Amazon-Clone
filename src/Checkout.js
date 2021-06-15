import React from 'react';
import './checkout.css';
import Subtotal from './Subtotal'
import { useStateValue } from "./StateProvider";
import CheckOutProducts from './CheckOutProducts'
import { getBasketTotal } from './reducer';


function Checkout(){
    const [{ basket }, dispatch] = useStateValue();
    return(
        <div className="checkout">

        <div className="checkout__left-header">
        <span ><strong>Pay faster for all your shopping needs</strong> with Amazon Pay balance </span>
        Get Instant refund on cancellations | Zero payment failures
        </div>

        <div className="checkout__section">

        <div className="checkout__left">
            <h1 className="checkout__title">Shopping Cart</h1>

            {basket.map(item =>(
                <CheckOutProducts 
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating} />

                
            ))}

            {/* <CheckOutProducts /> */}
        </div>

        <div className="checkout__right">             
            <Subtotal />
        </div>
        </div>  
  
        </div>

        
    )
}


export default Checkout;