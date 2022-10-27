import React, {useEffect, useState} from "react";
import { Helmet } from "react-helmet";
import {useDispatch, useSelector} from "react-redux";
import {Navigate, useParams} from "react-router-dom";
import Nav from "../components/navbar/Nav";
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
            <Helmet>
                <title>Single Product | Clazzy</title>
            </Helmet>
            <Nav />
            <Template productid={productid} />
        </>
    );
};

export default SingleProduct;
