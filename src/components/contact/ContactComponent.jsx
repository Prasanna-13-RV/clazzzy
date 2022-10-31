import axios from "axios";
import React, {useState} from "react";

const ContactComponent = () => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            axios.post(`${process.env.REACT_APP_API_URL}/contact`, {
                fullname,
                email,
                message,
            });
            console.log("Hello from");
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
                                Contact us to get benefits{" "}
                                {/* <span className="underline">email</span> instead. */}
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
