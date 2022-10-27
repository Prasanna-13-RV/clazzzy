import React from "react";
import TableComponent from "../../components/admin/totalPage/TableComponent";
import NavAdmin from "../../components/navbarAdmin/Nav";
import {Helmet} from "react-helmet";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Total_Products = () => {

    const {user} = useSelector((state) => ({...state}));
    if (!user) {
        return <Navigate to="/login" />;
    }


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
