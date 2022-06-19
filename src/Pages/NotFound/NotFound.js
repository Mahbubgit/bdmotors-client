import React from 'react';
import NotFoundImage from '../../Images/page-not-found.webp';
import {useNavigate} from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    const handleToHomePage = () =>{
        navigate('/home');
    }
    return (
        
        <div className='text-center'>
            <img src={NotFoundImage} alt="" width={400}/> <br />
            <button onClick={() => handleToHomePage()} className='btn btn-secondary mb-3'>Back to Home Page</button>
        </div>
    );
};

export default NotFound;