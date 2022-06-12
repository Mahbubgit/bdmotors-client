import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
// import './SignUp.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const SignUp = () => {

    //create user and email verification
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const navigate = useNavigate();
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    if (loading) {
        return <Loading></Loading>
    }
    const navigateLogin = () => {
        navigate('/login');
    }

    const handleSignUp = async (event) => {
        event.preventDefault();
        const name = event.target.formBasicName.value;
        const email = event.target.formBasicEmail.value;
        const password = event.target.formBasicPassword.value;
        const confirmPassword = event.target.formBasicConfirmPassword.value;
        if (password === confirmPassword) {
            await createUserWithEmailAndPassword(email, password);
            navigate('/home');
        }
        else {
            errorElement = <p className='text-danger'>Error: Password and Confirm Password should be same.</p>
            errorElement = errorElement.props.children;
        }
    }
    return (
        <div className='container w-50 mx-auto loginArea'>

            <Form onSubmit={handleSignUp} className='loginForm'>
                {/* <h2 className='text-secondary text-center'>Join to</h2> */}
                <p className='h2 mb-0 text-center text-secondary mb-2'>Join to <span className='title-green'>BD</span><span className='title-red'>MOTORS </span></p>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formBasicName">
                        <Form.Control ref={nameRef} type="text" placeholder="Your Name" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formBasicEmail">
                        <Form.Control ref={emailRef} type="email" placeholder="Your Email" required />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formBasicPassword">
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formBasicConfirmPassword">
                        <Form.Control ref={confirmPasswordRef} type="password" placeholder="Confirm Password" required />
                    </Form.Group>
                </Row>

                <Button variant="secondary w-50 mx-auto" type="submit">
                    Sign Up
                </Button>
            </Form>
            {/* {errorElement} */}
            <p className='text-center mb-0'>
            Have an account already?
                <Link to={'/login'} className='text-primary pe-auto text-decoration-none ms-2' onClick={navigateLogin}>Log in</Link>
            </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};


export default SignUp;