import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";

export const LoginFormAdmin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [currentUser, setCurrentUser] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
            .post(`${process.env.REACT_APP_API_URL}/seller/login`, {
                username,
                password,
            })
            .then((response) => {
                setCurrentUser(response.data[0]);
                navigate("/sellers/totalproducts");
            });
    };
    // const reduxUser = async (response) => {
    //     try {
    //         await dispatch({
    //             type: "SET_SELLER_USER",
    //             payload: {
    //                 email: currentUser.email,
    //                 username: currentUser.username,
    //                 userid: currentUser.userid,
    //             },
    //         });
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    useEffect(() => {
        // console.log(currentUser);
        // reduxUser();
    }, [currentUser]);

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
                                Username
                            </div>
                            <input
                                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-[#B5838D]"
                                type=""
                                placeholder="tonystark"
                                autoFocus
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="mt-8">
                            <div className="flex justify-between items-center">
                                <div className="text-sm font-bold text-gray-700 tracking-wide">
                                    Password
                                </div>
                                {/* <div>
                                    <a
                                        className="text-xs font-display font-semibold text-[#B5838D] hover:text-[#FFC1AA]
                                        cursor-pointer"
                                        href="/forgotpassword"
                                    >
                                        Reset Password
                                    </a>
                                </div> */}
                            </div>
                            <input
                                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-[#B5838D]"
                                type=""
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
                </div>
            </div>
        </div>
    );
};
