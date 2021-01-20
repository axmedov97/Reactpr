import React, {Component} from 'react';

import Nimadir from "./Nimadir";

class Wrap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            son: 0
        }

    }

    render() {

        var number = 0;

        const numberniOshirish = () => {
            // number++;

            // console.log(number);
            this.setState({son: this.state.son + 1})
        };

        const numbernikamaytirish = () => {
            // number--;
            // console.log(number);

            this.setState({son: this.state.son - 1})
        };

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <Nimadir sarlavha="Hello world! " odam={{name: "Muxsinbek"}} rasm="bino.png"/>
                        </div>
                        <div className="col-4">
                            <Nimadir sarlavha="Salom dunyo!" odam={{name: "Muxsinjon"}} rasm="logo192.png"/>
                        </div>
                        <div className="col-4">
                            <Nimadir sarlavha="Привет мир!" odam={{name: "MuxsinbekAxmedov"}} rasm="logo512.png"/>
                        </div>
                        <div className="col-4 my-5 offset-4">
                            <div className="card">
                                <div className="card-header text-center">
                                   <h1>{this.state.son}</h1>
                                </div>
                                <div className="card-body d-flex justify-content-between">
                                    <button type='button' className='btn-success' onClick={numberniOshirish}>+</button>
                                    <button type='button' className='btn-success' onClick={numbernikamaytirish}>-</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Wrap;


// rcc -  class komponenta ochib beradi
// rsc - arrow function component
// rsf - function component


