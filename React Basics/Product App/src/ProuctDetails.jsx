import React from "react";

class ProductDetails extends React.Component{
    render(){
        return(
            <div>
                <h1>Product Details</h1>
                {/* <pre>{JSON.stringify(this.props)}</pre> */}
                <div className="card">
                    <img src={this.props.selectedProduct.thumbnail} className="card-img-top" alt=""  height="200"/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.selectedProduct.brand}</h5>
                        <h4 className="card-title">{this.props.selectedProduct.title}</h4>
                        <p className="card-text">{this.props.selectedProduct.description}</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{this.props.selectedProduct.price}</li>
                            <li className="list-group-item">{this.props.selectedProduct.discountPercentage}</li>
                            <li className="list-group-item">Rating : {this.props.selectedProduct.rating}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProductDetails