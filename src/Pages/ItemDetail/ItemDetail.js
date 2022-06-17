import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Accordion, Button, Form } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './ItemDetail.css';
// import { toast } from 'react-toastify';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';
import useItemDetail from '../../hooks/useItemDetail';

const ItemDetail = () => {
    const { id } = useParams();
    const [item] = useItemDetail([id]);

    const handleDelivered = event => {
        event.preventDefault();
        const itemDelivered = {
            _id: item._id
        }
        axios.post(`http://localhost:5000/inventory/${id}`, itemDelivered)
            .then(response => {
                const { data } = response;
                // console.log(data.modifiedCount);
                if (data.modifiedCount) {
                    toast('Inventory stock is updated');
                    event.target.reset();
                }
            })
    }
    // ************************* For Restock **************************
    const restockQuantityRef = useRef('');
    const handleRestock = event => {
        event.preventDefault();
        const restockQuantity = event.target.formBasicRestock.value;
        axios.post(`http://localhost:5000/inventory/${id}?restockQuantity=${restockQuantity}`)
            .then(response => {
                const { data } = response;
                // console.log(data);
                if (data.modifiedCount) {
                    toast(`Restock of item: ${item.name}`);
                    event.target.reset();
                }
            })
    }

    return (
        <div>
            <h2 className='mt-4 mb-4'>You want to update item: {item?.name}</h2>

            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header> <h4 className='mx-auto'>Item Delivered</h4> </Accordion.Header>
                    <Accordion.Body>
                        <Form onSubmit={handleDelivered}>
                            <Row>
                                <Form.Group as={Col} controlId="formBasicProductId">
                                    <Form.Label>Product ID</Form.Label>
                                    <Form.Control type="text" value={item?._id} placeholder="Product ID" disabled />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} controlId="formBasicProductName">
                                    <Form.Label>Product Name</Form.Label>
                                    <Form.Control type="text" value={item?.name} placeholder="Product Name" disabled />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} controlId="formBasicDescription">
                                    <Form.Label>Product Description</Form.Label>
                                    <Form.Control type="textarea" value={item?.description} placeholder="Product Description" disabled />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} controlId="formBasicPrice">
                                    <Form.Label>Product Price</Form.Label>
                                    <Form.Control type="text" value={item?.price} placeholder="Price" disabled />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} controlId="formBasicQuantity">
                                    <Form.Label>Quantiy</Form.Label>
                                    <Form.Control type="text" value={item?.quantity} placeholder="Quantity" required />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} controlId="formBasicSupplier">
                                    <Form.Label>Supplier Name</Form.Label>
                                    <Form.Control type="text" value={item?.supplier} placeholder="Supplier" disabled />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} controlId="formBasicSold">
                                    <Form.Label>Sold Quantity</Form.Label>
                                    <Form.Control type="text" placeholder="Sold" />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} controlId="formBasicImage">
                                    <Form.Label>Image URL</Form.Label>
                                    <Form.Control type="text" placeholder="Image" value={item?.img} disabled />
                                </Form.Group>
                            </Row>

                            <Button className='btn btn-secondary mb-3 d-block' variant="secondary w-50 mx-auto" type="submit">
                                Delivered
                            </Button>
                            <ToastContainer></ToastContainer>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header> <h4 className='mx-auto'>Item Restock</h4> </Accordion.Header>
                    <Accordion.Body>
                        <Form onSubmit={handleRestock}>
                            <Row>
                                <Form.Group as={Col} controlId="formBasicProductId">
                                    <Form.Label>Product ID</Form.Label>
                                    <Form.Control type="text" value={item?._id} placeholder="Product ID" disabled />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} controlId="formBasicProductName">
                                    <Form.Label>Product Name</Form.Label>
                                    <Form.Control type="text" value={item?.name} placeholder="Product Name" disabled />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} controlId="formBasicQuantity">
                                    <Form.Label>Present Quantiy</Form.Label>
                                    <Form.Control type="text" value={item?.quantity} placeholder="Quantity" required />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} controlId="formBasicRestock">
                                    <Form.Label>Restock Quantity</Form.Label>
                                    <Form.Control ref={restockQuantityRef} type="text" placeholder="Restock Quantity" />
                                </Form.Group>
                            </Row>
                            <Button className='btn btn-secondary mb-3 d-block' variant="secondary w-50 mx-auto" type="submit">
                                Restock Item Quantity
                            </Button>
                            <ToastContainer></ToastContainer>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <a className='btn btn-secondary home-btn mt-3 mb-3' href="/products">Manage Inventories</a>
        </div>
    );
};

export default ItemDetail;