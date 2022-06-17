import React from 'react';
import './Item.css';
import { Link, useNavigate } from 'react-router-dom';

const Item = ({ item, homePage }) => {
    const { _id, name, price, quantity, supplier, description, img } = item;

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

            <Link to={`/inventory/${_id}`}>
                <button onClick={() => navigateToItemDetail(_id)} className='btn btn-secondary mx-auto'>Update Stock</button>
            </Link>

        </div>
    );
};

export default Item;