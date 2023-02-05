import React from "react";

const Tracker = ({ track }) => {
  return (
    <>
      {Object.keys(track).length > 0 ? (
        <>
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <div className="gutter-gap">
                    <table className="table">
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>DATE</td>
                                <td>REASON</td>
                                <td>TOTAL AMOUNT</td>
                                <td>ADDED AMOUNT</td>
                                <td>REMOVED AMOUNT</td>
                                <td>BALANCE</td>
                            </tr>
                        </thead>
                        <tbody>
                        {track.map((ele, index) => {
                            return <tr key={index} className={(ele.tAddedAmount) ? "bg-success" : "bg-danger"}>
                                <td>{index + 1}</td>
                                <td>{ele.tDate}</td>
                                <td>{ele.tReason}</td>
                                <td>{ele.tTotal}</td>
                                <td>{ele.tAddedAmount}</td>
                                <td>{ele.tRemovedAmount}</td>
                                <td>{ele.tBalanceAmount}</td>
                            </tr>
                        })}
                        </tbody>
                    </table>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Tracker;
