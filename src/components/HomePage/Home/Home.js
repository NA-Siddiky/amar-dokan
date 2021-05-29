import React from 'react';
import Category from '../Category/Category';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import NewArrivals from '../NewArrivals/NewArrivals';
import Product from '../Product/Product';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Category></Category>
            <Product></Product>
            {/* <NewArrivals></NewArrivals> */}
        </div>
    );
};

export default Home;