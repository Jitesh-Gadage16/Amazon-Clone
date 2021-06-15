import React from 'react'
import './Home.css';
import Product from './Product'
import ProductGrid from './ProductGrid'

const Home = () => {
    return(
       <div className="home">
           <div className="home__container">
           <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-1x._CB658860139_.jpg" border="0"></img>
           </div>
        

           <div className="home__row">
           
           <Product title="GoPro HERO9 Black — Waterproof Action Camera with Touch Screen 5K Ultra HD Video 20MP Photos 1080p Live Streaming Stabilization." rating={3} price={37000}  price={37350.00} image="https://i.ibb.co/D7dtV9p/31nfm-RSz-Q0-L-AC-SY200.jpg" alt=""/>
           <Product title="Apple iPhone 11 Pro Max (512GB) - Space Grey" rating={4} price="111900" image="https://m.media-amazon.com/images/I/31348z5DSJL.__AC_SY200_.jpg" />

           <Product title="Apple MacBook Air (13-inch, 1.1GHz Quad-core 10th-Generation Intel Core i5 Processor, 8GB RAM, 512GB Storage) - Silver" rating={5} price="99,990" image="https://m.media-amazon.com/images/I/81MkiDFq80L._AC_UY218_.jpg"/>
           <Product title="Sony Bravia 138.8 cm (55 inches) 4K Ultra HD Smart LED TV KD-55X7002G (Black) (2019 Model)" price="57,990.00" rating={4} image="https://images-na.ssl-images-amazon.com/images/I/81Nw2ifyBzL._SX425_.jpg"/>
                     
            </div>

            <div className="row">
            <ProductGrid title="Styles for Men | Up to 70% off" h1="Clothings" h2="Footware" h3="Watches" h4="bags & Luggages" image1="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Mens_fashion/1._SY116_CB656503003_.jpg" image2="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Mens_fashion/2._SY116_CB656503003_.jpg"  image3="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Mens_fashion/3._SY116_CB656503003_.jpg" image4="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Mens_fashion/4._SY116_CB656503003_.jpg"/>

            <ProductGrid title="Pay your credit card bills on Amazon" image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/DesktopGateway_CategoryCard_379x304_CCBP._SY304_CB413372299_.jpg"/>

            <ProductGrid  title="Styles for Women | Up to 70% off"  image1="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Womens_Fashion/1._SY116_CB656506073_.jpg" h1="Women's clothing" image2="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Womens_Fashion/2._SY116_CB656506073_.jpg" h2="Footware's+Handbags" image3="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Womens_Fashion/3._SY116_CB656506073_.jpg" h3="Watches" image4="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Womens_Fashion/4._SY116_CB656506073_.jpg"h4="Fashion Jwellery" />
            <ProductGrid title="Everyday essentials" h1="Cleaning essentials" h2="Immunity & healthcare" h3="Women's personal care" h4="Men's grooming" image1="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HPC/GW/Desktop-Qc-1x_4._SY116_CB431329535_.jpg" image2="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HPC/GW/Desktop-Qc-1x_1._SY116_CB431329533_.jpg" image3="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HPC/GW/Desktop-Qc-1x_2._SY116_CB431329535_.jpg" image4="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HPC/GW/Desktop-Qc-1x_3._SY116_CB431329535_.jpg"/>
           
            </div>

            <div className="home__row">
            <Product title="GoPro HERO9 Black — Waterproof Action Camera with Touch Screen 5K Ultra HD Video 20MP Photos 1080p Live Streaming Stabilization." rating={3} price={37000}  price={37350.00} image="https://i.ibb.co/D7dtV9p/31nfm-RSz-Q0-L-AC-SY200.jpg" alt=""/>
           <Product title="Apple iPhone 11 Pro Max (512GB) - Space Grey" rating={4} price="111900" image="https://m.media-amazon.com/images/I/31348z5DSJL.__AC_SY200_.jpg" />

            </div>


       </div> 

       
    )
}

export default Home;