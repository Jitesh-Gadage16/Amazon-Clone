import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { Button } from 'bootstrap'
import {useStateValue} from './StateProvider'
import { getBasketTotal } from "./reducer";
import { useHistory } from 'react-router-dom'


const Subtotal = () => {
    const history = useHistory()
    const [{basket} , dispatch] = useStateValue();
    
    return(
        <div className="subtotal">
        <CurrencyFormat 
        renderText ={(value) => (
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
         <button onClick={e => history.push('/payment')}>Proceed to checkOut</button>

        </div>
    )
}


export default Subtotal;