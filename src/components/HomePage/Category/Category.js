import React from 'react';
import './Category.css';
import categoryImg from '../../../images/category_img.jpg';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <section className="container mt-5 pt-5">
            <h1 className="text-center my-5 text-uppercase section-name">Categories</h1>
            <div className="row d-flex px-5 align-items-center justify-content-center">
                <Link to="/category" className="col-md-4 col-sm-6 mb-3">
                    <div class="card category-card">
                        <img src={categoryImg} height="150px" class="card-img" alt="..." />
                        <div class="card-img-overlay category-card-overlay">
                            <div className="m-auto text-center w-75">
                                <h2 class="fw-bolder">Card title Card title Card title</h2>
                            </div>
                        </div>
                    </div>
                </Link>
                <div className="col-md-4 col-sm-6 mb-3">
                    <div class="card category-card">
                        <img src={categoryImg} height="150px" class="card-img" alt="..." />
                        <div class="card-img-overlay category-card-overlay">
                            <div className="m-auto text-center w-75">
                                <h2 class="fw-bolder">Card title Card title Card title</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 mb-3">
                    <div class="card category-card">
                        <img src={categoryImg} height="150px" class="card-img" alt="..." />
                        <div class="card-img-overlay category-card-overlay">
                            <div className="m-auto text-center w-75">
                                <h2 class="fw-bolder">Card title Card title Card title</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 mb-3">
                    <div class="card category-card">
                        <img src={categoryImg} height="150px" class="card-img" alt="..." />
                        <div class="card-img-overlay category-card-overlay">
                            <div className="m-auto text-center w-75">
                                <h2 class="fw-bolder">Card title Card title Card title</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 mb-3">
                    <div class="card category-card">
                        <img src={categoryImg} height="150px" class="card-img" alt="..." />
                        <div class="card-img-overlay category-card-overlay">
                            <div className="m-auto text-center w-75">
                                <h2 class="fw-bolder">Card title Card title Card title</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 mb-3">
                    <div class="card category-card">
                        <img src={categoryImg} height="150px" class="card-img" alt="..." />
                        <div class="card-img-overlay category-card-overlay">
                            <div className="m-auto text-center w-75">
                                <h2 class="fw-bolder">Card title Card title Card title</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Category;