import React from 'react';
import './Item.css';

const Item = ({ item }) => {
    const { id, name, price, stock, description, img } = item;
  
    if (id <= 6) {
        return (
            <div className='product'>
                <img className='image' src={img} alt="" width={300} />
                <h2>{name}</h2>
                <p>
                    Stock:{stock} <br />
                    Price: {price}/= Taka <br />
                    <small>{description}</small>
                </p>

            </div>
        );
    }
};

export default Item;