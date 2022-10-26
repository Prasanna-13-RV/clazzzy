import React from "react";
import SwiperProducts from "../components/products/SwiperComponent";
import Nav from "../components/navbar/Nav";
import Footer from "../components/footer/Footer";
import ProductsComponent from "../components/products/ProductsComponent";
import {Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const Products = () => {
    const dispatch = useDispatch();
    const {user} = useSelector((state) => ({...state}));

    // if (!user) {
    //     return <Navigate to="/login" />;
    // }

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
