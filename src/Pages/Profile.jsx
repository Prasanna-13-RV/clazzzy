import React, {useEffect, useState} from "react";
import {Helmet} from "react-helmet";
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {auth, db} from "../firebase/firebase";
import Nav from "../components/navbar/Nav";
import {addDoc, collection, updateDoc} from "firebase/firestore";

const Profile = () => {
    const [first_name, setFirst_name] = useState("");
    const [second_name, setSecond_name] = useState("");
    const [dob, setDob] = useState();
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState();
    const [error, setError] = useState("");

    const dispatch = useDispatch();
    const {user} = useSelector((state) => ({...state}));

    if (!user) {
        return <Navigate to="/login" />;
    }
    
    const usersCollectionRef = collection(db, "users");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await updateDoc(usersCollectionRef, {
                first_name: first_name,
                second_name: second_name,
                email,
                type: "email_password",
                dob: dob,
                phone: phone,
                gender: gender,
            });
            await dispatch({
                type: "UPDATE_USER",
                payload: {
                    first_name,
                    second_name,
                    dob,
                    email,
                    gender,
                    phone,
                },
            });
        } catch (error) {
            setError(error);
        }
    };

    return (
        <>
            <Helmet>
                <title>Profile | Clazzzy</title>
            </Helmet>
            <Nav />

            <div className="md:flex no-wrap flex flex-col justify-center items-center shadow-lg bg-black">
                <div className="w-full md:w-9/12 mx-2 h-64 shadow-lg ">
                    <div className="bg-white p-3 shadow-lg rounded-sm shadow-indigo-500/40 mt-20 px-10">
                        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                            <span clas="text-green-500">
                                <svg
                                    className="h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </span>
                            <span className="tracking-wide">About</span>
                        </div>
                        <div className="text-gray-700">
                            <div className="grid md:grid-cols-1 text-sm">
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">
                                        First Name
                                    </div>
                                    <div className="px-4 py-2">
                                        <input
                                            className="w-full text-sm py-2 border-b border-gray-300 focus:outline-none focus:border-[#B5838D]"
                                            type="text"
                                            placeholder="Tony"
                                            autoFocus
                                            onChange={(e) =>
                                                setFirst_name(e.target.value)
                                            }
                                            value={user.fullName}
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">
                                        Last Name
                                    </div>
                                    <div className="px-4 py-2">
                                        <input
                                            className="w-full text-sm py-2 border-b border-gray-300 focus:outline-none focus:border-[#B5838D]"
                                            type=""
                                            placeholder="Stark"
                                            autoFocus
                                            value={user.second_name}
                                            onChange={(e) =>
                                                setSecond_name(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">
                                        Gender
                                    </div>
                                    <div className="pl-5">
                                        <div className="flex items-center mb-4">
                                            <input
                                                id="default-radio-1"
                                                type="radio"
                                                name="default-radio"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2 dar"
                                                value={user.gender}
                                                onChange={(e) =>
                                                    setGender("female")
                                                }
                                            />
                                            <label
                                                htmlFor="default-radio-1"
                                                className="ml-2 text-sm font-medium text-gray-900 "
                                            >
                                                Female
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                checked
                                                id="default-radio-2"
                                                type="radio"
                                                name="default-radio"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 "
                                                onChange={(e) =>
                                                    setGender("male")
                                                }
                                            />
                                            <label
                                                htmlFor="default-radio-2"
                                                className="ml-2 text-sm font-medium text-gray-900 "
                                            >
                                                Male
                                            </label>
                                        </div>
                                    </div>
                                    {/* <div className="px-4 py-2"></div> */}
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">
                                        Contact No.
                                    </div>
                                    <div className="px-4 py-2">
                                        <input
                                            className="w-full text-sm py-2 border-b border-gray-300 focus:outline-none focus:border-[#B5838D]"
                                            type=""
                                            placeholder="mike@gmail.com"
                                            autoFocus
                                            value={user.phone}
                                            onChange={(e) =>
                                                setPhone(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">
                                        Email
                                    </div>
                                    <div className="px-4 py-2">
                                        <input
                                            className="w-full text-sm py-2 border-b border-gray-300 focus:outline-none focus:border-[#B5838D]"
                                            type=""
                                            placeholder="mike@gmail.com"
                                            autoFocus
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            value={user.email}
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">
                                        Birthday
                                    </div>
                                    <div className="relative px-4 py-2">
                                        <div className="relative">
                                            <input
                                                type="date"
                                                className="w-full text-sm py-2 border-b border-gray-300 focus:outline-none focus:border-[#B5838D]"
                                                id=""
                                                value={user.dob}
                                                onChange={(e) =>
                                                    setDob(e.target.value)
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex flex-col justify-center items-center">
                                <button
                                    className="bg-[#FFB4A2] text-[#3E3B42] px-10 py-2 self-center rounded tracking-wide my-5
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-[#FFC1AA]
                                shadow-lg"
                                    onClick={handleSubmit}
                                >
                                    Complete Profile
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="my-4"></div>
                </div>
            </div>
            {/* </div> */}
            {/* </div> */}
        </>
    );
};

export default Profile;
