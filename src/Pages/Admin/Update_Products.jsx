import React from "react";
import {useParams} from "react-router-dom";
import UpdateComponent from "../../components/admin/updatePage/UpdateComponent";
import Nav from "../../components/navbarAdmin/Nav";
import {Helmet} from "react-helmet";

const Update_Products = () => {
    const {productid} = useParams();

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
