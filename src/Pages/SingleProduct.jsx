import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Template from "../components/singleProduct/Template";

const SingleProduct = () => {
    const {productid} = useParams();

    return (
        <>
            <Template productid={productid} />
        </>
    );
};

export default SingleProduct;
