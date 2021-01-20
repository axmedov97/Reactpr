import React from 'react';

const Mmm = (props) => {


    return (
        <div className="card ">
            <div className="card-header">
                <h2>{props.sarlavha}</h2>{props.body}
            </div>
            <div className="card-body">
                {props.matn.piase}
            </div>
            <div className="card-footer">
                <button type='button' className='btn btn-success'>Kursni boshlash </button>
            </div>
        </div>
    );
};

export default Mmm;