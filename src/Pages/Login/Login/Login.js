import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useRef } from 'react';
import './Login.css';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from './../SocialLogin/SocialLogin';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
// import PageTitle from '../../Shared/PageTitle/PageTitle';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


    const navigateToSignUp = event => {
        navigate('./signup');
    }
    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please enter your email address');
        }
    }

    return (
        <div className='container w-50 mx-auto loginArea'>
            <Form onSubmit={handleSubmit} className='loginForm'>
                {/* <PageTitle title="Login"></PageTitle> */}
                <h2 className='text-secondary text-center'>Please Login</h2>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                </Row>

                <Button variant="secondary w-50 mx-auto" type="submit">
                    Login
                </Button>
            </Form>

            {/* {errorElement} */}
            <p className='mb-0'>New to <span className='title-green'>BD</span><span className='title-red'>MOTORS? </span>
                <Link to="/signup" className='text-primary pe-auto text-decoration-none' onClick={navigateToSignUp}>Please Sign Up</Link> </p>
            <p className='mb-0'>Forget Password?<button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;