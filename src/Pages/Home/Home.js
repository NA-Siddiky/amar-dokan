import React from 'react';
import Category from '../../components/Category/Category';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import NewArrivals from '../../components/NewArrivals/NewArrivals';
import Products from '../../components/Products/Products';
import Reviews from '../../components/Reviews/Reviews';
import SearchBar from '../../components/SearchBar/SearchBar';
import Services from '../../components/Services/Services';
import Shops from '../../components/Shops/Shops';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <SearchBar></SearchBar>
            <Header></Header>
            <Category></Category>
            <NewArrivals></NewArrivals>
            <Products></Products>
            <Services></Services>
            <Shops></Shops>
            <Reviews></Reviews>
            <Contact></Contact>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;