import React from "react";

import CompA from "./ClassToClass/CompA";

// import CompA from "./FunctionToClass/CompA";

// import CompA from "./FunctionToFunction/CompA";

// import CompA from "./ClassToFunction/CompA";

class App extends React.Component{
  render(){
    return(
      <div>
        <CompA />
      </div>
    );
  }
}

export default App;