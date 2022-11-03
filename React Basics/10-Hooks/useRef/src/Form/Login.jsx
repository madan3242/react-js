import React, {useRef} from "react"

let Login = () => {
    let btnRef = useRef(null);
    let hRef = useRef(null);

    let clickHandler = (event) =>{
        event.preventDefault();
        console.log(btnRef.current);
        btnRef.current.disabled= false;
        // btnRef.current.classList.add("btn");
        // btnRef.current.classList.remove("btn-primary");
        console.log(hRef.current);
    }
    return <div>
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6">
                    <h2 ref={hRef}>Login</h2>
                    <form action="">
                        <div className="form-group">
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input position-static" onClick={clickHandler} />
                            &nbsp; Terms & Conditions
                        </div>
                        <input type="submit" value="Login" className="btn btn-primary" ref={btnRef}  disabled/>
                    </form>
                </div>
            </div>
        </div>
    </div>
}
export default Login;