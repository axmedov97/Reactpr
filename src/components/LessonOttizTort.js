import React, {Component} from 'react';
import axios from "axios";
import {AvForm, AvField} from  'availity-reactstrap-validation'
import {Modal, ModalBody, ModalFooter} from 'reactstrap'

class LessonOttizTort extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        axios.get("https://app-employ.herokuapp.com/api/employee")
            .then((res) =>{
                console.log(res);
                this.setState({employees: res.data.object});
            })
    }

    render() {
        const addEmployee = (event, values) =>{
            axios.post('https://app-employ.herokuapp.com/api/employee', values)
                .then((res) =>{
                    console.log(res);
                    if (res.data.success){
                        axios.get("https://app-employ.herokuapp.com/api/employee")
                            .then((res2) =>{
                                this.setState({employees: res2.data.object})
                            })
                    }
                })
            //    res bu yerda ixtiyory text
        };

        const deleteEmployee = (id) => {
            axios.delete("https://app-employ.herokuapp.com/api/employee/" + id)
                .then((res) => {
                    console.log(res);
                    getEmployee();
            })
        };
        const getEmployee = () => {
            axios.get("https://app-employ.herokuapp.com/api/employee")
                .then((res2) => {
                    this.setState({employees: res2.data.object});
                })
        };
        const editEmployee = (index) => {
            axios.put("https://app-employ.herokuapp.com/api/employee/" + this.state)
            this.setState({selectedIndex: index})
        };


        const changeModal = () => {
            this.setState({modalOpen: !this.state.modalOpen});
        };

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-4 offset-4 mt-3">
                            <div className="card">
                                <div className="card-body">
                                    <AvForm onValidSubmit={addEmployee}>
                                        <AvField name='firstName' type='text' label='ishchining ismi:'/>
                                        <AvField name='lastName' type='text' label='ishchining familiyasi:'/>
                                        <AvField name='age' type='number' label='ishchining yoshi:'/>
                                        <AvField name='position' type='text' label='ishchining lavozimi:'/>
                                        <AvField name='salary' type='number' label='ishchining oyligi:'/>

                                        <button type='submit' className='btn btn-success d-block ml-auto'>Qo'shish</button>
                                    </AvForm>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {this.state.employees.map((item, index) => {
                            return(
                                <div className='col-4 mt-3'>
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>{item.firstName} {item.lastName}</h5>
                                        </div>
                                        <div className="card-body">
                                            <p>Age: <b>{item.age}</b></p>
                                            <p>Position: <b>{item.position}</b></p>
                                            <p>Salary: <b>{item.salary} so'm</b></p>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between">
                                            <button type='button' className='btn btn-primary' onClick={() => {editEmployee(index); changeModal();}}>Edit</button>
                                            <button type='button' className='btn btn-danger' onClick={() => deleteEmployee(item.id)}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <Modal isOpen={this.state.modalOpen} toggle={changeModal}>
                    <AvForm onValidSubmit={addEmployee} model={this.state.employees[this.state.selectedIndex]}>
                        <ModalBody>
                            <AvField name='firstName' type='text' label='ishchining ismi:' required/>
                            <AvField name='lastName' type='text' label='ishchining familiyasi:' required/>
                            <AvField name='age' type='number' label='ishchining yoshi:' required/>
                            <AvField name='position' type='text' label='ishchining lavozimi:' required/>
                            <AvField name='salary' type='number' label='ishchining oyligi:' required/>
                        </ModalBody>
                        <ModalFooter>
                        <button type='submit' className='btn btn-success d-block ml-auto' onClick={changeModal}>Saqlash</button>
                        </ModalFooter>
                    </AvForm>
                </Modal>
            </div>
        );
    }
}

export default LessonOttizTort;