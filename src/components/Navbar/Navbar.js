import React from 'react';
import './Navbar.css';
import brandLogo from '../../images/brand-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faUser, faShoppingBag, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () => {

    const userInfo = useSelector(state => state.shop.userDetails)
    return (
        <div id="home">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand ms-md-5" href="/home"><img className="brand-logo" src={brandLogo} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav navbar-link m-auto pe-5">
                            <li className="nav-item pe-4">
                                <Link to="/home" className="nav-link fw-bold ls-2 active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item pe-4">
                                <a className="nav-link fw-bold ls-2" href="#">Shop</a>
                            </li>
                            <li className="nav-item pe-4">
                                <a className="nav-link fw-bold ls-2" href="#">Products</a>
                            </li>
                            <li className="nav-item pe-4">
                                <a className="nav-link fw-bold ls-2" href="#">About Us</a>
                            </li>
                            <li className="nav-item pe-4">
                                <a className="nav-link fw-bold ls-2" href="#">Contact Us</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav navbar-icon m-e">
                            <li className="nav-item pe-2">
                                <Link className="nav-link" href="#"><FontAwesomeIcon icon={faHeart} /></Link>
                            </li>
                            <li className="nav-item pe-2">
                                <Link className="nav-link" href="#"><FontAwesomeIcon icon={faUser} /></Link>
                            </li>
                            <li className="nav-item pe-2">
                                <Link to="/add-to-cart" className="nav-link" href="#"><FontAwesomeIcon icon={faShoppingBag} /></Link>
                            </li>
                            <li className="nav-item pe-2">
                                {
                                    userInfo?.email ?
                                        <button className="btn btn-custom ls-2">{userInfo.name}</button>
                                        :
                                        <Link to='/login' className="nav-link"><button className="btn btn-custom ls-2">Log In</button></Link>

                                }
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;