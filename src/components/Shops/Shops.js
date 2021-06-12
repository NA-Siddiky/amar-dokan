import React from 'react';
import './Shops.css';
import shopImg from '../../images/shop.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const shops = [
    {
        id: 1
    },
    {
        id: 2
    },
    {
        id: 3
    },
    {
        id: 4
    },
    {
        id: 5
    },
    {
        id: 6
    },
    {
        id: 7
    },
    {
        id: 8
    }
]

const Shops = () => {

    const sliderSettings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <section className="ShopSection py-5">
            <h1 className="section-name py-3 my-5">Our Shops</h1>

            <div className="container">

                <div className="row p-3">
                    <Slider {...sliderSettings}>
                        {
                            shops.map(shop => {
                                return (
                                    <div className="col-md-3 p-2">

                                        <div className="card bg-dark text-white shop-card">
                                            <img src={shopImg} className="card-img" alt="..." />
                                            <div className="card-img-overlay shop-card-overlay d-flex align-items-center justify-content-center">
                                                <Link to="/" className="btn btn-view-shop card-title">View Shop</Link>
                                            </div>
                                        </div>
                                        <h4 className="text-center">Shop Name</h4>

                                    </div>
                                )
                            })
                        }
                    </Slider>

                </div>
            </div>

        </section>
    );
};

export default Shops;