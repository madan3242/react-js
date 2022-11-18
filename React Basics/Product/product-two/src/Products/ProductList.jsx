import React, { Fragment, useState, useEffect } from 'react'
import Axios from 'axios'

const ProductList = () => {
    let [ products, setProducts ] = useState([]);
    let [ errMessage, setErrMessage ] = useState("");

    useEffect(() => {
        let url = `http://127.0.0.1:5000/api/products`
        Axios.get(url)
             .then((response) => {
                setProducts(response.data)
             })
             .catch((err) => {
                setErrMessage(err)
                console.error(errMessage);
             })
    })
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-lg">
                        <h1>Product List</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laudantium amet, error quaerat, quia suscipit asperiores quo nemo officia rerum modi quod laboriosam voluptatibus ut itaque, hic ex quae! Consequuntur.</p>
                    </div>
                </div>
                <div className="row">
                    {
                        products.length > 0 ? <>
                        {
                            products.map((product) => {
                                return <div className="col-lg-3">
                                    <div className="card">
                                        <img src={product.image} alt="" />
                                        <div className="card-body">
                                            <ul className="list-group">
                                                <li className="list-group-item">{product.name}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                        </> : <><div><h5>****** No Products ******</h5></div></>
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default ProductList