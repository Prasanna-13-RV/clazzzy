import React, {useEffect, useState} from "react";
import {Helmet} from "react-helmet";
import Nav from "../components/navbar/Nav";
import ProfileComponent from "../components/profile/ProfileComponent";

const Profile = () => {
    return (
        <>
            <Helmet>
                <title>Profile | Clazzzy</title>
            </Helmet>
            <Nav />
            <ProfileComponent />
        </>
    );
};

export default Profile;