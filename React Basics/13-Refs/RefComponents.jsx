import React, { Component } from 'react';

class RefComponents extends Component {
    constructor(props) {
        super(props);
        // Creating Refs
        this.myRef = React.createRef();
    }

    //Accessing Refs
    node = this.myRef.current; 
    
    render() {
        return (
            <div ref={this.myRef}>
                
            </div>
        );
    }
}

export default RefComponents;