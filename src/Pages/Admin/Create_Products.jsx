import React, {useState} from "react";
import axios from "axios";
import CreateComponent from "../../components/admin/createPage/CreateComponent";
import Nav from "../../components/navbarAdmin/Nav"

const Create_Products = () => {
    return (
        <>
            <Nav />
            <CreateComponent />
        </>
    );
};

export default Create_Products;
