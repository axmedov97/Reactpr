import React, {Component} from 'react';

import axios from 'axios';

class LifeCycleMethods extends Component {
    constructor(props) {
        super(props);

        console.log("This text from constructor function");

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        console.log("This text from componentDidMount function");
        // ko'pincha    API ga so'rov yuborish uchun ishlatiladi.
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                console.log(res);
                this.setState({users: res.data});
            })
        //    post, delete, put
    }

    componentWillUnmount() {
        console.log("This text from componentWillUnMount function")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("THis text from componentDidUpdate function");
    }

    componentDidCatch(error, errorInfo) {
        console.log("This text from componentDidCatch function");
    }

    render() {
        console.log("This text from render function");
        return (
            <div>
                <div className="container">
                    <div className="row">
                        {this.state.users.map((item, index) => (
                            <div className='col-4 mt-3'>
                                <div className="card">
                                    <div className="card-header"><h5>{item.name}</h5></div>
                                    {/*    this.state.users[index]  <==================> item  */}
                                    <div className="card-body">
                                        <p>City: <b>{item.address.city}</b></p>
                                        <a href={"http://" + item.website}>{item.website}</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        );
    }
}

export default LifeCycleMethods;