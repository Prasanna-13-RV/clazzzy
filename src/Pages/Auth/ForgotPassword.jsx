import React, {useState, useEffect} from "react";
import {ForgotPasswordComponent} from "../../components/auth/ForgotPasswordComponent";
import Nav from "../../components/navbar/Nav";
import {Helmet} from "react-helmet";

const ForgotPassword = () => {
    return (
        <>
            <Helmet>
                <title>Forgot Password | Clazzy</title>
            </Helmet>
            <Nav />
            <section>
                <div className="lg:flex">
                    <ForgotPasswordComponent />
                    <div className="hidden lg:flex items-center justify-center flex-1 h-screen">
                        <img
                            className="w-full h-full object-contain"
                            src="http://cdn.shopify.com/s/files/1/0538/8163/4976/files/checkout_pexel_1200x1200.jpg?v=1618477516"
                            alt=""
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default ForgotPassword;
