import React, {useState} from "react";
import axios from "axios";
import CreateComponent from "../../components/admin/createPage/CreateComponent";
import Nav from "../../components/navbarAdmin/Nav"
import {Helmet} from "react-helmet";

const Create_Products = () => {
    return (
        <>
            <Helmet>
                <title>Create Product | Clazzy</title>
            </Helmet>
            <Nav />
            <CreateComponent />
        </>
    );
};

export default Create_Products;
