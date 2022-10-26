import React from "react";

const Footer = () => {
    return (
        <footer className="p-4 shadow md:px-6 md:py-8 bg-[#151416] text-slate-50">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a
                    href="https://flowbite.com/"
                    className="flex items-center mb-4 sm:mb-0"
                >
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-3 h-8"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">
                        Flowbite
                    </span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">
                            Products
                        </a>
                    </li>
                    {/* <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">
                            Licensing
                        </a>
                    </li> */}
                    <li>
                        <a href="#" className="hover:underline">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
            <span className="block text-sm text-gray-500 sm:text-center">
                © 2022{" "}
                <a href="https://flowbite.com/" className="hover:underline">
                    Flowbite™
                </a>
                . All Rights Reserved.
            </span>
        </footer>
    );
};

export default Footer;
