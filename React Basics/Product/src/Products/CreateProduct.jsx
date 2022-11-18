import React, { useState } from 'react';
import Axios from 'axios';

function CreateProduct() {
    let [product, setProduct] = useState({ name : "", image : "", price : "", qty : 1, info : ""});

    let [errMessage, setErrMessage] = useState("");
    let [submitted, setSubmitted] = useState(false)

    let productInput = (e) => {
        setProduct({
            ...product, [e.target.name] : e.target.value
        })
    }

    let changeImageHandler = async (e) => {
        let imageFile = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.addEventListener("load", () => {
            if(reader.result){
                setProduct({
                    ...product,
                    image: reader.result
                })
            }
            else{
                alert("Error! No image")
            }
        })
    }

    let submitHandler = (e) => {
        e.preventDefault();
        let url = `https://127.0.0.1:5000/api/products`;
        Axios.post(url, product)
             .then((response) => {
                setSubmitted(response.data)
             })
             .catch((err) => {
                setErrMessage(err)
             })
    }
    
  return <>
    <div className="container mt-4">
        <div className="row">
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-header">
                        <h3>Create Product</h3>
                    </div>
                    <pre>{JSON.stringify({product})}</pre>
                    <div className="card-body">
                        <form onSubmit={submitHandler}>
                            <div className="form-group">
                                <input className="form-control" placeholder="Product Name" type="text" name="name" onChange={productInput} />
                            </div>
                            <div className="form-group">
                                <input className="form-control" placeholder=" Image" type="file" name="image" id="customFile" onChange={changeImageHandler} required />
                            </div>
                            <div className="form-group">
                                <input className="form-control" placeholder="Price" type="text" name="price" onChange={productInput} />
                            </div>
                            <div className="form-group">
                                <input className="form-control" placeholder="Qunatity" type="text" name="qty" onChange={productInput} />
                            </div>
                            <div className="form-group">
                                <input className="form-control" placeholder="Information" type="text" name="info" onChange={productInput} />
                            </div>
                            <input className="btn btn-primary" type="submit" value="Create Product" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>
}

export default CreateProduct