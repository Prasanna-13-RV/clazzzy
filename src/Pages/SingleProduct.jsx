import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Navigate, useParams} from "react-router-dom";
import Recommand from "../components/singleProduct/Recommand";
import Template from "../components/singleProduct/Template";

const SingleProduct = () => {
    const {productid} = useParams();

    const dispatch = useDispatch();
    const {user} = useSelector((state) => ({...state}));

    if (!user) {
        return <Navigate to="/login" />;
    }

    return (
        <>
            <Template productid={productid} />
        </>
    );
};

export default SingleProduct;
