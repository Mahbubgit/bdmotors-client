import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import axiosPrivate from '../api/axiosPrivate';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        const getMyItems = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/product/myItem?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                // const { data } = await axios.get(url);
                setMyItems(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getMyItems();
    }, [user])

    // useEffect(() => {
    //     const email = user?.email;
    //     const url = `http://localhost:5000/product/myItem?email=${email}`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setMyItems(data));
    // }, [user]);

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
                    const remainingProducts = myItems.filter(prod => prod._id !== id);
                    setMyItems(remainingProducts);
                })
        }
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>My Added Item List. Creator: {user.email}[{myItems.length}]</h2>
            {
                myItems.map(item => <div>
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Description</td>
                                <td>Price</td>
                                <td>Image</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                            <td><img src={item.img} alt="" /></td>
                            <td><button onClick={() => handleDeleteItem(item._id)} className='btn btn-danger mx-auto'>Delete X</button></td>
                            <ToastContainer></ToastContainer>
                        </tr>
                    </table>
                </div>)
            }
        </div>
    );
};

export default MyItem;