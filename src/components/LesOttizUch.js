import React, {Component} from 'react';
import axios from 'axios';
import './card.css'
import * as url from "url";


class uyga extends Component {

    constructor(props) {
        super(props);
        console.log("Hello world");

        this.state ={
            photo: []
        }
    }

    componentDidMount() {
        console.log("for watch");

        axios.get("https://jsonplaceholder.typicode.com/photos")
            .then((res) =>{
                console.log(res);
                this.setState({photo: res.data})
            })
    }


    render() {

        return (
            <div>
                <div className="container">
                    <div className="row">
                        {this.state.photo.map((item,index) =>(
                            <div className="col-3 mt-3">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>{item.title}</h5>
                                        {/*title ga*/}
                                        <h5>{item.id}</h5>
                                        {/*id ga*/}
                                    </div>
                                    <div className="card-body">
                                        <img src={item.url} width='100' alt=""/>
                                        {/*Rasim opkeberish*/}
                                    </div>
                                    <div className="card-footer">
                                        <button type='button' className='btn btn-danger'>Click</button>
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

export default uyga;