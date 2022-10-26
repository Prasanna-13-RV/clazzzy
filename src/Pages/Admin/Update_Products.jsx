import React from "react";
import {useParams} from "react-router-dom";
import UpdateComponent from "../../components/admin/updatePage/UpdateComponent";

const Update_Products = () => {
    const {productid} = useParams();

    return (
        <>
            <UpdateComponent productid={productid} />
        </>
    );
};

export default Update_Products;
