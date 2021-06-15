import React from 'react'
import './Footer.css'

const Footer = () => {
    return(
        <div className='Footer'>
           {/* <FooterLinks /> */}
           <div className='Fooetr__links'>
               <h5>Get To Know Us</h5>
               <ul>
                   <li>About us</li>
                   <li>Careers</li>
                   <li>press Realeases</li>
                   <li>Amazon Cares</li>
               </ul>
           </div>

           <div className='Fooetr__links'>
               <h5>Connect with Us</h5>
               <ul>
                   <li>Facebook</li>
                   <li>twitter</li>
                   <li>Instagram</li>
               </ul>
           </div>

           <div className='Fooetr__links'>
               <h5>Make Money with Us</h5>
               <ul>
                   <li>Sell on Amazon</li>
                   <li>Sell under Amazon Accelerator</li>
                   <li>Amazon Global Selling</li>
                   <li>Become an Affiliate</li>
                   <li>Fulfilment by Amazon</li>
                   <li>Advertise Your Products</li>
                   <li>Amazon Pay on Merchants</li>
               </ul>
           </div>

        </div>
    )
}

export default Footer;