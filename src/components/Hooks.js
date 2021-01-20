import React, {useState} from 'react';

const Hooks = () => {

    const [number, setNumber] = useState(0);
    // arrayni destruktrizatsiya qilish



    // const number = states[0];
    // const setNumber = states[1];

    const numberniOshirish = () => {
        setNumber(number + 1);
    };
    const numberniKamaytirish = () => {
        if (number != 0){
            setNumber(number - 1);
        }
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-4 offset-4 mt-3">
                        <div className="card">
                            <div className="card-body">
                                <h1 className='text-center'>{number}</h1>
                    </div>
                            <div className="card-footer d-flex justify-content-between">
                                <button type='button' className='btn btn-success' onClick={numberniOshirish}>+</button>
                                <button type='button' className='btn btn-danger' onClick={numberniKamaytirish}>-</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hooks;