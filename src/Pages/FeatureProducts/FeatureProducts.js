import React, { useEffect, useState } from 'react';
import FeatureProduct from '../FeatureProduct/FeatureProduct';

const FeatureProducts = ({ homePage }) => {
    const [featureProduct, setFeatureProduct] = useState([]);
    useEffect(() => {
        fetch('featureProduct.json')
            .then(res => res.json())
            .then(data => setFeatureProduct(data));
    }, [])

    return (
        <div className='container'>
            <h1 className='product-title text-secondary text-center mt-3'>Featured Products</h1>
            <div className="product-container">
                {
                    featureProduct.map(product => <FeatureProduct
                        key={product.id}
                        product={product}
                        homePage={homePage}
                    ></FeatureProduct>)
                }
            </div>
        </div>
    );
};

export default FeatureProducts;