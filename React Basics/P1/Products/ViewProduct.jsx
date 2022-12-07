import Axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ProductCarousel from './ProductCarousel';

const ViewProduct = () => {
    let [productId] = useState(useParams().id);
    // let [flag, setFlag] = useState(false);
    let [product, setProduct] = useState({});

    useEffect(() => {
        let url = `https://dummyjson.com/products/${productId}`
        Axios.get(url)
             .then((response) => {
                setProduct(response.data)
             })
             .catch((err) => {
                console.log(err);
             })
    }, []);

    // let [image1, image2, image3] = [...product.images];

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-5">
                    <ProductCarousel images={product.images} />
                </div>
                <div className="col-lg-7">
                    <pre>{JSON.stringify(product)}</pre>
                    <div className="card">
                        <div className="card body">
                            <p>{product.brand}</p>
                            <h4 className="card-title">{product.title}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewProduct