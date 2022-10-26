import React, {useState, useEffect} from "react";
import Nav from "../../components/navbar/Nav";
import {LoginFormComponent} from "../../components/auth/LoginFormComponent";

const Login = () => {
    return (
        <>
            <Nav />
            <section>
                <div className="lg:flex">
                    <LoginFormComponent />
                    <div className="hidden lg:flex items-center justify-center bg-indigo-100 flex-1 h-screen"></div>
                </div>
            </section>
        </>
    );
};

export default Login;
