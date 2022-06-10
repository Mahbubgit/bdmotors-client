import React, { useEffect, useState } from 'react';
import FeatureProduct from '../FeatureProduct/FeatureProduct';

const FeatureProducts = () => {
    const [featureProduct, setFeatureProduct] = useState([]);
    useEffect(() => {
        fetch('featureProduct.json')
            .then(res => res.json())
            .then(data => setFeatureProduct(data));
    }, [])

    return (
        <div className='container'>
            <h3 className='product-title text-secondary text-center mt-3'>Featured Products</h3>
            <div className="product-container">
                {
                    featureProduct.map(product => <FeatureProduct
                        key={product.id}
                        product={product}
                    ></FeatureProduct>)
                }
            </div>
        </div>
    );
};

export default FeatureProducts;