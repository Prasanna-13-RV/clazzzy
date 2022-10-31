import axios from "axios";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const ViewComponent = ({productid}) => {
    const [currentProduct, setCurrentProduct] = useState([]);

    const products = () => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/admin/viewproducts/${productid}`)
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
                <h1
                    className="w-full flex justify-center items-center flex-col pt-5 text-center text-4xl text-[#6D6875] font-display font-semibold lg:text-left xl:text-4xl
                    xl:text-bold mb-4"
                >
                    {currentProduct.name}
                </h1>
                <div className="flex w-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                    <div className="flex w-full transform text-left text-base transition ">
                        <div className="relative flex w-full items-center overflow-hidden bg-white px-15 pt-14 sm:px-6 sm:pt-8 md:p-6">
                            <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
                                <div className="aspect-w-2 aspect-h-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                                    <img
                                        src={currentProduct.img}
                                        alt="Two each of gray, white, and black shirts arranged on table."
                                        className="object-cover object-center"
                                    />
                                </div>

                                <div className="sm:col-span-8 lg:col-span-7">
                                    {/* <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                                        {currentProduct.name}
                                    </h2> */}
                                    <div>
                                        <p className="text-gray-500 text-sm my-3 flex flex-row flex-wrap">
                                            {currentProduct.categories &&
                                                currentProduct.categories.map(
                                                    (category, err) => {
                                                        return (
                                                            <div
                                                                key={category}
                                                                className="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-orange-200 text-orange-700 rounded-full"
                                                            >
                                                                {category}
                                                            </div>
                                                        );
                                                    }
                                                )}
                                        </p>
                                    </div>

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
                                            ₹ {currentProduct.pricing}
                                        </p>

                                        <div className="mt-6">
                                            <h4 className="sr-only">Reviews</h4>
                                            <div className="flex items-center">
                                                <div className="flex items-center">
                                                    <h1>Ratings: </h1>
                                                    <p>
                                                        {currentProduct.rating}
                                                    </p>
                                                </div>
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

                                        <div className="w-full flex items-center justify-center">
                                            <button
                                                type="submit"
                                                className="mt-6 flex w-1/2 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            >
                                                <Link
                                                    to={`/sellers/updateproducts/${productid}`}
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
