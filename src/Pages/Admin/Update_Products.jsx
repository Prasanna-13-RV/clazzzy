import React from "react";
import {Navigate, useParams} from "react-router-dom";
import UpdateComponent from "../../components/admin/updatePage/UpdateComponent";
import Nav from "../../components/navbarAdmin/Nav";
import {Helmet} from "react-helmet";
import { useSelector } from "react-redux";

const Update_Products = () => {
    const {productid} = useParams();

    const {user} = useSelector((state) => ({...state}));
    if (!user) {
        return <Navigate to="/login" />;
    }

    return (
        <>
        <Helmet>
                <title>Update Product | Clazzy</title>
            </Helmet>
            <Nav />
            <UpdateComponent productid={productid} />
        </>
    );
};

export default Update_Products;
