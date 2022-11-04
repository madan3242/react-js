import React, {Component} from "react";
import { Provider } from "react-redux";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Counter from "./Counter/Counter";
import Navbar from "./Navbar";
import { store } from "./redux/store";

class App extends Component{
    render() {
        return (
            <div>
                <Provider store={store}>
                    <BrowserRouter>
                        <Navbar />
                        <Routes>
                            <Route path="/counter" element={ <Counter />}/>
                        </Routes>
                    </BrowserRouter>
                </Provider>
            </div>
        );
    }
}
export default App;