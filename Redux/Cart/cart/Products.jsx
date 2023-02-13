import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/cart/cart.action";
import { fetchProductsAction } from "../redux/product/product.action";

const Products = () => {
  let dispatch = useDispatch();

  let products = useSelector((state) => {
    return state.products.products;
  });

  useEffect(() => {
    dispatch(fetchProductsAction());
  }, [dispatch]);
  return (
    <div className="container mt-3">
      {/* {JSON.stringify(products)} */}
      <div className="row">
        {/* <div className="col-lg-3">
                <div className="card">
                    <h1>Hi</h1>
                </div>
            </div> */}
        <div className="col-lg-9">
          <table className="table table-hover">
            <thead className="bg-primary text-white">
              <tr>
                {/* <th>ID</th> */}
                <th>Name</th>
                <th>Image</th>
                <th>Rating</th>
                <th>Price</th>
                <th>Cart</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(products).length > 0 ? (
                <React.Fragment>
                  {products.products.map((product) => {
                    return (
                      <tr key={product.id}>
                        {/* <td>{product.id}</td> */}
                        <td>{product.title}</td>
                        <td>
                          <img
                            src={product.thumbnail}
                            style={{ height: "60px" }}
                            alt=""
                          />
                        </td>
                        <td>{product.rating}</td>
                        <td>{product.price}</td>
                        <td>
                          <button
                            className="btn btn-outline-success"
                            onClick={() => dispatch(addItem(product))}
                          >
                            Add Cart
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </React.Fragment>
              ) : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;