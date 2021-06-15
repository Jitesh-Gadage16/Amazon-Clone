import React from "react";
import "./ProductGrid.css";

const ProductGrid = ({
  title,
  image,
  image1,
  image2,
  image3,
  image4,
  h1,
  h2,
  h3,
  h4,
}) => {
  return (
    <div className="productgrid">
      <h1>{title}</h1>
      <img src={image} className="single_img"></img>
      <div className="productgrid_one">  
        <div className="product__img">
          <img src={image1}></img>
          <small className="heading">
            <a href="/">{h1}</a>
          </small>
        </div>
        <div className="product__img">
          <img src={image2}></img>
          <small className="heading">
            <a href="/">{h2}</a>
          </small>
        </div>
      </div>

      <div className="productgrid_one">
        <div className="product__img">
          <img src={image3}></img>
          <small className="heading">
            <a href="/"> {h3}</a>
          </small>
        </div>
        <div className="product__img">
          <img src={image4}></img>
          <small className="heading">
            <a href="/">{h4}</a>
          </small>
        </div>
      </div>

       <div className="viewall__products">
           <a href="/">View all offers</a>
       </div>

    </div>
  );
};

export default ProductGrid;
