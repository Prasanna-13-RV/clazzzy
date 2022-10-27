import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {auth} from "../../firebase/firebase";

import {
    createUserWithEmailAndPassword,
    updatePassword,
    sendPasswordResetEmail,
} from "firebase/auth";

export const ForgotPasswordComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [validation_password, setValidation_password] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await sendPasswordResetEmail(auth, email).then((response) =>
                console.log(response)
            );
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {}, [validation_password]);

    return (
        <div className="lg:w-1/2 xl:max-w-screen-sm lg:pt-17 pt-5">
            <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                <h2
                    className="text-center text-4xl text-[#6D6875] font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold"
                >
                    Forgot Password
                </h2>
                {/* <div className="text-sm font-bold text-gray-700 mt-5 tracking-wide">
                    {setValidation_password ? (
                        <h2>Password does not match</h2>
                    ) : null}
                </div> */}
                <div className="mt-5">
                    <form>
                        <div>
                            <div className="text-sm font-bold text-gray-700 tracking-wide">
                                Email Address
                            </div>
                            <input
                                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-[#B5838D]"
                                type=""
                                placeHolder="mike@gmail.com"
                                autoFocus
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        {/* <div className="mt-8">
                            <div className="text-sm font-bold text-gray-700 tracking-wide">
                                Enter Password
                            </div>
                            <input
                                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-[#B5838D]"
                                type=""
                                placeHolder="Enter your password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="mt-8">
                            <div className="text-sm font-bold text-gray-700 tracking-wide">
                                Confirm your Password
                            </div>
                            <input
                                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-[#B5838D]"
                                type=""
                                placeHolder="Enter your password"
                                onChange={async (e) => {
                                    setConfirmPassword(e.target.value);
                                }}
                            />
                        </div> */}
                        <div className="mt-10">
                            <button
                                className="bg-[#FFB4A2] text-[#3E3B42] p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-[#FFC1AA]
                                shadow-lg"
                                onClick={handleSubmit}
                            >
                                Log In
                            </button>
                        </div>
                    </form>
                    <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                        Login to Continue{" "}
                        <a className="cursor-pointer text-[#B5838D] hover:text-[#F2A69F]">
                            <Link to="/login">Click here</Link>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
