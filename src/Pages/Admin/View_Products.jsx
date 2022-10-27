import React from "react";
import ViewComponent from "../../components/admin/viewPage/ViewComponent";
import {Navigate, useParams} from "react-router-dom";
import Nav from "../../components/navbarAdmin/Nav";
import {Helmet} from "react-helmet";
import {useSelector} from "react-redux";

const View_Products = () => {
    let {productid} = useParams();
    // console.log(productid);

    const {user} = useSelector((state) => ({...state}));
    if (!user) {
        return <Navigate to="/login" />;
    }

    return (
        <>
            <Helmet>
                <title>View Product | Clazzy</title>
            </Helmet>
            <Nav />
            <ViewComponent productid={productid} />
        </>
    );
};

export default View_Products;
