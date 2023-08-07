import React, { useState, useEffect } from "react";
import axios from "axios";

//const DEPLOY_LINK = 'https://three380-mern.onrender.com';

const Products = (props) => {
    return (
        <tr className="d-flex">
            <td className='col-5'>{props.product.name}</td>
            <td className='col-4'>{props.product.price}</td>
            <td className='col-3' style={{ textAlign: "right" }}>
                <button className="btn btn-secondary" onClick={() => { props.deleteProduct(props.product._id) }} >
                    Delete
                </button>
                {' '}
                <button className="btn btn-secondary" onClick={() => { props.soldProduct(props.product._id) }}>
                    Sold
                </button>
                {' '}
                <button className="btn btn-secondary" onClick={() => { props.updateProduct(props.product._id) }}>
                    Update
                </button>
            </td>
        </tr>
    )
}

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/shop/`)
            .then(response => { setProducts(response.data) })
            .catch(err => console.log(err))
    }, []);

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:5000/shop/delete/${id}`)
            .then(response => {
                console.log(response.data);
                setProducts(products.filter(p => p._id !== id))
            })
    };

    const soldProduct = async (id) => {
        try {
            const targetProduct = {
                name: `${products.find(p => p._id === id).name}`,
                price: `${products.find(p => p._id === id).price}`
            };
            await axios.put(`http://localhost:5000/shop/sold/${id}`, targetProduct);
            const response = await axios.get('http://localhost:5000/shop');
            setProducts(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    const updateProduct = (id) => {
        window.location = "/update/" + id;
    }

    const ProductList = () => {
        return products.map(p => {
            return <Products
                key={p._id}
                product={p}
                deleteProduct={deleteProduct}
                soldProduct={soldProduct}
                updateProduct={updateProduct}
            />
        })
    }

    return (
        <div>
            <br />
            <h3>Our Products</h3>
            <br />
            <table className="table">
                <thead className="thead-light">
                    <tr className="d-flex">
                        <th className='col-5'>Products</th>
                        <th className='col-4'>Price</th>
                        <th className='col-3'></th>
                    </tr>
                </thead>
                <tbody>
                    {ProductList()}
                </tbody>
            </table>
        </div>
    )
}

export default ProductList;