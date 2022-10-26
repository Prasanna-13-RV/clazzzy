import React from "react";
import Nav from "../components/navbar/Nav";
import HeroSectionComponents from "../components/home/HeroSectionComponents";
import ProductsComponents from "../components/home/ProductsComponents";
import FourSideComponent from "../components/home/FourSideComponent";
import Footer from "../components/footer/Footer";
import ContactComponent from "../components/home/ContactComponent";


const Home = () => {
    return (
        <>
            <Nav />
            <HeroSectionComponents />
            <ProductsComponents />
            <FourSideComponent />
            {/* <ContactComponent /> */}
            <Footer />
        </>
    );
};

export default Home;
