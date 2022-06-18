import axios from 'axios';
import React, { useRef } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';

const AddItem = () => {
    const [user] = useAuthState(auth);

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const priceRef = useRef('');
    const quantityRef = useRef('');
    const supplierRef = useRef('');
    const imageRef = useRef('');

    const handleAddNewItem = event => {
        event.preventDefault();
        const itemAdded = {
            email: user.email,
            name: event.target.formBasicProductName.value,
            description: event.target.formBasicDescription.value,
            price: event.target.formBasicPrice.value,
            quantity: event.target.formBasicQuantity.value,
            supplier: event.target.formBasicSupplier.value,
            img: event.target.formBasicImage.value
        }
        axios.post(`http://localhost:5000/product`, itemAdded)
            .then(response => {
                const { data } = response;
                console.log(data);
                if (data.insertedId) {
                    toast('A new item added to Inventory.');
                    event.target.reset();
                }
            })
    }

    return (
        <div>
            <h2>Add New Item</h2>
            <Form onSubmit={handleAddNewItem}>
                <Row>
                    <Form.Group as={Col} controlId="formBasicProductName">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control ref={nameRef} type="text" placeholder="Product Name" required/>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="formBasicDescription">
                        <Form.Label>Product Description</Form.Label>
                        <Form.Control ref={descriptionRef} type="textarea" placeholder="Product Description" required/>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="formBasicPrice">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control ref={priceRef} type="text" placeholder="Price" required/>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="formBasicQuantity">
                        <Form.Label>Quantiy</Form.Label>
                        <Form.Control ref={quantityRef} type="text" placeholder="Quantity" required />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="formBasicSupplier">
                        <Form.Label>Supplier Name</Form.Label>
                        <Form.Control ref={supplierRef} type="text" placeholder="Supplier" required/>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="formBasicImage">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control ref={imageRef} type="text" placeholder="Image" required/>
                    </Form.Group>
                </Row>

                <Button className='btn btn-secondary mb-3 d-block' variant="secondary w-50 mx-auto" type="submit">
                    Add New Item
                </Button>
                <ToastContainer></ToastContainer>
            </Form>
        </div>
    );
};

export default AddItem;