import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Container, Nav} from 'react-bootstrap';
import logo from './../../../Images/logo.jpg';
import './Header.css';
import CustomLink from '../CustomLink/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogOut = () =>{
        signOut(auth);
    }
    return (
        <Navbar 
        collapseOnSelect 
        expand="lg" 
        bg="dark" 
        variant="dark" 
        sticky='top'
        >
            <Container>
                <Navbar.Brand href="/home"><img className='logo me-2' src={logo} alt="" width={35} /> 
                <span className='title-green'>BD</span><span className='title-red'>MOTORS</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto navMenu">
                        <CustomLink to={'/home'} active >HOME</CustomLink>
                        <CustomLink to={'/gallery'} >GALLERY</CustomLink>
                        <CustomLink to={'/blogs'} >BLOGS</CustomLink>
                        <CustomLink to={'/featuredProduct'} >FEATURED PRODUCT</CustomLink>
                        <CustomLink to={'/about'} >ABOUT</CustomLink>
                    </Nav>
                    <Nav className='navMenu'>
                        {
                            user ? 
                            <>
                            <CustomLink to={'/products'}>MANAGE INVENTORIES</CustomLink>
                            <CustomLink to={'/addItem'}>ADD ITEM</CustomLink>
                            <CustomLink to={'/myItem'}>MY ITEM</CustomLink>
                            <CustomLink to={'/login'} className='bg-danger text-white' onClick={handleLogOut} >LOG OUT</CustomLink>
                            </>
                            :
                            <CustomLink to={'/login'}>LOGIN</CustomLink>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;