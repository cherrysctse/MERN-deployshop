import React, { useState } from "react";
import axios from "axios";

//const DEPLOY_LINK = 'https://three380-mern.onrender.com';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        const productVar = {
            name: name,
            price: price
        }
        console.log(productVar);
        axios.post(`http://localhost:5000/shop/add`, productVar)
            .then(res => { window.location = "/" });
    }

    return (
        <div>
            <br />
            <h3>Add New Product</h3>
            <br />
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>New Product Name: </label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br />
                    <label>New Product Price: </label>
                    <input
                        type="number"
                        required
                        className="form-control"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <br />
                <div className="form-group">
                    <input
                        type="submit"
                        value="Create Product Log"
                        className="btn btn-secondary"
                    />
                </div>
            </form>
        </div>

    )
}

export default AddProduct;