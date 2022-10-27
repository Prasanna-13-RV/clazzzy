import React, {useState, useEffect} from "react";
import RegisterFormComponent from "../../components/auth/RegisterFormComponent";
import Nav from "../../components/navbar/Nav";
import {Helmet} from "react-helmet";

const Register = () => {
    return (
        <>
            <Helmet>
                <title>Register | Clazzy</title>
            </Helmet>
            <Nav />
            <section>
                <div className="lg:flex flex-row-reverse">
                    <RegisterFormComponent />
                    <div className="hidden lg:flex items-center justify-center flex-1 h-screen">
                        <img
                            className="w-full h-full object-contain"
                            src="https://s3.ap-southeast-1.amazonaws.com/cdn.thinklogicmarketing.com/CybersecAsia/Featured+Images/2021/-egift.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Register;
