import React, {useEffect, useState} from "react";
import {Helmet} from "react-helmet";
import {useSelector} from "react-redux";
import Nav from "../components/navbar/Nav";
import ProfileComponent from "../components/profile/ProfileComponent";

const Profile = () => {
    const {user} = useSelector((state) => ({...state}));

    return (
        <>
            <Helmet>
                <title>Profile | Clazzzy</title>
            </Helmet>
            <Nav />
            <ProfileComponent profileid={user && user._id} />
        </>
    );
};

export default Profile;
