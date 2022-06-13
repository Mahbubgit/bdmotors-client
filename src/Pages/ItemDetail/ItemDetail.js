import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import useItemDetail from '../../hooks/useItemDetail';

const ItemDetail = () => {
    // const {itemId} = useParams();
    // console.log(itemId);
    // const [item] = useItemDetail(itemId);
    // console.log(item);
    const {id} = useParams();
    console.log(id);
    const [item, setItem] = useState([id]);
    useEffect( () =>{
        fetch(`http://localhost:3000/inventory/${id}`)
        .then(res => res.json())
        .then(data => setItem(data));
    }, [id]);

    return (
        <div>
            <h2>You want to update item: {id}</h2>

            <div className='text-center'>
                <Link to={`/inventory/${id}`}>
                    <button className='btn btn-secondary'>Update Stock</button>
                </Link>
            </div>
        </div>
    );
};

export default ItemDetail;