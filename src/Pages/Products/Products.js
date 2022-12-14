import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import useItems from '../../hooks/useItems';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    // const [items] = useItems();
    const navigate = useNavigate()
    
    const [pageCount, setPageCount] = useState(0);
    const [selectedPage, setSelectedPage] = useState(0);
    const [pageLoadSize, setPageLoadSize] = useState(10);

    const [items, setItems] = useState([]);

    useEffect(() => {
        // fetch('items.json')
        fetch(`https://young-caverns-50549.herokuapp.com/product?selectedPage=${selectedPage}&pageLoadSize=${pageLoadSize}`)
            .then(res => res.json())
            .then(data => setItems(data));
    }, [selectedPage, pageLoadSize]);


    useEffect(() => {
        fetch('https://young-caverns-50549.herokuapp.com/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setPageCount(pages);
            })
    }, [])

    const handleAddItem = () => {
        navigate('/addItem');
    }
    return (
        <div>
            <div>
                <p className='h1 text-secondary text-center'>Inventory
                    <button className='btn btn-secondary ms-5' onClick={handleAddItem}>Add New Item</button>
                </p>

                <div className="product-container">
                    {
                        items.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
            {/* for pagination */}
            <div className='pagination'>
                {
                    [...Array(pageCount).keys()]
                        .map(number => <button
                            className={selectedPage === number ? 'selected' : ''}
                            onClick={() => setSelectedPage(number)}
                        >{number + 1}</button>)
                }

                <select onChange={e => setPageLoadSize(e.target.value)}>
                    <option value="10" selected>10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </div>

        </div>
    );
};

export default Products;