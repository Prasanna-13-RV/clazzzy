import axios from "axios";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const ViewComponent = ({productid}) => {
    const [currentProduct, setCurrentProduct] = useState([]);

    const products = () => {
        axios
            .get(`http://localhost:8080/admin/viewproducts/${productid}`)
            .then((response) => {
                setCurrentProduct(response.data);
            });
    };

    useEffect(() => {
        products();
    }, [currentProduct]);

    return (
        <>
            <div className="relative z-10" role="dialog" aria-modal="true">
                {/* <div className="fixed inset-0 z-10 overflow-y-auto"> */}
                <div className="flex w-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                    <div className="flex w-full transform text-left text-base transition md:my-8 ">
                        <div className="relative flex w-full items-center overflow-hidden bg-white px-15 pt-14 pb-8 sm:px-6 sm:pt-8 md:p-6">
                            <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
                                <div className="aspect-w-2 aspect-h-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                                    <img
                                        src={currentProduct.img}
                                        alt="Two each of gray, white, and black shirts arranged on table."
                                        className="object-cover object-center"
                                    />
                                </div>
                                <div className="sm:col-span-8 lg:col-span-7">
                                    <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                                        {currentProduct.name}
                                    </h2>

                                    <section
                                        aria-labelledby="information-heading"
                                        className="mt-2"
                                    >
                                        <h3
                                            id="information-heading"
                                            className="sr-only"
                                        >
                                            Product information
                                        </h3>

                                        <p className="text-2xl text-gray-900">
                                            ₹{""}
                                            {currentProduct.pricing}
                                        </p>

                                        <div className="mt-6">
                                            <h4 className="sr-only">Reviews</h4>
                                            <div className="flex items-center">
                                                <div className="flex items-center">
                                                    <h1>Ratings: </h1>
                                                    <p>
                                                        {currentProduct.rating}
                                                    </p>

                                                    {/* <svg
                                                            className="text-gray-900 h-5 w-5 flex-shrink-0"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                                clip-rule="evenodd"
                                                            />
                                                        </svg> */}

                                                    {/* <svg
                                                            className="text-gray-200 h-5 w-5 flex-shrink-0"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                                clip-rule="evenodd"
                                                            />
                                                        </svg> */}
                                                </div>
                                                {/* <p className="sr-only">
                                                        3.9 out of 5 stars
                                                    </p>
                                                    <a
                                                        href="#"
                                                        className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                                    >
                                                        117 reviews
                                                    </a> */}
                                            </div>
                                        </div>
                                    </section>

                                    <section
                                        aria-labelledby="options-heading"
                                        className="mt-10"
                                    >
                                        <h3
                                            id="options-heading"
                                            className="sr-only"
                                        >
                                            Product options
                                        </h3>

                                        {/* <form>
                                                <div>
                                                    <h4 className="text-sm font-medium text-gray-900">
                                                        Color
                                                    </h4>

                                                    <fieldset className="mt-4">
                                                        <legend className="sr-only">
                                                            Choose a color
                                                        </legend>
                                                        <span className="flex items-center space-x-3">
                                                            <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                                                                <input
                                                                    type="radio"
                                                                    name="color-choice"
                                                                    value="White"
                                                                    className="sr-only"
                                                                    aria-labelledby="color-choice-0-label"
                                                                />
                                                                <span
                                                                    id="color-choice-0-label"
                                                                    className="sr-only"
                                                                >
                                                                    {" "}
                                                                    White{" "}
                                                                </span>
                                                                <span
                                                                    aria-hidden="true"
                                                                    className="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full"
                                                                ></span>
                                                            </label>

                                                            <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                                                                <input
                                                                    type="radio"
                                                                    name="color-choice"
                                                                    value="Gray"
                                                                    className="sr-only"
                                                                    aria-labelledby="color-choice-1-label"
                                                                />
                                                                <span
                                                                    id="color-choice-1-label"
                                                                    className="sr-only"
                                                                >
                                                                    {" "}
                                                                    Gray{" "}
                                                                </span>
                                                                <span
                                                                    aria-hidden="true"
                                                                    className="h-8 w-8 bg-gray-200 border border-black border-opacity-10 rounded-full"
                                                                ></span>
                                                            </label>

                                                            <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                                                                <input
                                                                    type="radio"
                                                                    name="color-choice"
                                                                    value="Black"
                                                                    className="sr-only"
                                                                    aria-labelledby="color-choice-2-label"
                                                                />
                                                                <span
                                                                    id="color-choice-2-label"
                                                                    className="sr-only"
                                                                >
                                                                    {" "}
                                                                    Black{" "}
                                                                </span>
                                                                <span
                                                                    aria-hidden="true"
                                                                    className="h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full"
                                                                ></span>
                                                            </label>
                                                        </span>
                                                    </fieldset>
                                                </div>

                                                <div className="mt-10">
                                                    <div className="flex items-center justify-between">
                                                        <h4 className="text-sm font-medium text-gray-900">
                                                            Size
                                                        </h4>
                                                        <a
                                                            href="#"
                                                            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                                        >
                                                            Size guide
                                                        </a>
                                                    </div>

                                                    <fieldset className="mt-4">
                                                        <legend className="sr-only">
                                                            Choose a size
                                                        </legend>
                                                        <div className="grid grid-cols-4 gap-4">
                                                            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                                <input
                                                                    type="radio"
                                                                    name="size-choice"
                                                                    value="XXS"
                                                                    className="sr-only"
                                                                    aria-labelledby="size-choice-0-label"
                                                                />
                                                                <span id="size-choice-0-label">
                                                                    XXS
                                                                </span>

                                                                <span
                                                                    className="pointer-events-none absolute -inset-px rounded-md"
                                                                    aria-hidden="true"
                                                                ></span>
                                                            </label>

                                                            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                                <input
                                                                    type="radio"
                                                                    name="size-choice"
                                                                    value="XS"
                                                                    className="sr-only"
                                                                    aria-labelledby="size-choice-1-label"
                                                                />
                                                                <span id="size-choice-1-label">
                                                                    XS
                                                                </span>

                                                                <span
                                                                    className="pointer-events-none absolute -inset-px rounded-md"
                                                                    aria-hidden="true"
                                                                ></span>
                                                            </label>

                                                            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                                <input
                                                                    type="radio"
                                                                    name="size-choice"
                                                                    value="S"
                                                                    className="sr-only"
                                                                    aria-labelledby="size-choice-2-label"
                                                                />
                                                                <span id="size-choice-2-label">
                                                                    S
                                                                </span>

                                                                <span
                                                                    className="pointer-events-none absolute -inset-px rounded-md"
                                                                    aria-hidden="true"
                                                                ></span>
                                                            </label>

                                                            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                                <input
                                                                    type="radio"
                                                                    name="size-choice"
                                                                    value="M"
                                                                    className="sr-only"
                                                                    aria-labelledby="size-choice-3-label"
                                                                />
                                                                <span id="size-choice-3-label">
                                                                    M
                                                                </span>

                                                                <span
                                                                    className="pointer-events-none absolute -inset-px rounded-md"
                                                                    aria-hidden="true"
                                                                ></span>
                                                            </label>

                                                            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                                <input
                                                                    type="radio"
                                                                    name="size-choice"
                                                                    value="L"
                                                                    className="sr-only"
                                                                    aria-labelledby="size-choice-4-label"
                                                                />
                                                                <span id="size-choice-4-label">
                                                                    L
                                                                </span>

                                                                <span
                                                                    className="pointer-events-none absolute -inset-px rounded-md"
                                                                    aria-hidden="true"
                                                                ></span>
                                                            </label>

                                                            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                                <input
                                                                    type="radio"
                                                                    name="size-choice"
                                                                    value="XL"
                                                                    className="sr-only"
                                                                    aria-labelledby="size-choice-5-label"
                                                                />
                                                                <span id="size-choice-5-label">
                                                                    XL
                                                                </span>

                                                                <span
                                                                    className="pointer-events-none absolute -inset-px rounded-md"
                                                                    aria-hidden="true"
                                                                ></span>
                                                            </label>

                                                            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                                <input
                                                                    type="radio"
                                                                    name="size-choice"
                                                                    value="XXL"
                                                                    className="sr-only"
                                                                    aria-labelledby="size-choice-6-label"
                                                                />
                                                                <span id="size-choice-6-label">
                                                                    XXL
                                                                </span>

                                                                <span
                                                                    className="pointer-events-none absolute -inset-px rounded-md"
                                                                    aria-hidden="true"
                                                                ></span>
                                                            </label>

                                                            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-gray-50 text-gray-200 cursor-not-allowed">
                                                                <input
                                                                    type="radio"
                                                                    name="size-choice"
                                                                    value="XXXL"
                                                                    disabled
                                                                    className="sr-only"
                                                                    aria-labelledby="size-choice-7-label"
                                                                />
                                                                <span id="size-choice-7-label">
                                                                    XXXL
                                                                </span>

                                                                <span
                                                                    aria-hidden="true"
                                                                    className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                                >
                                                                    <svg
                                                                        className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                                        viewBox="0 0 100 100"
                                                                        preserveAspectRatio="none"
                                                                        stroke="currentColor"
                                                                    >
                                                                        <line
                                                                            x1="0"
                                                                            y1="100"
                                                                            x2="100"
                                                                            y2="0"
                                                                            vector-effect="non-scaling-stroke"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </fieldset>
                                                </div>
                                            </form> */}
                                        <div className="w-full flex items-center justify-center">
                                            <button
                                                type="submit"
                                                className="mt-6 flex w-1/2 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            >
                                                <Link
                                                    to={`/admin/updateproducts/${productid}`}
                                                >
                                                    Update Product
                                                </Link>
                                            </button>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </>
    );
};

export default ViewComponent;
