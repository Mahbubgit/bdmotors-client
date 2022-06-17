import React from 'react';
import { useParams } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './ItemDetail.css';
import { toast } from 'react-toastify';
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
        .then(response =>{
            // console.log(response);
            const {data} = response;
            console.log(data.modifiedCount);
            if(data.modifiedCount){
                toast('Inventory stock is updated');
                event.target.reset();
            }
        })
    }

    return (
        <div>
            <h2 className='mt-4 mb-4'>You want to update item: {item?.name}</h2>

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
                        <Form.Control type="text" placeholder="Image" value={item?.img} disabled/>
                    </Form.Group>
                </Row>

                <Button className='btn btn-secondary mb-3 d-block' variant="secondary w-50 mx-auto" type="submit">
                    Delivered
                </Button>

            </Form>

        </div>
    );
};

export default ItemDetail;