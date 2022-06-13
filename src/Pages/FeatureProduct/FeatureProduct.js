import React from 'react';

const FeatureProduct = ({ product, homePage }) => {
    const { id, name, price, stock, description, img } = product;

    if (homePage) {
        if (id <= 3) {
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
};

export default FeatureProduct;