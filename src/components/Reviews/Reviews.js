import React, { useEffect, useState } from 'react';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import './Reviews.css';

const reviews = [
    {
        name: 'Ana Rhodues',
        identity: 'Student',
        userProfile: 'https://i.ibb.co/g6FRDRt/profile.jpg',
        title: 'Amazing Site Wow!!',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, velit.',
        rating: '4.7'
    },
    {
        name: 'James Lio',
        identity: 'House wife',
        userProfile: 'https://i.ibb.co/g6FRDRt/profile.jpg',
        title: 'I find my best product',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, velit.',
        rating: '4.8'
    },
    {
        name: 'Lofi candle',
        identity: 'Teacher',
        userProfile: 'https://i.ibb.co/g6FRDRt/profile.jpg',
        title: 'I love this site',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, velit.',
        rating: '4.5'
    },
]


const Reviews = () => {

    return (
        <div className="container my-5">
            <h1 className="text-center my-5 py-3">OUR CUSTOMER'S REVIEWS</h1>

            <div className="row">
                {
                    reviews.map(review => <ReviewDetails review={review}></ReviewDetails>)
                }
            </div>
        </div>
    );
};

export default Reviews;