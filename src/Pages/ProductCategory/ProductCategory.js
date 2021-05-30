import React from 'react';
import './ProductCategory.css';
import image from '../../images/product-2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ProductCategory = () => {
    return (
        <div className="container">
            <div className="text-center">
                <h1 className="color-primary pt-5">Welcome to Sports Category</h1>
            </div>
            <hr />
            <div className="w-100 d-flex justify-content-center align-items-center">
            </div>

            <div className="row mt-2 d-flex justify-content-center category-list">
                <div className="col-12 mb-3 p-2">
                    <div className="row w-100 category-list-card d-flex align-items-center">
                        <div className="col-4 p-3">
                            <img src={image} className="" alt="" />
                        </div>
                        <div className="col-8 p-2">
                            <div>
                                <h3 className="fw-bolder">Product Name</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad porro, omnis amet saepe facilis minima.</p>
                                <h5 className="m-0">Quantity: 1</h5>
                                <p>Shop Name</p>
                            </div>
                            <h5 className="fw-bolder">$180</h5>
                            <div className="product-rating-ico pb-3">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <div className="w-100 d-flex justify-content-end">
                                <button class="btn btn-custom ls-2 mx-3">Details</button>
                                <button class="btn btn-custom ls-2">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCategory;