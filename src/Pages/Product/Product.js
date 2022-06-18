import React from 'react';
import { useNavigate } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({ product }) => {
    const { _id, name, price, quantity, supplier, description, img } = product;
    const navigate = useNavigate();
    const [products, setProducts] = useItems();

    const navigateToItemDetail = id => {
        navigate(`/inventory/${id}`);
    }
    const handleDeleteItem = id => {
        const deleteConfirm = window.confirm('Are you sure to delete?');
        if (deleteConfirm) {
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    toast('One Item Successfully Deleted.');
                    const remainingProducts = products.filter(prod => prod._id !== id);
                    setProducts(remainingProducts);
                })
        }
    }


    return (
        <div className='product'>
            <div className='product-details'>
                <img className='image' src={img} alt="" width={300} />
                <h2>{name}</h2>
                <h4>Supplier: {supplier}</h4>
                <p>
                    Quantity: {quantity} <br />
                    Price: {price} <br />
                    <small>{description}</small>
                </p>
            </div>
            <div className='product-button'>
                <button onClick={() => navigateToItemDetail(_id)} className='btn btn-secondary'>Update Stock</button>
                <button onClick={() => handleDeleteItem(_id)} className='btn ms-4 btn-danger'>Delete Item</button>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Product;