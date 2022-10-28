import React, { Component } from 'react'
import Axios from 'axios';

export class Photos extends Component {
    constructor(props){
        super(props);
        this.state = {
            photos : [],
        }
    }
    componentDidMount = () => {
        Axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((response) => {
                // console.log(response.data);
                this.setState({photos : response.data})
            })
            .catch((err) => {
                console.log(err);
            })
    }
    render() {
        return (
        <div>
            <h1>Photos</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.photos.length > 0 ? (
                            this.state.photos.map((ph) => {
                               return <tr key={ph.id}>
                                   <td>{ph.id}</td>
                                   <td>{ph.title}</td>
                                   <td><img src={ph.url} alt="" height="100" /></td>
                               </tr>
                            })
                        ) : null
                    }
                </tbody>
            </table>
        </div>

        )
    }
}

export default Photos;