import React, { useEffect, useState } from 'react';
// import useItems from '../../hooks/useItems';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    // const [items] = useItems();
    const [pageCount, setPageCount] = useState(0);

    const [selectedPage, setSelectedPage] = useState(0);
    const [pageLoadSize, setPageLoadSize] = useState(10);

    const [items, setItems] = useState([]);

    useEffect(() => {
        // fetch('items.json')
        fetch(`http://localhost:5000/product?selectedPage=${selectedPage}&pageLoadSize=${pageLoadSize}`)
            .then(res => res.json())
            .then(data => setItems(data));
    }, [selectedPage,pageLoadSize]);


    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setPageCount(pages);
            })
    }, [])

    return (
        <div>
            <div>
                <h1 className='text-secondary text-center'>Inventory</h1>
                <div className="product-container">
                    {
                        items.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>

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