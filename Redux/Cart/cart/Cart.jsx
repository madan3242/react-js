import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../redux/cart/cart.action";

const Cart = () => {
  let cart = useSelector((state) => {
    return state.cart.products;
  });

  let dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col">
            {JSON.stringify(cart)}
            <table className="table table-hover">
              <thead className="bg-primary text-white">
                <tr>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Rating</th>
                  <th>Price</th>
                  <th>Cart</th>
                </tr>
              </thead>
              <tbody>
                {cart.length > 0 ? (
                  <>
                    {cart.map((product) => {
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
                              className="btn btn-outline-danger"
                              onClick={() => dispatch(removeItem(product))}
                            >
                              Remove Cart
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </>
                ) : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
