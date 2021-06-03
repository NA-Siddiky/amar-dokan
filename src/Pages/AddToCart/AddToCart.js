import React from 'react';
import './AddToCart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faMinusSquare, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const AddToCart = () => {
    const cartProduct = JSON.parse(sessionStorage.getItem("cartProduct"))

    let total = 0;
    for (let i = 0; i < cartProduct.length; i++) {
        const product = cartProduct[i];
        total = total + product.price;
    }
    const storeTotal = () => {
        sessionStorage.setItem('totalPrice', JSON.stringify(total))
    }




    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col"></th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Cancel Order</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartProduct.map((pd, i) => {
                            return (
                                <tr>
                                    <th scope="row">{i + 1}</th>
                                    <td className="add-to-cart-card"><img src={pd.image} className="ml-3" alt="" /></td>
                                    <td>
                                        <h4>{pd.productName}</h4>
                                        <p>Lorem ipsum dolor sit amet.</p>
                                    </td>
                                    <td><div className="pd-quantity d-flex align-items-center">
                                        <button className="btn btn-decrease fs-2"><FontAwesomeIcon icon={faMinusSquare} /></button>
                                        <input type="text" className="form-control text-center h-50" value="1" />
                                        <button className="btn btn-increase fs-2"><FontAwesomeIcon icon={faPlusSquare} /></button>
                                    </div></td>
                                    <td><h4>${pd.price}</h4></td>
                                    <td className="text-center"><span className="fs-3"><FontAwesomeIcon icon={faTimesCircle} /></span></td>
                                </tr>
                            )
                        })
                    }
                    <tr className="table-info">
                        <td colSpan="4" className="text-end"><h3 className="fw-bolder">Total</h3></td>
                        <td><h3>${total}</h3></td>
                        <td colSpan="2"><Link to='/payment' className="btn btn-custom" onClick={() => storeTotal()}>Check Out</Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AddToCart;