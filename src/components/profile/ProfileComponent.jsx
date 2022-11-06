import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, Navigate} from "react-router-dom";
import {auth, db} from "../../firebase/firebase";
import {addDoc, collection, getDocs, updateDoc} from "firebase/firestore";
import axios from "axios";

const ProfileComponent = ({profileid}) => {
    const [profile, setProfile] = useState([]);

    const dispatch = useDispatch();
    const {user} = useSelector((state) => ({...state}));

    if (!user) {
        return <Navigate to="/login" />;
    }

    const updateProfile = async () => {
        await axios
            .get(`${process.env.REACT_APP_API_URL}/profile/${profileid}`)
            .then((response) => {
                setProfile(response.data);
            });
    };

    updateProfile();

    return (
        <>
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
                                        {/* {profile && !profile.firstName ? (
                                            <h1 className="text-slate-400">
                                                Update your first name
                                            </h1>
                                        ) : ( */}
                                            <h1>{profile && profile.firstName}</h1>
                                        {/* )} */}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">
                                        Last Name
                                    </div>
                                    <div className="px-4 py-2">
                                        {/* {!profile.secondName ? (
                                            <h1 className="text-slate-400">
                                                Update your second name
                                            </h1>
                                        ) : ( */}
                                            <h1>{profile && profile.secondName}</h1>
                                        {/* )} */}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">
                                        Gender
                                    </div>
                                    <div className="px-4 py-2">
                                        {/* {!profile.gender ? (
                                            <h1 className="text-slate-400">
                                                Update your gender
                                            </h1>
                                        ) : ( */}
                                            <h1>{profile && profile.gender}</h1>
                                        {/* )} */}
                                    </div>
                                    {/* <div className="px-4 py-2"></div> */}
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">
                                        Contact No.
                                    </div>
                                    <div className="px-4 py-2">
                                        {/* {!profile.phone ? (
                                            <h1 className="text-slate-400">
                                                Update your number
                                            </h1>
                                        ) : ( */}
                                            <h1>{profile && profile.phone}</h1>
                                        {/* )} */}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">
                                        Email
                                    </div>
                                    <div className="px-4 py-2">
                                        {/* {!profile.email ? (
                                            <h1 className="text-slate-400">
                                                Update your email
                                            </h1>
                                        ) : ( */}
                                            <h1>{profile && profile.email}</h1>
                                        {/* )} */}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">
                                        Birthday
                                    </div>
                                    <div className="px-4 py-2">
                                        {/* {!profile.dob ? (
                                            <h1 className="text-slate-400">
                                                Update your date of birth
                                            </h1>
                                        ) : ( */}
                                            <h1>{profile && profile.dob}</h1>
                                        {/* )} */}
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex flex-col justify-center items-center">
                                <Link
                                    to={`/updateprofile/${profile && profile._id}`}
                                    profileid={profile && profile._id}
                                    className="bg-[#FFB4A2] text-[#3E3B42] px-10 py-2 self-center rounded tracking-wide my-5
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-[#FFC1AA]
                                shadow-lg"
                                >
                                    Update Profile
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="my-4"></div>
                </div>
            </div>
        </>
    );
};

export default ProfileComponent;
