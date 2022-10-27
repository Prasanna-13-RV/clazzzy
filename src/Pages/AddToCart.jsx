import React from "react";
import {Helmet} from "react-helmet";
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import AddCartComponent from "../components/addtocart/AddCartComponent";
import Nav from "../components/navbar/Nav";

const AddToCart = () => {
    const dispatch = useDispatch();
    const {user} = useSelector((state) => ({...state}));

    if (!user) {
        return <Navigate to="/login" />;
    }
    return (
        <>
            <Helmet>
                <title>Add to Cart | Clazzy</title>
            </Helmet>
            <Nav />
            <AddCartComponent />
        </>
    );
};

export default AddToCart;
