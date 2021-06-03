import React, { useEffect, useState } from 'react';
import './NewArrivals.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const NewArrivals = () => {


    const [allProducts, setAllProducts] = useState([]);
    const [cart, setCart] = useState([])

    const notify = (pdName) => toast.success(`${pdName} Successfully added to cart`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });


    useEffect(() => {
        fetch('https://cryptic-dawn-15211.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])

    const data1 = allProducts.slice(0, 4)

    const data2 = allProducts.slice(12, 16)

    const data3 = allProducts.slice(22, 26)

    const data4 = allProducts.slice(32, 36)

    const data5 = allProducts.slice(38, 42)

    const data6 = allProducts.slice(43, 47)

    const sliderData = [...data1, ...data2, ...data3, ...data4, ...data5, ...data6];


    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 7000,
    };

    const handleAddToCart = (product) => {
        let newCart = [...cart, product];
        setCart(newCart);
        notify(product.productName)
        sessionStorage.setItem('cartProduct', JSON.stringify(newCart))
    }

    return (
        <section id="ProductSection" className="my-5">

            <div className="container">

                <h1 className="section-name py-3 my-5">New Arrivals</h1>
                <div className="row">
                    <Slider {...sliderSettings}>
                        {
                            sliderData.map(pdData => {
                                return (
                                    <div className="col-md-3 p-3" key={pdData._id}>
                                        <ToastContainer />
                                        <Link to={`/product/${pdData._id}`} className="product-details-link">
                                            <div className="card card-custom">
                                                <img src={pdData.image} className="card-img-top" height="300px" alt="..." />
                                                <div className="card-body text-center">
                                                    <h5 className="card-title fw-bolder">{pdData.productName}</h5>
                                                    <p className="card-text">Category: {pdData.catagory}</p>
                                                    <h5 className="fw-bolder">${pdData.price}</h5>
                                                    <div className="product-rating-ico pb-3">
                                                        <FontAwesomeIcon icon={faStar} />
                                                        <FontAwesomeIcon icon={faStar} />
                                                        <FontAwesomeIcon icon={faStar} />
                                                        <FontAwesomeIcon icon={faStar} />
                                                        <FontAwesomeIcon icon={faStar} />
                                                    </div>
                                                    <div className="w-100 d-flex justify-content-center">
                                                        <Link to="/" onClick={() => handleAddToCart(pdData)} className="btn btn-custom ls-2 mb-3">ADD TO CART</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
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

export default NewArrivals;