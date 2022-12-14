import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import Nav from "../../components/navbar/Nav";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import {useDispatch, useSelector} from "react-redux";
import {auth, db} from "../../firebase/firebase";
import {addDoc, collection} from "firebase/firestore";
import axios from "axios";

const RegisterFormComponent = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirm_password] = useState("");
    const [error, setError] = useState("");

    const [validation_password, setValidation_password] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {user} = useSelector((state) => ({...state}));

    const usersCollectionRef = collection(db, "users");

    const handleSubmit = async (e) => {
        if (validation_password) {
            e.preventDefault();
            setError("");
            try {
                await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                ).then(async (response) => {
                    try {
                        await axios
                            .post(`${process.env.REACT_APP_API_URL}/register`, {
                                email,
                                fullName,
                                type: "email_password",
                            })
                            .then(async (response) => {
                                await dispatch({
                                    type: "SET_USER",
                                    payload: {
                                        ...response.data,
                                        cart: [],
                                        sell: false,
                                    },
                                });
                            });
                    } catch (err) {
                        console.log(err);
                    }
                });
                navigate("/");
            } catch (error) {
                setError(error.message);
            }
        } else {
            e.preventDefault();
            setError("Password does not match");
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

    useEffect(() => {
        const login = async () => {};
    });

    return (
        <div className="lg:w-1/2 xl:max-w-screen-sm lg:pt-20 pt-5">
            <div className="px-12 sm:px-24 md:px-48 lg:px-12 xl:px-24 xl:max-w-2xl">
                <h2
                    className="text-center text-4xl text-[#6D6875] font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold"
                >
                    Register
                </h2>
                <p className="text-sm font-bold text-gray-700 tracking-wide mt-5">
                    {error}
                </p>
                <div className="mt-10">
                    <form onSubmit={handleSubmit}>
                        <div className="mt-8">
                            <div className="flex justify-between items-center">
                                <div className="text-sm font-bold text-gray-700 tracking-wide">
                                    Full Name
                                </div>
                            </div>
                            <input
                                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-[#B5838D]"
                                type="text"
                                placeholder="Enter your Name"
                                autoFocus
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>
                        <div className="mt-8">
                            <div className="text-sm font-bold text-gray-700 tracking-wide">
                                Email Address
                            </div>
                            <input
                                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-[#B5838D]"
                                type="email"
                                placeholder="mike@gmail.com"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mt-8">
                            <div className="flex justify-between items-center">
                                <div className="text-sm font-bold text-gray-700 tracking-wide">
                                    Password
                                </div>
                            </div>
                            <input
                                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-[#B5838D]"
                                type="password"
                                placeholder="Enter your password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="mt-8">
                            <div className="flex justify-between items-center">
                                <div className="text-sm font-bold text-gray-700 tracking-wide">
                                    Confirm Password
                                </div>
                            </div>
                            <input
                                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-[#B5838D]"
                                type="password"
                                placeholder="Enter your password"
                                onChange={async (e) => {
                                    setConfirm_password(e.target.value);
                                    if (password == confirm_password) {
                                        setValidation_password(true);
                                    }
                                }}
                            />
                        </div>
                        <div className="mt-10">
                            <button
                                className="bg-[#FFB4A2] text-[#3E3B42] p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-[#FFC1AA]
                                shadow-lg"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                    <button
                        className="bg-[#FFCDB2] text-[#3E3B42] mt-1 p-4 w-full rounded-full tracking-wide
                        font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-[#F2A69F]
                        shadow-lg"
                        onClick={handleGoogleSignIn}
                    >
                        Sign In with Google
                    </button>
                    <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                        Don't have an account ?{" "}
                        <a className="cursor-pointer text-[#B5838D] hover:text-[#F2A69F]">
                            <Link to="/login">Click here</Link>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterFormComponent;
