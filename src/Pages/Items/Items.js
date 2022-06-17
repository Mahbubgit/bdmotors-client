import { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css';

const Items = ({ homePage }) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product/home')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    return (
        <div className='container'>
            <h1 className='text-secondary text-center'>Inventory</h1>
            <div className="product-container">
                {
                    items.map(item => <Item
                        key={item._id}
                        item={item}
                        homePage={homePage}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Items;