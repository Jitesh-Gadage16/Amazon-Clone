import { ListItemAvatar } from '@material-ui/core';
import { useState } from 'react';
import CheckOutProducts from './CheckOutProducts';
import './Payment.css'
import {useStateValue} from './StateProvider'
import { Link } from 'react-router-dom';
import {CardElement,useStripe,useElements} from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from "./reducer";


function Payment()  {
    const [{basket , user}, dispatch] = useStateValue();
    
    const[succeeded , setSucceeded] =useState(false)
    const [ processing, setProcessing] = useState("");
    const stripe = useStripe();
    const elements = useElements();

    const [error,setError] = useState(null);
    const [disabled,setDisabled] = useState(true)

    const handlesubmit = e => {
        //do all the funny stripe stuff..

    }

    const handlechnage = e => {
        //listen for chnages in the cardelement

       
    }

    
    return(
     <div className="Payment">
         <div className="Payment__container">
           <h1>
               Checkout
               {/* Checkout (<link to='/Checkout'>{basket?.length} items</link>) */}
           </h1>

             {/* {payment section - deleivery addres} */}
             <div className= "Payment__section">
                   <div className="Payment__title">
                    <h3>Delivery Charges</h3>
                   </div> 
                   <div className="address__details">
                     <p>{user?.email}</p>
                     <p>A/26 Cidco Colony</p>
                     <p>Airoli , Navi Mumabi</p>
                   </div>
             </div>

              {/* {payment section - review items} */}
              <div className='Payment__section'>
                 <div className="Payment__title">
                   <h3>Review items and Delivery</h3>
                 </div> 
                  <div className="Payment__items">
                      {
                          basket.map(item => (
                              <CheckOutProducts 
                              id={item.id}
                              title={item.title}
                              image={item.image}
                              price={item.price} 
                              rating={item.rating}/>
                          ))
                      }
                      
                      
                      
                  </div>

              </div>

               {/* {payment section - payment methods} */}
               <div className='Payment__section'>
                   <div className='Payment__title'>
                       <h3>Payment Method</h3>
                   </div>
                   <div className='Payment__method'>
                       {/* {stripe} */}
                       <form onSubmit={handlesubmit}>
                           <CardElement  onChange={handlechnage}/>
                           <div className='Payment__pricecontainer'>
                            <CurrencyFormat renderText ={(value) => (
                             <>
                             <p>
                                  Subtotral ({basket.length} items): <strong>{value}</strong>
                             </p>
                            <small className="subtotal__gift">
                                <input type="checkbox" />
                                        This order contains a gift
                    
                                  </small>
                                  </>
                              )}

                              decimalScale={2}
                              value={getBasketTotal(basket)}
                              displayType={"text"}
                              thousandSeparator={true}
                              prifix={"₹ "}

                               />
                               <button disabled={processing || disabled || succeeded}>
                                   <spna>
                                       {processing ? <p>Processing</p> : "Buy Now"}
                                   </spna>

                               </button>

                           </div>
                           {/* error */}
                           {error && <div>{error}</div>}
                       </form>
                   </div>
               </div>

         </div>
     </div>
    )
}

export default Payment;