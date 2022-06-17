import React from 'react';
// import { useForm } from "react-hook-form";

const AddItem = () => {
    // const { register: addNewItem, handleSubmit } = useForm();
    // const onSubmit = data => {
    //     console.log(data);
    //     const url = `https://ancient-gorge-57630.herokuapp.com/service`;
    //     fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //     .then(res => res.json())
    //     .then(result => {
    //         console.log(result);
    //     })
    // };

    return (
        <div>
            <h2>Add New Item</h2>
            {/* <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Product Name' type="text" {...addNewItem("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' type="text" {...addNewItem("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...addNewItem("price")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...addNewItem("price")} />
                <input className='mb-2' placeholder='Supplier' type="text" {...addNewItem("price")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...addNewItem("img")} />
                <input type="submit" value="Add Service" />
            </form> */}
        </div>
    );
};

export default AddItem;