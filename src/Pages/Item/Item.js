import React from 'react';
import './Item.css';

const Item = ({ item }) => {
    const { id, name, price, quantity,supplier, description, img } = item;
  
    if (id <= 6) {
        return (
            <div className='product'>
                <img className='image' src={img} alt="" width={300} />
                <h2>{name}</h2>
                <h4>Supplier: {supplier}</h4>
                <p>
                    Quantity:{quantity} <br />
                    Price: {price} <br />
                    <small>{description}</small>
                </p>

            </div>
        );
    }
};

export default Item;