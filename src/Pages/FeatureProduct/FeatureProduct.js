import React from 'react';

const FeatureProduct = ({ product, homePage }) => {
    const { sl, name, price, stock, description, img } = product;

    if (homePage) {
        if (sl <= 3) {
            return (
                <div className='product'>
                    <img className='image' src={img} alt="" width={200} />
                    <h2>{name}</h2>
                    <p>
                        Stock: {stock} <br />
                        Price: {price} <br />
                        <small>
                            {description}
                        </small>
                    </p>
                </div>
            );
        }
    }
    else {
        return (

            <div>
                <div className='product'>
                    <img className='image' src={img} alt="" width={200} />
                    <h2>{name}</h2>
                    <p>
                        Stock: {stock} <br />
                        Price: {price} <br />
                        <small>
                            {description}
                        </small>
                    </p>
                </div>
            </div>
        );
    }
};

export default FeatureProduct;