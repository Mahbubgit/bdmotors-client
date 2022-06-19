import React, { useEffect, useState } from 'react';
import FeatureProduct from '../FeatureProduct/FeatureProduct';

const FeatureProducts = ({ homePage }) => {
    const [featureProduct, setFeatureProduct] = useState([]);
    useEffect(() => {
        // fetch('featureProduct.json')
        fetch('https://young-caverns-50549.herokuapp.com/featureProduct')
            .then(res => res.json())
            .then(data => setFeatureProduct(data));
    }, [])

    return (
        <div className='container'>
            <h1 className='text-secondary text-center'>Featured Products</h1>
            <div className="product-container">
                {
                    featureProduct.map(product => <FeatureProduct
                        key={product._id}
                        product={product}
                        homePage={homePage}
                    ></FeatureProduct>)
                }
            </div>
        </div>
    );
};

export default FeatureProducts;