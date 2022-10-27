import React from "react";
import TableComponent from "../../components/admin/totalPage/TableComponent";
import NavAdmin from "../../components/navbarAdmin/Nav";
import {Helmet} from "react-helmet";

const Total_Products = () => {
    return (
        <>
            <Helmet>
                <title>All Products | Clazzy</title>
            </Helmet>
            <NavAdmin />
            <TableComponent />
        </>
    );
};

export default Total_Products;
