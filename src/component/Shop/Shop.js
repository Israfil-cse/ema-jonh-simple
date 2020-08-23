import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const frist10 = fakeData.slice(0, 10);
    const [products, setproducts] = useState(frist10);
    return (
        <div className="shop_container">
            <div className="product_container">
                    {
                        products.map(pd => <Product product={pd}></Product>)
                    }
            </div>
            <div className="cart-container">
                <h1>This is cart-section</h1>
            </div>
        </div>
    );
};

export default Shop;