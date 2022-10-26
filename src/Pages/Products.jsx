import React from "react";
import SwiperProducts from "../components/products/SwiperComponent";
import Nav from "../components/navbar/Nav";
import Footer from "../components/footer/Footer";
import ProductsComponent from "../components/products/ProductsComponent";

const Products = () => {
    return (
        <>
            <Nav />
            <SwiperProducts />
            <ProductsComponent />
            <Footer />
        </>
    );
};

export default Products;
