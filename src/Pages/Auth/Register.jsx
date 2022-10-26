import React, {useState, useEffect} from "react";
import RegisterFormComponent from "../../components/auth/RegisterFormComponent";
import Nav from "../../components/navbar/Nav";


const Register = () => {
    return (
        <>
            <Nav />
            <section>
                <div className="lg:flex flex-row-reverse">
                    <RegisterFormComponent />
                    <div className="hidden lg:flex items-center justify-center bg-indigo-100 flex-1 h-screen"></div>
                </div>
            </section>
        </>
    );
};

export default Register;
