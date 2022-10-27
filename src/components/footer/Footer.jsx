import React from "react";
import logo from "../../logo/logo-no-background.png";

const Footer = () => {
    return (
        <footer className="p-4 shadow md:px-6 md:py-8 bg-[#151416] text-slate-50">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="/" className="flex items-center mb-4 sm:mb-0">
                    <img
                        className="mr-3 h-[5rem]"
                        src={logo}
                        alt="Clazzzy Logo"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">
                        Clazzzy
                    </span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0">
                    <li>
                        <a href="/" className="mr-4 hover:underline md:mr-6 ">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/products" className="mr-4 hover:underline md:mr-6">
                            Products
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="hover:underline">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
            <span className="block text-sm text-gray-500 sm:text-center">
                © 2022{" "}
                <a
                    // href="https://clazzzy.com/"
                    className="hover:underline"
                >
                    Clazzzy™
                </a>
                . All Rights Reserved.
            </span>
        </footer>
    );
};

export default Footer;
