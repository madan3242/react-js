import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios';

const ProductAdmin = () => {
    let [products, setProducts] = useState([]);
    useEffect(() => {
        getProduct()
    }, [])

    let getProduct = () => {
        let url = `https://127.0.0.1:5000/api/products`
        Axios.get(url)
             .then((response) => {
                setProducts(response.data)
             })
             .catch(() => {})
    }

    let deleteProduct = (productid) => {
        let delUrl = `https://127.0.0.1:5000/api/products/${productid}`
        Axios.delete(delUrl)
             .then((response) => {
                getProduct()
             })
             .catch(() => {})
    }
    return (
        <Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <h2>Product Details</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel aliquam impedit enim ut. Ab, quaerat! Impedit voluptatibus temporibus porro explicabo libero, exercitationem adipisci itaque distinctio eaque sit sed dolor? Neque?</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <table className="table table-hover">
                            <thead className="thead-light">
                                <tr>
                                    <th>S No</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                products.length > 0 ? <>
                                {
                                    products.map((product) => {
                                        return <tr>
                                            <td>{product.id}</td>
                                            <td>{product.name}</td>
                                            <td>{product.price}</td>
                                            <td>{product.qty}</td>
                                            <td>
                                                <Link className="btn btn-warning" to={`/update/${product._id}`}>Update</Link>
                                                <Link className="btn btn-danger" onClick={ deleteProduct.bind(this, product._id)}>Delete</Link>
                                            </td>
                                        </tr>
                                    })
                                }
                                </> : <>
                                    <tr>
                                        <td>****** No Products ******</td>
                                    </tr>
                                </>
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ProductAdmin