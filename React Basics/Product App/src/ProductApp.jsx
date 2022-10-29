import React from "react";
import Axios from "axios";
import ProductList from "./ProductList";
import ProductDetails from "./ProuctDetails";

class ProuctApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            products : [],
            selectedProduct : {},
        }
    }
    getSelectedProduct = (product) => {
        this.setState({selectedProduct : product})
    }
    componentDidMount = () => {
        Axios.get('https://dummyjson.com/products')
             .then((response) => {
                // console.log(response.data);
                this.setState(response.data);
             })
             .catch((err) => {
                console.log(err);
             })
    }
    render(){
        return(
            <div>
                <h1>Contact App</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <ProductList products={this.state.products} getSelectedProduct={this.getSelectedProduct} />
                        </div>
                        <div className="col-lg-4">
                            <ProductDetails selectedProduct={this.state.selectedProduct} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProuctApp