import Axios from 'axios'
import React, { useState, useEffect, Fragment } from 'react'
import { Navigate, useParams } from 'react-router-dom'

const UpdateProduct = () => {
    let [productId] = useState(useParams().id)
    let [flag, setFlag] = useState(false)
    let [errMessaage, setErrMessage] = React.useState("")
    let [submitted, setSubmitted] = React.useState(false);
    let [product, setProduct] = React.useState({
        name: "",
        image: "",
        price: "",
        qty: "",
        info: ""
    })

    useEffect(() => {
      let url = `https://127.0.0.1:5000/api/product/${productId}`
      Axios.get(url)
           .then((response) => {
              setProduct(response.data)
           }).catch()
    }, [])
    
    let changeInput = (e) => {
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
      let url = `https://127.0.0.1:4000/api/products/${productId}`;
      Axios.post(url, product)
           .then((response) => {
              setSubmitted(true)
           })
           .catch((err) => {
              setErrMessage(err)
           })
  }
    return (
      <Fragment>
      {
          flag ? <Navigate to={`/admin`} /> : <>
            <div className="container mt-4">
            <div className="row">
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-header text-white bg-primary">
                            <h3>Update Product</h3>
                        </div>
                        <div className="card-body">
                            <pre>{JSON.stringify(product)}</pre>
                            <form onSubmit={submitHandler}>
                                <div className="form-group">
                                    <input className="form-control" placeholder="Product name" type="text" value={product.name} name="name" onChange={ productInput } />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" placeholder="Product image" type="file" name="name" id="customFile" onChange={ changeImageHandler } />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" placeholder="Price" type="text" value={product.price} name="price" onChange={ productInput } />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" placeholder="Quantity" type="text" name="qty" value={product.qty} onChange={ productInput } />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" placeholder="Information" type="text" value={product.info} name="info" onChange={ productInput } />
                                </div>
                                <input className="btn btn-success" value="Update Product" type="submit"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          </>
      }
      </Fragment>
    )
}

export default UpdateProduct