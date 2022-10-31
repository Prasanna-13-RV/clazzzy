import React, {useEffect, useState} from "react";
import {Helmet} from "react-helmet";
import Nav from "../components/navbar/Nav";
import ProfileUpdateComponent from "../components/profile/ProfileUpdateComponent";

const UpdateProfile = () => {
    return (
        <>
            <Helmet>
                <title>Update Profile | Clazzzy</title>
            </Helmet>
            <Nav />
            <ProfileUpdateComponent />
        </>
    );
};

export default UpdateProfile;
