import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {auth, db} from "../../firebase/firebase";
import {addDoc, collection} from "firebase/firestore";
import axios from "axios";

import {
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";

export const LoginFormComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const usersCollectionRef = collection(db, "users");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signInWithEmailAndPassword(auth, email, password).then(
                async (response) => {
                    try {
                        await axios
                            .post(`${process.env.REACT_APP_API_URL}/login`, {
                                email,
                            })
                            .then(async (response) => {
                                await dispatch({
                                    type: "SET_USER",
                                    payload: {
                                        ...response.data[0],
                                        cart: [],
                                        sell: false,
                                    },
                                });
                            });
                    } catch (err) {
                        console.log(err);
                    }
                }
            );
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    };

    const googleAuthProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signInWithPopup(auth, googleAuthProvider).then(
                async (response) => {
                    try {
                        await axios
                            .post(`${process.env.REACT_APP_API_URL}/register`, {
                                email: response.user.auth.currentUser.email,
                                fullName:
                                    response.user.auth.currentUser.displayName,
                                type: "googleoauth",
                            })
                            .then(async (response) => {
                                await dispatch({
                                    type: "SET_USER",
                                    payload: {
                                        ...response.data[0],
                                        cart: [],
                                        sell: false,
                                    },
                                });
                            });
                    } catch (err) {
                        console.log(err);
                    }
                }
            );
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    };
    return (
        <div className="lg:w-1/2 xl:max-w-screen-sm lg:pt-17 pt-5">
            <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                <h2
                    className="text-center text-4xl text-[#6D6875] font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold"
                >
                    Log in
                </h2>
                <div className="mt-12">
                    <form onSubmit={handleSubmit} method="POST">
                        <div>
                            <div className="text-sm font-bold text-gray-700 tracking-wide">
                                Email Address
                            </div>
                            <input
                                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-[#B5838D]"
                                type=""
                                placeholder="mike@gmail.com"
                                autoFocus
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mt-8">
                            <div className="flex justify-between items-center">
                                <div className="text-sm font-bold text-gray-700 tracking-wide">
                                    Password
                                </div>
                                <div>
                                    <a
                                        className="text-xs font-display font-semibold text-[#B5838D] hover:text-[#FFC1AA]
                                        cursor-pointer"
                                        href="/forgotpassword"
                                    >
                                        Forgot Password?
                                    </a>
                                </div>
                            </div>
                            <input
                                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-[#B5838D]"
                                type="password"
                                placeholder="Enter your password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="mt-10">
                            <button
                                className="bg-[#FFB4A2] text-[#3E3B42] p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-[#FFC1AA]
                                shadow-lg"
                            >
                                Log In
                            </button>
                        </div>
                    </form>
                    <button
                        onClick={handleGoogleSignIn}
                        className="bg-[#FFCDB2] text-[#3E3B42] mt-1 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-[#F2A69F]
                                shadow-lg"
                    >
                        Sign in with Google
                    </button>
                    <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                        Don't have an account ?{" "}
                        <a className="cursor-pointer text-[#B5838D] hover:text-[#F2A69F]">
                            <Link to="/register">Register</Link>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
