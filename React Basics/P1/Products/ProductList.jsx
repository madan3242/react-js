import React, { useState, useEffect} from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

const ProductList = () => {
    let [ products, setProducts ] = useState({});
    // let [errorMessage, setErrorMessage] = useState("");
    useEffect(() => {
        let url = `https://dummyjson.com/products`
        Axios.get(url)
             .then((response) => {
                setProducts(response.data)
             })
             .catch((err) => {
                // setErrorMessage(err)
                // console.error(errorMessage);
             })
    }, [])

    let [searchTearm] = useState(["title"])
    let [ inputText, setInputText] = useState("")

    function search(items){
        return items.filter((item) => {
            return searchTearm.some((newItem) => {
                return(
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(inputText) > -1
                )
            })
        })
    }

    let viewProduct = (id) => {
        console.log(id);
    }

    return (
        <div>
            {/* <pre>{JSON.stringify(products)}</pre> */}
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-8 mr-auto">
                        <h2>All Products</h2>
                    </div>
                    <div className="col-lg-">
                        <div className="form-group">
                            <input className="form-control" type="text" placeholder="Search" onChange={(e) => setInputText(e.target.value.toLowerCase())} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta provident repellat et vitae commodi soluta ad doloremque cupiditate delectus inventore culpa laboriosam sint, sapiente in. Dolore nemo ducimus provident ipsum.</p>
                    </div>
                </div>
                <div className="row">
                {
                    Object.keys(products).length > 0 ? <>
                        {   
                            search(products.products).map((product) => {
                                return <div className="col-lg-4 my-2" key={product.id} onClick={viewProduct.bind(this, product.id)}>
                                    <div className="card p-2">
                                        <img src={product.thumbnail} alt=""  />
                                        <div className="card-body">
                                            <h5>{product.title}</h5>
                                            <p className="card-text">{product.description}</p>
                                            <Link className="btn btn-outline-primary" to={`/view/${product.id}`}>View {product.title}</Link>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </> : <>
                        <h4>****** No Products ******</h4>
                    </>
                }
                </div>
            </div>
        </div>
    )
}

export default ProductList