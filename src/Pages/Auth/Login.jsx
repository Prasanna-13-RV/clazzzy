import React, {useState, useEffect} from "react";
import Nav from "../../components/navbar/Nav";
import {LoginFormComponent} from "../../components/auth/LoginFormComponent";
import {Helmet} from "react-helmet";

const Login = () => {
    return (
        <>
            <Helmet>
                <title>Login | Clazzy</title>
            </Helmet>
            <Nav />
            <section>
                <div className="lg:flex">
                    <LoginFormComponent />
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

export default Login;
