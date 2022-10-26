import React from "react";
import TableComponent from "../../components/admin/totalPage/TableComponent";
import NavAdmin from "../../components/navbarAdmin/Nav";

const Total_Products = () => {
    return (
        <>
            <NavAdmin />
            {/* <h1 className="text-center">All Products</h1> */}
            <TableComponent />
        </>
    );
};

export default Total_Products;
