import React, { useState } from 'react'
import Axios from 'axios'

const CreateProduct = () => {
    let [ product, setProduct ] = useState({ name: "", image: "", price: "", qty: 1, info: ""});

    let [ errMessage, setErrMessage ] = useState("");
    let [ submitted, setSubmitted] = useState(false);

    let productInput = (e) => {
        setProduct({ ...product, [e.target.name] : e.target.value})
    }

    let changeImageHandler = async (e) => {
        let imageFile = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.addEventListener("load", () => {
            if(reader.result){
                setProduct({ ...product, image : reader.result, })
            }
        })
    }

    let submitHandler = (e) => {
        e.preventDefault();
        let url = `https://127.0.0.1:4000/api/products`;
        Axios.post(url, product)
             .then((response) => {
                setSubmitted(true)
             })
             .catch((err) => {
                setErrMessage(err)
                // console.log(errMessage);
             })
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-header text-white bg-primary">
                            <h3>Create Product</h3>
                        </div>
                        <div className="card-body">
                            <pre>{JSON.stringify(product)}</pre>
                            <form onSubmit={submitHandler}>
                                <div className="form-group">
                                    <input className="form-control" placeholder="Product name" type="text" name="name" onChange={ productInput } />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" placeholder="Product image" type="file" name="name" id="customFile" onChange={ changeImageHandler } />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" placeholder="Price" type="text" name="price" onChange={ productInput } />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" placeholder="Quantity" type="text" name="qty" value={product.qty} onChange={ productInput } />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" placeholder="Information" type="text" name="info" onChange={ productInput } />
                                </div>
                                <input className="btn btn-success" value="Create Product" type="submit"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateProduct