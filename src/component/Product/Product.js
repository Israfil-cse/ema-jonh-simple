import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product_containar">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4>{name}</h4>
                <br />
                <p><small>By : {seller}</small></p>
                <p><small>Price :${price}</small></p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
            </div>
        </div>
    );
};

export default Product;