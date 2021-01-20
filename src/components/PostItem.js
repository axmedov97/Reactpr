import React from 'react';
import {Link} from "react-router-dom"

const PostItem = (props) => {
    return (
        <div className='card'>
            <div className='card-body'>
                <p>{props.title} <Link to={'/posts/' + props.id}>batafsil</Link></p>
            </div>

        </div>
    );
};

export default PostItem;