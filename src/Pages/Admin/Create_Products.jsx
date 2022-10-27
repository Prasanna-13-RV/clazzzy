import React, {useState} from "react";
import axios from "axios";
import CreateComponent from "../../components/admin/createPage/CreateComponent";
import Nav from "../../components/navbarAdmin/Nav";
import {Helmet} from "react-helmet";
import {Navigate} from "react-router-dom";
import { useSelector } from "react-redux";

const Create_Products = () => {
    const {user} = useSelector((state) => ({...state}));
    if (!user) {
        return <Navigate to="/login" />;
    }
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
