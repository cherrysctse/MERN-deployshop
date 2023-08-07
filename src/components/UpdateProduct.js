import React, { useState, useEffect } from "react";
import axios from "axios";

//const DEPLOY_LINK = 'https://three380-mern.onrender.com';

const UpdateProduct = () => {
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ]

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:5000/shop/${id}`)
            .then((response) => {
                setName(response.data.name)
                setPrice(response.data.price)
            })
    }, [id]);

    const onSubmit = (e) => {
        e.preventDefault();
        const ProductVar = {
            name: name,
            price: price
        };
        console.log(ProductVar);
        axios
            .post(`http://localhost:5000/shop/update/${id}`, ProductVar)
            .then((res) => { window.location = "/" });
    };

    return (
        <div>
            <br />
            <h3>Update Product</h3>
            <br />
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Product Name: </label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br />
                    <label>Product Price: </label>
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
                        value="Update Activity Log"
                        className="btn btn-secondary"
                    />
                </div>
            </form>
        </div>
    );
}

export default UpdateProduct;