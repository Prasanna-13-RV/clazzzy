import axios from "axios";
import React, {useState} from "react";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const ContactComponent = () => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [click, setclick] = useState(false);
    const [sellerMessage, setSellerMessage] = useState("");

    const navigate = useNavigate();
    const {user} = useSelector((state) => ({...state}));

    const generatePassword = () => {
        var pass = "";
        var str =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
            "abcdefghijklmnopqrstuvwxyz0123456789@#$";
        for (let i = 1; i <= 10; i++) {
            var char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }
        return pass;
    };

    const sellProducts = () => {
        try {
            axios
                .post(`${process.env.REACT_APP_API_URL}/seller/${user.uid}`, {
                    id: user._id,
                    username: user.email.split("@")[0],
                    email: user.email,
                    password: generatePassword(),
                })
                .then((response) => {
                    setSellerMessage(response.data);
                });
            setclick(true);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            axios.post(`${process.env.REACT_APP_API_URL}/contact`, {
                fullname,
                email,
                message,
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <section className="text-gray-100 px-8">
                <div className="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-5 mt-7 mx-auto text-gray-900 rounded-lg shadow-lg">
                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                                Tired in Buying products
                            </h2>
                            <div className="text-gray-700 mt-8">
                                Contact us to get benefits <br />
                                {/* <span className="underline">email</span> instead. */}
                                {user ? (
                                    <>
                                        <h1>Want to sell Products</h1> <br />
                                        <button
                                            onClick={sellProducts}
                                            class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white"
                                        >
                                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-lg  group-hover:bg-opacity-0">
                                                Click here
                                            </span>
                                        </button>
                                    </>
                                ) : null}
                                <h1>{sellerMessage}</h1>
                            </div>
                        </div>
                        <div className="mt-8 text-center"></div>
                    </div>
                    <form method="POST" onSubmit={handleSubmit} className="">
                        <div>
                            <span className="uppercase text-sm text-gray-600 font-bold">
                                Full Name
                            </span>
                            <input
                                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-[#B5838D]"
                                type="text"
                                placeholder=""
                                autoFocus
                                onChange={(e) => setFullname(e.target.value)}
                            />
                        </div>
                        <div className="mt-8">
                            <span className="uppercase text-sm text-gray-600 font-bold">
                                Email
                            </span>
                            <input
                                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-[#B5838D]"
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mt-8">
                            <span className="uppercase text-sm text-gray-600 font-bold">
                                Message
                            </span>
                            <textarea
                                style={{resize: "none"}}
                                className="w-full h-32 text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-[#B5838D]"
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="mt-8">
                            <button className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default ContactComponent;
