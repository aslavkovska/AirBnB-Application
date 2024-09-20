import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = (props) => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger fixed-top shadow-sm">
                <div className="container">
                    <Link className="navbar-brand" to="/accommodations">
                        AirBnB
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/accommodations">Accommodations</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/categories">Categories</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <br/>
        </header>
    );
}

export default Header;
