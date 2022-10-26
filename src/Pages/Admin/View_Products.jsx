import React from "react";
import ViewComponent from "../../components/admin/viewPage/ViewComponent";
import {useParams} from "react-router-dom";

const View_Products = () => {
    let {productid} = useParams();
    console.log(productid);
    return (
        <>
            <ViewComponent productid={productid} />
        </>
    );
};

export default View_Products;
