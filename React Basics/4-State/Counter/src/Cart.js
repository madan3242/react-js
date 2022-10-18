import React from "react";
import './bootstrap.css';

class Cart extends React.Component{
    state = {
        product_Name : "Google Pixel 7 Pro",
        product_Price : 87900,
        image : "https://rukminim1.flixcart.com/image/224/224/xif0q/mobile/t/u/m/-original-imaggsuehy3nyj3b.jpeg?q=90",
        qty : 1
    }
    incrQty = () => {
        this.setState({qty : this.state.qty + 1})
    }
    decrQty = () => {
        this.setState({qty : this.state.qty - 1})

    }
    render(){
        return(
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-8">
                        <table className="table table-hover">
                            <thead className="bg-primary">
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.product_Name}</td>
                                    <td><img src={this.state.image} alt={this.state.product_Name} /></td>
                                    <td>{this.state.product_Price}</td>
                                    <td><button className="font-weight-bold btn-lg" onClick={this.decrQty}>-</button> {this.state.qty} <button className="font-weight-bold btn-lg" onClick={this.incrQty}>+</button></td>
                                    <td>{this.state.product_Price * this.state.qty}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cart;