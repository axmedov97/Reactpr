import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <div className='navbar navbar-expand-sm navbar-light bg-light' >
                <Link to="/" className='navbar-brand'>
                    <img src="logo192.png" width="60" alt=""/>
                </Link>

                <div className="collapse navbar-collapse">
                    <ul className='navbar-nav'>
                        <li className='nav-item'><Link className="nav-link" to="/product">Mahsulotlar</Link></li>
                        <li className='nav-item'><Link className="nav-link" to="/lifecycle">LifeCycle Function</Link></li>
                        <li className='nav-item'><Link className="nav-link" to="/Employee">Ishchilar ro'yhati</Link></li>
                        <li className='nav-item'><Link className="nav-link" to="/hooks">Hooks</Link></li>
                        <li className='nav-item'><Link className="nav-link" to="/posts">Postlar</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Nav;