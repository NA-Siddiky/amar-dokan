import React, { useEffect, useState } from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Products = () => {

    const [allProducts, setAllProducts] = useState([]);
    const [cart, setCart] = useState([])


    useEffect(() => {
        fetch('https://cryptic-dawn-15211.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])

    const data1 = allProducts.slice(4, 8)

    const data2 = allProducts.slice(16, 20)

    const data3 = allProducts.slice(34, 38)

    const data4 = allProducts.slice(42, 46)


    const sliderData = [...data1, ...data2, ...data3, ...data4];


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
        sessionStorage.setItem('cartProduct', JSON.stringify(newCart))
    }
    return (
        <section id="ProductSection" className="my-5">

            <div className="container">

                <h1 className="section-name py-3 my-5">Products</h1>
                <div className="row">
                    {
                        sliderData.map(pdData => {
                            return (
                                <div className="col-md-3 p-3" key={pdData._id}>
                                    <Link to={`/product/${pdData._id}`} className="product-details-link">
                                        <div className="card card-custom product-card">
                                            <img src={pdData.image} className="card-img-top" alt="..." />
                                            <div className="card-img-overlay p-0 product-card-overlay d-flex justify-content-center align-items-center">
                                                <div className="overlay-item w-100 py-3">
                                                    <div className="product-rating-ico text-center pb-3">
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
                                            <div className="card-body text-center h-100">
                                                <h5 className="card-title fw-bolder">{pdData.productName}</h5>
                                                <p className="card-text m-0 p-0">Category: {pdData.catagory}</p>
                                                <h5 className="fw-bolder">${pdData.price}</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    );
};

export default Products;