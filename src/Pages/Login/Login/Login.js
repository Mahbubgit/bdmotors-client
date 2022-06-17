import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useRef } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './../SocialLogin/SocialLogin';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Shared/Loading/Loading';
// import PageTitle from '../../Shared/PageTitle/PageTitle';

const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    let errorMessage;
    const location = useLocation();
    let from = location?.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


    const navigateToSignUp = event => {
        // navigate('/signup');
        navigate(from, { replace: true });
    }

    if(loading || sending){
        return <Loading></Loading>
    }

    if (error) {
        errorMessage = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (user) {
        navigate(from, { replace: true });
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
            toast('Sent email for reset password');
        }
        else {
            toast('Please enter your email address');
        }
    }

    return (
        <div className='container w-50 mx-auto loginArea'>
            <Form onSubmit={handleSubmit} className='loginForm'>
                {/* <PageTitle title="Login"></PageTitle> */}
                <p className='h2 mb-0 text-secondary text-center mb-2'>Login to <span className='title-green'>BD</span><span className='title-red'>MOTORS </span></p>
                <Row className="mb-3 w-75">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>
                </Row>
                <Row className="mb-3 w-75">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                </Row>

                <Button variant="secondary w-50 home-btn" type="submit">
                    Login
                </Button>
                <ToastContainer></ToastContainer>
            </Form>
            <p className='h5 mb-0 text-center'>{errorMessage}</p>

            <p className='mb-0 text-center'>Don't have an account?
                <Link to="/signup" className='text-primary pe-auto text-decoration-none ms-2' onClick={navigateToSignUp}>Sign Up</Link> </p>
            <p className='mb-0 text-center'>Forget Password?<button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;