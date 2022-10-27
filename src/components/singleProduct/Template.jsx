import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {Link} from "react-router-dom";
import Recommand from "./Recommand";

const Template = ({productid}) => {
    const [currentProduct, setCurrentProduct] = useState([]);
    // const [cart, setCart] = useState([]);

    const [addtocartAddition, setaddtocartAddition] = useState(0);

    const products = () => {
        axios
            .get(`http://localhost:8080/singleproduct/${productid}`)
            .then((response) => {
                setCurrentProduct({...response.data, quantity: 1});
            });
    };

    useEffect(() => {
        products();
    }, []);

    const dispatch = useDispatch();
    const {user} = useSelector((state) => ({...state}));

    const handleAddToCart = async (currentProduct) => {
        // setCart([...cart, currentProduct]);
        const filterArray = () =>
            user.cart.filter((item) => item._id === currentProduct._id);
        const remainingItems = () =>
            user.cart.filter((item) => item._id !== currentProduct._id);

        // filterArray().length ? (...currentProduct), quantity : filterArray()[0].quantity + 1 : (...currentProduct) ,
        const product = filterArray().length
            ? {...filterArray()[0], quantity: filterArray()[0].quantity + 1}
            : {...currentProduct};
        try {
            await dispatch({
                type: "ADDCART_PRODUCT",
                payload: {
                    cart: [
                        ...remainingItems(),
                        {
                            ...product,
                        },
                    ],
                },
            });
            setaddtocartAddition(filterArray()[0].quantity + 1);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <div className="relative z-10" role="dialog" aria-modal="true">
                {/* <div className="fixed inset-0 z-10 overflow-y-auto"> */}
                <div className="flex w-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                    <div className="flex w-full transform text-left text-base transition md:my-8 ">
                        <div className="relative flex w-full items-center overflow-hidden bg-white px-15 pt-14 pb-8 sm:px-6 sm:pt-8 md:p-6">
                            <div key={currentProduct} className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
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
                                    <div className="text-gray-500 text-sm my-3">
                                        {currentProduct.categories &&
                                            currentProduct.categories.map(
                                                (category, err) => {
                                                    return (
                                                        <p
                                                            key={category}
                                                            className="mr-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-orange-200 text-orange-700 rounded-full"
                                                        >
                                                            {category}
                                                        </p>
                                                    );
                                                }
                                            )}
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

                                        <div className="w-full flex">
                                            <button
                                                type="submit"
                                                className="mt-6 flex w-1/3 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                onClick={() =>
                                                    handleAddToCart(
                                                        currentProduct
                                                    )
                                                }
                                            >
                                                Add To Cart {addtocartAddition}
                                            </button>
                                            <button
                                                type="submit"
                                                className="mt-6 flex w-1/3 ml-5 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            >
                                                <Link to="/addtocart">
                                                    Continue to cart
                                                </Link>
                                            </button>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
            <Recommand category={currentProduct.categories} />
        </>
    );
};

export default Template;
