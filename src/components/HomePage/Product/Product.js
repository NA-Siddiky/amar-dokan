import React from 'react';
import './Product.css';
import product from '../../../images/product.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Product = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 5000,
    };
    return (
        <section id="ProductSection" className="my-5 container">

            <h1 className="section-name py-3">Products</h1>
            <div className="row">
                <Slider {...settings}>
                    <div className="col-md-3 p-3">
                        <div class="card card-custom">
                            <img src={product} class="card-img-top" alt="..." />
                            <div class="card-body text-center">
                                <h5 class="card-title">FOXic</h5>
                                <p class="card-text">Antimicrobial Skin Cleanser</p>
                                <h5 className="fw-bolder">$180</h5>
                                <div className="product-rating-ico pb-3">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <div className="w-100 d-flex justify-content-center">
                                    <button class="btn btn-custom ls-2 mb-3">ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 p-3">
                        <div class="card card-custom">
                            <img src={product} class="card-img-top" alt="..." />
                            <div class="card-body text-center">
                                <h5 class="card-title">FOXic</h5>
                                <p class="card-text">Antimicrobial Skin Cleanser</p>
                                <h5 className="fw-bolder">$180</h5>
                                <div className="product-rating-ico pb-3">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <div className="w-100 d-flex justify-content-center">
                                    <button class="btn btn-custom ls-2 mb-3">ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 p-3">
                        <div class="card card-custom">
                            <img src={product} class="card-img-top" alt="..." />
                            <div class="card-body text-center">
                                <h5 class="card-title">FOXic</h5>
                                <p class="card-text">Antimicrobial Skin Cleanser</p>
                                <h5 className="fw-bolder">$180</h5>
                                <div className="product-rating-ico pb-3">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <div className="w-100 d-flex justify-content-center">
                                    <button class="btn btn-custom ls-2 mb-3">ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 p-3">
                        <div class="card card-custom">
                            <img src={product} class="card-img-top" alt="..." />
                            <div class="card-body text-center">
                                <h5 class="card-title">FOXic</h5>
                                <p class="card-text">Antimicrobial Skin Cleanser</p>
                                <h5 className="fw-bolder">$180</h5>
                                <div className="product-rating-ico pb-3">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <div className="w-100 d-flex justify-content-center">
                                    <button class="btn btn-custom ls-2 mb-3">ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 p-3">
                        <div class="card card-custom">
                            <img src={product} class="card-img-top" alt="..." />
                            <div class="card-body text-center">
                                <h5 class="card-title">FOXic</h5>
                                <p class="card-text">Antimicrobial Skin Cleanser</p>
                                <h5 className="fw-bolder">$180</h5>
                                <div className="product-rating-ico pb-3">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <div className="w-100 d-flex justify-content-center">
                                    <button class="btn btn-custom ls-2 mb-3">ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 p-3">
                        <div class="card card-custom">
                            <img src={product} class="card-img-top" alt="..." />
                            <div class="card-body text-center">
                                <h5 class="card-title">FOXic</h5>
                                <p class="card-text">Antimicrobial Skin Cleanser</p>
                                <h5 className="fw-bolder">$180</h5>
                                <div className="product-rating-ico pb-3">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <div className="w-100 d-flex justify-content-center">
                                    <button class="btn btn-custom ls-2 mb-3">ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 p-3">
                        <div class="card card-custom">
                            <img src={product} class="card-img-top" alt="..." />
                            <div class="card-body text-center">
                                <h5 class="card-title">FOXic</h5>
                                <p class="card-text">Antimicrobial Skin Cleanser</p>
                                <h5 className="fw-bolder">$180</h5>
                                <div className="product-rating-ico pb-3">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <div className="w-100 d-flex justify-content-center">
                                    <button class="btn btn-custom ls-2 mb-3">ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 p-3">
                        <div class="card card-custom">
                            <img src={product} class="card-img-top" alt="..." />
                            <div class="card-body text-center">
                                <h5 class="card-title">FOXic</h5>
                                <p class="card-text">Antimicrobial Skin Cleanser</p>
                                <h5 className="fw-bolder">$180</h5>
                                <div className="product-rating-ico pb-3">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <div className="w-100 d-flex justify-content-center">
                                    <button class="btn btn-custom ls-2 mb-3">ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 p-3">
                        <div class="card card-custom">
                            <img src={product} class="card-img-top" alt="..." />
                            <div class="card-body text-center">
                                <h5 class="card-title">FOXic</h5>
                                <p class="card-text">Antimicrobial Skin Cleanser</p>
                                <h5 className="fw-bolder">$180</h5>
                                <div className="product-rating-ico pb-3">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <div className="w-100 d-flex justify-content-center">
                                    <button class="btn btn-custom ls-2 mb-3">ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
};

export default Product;