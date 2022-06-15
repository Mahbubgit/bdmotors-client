import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
// import useItemDetail from '../../hooks/useItemDetail';
import { Button, Form } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './ItemDetail.css';
import { toast } from 'react-toastify';
import axios from 'axios';

const ItemDetail = () => {
    const { id } = useParams();

    const productNameRef = useRef('');
    let descriptionRef = useRef('');
    const pricedRef = useRef('');
    const quantityRef = useRef('');
    const supplierRef = useRef('');
    const soldRef = useRef('');

    // const [item] = useItemDetail(id);
    // console.log(item);
    const [item, setItem] = useState([id]);
    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${id}`)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [id]);

    console.log(item);
    // descriptionRef = item.description;


    const handleUpdateInventory = event => {
        event.preventDefault();


        // const itemDelivered = {
        //     // email: user.email,
        //     descriptionRef: item.description
        //     // serviceId: serviceId,
        //     // address: event.target.address.value,
        //     // phone: event.target.phone.value
        // }
        // axios.post('https://ancient-gorge-57630.herokuapp.com/order', itemDelivered)
        // .then(response =>{
        //     console.log(response);
        //     const {data} = response;
        //     // if(data.insertedId){
        //     if(data.updatedId){
        //         toast('Product stock is updated');
        //         event.target.reset();
        //     }
        // })
    }

    return (
        <div>
            <h2 className='mt-4 mb-4'>You want to update item: {id}</h2>

            <Form onSubmit={handleUpdateInventory}>
                <Row>
                    <Form.Group as={Col} controlId="formBasicProductName">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control ref={productNameRef} type="text" value={item?.name} placeholder="Product Name" disabled />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="formBasicDescription">
                        <Form.Label>Product Description</Form.Label>
                        <Form.Control ref={descriptionRef} type="textarea" value={item?.description} placeholder="Product Description" disabled />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="formBasicPrice">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control ref={pricedRef} type="text" value={item?.price} placeholder="Price" disabled />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="formBasicQuantity">
                        <Form.Label>Product Quantiy</Form.Label>
                        <Form.Control ref={quantityRef} type="text" value={item?.quantity} placeholder="Quantity" required />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="formBasicSupplier">
                        <Form.Label>Supplier Name</Form.Label>
                        <Form.Control ref={supplierRef} type="text" value={item?.supplier} placeholder="Supplier" disabled />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="formBasicSold">
                        <Form.Label>Sold Quantity</Form.Label>
                        <Form.Control ref={soldRef} type="text" placeholder="Sold" />
                    </Form.Group>
                </Row>

                <Button className='btn btn-secondary mb-3 d-block' variant="secondary w-50 mx-auto" type="submit">
                    Delivered
                </Button>
                {/* <Link to={`/item/${id}`}>
                    <button className='btn btn-secondary'>Update Stock</button>
                </Link> */}

            </Form>

        </div>
    );
};

export default ItemDetail;