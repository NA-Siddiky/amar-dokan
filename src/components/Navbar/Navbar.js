import React from 'react';
import './Navbar.css';
import brandLogo from '../../images/brand-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faUser, faShoppingBag, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div id="home">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand ms-md-5" href="#"><img className="brand-logo" src={brandLogo} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav navbar-link m-auto pe-5">
                            <li className="nav-item pe-4">
                                <Link to="/home" className="nav-link fw-bold ls-2 active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item pe-4">
                                <Link to="/" className="nav-link fw-bold ls-2">Shop</Link>
                            </li>
                            <li className="nav-item pe-4">
                                <Link to="/" className="nav-link fw-bold ls-2">Products</Link>
                            </li>
                            <li className="nav-item pe-4">
                                <Link to="/" className="nav-link fw-bold ls-2">About Us</Link>
                            </li>
                            <li className="nav-item pe-4">
                                <Link to="/" className="nav-link fw-bold ls-2">Contact Us</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav navbar-icon m-e">
                            <li className="nav-item pe-2">
                                <Link className="nav-link" to="/"><FontAwesomeIcon icon={faHeart} /></Link>
                            </li>
                            <li className="nav-item pe-2">
                                <Link className="nav-link" to="/"><FontAwesomeIcon icon={faUser} /></Link>
                            </li>
                            <li className="nav-item pe-2">
                                <Link to="/add-to-cart" className="nav-link" href="#"><FontAwesomeIcon icon={faShoppingBag} /></Link>
                            </li>
                            <li className="nav-item pe-2">
                                <Link to='/login' className="nav-link"><button className="btn btn-custom ls-2">Log In</button></Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;