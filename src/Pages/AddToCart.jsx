import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import AddCartComponent from "../components/addtocart/AddCartComponent";


const AddToCart = () => {


    const dispatch = useDispatch();
    const {user} = useSelector((state) => ({...state}));

    if (!user) {
        return <Navigate to="/login" />;
    }
    return (
        <>
            <AddCartComponent />
        </>
    );
};

export default AddToCart;
