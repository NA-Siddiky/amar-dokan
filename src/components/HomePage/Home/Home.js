import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import NewArrivals from '../NewArrivals/NewArrivals';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <NewArrivals></NewArrivals>
        </div>
    );
};

export default Home;