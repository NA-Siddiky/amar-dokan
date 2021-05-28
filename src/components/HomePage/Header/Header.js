import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faHeadset, faHandHoldingUsd, faGift } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header>
            {/* Header Slider */}
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item carousel-item-1 active ">
                        <div className="m-5 p-5">
                            <h1 className="fw-bolder">Take <h1 className="d-inline-block color-primary">Care</h1></h1>
                            <h1> <h1 className="d-inline-block color-primary">Of your</h1> Health</h1>
                            <p style={{ width: '35%' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, rem minima vero error magnam maiores.</p>
                            <button className="btn btn-custom mt-3">Shop Now</button>
                        </div>
                    </div>
                    <div className="carousel-item carousel-item-2">
                        <div className="d-flex align-items-center justify-content-center h-100">
                            <div className="text-center">
                                <h1 className="text-white">Antiseptic</h1>
                                <h1 className="text-white">Hand <h1 className="d-inline-block color-primary">Sanitizer</h1></h1>
                                <button className="btn btn-custom mt-3">Shop Now</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Header About */}
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <div className="row p-4">
                        <div className="col-4 d-flex align-items-center justify-content-end">
                            <FontAwesomeIcon icon={faTruck} className="fs-1" style={{ color: '#637381' }} />
                        </div>
                        <div className="col-8">
                            <h6 className="fw-bolder m-0">FREE SHIPPING</h6>
                            <small>On Order Over $100</small>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="row p-4">
                        <div className="col-4 d-flex align-items-center justify-content-end">
                            <FontAwesomeIcon icon={faHeadset} className="fs-1" style={{ color: '#637381' }} />
                        </div>
                        <div className="col-8">
                            <h6 className="fw-bolder m-0">ONLINE 24/7 SUPPORT</h6>
                            <small>Sign Up For Gift</small>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="row p-4">
                        <div className="col-4 d-flex align-items-center justify-content-end">
                            <FontAwesomeIcon icon={faHandHoldingUsd} className="fs-1" style={{ color: '#637381' }} />
                        </div>
                        <div className="col-8">
                            <h6 className="fw-bolder m-0">14 - DAY MONEYBACK</h6>
                            <small>Best Deal With 14 days</small>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="row p-4">
                        <div className="col-4 d-flex align-items-center justify-content-end">
                            <FontAwesomeIcon icon={faGift} className="fs-1" style={{ color: '#637381' }} />
                        </div>
                        <div className="col-8">
                            <h6 className="fw-bolder m-0">WIN $100 TO SHOP</h6>
                            <small>Get Membership</small>
                        </div>
                    </div>
                </div>

            </div>


        </header>
    );
};

export default Header;