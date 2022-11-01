import React from "react";
import Message from "./Message";
import {Provider} from "react-redux"
import {store} from "./Redux/store"

class App extends React.Component{
  render(){
    return(
      <div>
        <Provider store={store}>
          <Message />

        </Provider>
      </div>
    );
  }
}
export default App;