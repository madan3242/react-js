import Axios from 'axios';
import React, {useState} from 'react'
import { useEffect } from 'react';
import { Link } from "react-router-dom";

function ProductAdmin() {
   let [products, setProducts] = useState([]);
   useEffect(() => {
        getProducts();
   }, []);
    let getProducts = () => {
        let url = `https://127.0.0.1:5000/api/products`
        Axios.get(url)
             .then((response) => {
                setProducts(response.data)
             })
             .catch((err) =>{
                console.log(err);
             })
    }

    let deleteProduct = (productid) => {
        let delUrl = `https://127.0.0.1:5000/api/products/${productid}`;
        Axios.delete(delUrl)
             .then((response) => {
                getProducts()
             })
             .catch((err) => {

             })
    }
  return (
    <div className="container">
        <pre>{JSON.stringify({products})}</pre>
        <div className="row">
            <div className="col-lg">
                <h3>Producr Details</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum totam vero saepe error velit recusandae at perspiciatis fugiat culpa! Fuga modi quo natus ut, quae autem asperiores numquam vitae nobis.</p>
            </div>
        </div>
        <div className="row">
            <div className="col-lg">
                <table className="table table-hover">
                    <thead className="bg-dark text-white">
                        <tr>
                            <th>S No</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Information</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.length > 0 ? <>
                                {
                                    products.map((product) => {
                                        return <tr key={product.id}>
                                            <td>{product.id}</td>
                                            <td>{product.name}</td>
                                            <td>{product.price}</td>
                                            <td>{product.qty}</td>
                                            <td>{product.info}</td>
                                            <td>
                                                <Link className="btn btn-warning" to={`/update/${product.id}`}>Update</Link>
                                                <Link className="btn btn-danger" onClick={deleteProduct.bind(this, product.id)}>Delete</Link>
                                            </td>
                                        </tr>
                                    })
                                }
                            </> : <>
                                <h3>**** No Products ****</h3>
                            </>
                        }

                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default ProductAdmin