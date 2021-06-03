import React from 'react';
import './Payment.css';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';


const Payment = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const cartDetails = JSON.parse(sessionStorage.getItem("cartProduct"));
    const totalPrice = JSON.parse(sessionStorage.getItem("totalPrice"));

    return (
        <section className="payment-section">
            <div className="w-100 h-100 d-flex justify-content-center align-items-center">

                <div className="row w-75 payment-card">
                    <div className="col-md-5 d-flex justify-content-start">

                        <div className="row">

                            {
                                cartDetails.map(pd => {
                                    return (
                                        <Link to={`product/${pd._id}`} className="col-md-4 p-2">
                                            <div className="card bg-dark text-white payment-product-card">
                                                <img src={pd.image} className="card-img" alt="..." />
                                                <div className="card-img-overlay card-overlay-custom">
                                                    <h6 className="card-title fw-bolder text-center">{pd.productName}</h6>
                                                    <h3 className="card-text fw-bolder text-center">${pd.price}</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })
                            }

                        </div>

                    </div>
                    <div className="col-md-7 py-3">
                        <h1>Total: ${totalPrice}</h1>
                        <h3>Unit Price: $180</h3>


                        <form action="">
                            <div className="row w-100">

                                <div className="mb-3 col-md-6">
                                    <input type="text" className="form-control" {...register("name", { required: true })} placeholder="Name" />
                                    {errors.name && <span>This field is required</span>}
                                </div>

                                <div className="mb-3 col-md-6">
                                    <input type="number" className="form-control" {...register("number", { required: true })} placeholder="Phone number" />
                                    {errors.title && <span>This field is required</span>}
                                </div>

                                <div className="mb-3 col-md-12">
                                    <input type="text" className="form-control" {...register("address", { required: true })} placeholder="Address" />
                                    {errors.address && <span>This field is required</span>}
                                </div>
                                <div className="mb-3 col-md-12">
                                    <input type="text" className="form-control" {...register("address", { required: true })} placeholder="Pick-up Address" />
                                    {errors.address && <span>This field is required</span>}
                                </div>

                                <div className="mb-3 col-md-12">
                                    <input type="email" className="form-control" {...register("email", { required: true })} placeholder="E-mail" />
                                    {errors.address && <span>This field is required</span>}
                                </div>

                                <div className="w-100 d-flex justify-content-end px-5">
                                    <button type="submit" className="btn btn-custom ls-2 w-50">Pay ${totalPrice}</button>
                                </div>

                            </div>

                        </form>
                    </div>


                </div>
            </div>
        </section >
    );
};

export default Payment;