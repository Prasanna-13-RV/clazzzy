import React from "react";
import { Helmet } from "react-helmet";
import ContactComponent from "../components/contact/ContactComponent";
import Nav from "../components/navbar/Nav";

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us | Clazzy</title>
            </Helmet>
            <Nav />
            <ContactComponent />
        </>
    );
};

export default Contact;
