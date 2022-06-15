import React from 'react';
import googleImg from '../../../Images/socialImage/google.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    
    const location = useLocation();
    let from = location?.state?.from?.pathname || "/";

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    if(loading){
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-3 px-1'>OR</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            {errorElement}
            <div className='d-flex gap-3 mb-2'>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-secondary d-flex mx-auto my-auto w-100'>
                    <div className='mx-auto d-flex'>
                        <img className='ms-auto' style={{ width: "30px", height: "30px" }} src={googleImg} alt="" />
                        <span className='mx-1'>Sign in with Google</span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;