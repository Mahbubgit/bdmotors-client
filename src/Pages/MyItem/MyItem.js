import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosPrivate from '../../api/axiosPrivate';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getMyItems = async () => {
            const email = user?.email;
            const url = `https://young-caverns-50549.herokuapp.com/product/myItem?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
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

    // using fetch
    // useEffect(() => {
    //     const email = user?.email;
    //     const url = `https://young-caverns-50549.herokuapp.com/product/myItem?email=${email}`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setMyItems(data));
    // }, [user]);

    const handleDeleteItem = id => {
        const deleteConfirm = window.confirm('Are you sure to delete?');
        if (deleteConfirm) {
            const url = `https://young-caverns-50549.herokuapp.com/inventory/${id}`;
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
        <div className='w-50 mx-auto mb-3'>
            <h3 className='mt-3 mb-3 text-center'>My Added Items. [Creator: {user.email}, Total: {myItems.length}]</h3>
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
                            
                        </tr>
                    </table>
                </div>)
            }
        </div>
    );
};

export default MyItem;