import React from 'react';
import Category from '../Category/Category';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import NewArrivals from '../NewArrivals/NewArrivals';
import Product from '../Product/Product';
import Services from '../Product/Services';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Category></Category>
            <Product></Product>
            <Services></Services>
            <Contact></Contact>
            {/* <NewArrivals></NewArrivals> */}
        </div>
    );
};

export default Home;