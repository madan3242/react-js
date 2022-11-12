import Axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import ProductAdmin from './ProductAdmin'

const UpdateProduct = () => {
  let [productId] = useState(useParams().id);
  let [flag, setFlag] = useState(false);

  let [errMessage, setErrMessage] = useState("");
  let [submitted, setSubmitted] = useState(false)


  let [product, setProduct] = useState({
    name: "",
    image: "",
    price: "",
    qty: "",
    info: ""
  })

  useEffect(() => {
    let updateUrl = `https;//127.0.0.1:5000/api/products/${productId}`
    Axios.get(updateUrl)
         .then((response) => {
            setProduct(response.data)
         })
         .catch()
  }, []);


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

  let updateHandler = (e) => {
    e.preventDefault();
    let url = `https;//127.0.0.1:5000/api/products/${productId}`;
    Axios.put(url, product)
         .then((response) => {
            setFlag(true)
         })
         .catch((err) => {
            setErrMessage(err)
         })
   }

  return (
    <>
        {
            flag ? <Navigate to=`/admin` /> : 
            
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h4>Update Product</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem mollitia perferendis dolor, eligendi optio commodi itaque vitae nostrum est similique temporibus iste quidem earum quaerat deleniti eum quisquam repellat eaque?</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <pre>{JSON.stringify({productId})}</pre>
                            <pre>{JSON.stringify({product})}</pre>
                            <form>
                                <div className="card">
                                    <div className="card-body">
                                        <form onSubmit={updateHandler}>
                                            <div className="form-group">
                                                <input className="form-control" placeholder="Product Name" type="text" name="name" value={product.name} onChange={productInput} />
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" placeholder=" Image" type="file" name="image" id="customFile" onChange={changeImageHandler} required />
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" placeholder="Price" type="text" name="price" value={product.price} onChange={productInput} />
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" placeholder="Qunatity" type="text" name="qty" value={product.qty} onChange={productInput} />
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" placeholder="Information" type="text" name="info" value={product.info} onChange={productInput} />
                                            </div>
                                            <input className="btn btn-primary" type="submit" value="Update Product" />
                                        </form>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        }
    </>
  )
}

export default UpdateProduct