import React, { useEffect, useState } from 'react';
import './Item.css';
import { useNavigate } from 'react-router-dom';

const Item = ({ item, homePage }) => {
    const { _id, name, slno, price, quantity, supplier, description, img } = item;
    const [pageCount, setPageCount] = useState(0);

    useEffect( () =>{
        fetch('http://localhost:5000/productCount')
        .then(res => res.json())
        .then(data =>{
            const count = data.count;
            const pages = Math.ceil(count/5);
            setPageCount(pages);
        })
    }, [])

    const navigate = useNavigate();

    const navigateToItemDetail = id => {
        navigate(`/inventory/${id}`);
    }

    // show 6 items for home page
    if (homePage) {
        if (slno <= 6) {
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
        }
    }
    // for manage inventories(show all items)
    else {
        return (
            <div className='container'>
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


                <div>
                    {
                    [...Array(pageCount).keys()]
                    .map(number => <button>{number}</button>)
                }
                </div>
            </div>
        );
    }
};

export default Item;