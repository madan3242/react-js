import React, {Component} from "react";

class Cart extends Component{
    constructor(props) {
        super(props);
        this.state = {
            product1 : {
                product_Name : "APPLE iPhone 14 Plus",
                image : "https://rukminim1.flixcart.com/image/224/224/xif0q/mobile/c/4/d/-original-imaghx9qygjjg8hz.jpeg?q=90",
                product_Price : 89900,
                qty : 1
            },
            product2 : {
                product_Name : "APPLE iPhone 13",
                image : "https://rukminim1.flixcart.com/image/224/224/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=90",
                product_Price : 60900,
                qty : 1
            }
        }
    }
    incrProduct1 = () => {
        this.setState({ product1 : { ...this.state.product1, qty : this.state.product1.qty + 1 }})
    }
    decrProduct1 = () => {
        this.setState({ product1 : { ...this.state.product1, qty : this.state.product1.qty - 1 }})
    }
    render(){
        return ( 
            <div>
                <h1>Cart Component</h1>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <table className="table table-hover">
                                <thead className="bg-primary text-white">
                                    <td>Name</td>
                                    <td>Image</td>
                                    <td>Price</td>
                                    <td>Qty</td>
                                    <td>Total</td>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{this.state.product1.product_Name}</td>
                                        <td><img src={this.state.product1.image} alt={this.state.product1.product_Name} /></td>
                                        <td>{this.state.product1.product_Price}</td>
                                        <td>
                                            <button className="btn" onClick={this.decrProduct1}>-</button>
                                            {this.state.product1.qty}
                                            <button className="btn" onClick={this.incrProduct1}>+</button>
                                        </td>
                                        <td>{this.state.product1.qty * this.state.product1.product_Price}</td>
                                    </tr>
                                    <tr>
                                        <td>{this.state.product2.product_Name}</td>
                                        <td><img src={this.state.product2.image} alt={this.state.product2.product_Name} /></td>
                                        <td>{this.state.product2.product_Price}</td>
                                        <td>{this.state.product2.qty}</td>
                                        <td>{this.state.product2.qty * this.state.product2.product_Price}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cart;