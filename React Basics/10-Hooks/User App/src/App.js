import React, {Component} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserApp from "./components/UserApp";
import Navbar from "./Navbar";

class App extends Component{
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/user" element={ <UserApp />}/>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}
export default App;