import React, {useState, useEffect} from "react";
import {Helmet} from "react-helmet";
import {LoginFormAdmin} from "../../../components/admin/auth/LoginFormAdmin";

const LoginAdmin = () => {
    return (
        <>
            <Helmet>
                <title>Seller Login | Clazzy</title>
            </Helmet>
            <section>
                <div className="lg:flex">
                    <LoginFormAdmin />
                    <div className="hidden lg:flex items-center justify-center flex-1 h-screen">
                        <img
                            className="w-full h-full object-contain"
                            src="https://blog.xoxoday.com/content/images/2022/01/Can-Happiness-be-Purchased-by-Experience-Gift-Cards_.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default LoginAdmin;
