import React from "react";

class ProductList extends React.Component{
    selectProduct = (p) => {
        // console.log(p);
        this.props.getSelectedProduct(p)
    }
    render(){
        return(
            <div>
                <h1>Product List</h1>
                {/* <pre>{JSON.stringify(this.props)}</pre> */}
                <table className="table table-hover">
                    <thead className="bg-dark text-white">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.products.map((product) => {
                                return <tr key={product.id} onClick={this.selectProduct.bind(this, product)}>
                                    <td>{product.id}</td>
                                    <td>{product.title}</td>
                                    <td><img src={product.thumbnail} alt="" height="100" /></td>
                                    <td>{product.price}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ProductList