import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const { _id, name, price, quantity, supplier, description, img } = product;
    const navigate = useNavigate();

    const navigateToItemDetail = id => {
        navigate(`/inventory/${id}`);
    }

    return (
            <div className='product'>
                <div className='product-details'>
                    <img className='image' src={img} alt="" width={300} />
                    <h2>{name}</h2>
                    <h4>Supplier: {supplier}</h4>
                    <p>
                        Quantity:{quantity} <br />
                        Price: {price} <br />
                        <small>{description}</small>
                    </p>
                </div>
                <div className='product-button'>
                    <button onClick={() => navigateToItemDetail(_id)} className='btn btn-secondary'>Update Stock</button>
                </div>
            </div>
    );
};

export default Product;