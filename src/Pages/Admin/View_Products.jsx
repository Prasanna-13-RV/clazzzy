import React from "react";
import ViewComponent from "../../components/admin/viewPage/ViewComponent";
import {useParams} from "react-router-dom";
import Nav from "../../components/navbarAdmin/Nav";
import {Helmet} from "react-helmet";

const View_Products = () => {
    let {productid} = useParams();
    // console.log(productid);
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
